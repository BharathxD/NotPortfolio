import { Mdx } from "~/components/mdx/components";
import { allPosts, type Author, type Post } from "content-layer/generated";
import "~/styles/mdx.css";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Views from "~/components/blog/views";
import ImageWithLoader from "~/components/projects/image-with-loader";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { buttonVariants } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Shell } from "~/components/ui/shell";
import { cn } from "~/lib/utils";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import PostMeta from "./post-meta";

/**
 * Configuration for the Poppins font
 */
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

interface Props {
  post: Post;
  authors: (Author | undefined)[];
  incrementViews: (slug: string) => Promise<number>;
}

const MdxPager = dynamic(() => import("~/components/pagers/mdx-pager"), { ssr: false });

const Post = ({ post, authors, incrementViews }: Props) => (
  <Shell
    as="article"
    variant="spaced"
    className="bg-gradient-to-b from-neutral-700/50 via-neutral-900 to-neutral-950 md:bg-transparent 
    md:from-transparent md:to-transparent
    ">
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <PostMeta date={post.date} readingTime={post.readingTime} />
        <Suspense
          fallback={
            <p className="h-5 w-14 animate-skeleton rounded-sm border bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]" />
          }>
          <Views slug={post.slug} cachedIncrement={incrementViews} />
        </Suspense>
      </div>
      <h1 className="inline-block bg-gradient-to-tr from-neutral-100 to-neutral-400 bg-clip-text text-4xl font-medium text-transparent lg:text-5xl">
        {post.title}
      </h1>
      {authors?.length && (
        <div className="flex items-center space-x-4">
          {authors.map(
            (author) =>
              author && (
                <Link
                  key={author._id}
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
        className="mt-4 rounded-md border bg-muted"
        height={500}
        width={1000}
        priority
      />
    )}
    <article
      className={cn(
        "prose prose-neutral prose-invert max-w-4xl prose-img:rounded-md prose-img:border",
        poppins.className
      )}>
      <Mdx code={post.body.code} />
    </article>
    <Separator className="my-4" />
    <MdxPager currentItem={post} allItems={allPosts} />
    <Link href="/blog" className={cn(buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" }))}>
      <ChevronLeftIcon className="mr-2 h-4 w-4" aria-hidden="true" />
      See all posts
      <span className="sr-only">See all posts</span>
    </Link>
  </Shell>
);

export default Post;
