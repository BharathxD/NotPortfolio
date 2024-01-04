import PostsSkeleton from "~/components/ui/posts-skeleton";
import { Shell } from "~/components/ui/shell";

const BlogPageLoading = () => {
  return (
    <Shell variant="spaced" className="space-y-4">
      <PostsSkeleton />
    </Shell>
  );
};

export default BlogPageLoading;
