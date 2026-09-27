import { useEffect, useState } from "react";
import { client, realtime } from "..";

export function useNotificationUnreads(init = 0): number {
  const [unreads, setUnreads] = useState(init);

  useEffect(() => {
    let ignore = false;
    realtime.on("notificationUnreadCount", setUnreads);
    client.notifications.getUnreadCount().then(({ unread_count }) => {
      if (!ignore) {
        setUnreads(unread_count);
      }
    });
    return () => {
      ignore = true;
      realtime.off("notificationUnreadCount", setUnreads);
    };
  }, []);

  return unreads;
}
