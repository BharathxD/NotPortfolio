import Skeleton from "../ui/skeleton";

const PostSkeleton = () => (
  <div className="size-full space-y-2 pt-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <Skeleton
        key={i}
        className="w-full rounded-md"
        style={{
          height: Math.random() * 80 * i,
        }}
      />
    ))}
  </div>
);

export default PostSkeleton;
