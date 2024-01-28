import { Shell } from "~/components/ui/shell";
import PostCardSkeleton from "~/features/blog/post-card-skeleton";

const BlogPageLoading = () => (
  <Shell variant="spaced" className="space-y-4">
    {Array.from({ length: 10 }, (_, i) => (
      <PostCardSkeleton key={i} />
    ))}
  </Shell>
);

export default BlogPageLoading;
