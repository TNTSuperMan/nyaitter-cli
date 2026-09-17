import { Box, Text } from "ink";
import type { Post } from "../client/types";
import { SimpleUserView } from "./SimpleUser";

export function PostView({ post }: { post: Post }) {
  return (
    <Box paddingBottom={1} flexDirection="column">
      <Box>
        <SimpleUserView user={post.user} />
        <Text>
          {"  "}
          {new Date(post.created_at).toLocaleString()}
          {" "}
          #{post.id}
        </Text>
      </Box>
      <Box>
        {
          post.mask
            ? <Text backgroundColor="cyan">[MASKED]</Text>
            : <Text color="">{post.view_content}</Text>
        }
      </Box>
      <Box>
        <Text>💬{" "+post.reply_count+" "}</Text>
        <Text color={post.liked_by_me ? "red" : undefined}>♥</Text>
        <Text>{" "+post.like_count.toString()+" "}</Text>
        <Text color={post.starred_by_me ? "red" : undefined}>★</Text>
        <Text>{" "+post.star_count.toString()+" "}</Text>
        <Text>⥮{" "+post.repost_count.toString()}</Text>
      </Box>
    </Box>
  );
}
