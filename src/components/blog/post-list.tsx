"use client";

import type { Post } from "contentlayer/generated";
import { motion } from "framer-motion";
import PostCard from "./post-card";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => (
  <ul className="flex w-full flex-col gap-4">
    {posts.map((post) => (
      <PostCard key={post.slug} post={post} />
    ))}
  </ul>
);

export default PostList;
