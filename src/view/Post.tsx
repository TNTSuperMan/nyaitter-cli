import { useState } from "react";
import { Box, Text, useInput } from "ink";
import { client } from "../client";
import type { Post } from "../client/types";
import { SimpleUserView } from "./SimpleUser";

export function PostView({ post: init_post, active }: { post: Post; active?: boolean }) {
  const [post, setPost] = useState(init_post);
  const [openMask, setOpenMask] = useState(false);
  function refresh() {
    client.posts.get(post.id).then(({ post }) => setPost(post as any));
  }

  useInput((input, key) => {
    if (active) {
      switch (input) {
        case "m":
          setOpenMask(!openMask);
          break;
        case "g":
          // todo: reply
          break;
        case "j":
          client.posts.like(post.id).then(refresh);
          break;
        case "k":
          client.posts.star(post.id).then(refresh);
          break;
        case "l":
          client.posts.repost(post.id).then(refresh);
          break;
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
        {active && <Text color="grey"> ('j':♥  'k':★  'l':⥮ )</Text>}
      </Box>
    </Box>
  );
}
