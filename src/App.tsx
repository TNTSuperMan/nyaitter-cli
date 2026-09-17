import { Box, Text } from "ink";
import { createContext, Suspense, use, useEffect, useState } from "react";
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
        <Text>
          Loading...
        </Text>
      }>
        <Page />
      </Suspense>
    </NavigatorContext>
  );
}
