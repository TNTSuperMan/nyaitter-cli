import { Box, Text } from "ink";
import { Suspense, use, useEffect, useState } from "react";
import { client, realtime } from "./client";
import type { User } from "./client/types";
import { SimpleUser } from "./view/SimpleUser";
import { Button } from "./view/Button";

const me_promise = client.getMe();

function AppAsync() {
  const me = use(me_promise).user as User;
  const [notify_unreads, setNotifyUnreads] = useState(me.notification_unread_count);

  useEffect(() => {
    realtime.on("notificationUnreadCount", setNotifyUnreads);
    return () => {
      realtime.off("notificationUnreadCount", setNotifyUnreads);
    };
  }, []);

  return (
    <Box>
      <Box marginRight={1}>
        <Text bold italic>nyaitter-cli</Text>
        <Button char="h" onClick={() => { }} />
      </Box>

      <Text>You:</Text>
      <Box marginX={1}>
        <SimpleUser user={me} />
        <Button char="m" onClick={() => { }} />
      </Box>

      <Box paddingRight={1} backgroundColor={notify_unreads === 0 ? "black" : "red"}>
        <Text>🔔{notify_unreads}</Text>
      </Box>
      <Button char="n" onClick={() => { }} />
    </Box>
  );
}

export function App() {
  return (
    <Suspense fallback={
      <Text>
        Loading...
      </Text>
    }>
      <AppAsync />
    </Suspense>
  );
}
