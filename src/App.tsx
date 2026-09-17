import { createContext, Suspense, useState } from "react";
import { Spinner } from "@inkjs/ui";
import { Home } from "./pages/Home";

export const NavigatorContext = createContext<(path: keyof typeof routes) => void>(() => { });

const routes = {
  Home,
} as const;

export function App() {
  const [path, navigate] = useState<keyof typeof routes>("Home");
  const Page = routes[path];

  return (
    <NavigatorContext value={navigate}>
      <Suspense fallback={
        <Spinner type="dots14" />
      }>
        <Page />
      </Suspense>
    </NavigatorContext>
  );
}
