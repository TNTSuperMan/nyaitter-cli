import { useEffect, useState } from "react";
import type { Post } from "../client/types";
import { client } from "../client";
import { Spinner } from "@inkjs/ui";
import { PostView } from "../view/Post";

export function PostPage({ id }: { id: number }) {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    client.posts.get(id).then(({ post }) => setPost(post as any));
  }, [id]);

  if (!post) {
    return <Spinner type="dots14" label="Loading post" />;
  } else {
    return <PostView post={post} />
  }
}
