import PostCardSkeleton from "~/components/blog/post-card-skeleton";
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

const PostCard = dynamic(() => import("~/components/blog/post-card"), { ssr: false });

const BlogPage = () => {
  const posts = allPosts.filter((post) => post.published).sort((a, b) => b.date.localeCompare(a.date));
  return (
    <Shell variant="spaced">
      <ul className="flex w-full flex-col gap-4">
        {posts.map((post) => (
          <Suspense fallback={<PostCardSkeleton />} key={post.slug}>
            <PostCard post={post} />
          </Suspense>
        ))}
      </ul>
    </Shell>
  );
};

export default BlogPage;
