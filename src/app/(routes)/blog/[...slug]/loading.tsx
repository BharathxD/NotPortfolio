import { Shell } from "~/components/ui/shell";

const PostLoading = () => (
  <Shell
    as="article"
    variant="spaced"
    className="relative space-y-4 bg-gradient-to-b from-neutral-700/50 via-neutral-900 to-neutral-950 md:bg-transparent md:from-transparent md:to-transparent">
    <div className="flex w-full flex-row gap-2">
      <div className="flex h-5 w-28 animate-skeleton items-center space-x-2 rounded-sm bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%] text-sm text-muted-foreground" />
      <div className="flex h-5 w-10 animate-skeleton items-center space-x-2 rounded-sm bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%] text-sm text-muted-foreground" />
      <div className="flex h-5 w-16 animate-skeleton items-center space-x-2 rounded-sm bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%] text-sm text-muted-foreground" />
    </div>
    <div className="space-y-4">
      <div className="inline-block h-10 w-full animate-skeleton rounded-md bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%] lg:text-5xl" />
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="aspect-square size-[40px] animate-skeleton rounded-full bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]" />
        <div className="flex flex-col gap-2">
          <div className="h-3 w-40 animate-skeleton rounded-sm bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]" />
          <div className="h-3 w-20 animate-skeleton rounded-sm bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]" />
        </div>
      </div>
    </div>
    <div className="size-full animate-skeleton space-y-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`w-full animate-skeleton rounded-md bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]`}
          style={{
            height: Math.random() * 80 * i,
          }}
        />
      ))}
    </div>
  </Shell>
);

export default PostLoading;
