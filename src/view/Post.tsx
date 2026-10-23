import { Box, Text, useInput } from "ink";
import type { Post } from "../client/types";
import { SimpleUserView } from "./SimpleUser";
import { useState } from "react";

export function PostView({ post, active }: { post: Post; active?: boolean }) {
  const [openMask, setOpenMask] = useState(false);

  useInput((input, key) => {
    if (active) {
      if (input === "m") {
        setOpenMask(!openMask);
      }
    }
  });

  return (
    <Box flexDirection="column">
      <Box>
        <SimpleUserView user={post.user} />
        <Text>
          {"  "}
          {new Date(post.created_at).toLocaleString()} #{post.id}
        </Text>
      </Box>
      <Box>
        {post.mask && !openMask ? (
          <Box>
            <Text backgroundColor="grey">[MASKED]</Text>
            {active && <Text color="grey"> (click 'm' to open)</Text>}
          </Box>
        ) : (
          <Text color="">{post.view_content}</Text>
        )}
      </Box>
      <Box>
        <Text>💬{" " + post.reply_count + " "}</Text>
        <Text color={post.liked_by_me ? "red" : undefined}>♥</Text>
        <Text>{" " + post.like_count.toString() + " "}</Text>
        <Text color={post.starred_by_me ? "red" : undefined}>★</Text>
        <Text>{" " + post.star_count.toString() + " "}</Text>
        <Text>⥮{" " + post.repost_count.toString()}</Text>
      </Box>
    </Box>
  );
}
