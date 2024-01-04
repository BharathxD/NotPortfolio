import PostCardListSkeleton from "~/components/blog/post-card-list-skeleton";
import { Shell } from "~/components/ui/shell";

const BlogPageLoading = () => {
  return (
    <Shell variant="spaced" className="space-y-4">
      <PostCardListSkeleton />
    </Shell>
  );
};

export default BlogPageLoading;
