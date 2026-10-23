import { Box, Text } from "ink";
import { useNotificationUnreads } from "../client/hooks/notificationUnreads";
import { useEffect, useState } from "react";
import { client } from "../client";
import type { Notice } from "../client/types";
import { SimpleUserView } from "../view/SimpleUser";

function NoticeView({ notice }: { notice: Notice }) {
  switch (notice.type) {
    case "like":
      return (
        <Box flexDirection="column">
          <Box>
            <SimpleUserView user={notice.from} />
            <Text> like you post(#{notice.target_post?.id}):</Text>
          </Box>
          <Text>{notice.target_post?.content}</Text>
        </Box>
      );
    case "follow":
      return (
        <Box>
          <SimpleUserView user={notice.from} />
          <Text> follow you</Text>
        </Box>
      );
    case "reply":
      return (
        <Box flexDirection="column">
          <Box>
            <SimpleUserView user={notice.from} />
            <Text> reply(#{notice.target_post?.id}):</Text>
          </Box>
          <Text>{notice.target_post?.content}</Text>
        </Box>
      );
    case "repost":
      return (
        <Box flexDirection="column">
          <Box>
            <SimpleUserView user={notice.from} />
            <Text> repost(#{notice.target_post?.id}):</Text>
          </Box>
          <Text>{notice.target_post?.content}</Text>
        </Box>
      );
    default:
      return <Text>Unimplemented notice type: {notice.type}</Text>;
  }
}

export function Notification() {
  const unreads = useNotificationUnreads();
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    let ignore = false;
    client.notifications.list().then(({ notifications }) => {
      if (!ignore) {
        setNotices(notifications as Notice[]);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Box flexDirection="column">
      <Text>Notifications{unreads === 0 ? "" : `(${unreads})`}:</Text>
      {notices
        .filter(({ read }) => !read)
        .map((notice) => (
          <Box key={notice.id} marginTop={1} flexDirection="column">
            <Text>
              #{notice.id} {notice.created_at}
            </Text>
            <NoticeView notice={notice} />
          </Box>
        ))}
    </Box>
  );
}
