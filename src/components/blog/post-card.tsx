import { CardDescription } from "~/components/ui/card";
import { formatDate } from "~/lib/utils";
import { type Post } from "contentlayer/generated";
import Link from "next/link";

interface Props {
  post: Post;
  i: number;
}

const PostCard = ({ post }: Props) => (
  <Link key={post.slug} href={post.slug} className="w-full">
    <span className="sr-only">{post.title}</span>
    <article className="w-full space-y-4">
      <div className="space-y-2">
        <div className="space-y-2.5 rounded-xl border bg-neutral-900 p-4">
          <h2 className="z-20 text-xl font-medium text-zinc-200 duration-1000 group-hover:text-white lg:text-3xl">
            {post.title}
          </h2>
          <p className="z-20 mt-4 line-clamp-2 text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
            {post.description}
          </p>
          <CardDescription>{formatDate(post.date)}</CardDescription>
        </div>
      </div>
    </article>
  </Link>
);

export default PostCard;
