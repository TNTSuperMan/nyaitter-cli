import { Select } from "@inkjs/ui";
import { Box, Text } from "ink";
import { useContext } from "react";
import { NavigatorContext } from "../App";
import { Page } from "../view/Page";

const PAGE_SIZE = 10;

export function Home() {
  const navigate = useContext(NavigatorContext);
  return (
    <Box flexDirection="column">
      <Page tab={undefined} offset={0} onLoad={() => {}} pageSize={PAGE_SIZE} />
    </Box>
  );
}
