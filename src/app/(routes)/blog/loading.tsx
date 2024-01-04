import PostCardSkeleton from "~/components/blog/post-card-skeleton";
import { Shell } from "~/components/ui/shell";

const BlogPageLoading = () => {
  return (
    <Shell variant="spaced" className="space-y-4">
      {Array.from({ length: 10 }, (_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </Shell>
  );
};

export default BlogPageLoading;
