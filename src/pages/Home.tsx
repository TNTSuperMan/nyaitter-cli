import { Select } from "@inkjs/ui";
import { Box, Text } from "ink";
import { useContext, useState } from "react";
import { NavigatorContext } from "../App";
import { Page } from "../view/Page";

const PAGE_SIZE = 3;

export function Home() {
  const [offset, setOffset] = useState(0);
  const navigate = useContext(NavigatorContext);
  return (
    <Box flexDirection="column">
      <Page
        tab={undefined}
        offset={offset}
        onLoad={() => {}}
        pageSize={PAGE_SIZE}
        onScroll={setOffset}
      />
    </Box>
  );
}
