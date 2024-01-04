const PostsSkeleton = () => (
  <>
    {Array.from({ length: 10 }, (_, i) => (
      <div
        key={i}
        className="relative flex w-full flex-col gap-4 overflow-hidden rounded-xl border bg-neutral-900/80 p-4">
        <div className="absolute inset-0 z-0 bg-card-even" />
        <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-20" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-20" />
        <div className="relative z-10 h-5 w-20 animate-skeleton rounded-md bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]" />
        <div className="relative z-10 h-7 w-[50%] animate-skeleton rounded-md bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%] md:h-8" />
        <div className="relative z-10 line-clamp-2 h-10 animate-skeleton rounded-md bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]" />
        <div className="relative z-10 line-clamp-2 h-5 w-28 animate-skeleton rounded-md bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%] md:h-6" />
      </div>
    ))}
  </>
);

export default PostsSkeleton;