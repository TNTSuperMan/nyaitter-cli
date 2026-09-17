import { useEffect, useState } from "react";
import { client } from "../client";
import { Spinner } from "@inkjs/ui";
import { Box, Text } from "ink";
import type { Post } from "../client/types";
import { PostView } from "./Post";

const PAGE_SIZE = 1;

export function Page({ tab, offset, onLoad }: { tab: undefined | "foryou" | "following", offset: number, onLoad(has_more: boolean): void }) {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    client.posts.getTimeline({ tab, limit: PAGE_SIZE, offset: offset * PAGE_SIZE }).then(({ posts, has_more }) => {
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
