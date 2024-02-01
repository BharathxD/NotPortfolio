"use client";

import type { PostWithViewCount } from "~/types";
import PostCard from "./post-card";

interface Props {
  posts: PostWithViewCount[];
}

const Posts = ({ posts }: Props) => (
  <ul className="space-y-4">
    {posts.map((post) => (
      <PostCard post={post} key={post.slug} />
    ))}
  </ul>
);

export default Posts;
