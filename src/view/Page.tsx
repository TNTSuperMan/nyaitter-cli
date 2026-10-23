import { useContext, useEffect, useState } from "react";
import { client } from "../client";
import { Spinner } from "@inkjs/ui";
import { Box, useInput } from "ink";
import type { Post } from "../client/types";
import { PostView } from "./Post";
import { NavigatorContext } from "../App";

export function Page({
  tab,
  offset,
  onLoad,
  pageSize,
  onScroll,
}: {
  tab: undefined | "foryou" | "following";
  offset: number;
  onLoad(has_more: boolean): void;
  pageSize: number;
  onScroll(offset: number): void;
}) {
  const [posts, setPosts] = useState<Post[]>();
  const [selecting, setSelecting] = useState(0);
  const navigate = useContext(NavigatorContext);

  useInput((input, key) => {
    if (posts !== undefined) {
      if (key.upArrow) {
        if (selecting === 0) {
          if (offset !== 0) {
            onScroll(offset - 1);
            setSelecting(pageSize - 1);
          }
        } else {
          setSelecting(selecting - 1);
        }
      }
      if (key.downArrow) {
        if (selecting === pageSize - 1) {
          onScroll(offset + 1);
          setSelecting(0);
        } else {
          setSelecting(selecting + 1);
        }
      }
      if (input === " ") {
        navigate(`/post#${posts[selecting]!.id}`);
      }
    }
  });

  useEffect(() => {
    setPosts(undefined);
    client.posts
      .getTimeline({ tab, limit: pageSize, offset: offset * pageSize })
      .then(({ posts, has_more }) => {
        setPosts(posts as any);
        onLoad(has_more ?? true);
      });
  }, [tab, offset]);

  if (posts === undefined) {
    return <Spinner type="dots14" label="Loading posts" />;
  } else {
    return (
      <Box flexDirection="column">
        {posts.map((post, i) => (
          <Box
            flexDirection="row"
            borderStyle={i === selecting ? "double" : "classic"}
            key={offset * pageSize + i}
          >
            <PostView post={post} active={i === selecting} key={post.id} />
          </Box>
        ))}
      </Box>
    );
  }
}
