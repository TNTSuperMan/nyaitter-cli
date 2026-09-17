import { Select } from "@inkjs/ui";
import { Box, Text } from "ink";
import { useContext } from "react";
import { NavigatorContext } from "../App";
import { Page } from "../view/Page";

export function Home() {
  const navigate = useContext(NavigatorContext);
  return (
    <Box flexDirection="column">
      <Text>Welcome to nyaitter-cli! Select action:</Text>
      <Select
        options={[
          { label: "Timeline", value: "/tl" },
        ]}
        onChange={navigate}
      />
      <Page tab={undefined} offset={0} onLoad={() => { }} />
    </Box>
  );
}
