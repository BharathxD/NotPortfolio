import Skeleton from "~/components/ui/skeleton";
import { formatDate } from "~/lib/utils";
import type { Post } from "content-layer/generated";
import Link from "next/link";
import { Suspense } from "react";
import Views from "./views";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const { slug, title, date, description } = post;
  return (
    <li className="list-none" role="listitem" aria-label={`Post card for ${title}`}>
      <Link key={slug} href={slug} className="w-full" aria-label={title}>
        <article className="relative flex w-full flex-col gap-4 overflow-hidden rounded-xl border bg-neutral-900/80 p-4">
          <Suspense fallback={<Skeleton className="relative z-10 h-5 w-16" />}>
            <Views slug={slug} />
          </Suspense>
          <div className="absolute inset-0 z-0 bg-card-even" />
          <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-20" />
          <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-20" />
          <h2 className="relative z-10 bg-gradient-to-tr from-neutral-50 via-neutral-200 to-neutral-500 bg-clip-text text-xl font-medium text-transparent duration-1000 group-hover:text-white lg:text-3xl">
            {title}
          </h2>
          <p className="relative z-10 line-clamp-2 text-sm duration-1000 group-hover:text-zinc-200">
            {description}
          </p>
          <time className="relative z-10 text-sm text-muted-foreground">{formatDate(date)}</time>
        </article>
      </Link>
    </li>
  );
};

export default PostCard;
