import { createContext, Suspense, useState } from "react";
import { Spinner } from "@inkjs/ui";
import { Home } from "./pages/Home";
import { TopBar } from "./view/TopBar";
import { Box, Text } from "ink";

export const NavigatorContext = createContext<(path: string) => void>(() => { });

function Page({ path }: { path: string }) {
  if (path === "/") {
    return <Home />;
  }

  const user_match = /^\/user#(\d{4})/.exec(path);
  if (user_match) {
    const [_, id_str] = user_match;
    const id = parseInt(id_str ?? "NaN");
    if (isNaN(id)) {
      return <Text>invalid user id</Text>;
    }
    return <Text>User page: #{id.toString().padStart(4,"0")}</Text>;
  }

  return <Text>not found this page</Text>;
}

export function App() {
  const [path, navigate] = useState<string>("/");

  return (
    <NavigatorContext value={navigate}>
      <Suspense fallback={
        <Spinner type="dots14" />
      }>
        <Box flexDirection="column">
          <TopBar />
          <Page path={path} />
        </Box>
      </Suspense>
    </NavigatorContext>
  );
}
