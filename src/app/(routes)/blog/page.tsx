import PostList from "~/components/blog/post-list";
import { Shell } from "~/components/ui/shell";
import env from "~/env.mjs";
import { allPosts } from "contentlayer/generated";

export const metadata = {
  title: "Blog",
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  description: "Read my thoughts on software development, design, and more.",
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
