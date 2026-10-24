import { createContext, Suspense, useMemo, useRef, useState } from "react";
import { Box, Text } from "ink";
import { Spinner } from "@inkjs/ui";
import { TopBar } from "./view/TopBar";
import { Home } from "./pages/Home";
import { Notification } from "./pages/Notification";
import { PostPage } from "./pages/Post";

export const NavigatorContext = createContext<{
  navigate(path: string): void;
  undo(): void;
}>({
  navigate() {},
  undo() {},
});

function Page({ path }: { path: string }) {
  if (path === "/") {
    return <Home />;
  }

  if (path === "/notification") {
    return <Notification />;
  }

  const user_match = /^\/user#(\d{4})/.exec(path);
  if (user_match) {
    const [_, id_str] = user_match;
    const id = parseInt(id_str ?? "NaN");
    if (isNaN(id)) {
      return <Text>invalid user id</Text>;
    }
    return <Text>User page: #{id.toString().padStart(4, "0")}</Text>;
  }

  const post_match = /^\/post#(\d*)$/.exec(path);
  if (post_match) {
    const [_, id_str] = post_match;
    const id = parseInt(id_str ?? "NaN");
    if (isNaN(id)) {
      return <Text>invalid post id</Text>;
    }
    return <PostPage id={id} />;
  }

  return <Text>not found this page: {path}</Text>;
}

export function App() {
  const history = useRef<string[]>([]);
  const [path, setPath] = useState<string>("/");
  const navigator = useMemo(
    () => ({
      navigate(newPath: string) {
        setPath(newPath);
        history.current.push(path);
      },
      undo() {
        setPath(history.current.pop() ?? "/");
      },
    }),
    [path],
  );

  return (
    <NavigatorContext value={navigator}>
      <Suspense fallback={<Spinner type="dots14" />}>
        <Box flexDirection="column">
          <TopBar />
          <Page path={path} />
        </Box>
      </Suspense>
    </NavigatorContext>
  );
}
