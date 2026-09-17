import { Box, Text } from "ink";
import type { SimpleUser } from "../client/types";

export function SimpleUser({ user }: { user: SimpleUser }) {
  return (
    <Box>
      <Text underline>{user.name}</Text>
      <Text italic>{user.nyaitter_id}</Text>
      {
        user.admin
          ? <Text color="yellow">✔</Text> :
          user.verify
            ? <Text color="blue">✔</Text> :
            false
      }
    </Box>
  );
}
