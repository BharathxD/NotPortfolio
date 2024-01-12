import PostCard from "~/components/blog/post-card";
import { Shell } from "~/components/ui/shell";
import env from "~/env.mjs";
import { allPosts } from "content-layer/generated";

export const metadata = {
  title: "Blog",
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  description: "Read my thoughts on software development, design, and more.",
};

const BlogPage = () => {
  const posts = allPosts.filter((post) => post.published).sort((a, b) => b.date.localeCompare(a.date));
  return (
    <Shell variant="spaced">
      <ul className="space-y-4">
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </ul>
    </Shell>
  );
};

export default BlogPage;
