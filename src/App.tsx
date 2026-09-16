import { Box, Text } from "ink";
import { Suspense, use, useEffect, useState } from "react";
import { client, realtime } from "./client";
import type { User } from "./client/types";
import { SimpleUser } from "./view/SimpleUser";

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
      </Box>

      <Text>You:</Text>
      <SimpleUser user={me} />
      <Box paddingRight={1} backgroundColor={notify_unreads === 0 ? "black" : "red"}>
        <Text>🔔{notify_unreads}</Text>
      </Box>
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
