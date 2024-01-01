"use client";

import type { Post } from "contentlayer/generated";
import { motion } from "framer-motion";
import PostCard from "./post-card";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => (
  <motion.ul
    className="flex w-full flex-col gap-4"
    initial="hidden"
    whileInView="show"
    role="list"
    aria-label="List of posts"
    animate="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.05,
        },
      },
    }}>
    {posts.map((post) => (
      <PostCard key={post.slug} post={post} />
    ))}
  </motion.ul>
);

export default PostList;
