import { use, useContext } from "react";
import { Box, Text } from "ink";
import { NavigatorContext } from "../App";
import { client } from "../client";
import { useNotificationUnreads } from "../client/hooks/notificationUnreads";
import type { User } from "../client/types";
import { Button } from "../view/Button";
import { SimpleUserView } from "../view/SimpleUser";

const me_promise = client.getMe();

export function TopBar() {
  const navigate = useContext(NavigatorContext);
  const me = use(me_promise).user as User;
  const unreads = useNotificationUnreads(me.notification_unread_count);

  return (
    <Box marginBottom={1}>
      <Box marginRight={1}>
        <Text bold italic>
          nyaitter-cli
        </Text>
        <Button char="h" onClick={() => navigate("/")} />
      </Box>

      <Text>You:</Text>
      <Box marginX={1}>
        <SimpleUserView user={me} />
        <Button char="m" onClick={() => navigate(`/user${me.nyaitter_id}`)} />
      </Box>

      <Box paddingRight={1} backgroundColor={unreads === 0 ? undefined : "red"}>
        <Text>🔔{unreads}</Text>
      </Box>
      <Button char="n" onClick={() => navigate("/notification")} />
    </Box>
  );
}
