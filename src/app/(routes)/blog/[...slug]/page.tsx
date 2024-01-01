import { Mdx } from "~/components/mdx/mdx-components";
import { allAuthors, allPosts, type Post } from "contentlayer/generated";
import { notFound } from "next/navigation";
import "~/styles/mdx.css";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import getPostFromParams from "~/actions/get-post-from-params";
import MdxPager from "~/components/pagers/mdx-pager";
import ImageWithLoader from "~/components/projects/image-with-loader";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { buttonVariants } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Shell } from "~/components/ui/shell";
import { cn, formatDate } from "~/lib/utils";
import Link from "next/link";

interface Props {
  params: {
    slug: string[];
  };
}
// eslint-disable-next-line @typescript-eslint/require-await
export const generateStaticParams = async (): Promise<Props["params"][]> =>
  allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));

const PostPage = async ({ params }: Props) => {
  const post = await getPostFromParams(params);

  if (!post) return notFound();

  const authors = post.authors.map((author) =>
    allAuthors.find((a) => a.title === author?.replace(/\r$/, ""))
  );

  return (
    <Shell
      as="article"
      variant="spaced"
      className="bg-gradient-to-b from-neutral-700/50 via-neutral-900 to-neutral-950 md:bg-transparent 
      md:from-transparent md:to-transparent
      ">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          {post.date ? <div>•</div> : null}
          <div>{post.readingTime}min</div>
        </div>
        <h1 className="inline-block bg-gradient-to-tr from-neutral-100 to-neutral-400 bg-clip-text text-4xl font-medium text-transparent lg:text-5xl">
          {post.title}
        </h1>
        {authors?.length && (
          <div className="flex items-center space-x-4 pb-4">
            {authors.map(
              (author) =>
                author && (
                  <Link
                    key={author._id}
                    referrerPolicy="no-referrer"
                    target="_blank"
                    href={`https://linkedin.com/in/${author.linkedin}?utm_source=blog&utm_medium=${author.title}?utm_website=portfolio`}
                    className="flex items-center space-x-2 text-sm">
                    <Avatar>
                      <AvatarImage src={author.avatar} alt={author.title} />
                      <AvatarFallback className="rounded-full border bg-gradient-to-tr from-neutral-800 to-neutral-900" />
                    </Avatar>
                    <div className="flex-1 text-left leading-tight">
                      <p className="font-medium">{author.title}</p>
                      <p className="text-[12px] text-muted-foreground">@{author.linkedin}</p>
                    </div>
                  </Link>
                )
            )}
          </div>
        )}
      </div>
      {post.image && (
        <ImageWithLoader
          src={post.image}
          alt={post.title}
          className="rounded-md border bg-muted"
          height={500}
          width={1000}
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <Separator className="my-4" />
      <MdxPager currentItem={post} allItems={allPosts} />
      <Link
        href="/blog"
        className={cn(buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" }))}>
        <ChevronLeftIcon className="mr-2 h-4 w-4" aria-hidden="true" />
        See all posts
        <span className="sr-only">See all posts</span>
      </Link>
    </Shell>
  );
};

export default PostPage;
