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
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
        <div className="grid grid-cols-1 gap-4">
          {posts
            .filter((_, i) => i % 3 === 0)
            .map((post, i) => (
              <PostCard key={post.slug} post={post} i={i} />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {posts
            .filter((_, i) => i % 3 === 1)
            .map((post, i) => (
              <PostCard key={post.slug} post={post} i={i} />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {posts
            .filter((_, i) => i % 3 === 2)
            .map((post, i) => (
              <PostCard key={post.slug} post={post} i={i} />
            ))}
        </div>
      </div>
    </Shell>
  );
};

export default BlogPage;
