import { Shell } from "~/components/ui/shell";
import Skeleton from "~/components/ui/skeleton";

const PostLoading = () => (
  <Shell as="article" variant="spaced">
    <div className="flex w-full flex-row gap-2">
      <Skeleton className="h-5 w-28" />
      <Skeleton className="h-5 w-10" />
      <Skeleton className="h-5 w-16" />
    </div>
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <div className="flex flex-row items-center justify-start gap-2">
        <Skeleton className="aspect-square size-[40px] rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    </div>
    <div className="size-full animate-skeleton space-y-2">
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
  </Shell>
);

export default PostLoading;
