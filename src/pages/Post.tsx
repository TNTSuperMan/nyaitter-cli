import { useEffect, useState } from "react";
import type { Post } from "../client/types";
import { client } from "../client";
import { Spinner } from "@inkjs/ui";
import { PostView } from "../view/Post";
import { Box, Text } from "ink";

export function PostPage({ id }: { id: number }) {
  const [thread, setThread] = useState<{ post: Post; replies: Post[] }>();

  useEffect(() => {
    client.posts.getThread(id).then(setThread as any);
  }, [id]);

  if (!thread) {
    return <Spinner type="dots14" label="Loading post" />;
  } else {
    return (
      <Box flexDirection="column">
        <PostView post={thread.post} />
        <Box padding={1}>
          <Text>Replies:{"\n"}</Text>
          {thread.replies.map((reply) => (
            <PostView post={reply} key={reply.id} />
          ))}
        </Box>
      </Box>
    );
  }
}
