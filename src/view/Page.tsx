import { useEffect, useState } from "react";
import { client } from "../client";
import { Spinner } from "@inkjs/ui";
import { Box, Text } from "ink";
import type { Post } from "../client/types";
import { PostView } from "./Post";

export function Page({ tab, offset, onLoad, pageSize }: { tab: undefined | "foryou" | "following", offset: number, onLoad(has_more: boolean): void, pageSize: number }) {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    client.posts.getTimeline({ tab, limit: pageSize, offset: offset * pageSize }).then(({ posts, has_more }) => {
      setPosts(posts as any);
      onLoad(has_more ?? true);
    });
  }, [tab, offset]);

  if (posts === undefined) {
    return (
      <Spinner type="dots14" label="Loading posts" />
    );
  } else {
    return (
      <Box flexDirection="column">
        {
          posts.map(post => <PostView post={post} key={post.id} />)
        }
      </Box>
    );
  }
}
