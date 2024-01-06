import Skeleton from "../ui/skeleton";

const PostCardSkeleton = () => (
  <div className="relative flex w-full flex-col gap-4 overflow-hidden rounded-xl border bg-neutral-900/80 p-4">
    <div className="absolute inset-0 z-0 bg-card-even" />
    <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-20" />
    <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-20" />
    <Skeleton className="relative z-10 h-5 w-16 rounded-md" />
    <Skeleton className="relative z-10 h-7 w-[50%] rounded-md md:h-8" />
    <Skeleton className="relative z-10 h-10 rounded-md" />
    <Skeleton className="relative z-10 h-5 w-28 rounded-md md:h-6" />
  </div>
);

export default PostCardSkeleton;
