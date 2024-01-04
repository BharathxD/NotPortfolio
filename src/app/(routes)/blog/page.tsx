import PostsSkeleton from "~/components/ui/posts-skeleton";
import { Shell } from "~/components/ui/shell";
import env from "~/env.mjs";
import { allPosts } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  description: "Read my thoughts on software development, design, and more.",
};

const PostList = dynamic(() => import("~/components/blog/post-list"), { ssr: false });

const BlogPage = () => {
  const posts = allPosts.filter((post) => post.published).sort((a, b) => b.date.localeCompare(a.date));
  return (
    <Shell variant="spaced">
      <Suspense fallback={<PostsSkeleton />}>
        <PostList posts={posts} />
      </Suspense>
    </Shell>
  );
};

export default BlogPage;
