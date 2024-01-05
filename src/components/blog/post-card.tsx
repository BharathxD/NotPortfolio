import { CardDescription } from "~/components/ui/card";
import { formatDate } from "~/lib/utils";
import { type Post } from "content-layer/generated";
import Link from "next/link";
import { Suspense } from "react";
import Views from "./views";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => (
  <li className="list-none" role="listitem" aria-label={`Post card for ${post.title}`}>
    <Link key={post.slug} href={post.slug} className="w-full">
      <span className="sr-only">{post.title}</span>
      <article className="relative flex w-full flex-col gap-4 overflow-hidden rounded-xl border bg-neutral-900/80 p-4">
        <Suspense
          fallback={
            <div className="relative z-10 h-5 w-20 animate-skeleton rounded-md bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]" />
          }>
          <Views slug={post.slug} />
        </Suspense>
        <div className="absolute inset-0 z-0 bg-card-even" />
        <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-20" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-20" />
        <h2 className="relative z-10 bg-gradient-to-tr from-neutral-50 via-neutral-200 to-neutral-500 bg-clip-text text-xl font-medium text-transparent duration-1000 group-hover:text-white lg:text-3xl">
          {post.title}
        </h2>
        <p className="relative z-10 line-clamp-2 text-sm  duration-1000 group-hover:text-zinc-200">
          {post.description}
        </p>
        <CardDescription className="relative z-10">{formatDate(post.date)}</CardDescription>
      </article>
    </Link>
  </li>
);

export default PostCard;
