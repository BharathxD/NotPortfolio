import PostCard from "~/components/blog/post-card";
import { Shell } from "~/components/ui/shell";
import { allPosts } from "contentlayer/generated";
import { type Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Blog",
  description: "Explore the latest news and updates from the community",
};

const BlogPage = () => {
  const posts = allPosts.filter((post) => post.published).sort((a, b) => b.date.localeCompare(a.date));
  return (
    <Shell variant="spaced">
      <div className="flex w-full flex-col gap-4">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} i={i} />
        ))}
      </div>
    </Shell>
  );
};

export default BlogPage;
