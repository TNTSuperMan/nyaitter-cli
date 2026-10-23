import { Box } from "ink";
import { useState } from "react";
import { Page } from "../view/Page";

const PAGE_SIZE = 3;

export function Home() {
  const [offset, setOffset] = useState(0);
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
