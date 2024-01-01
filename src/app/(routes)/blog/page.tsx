import PostList from "~/components/blog/post-list";
import { Shell } from "~/components/ui/shell";
import env from "~/env.mjs";
import { allPosts } from "contentlayer/generated";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Blog",
};

const BlogPage = () => {
  const posts = allPosts.filter((post) => post.published).sort((a, b) => b.date.localeCompare(a.date));
  return (
    <Shell variant="spaced">
      <PostList posts={posts} />
    </Shell>
  );
};

export default BlogPage;
