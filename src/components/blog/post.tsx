import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Views from "~/components/blog/views";
import { Mdx } from "~/components/mdx/components";
import ImageWithLoader from "~/components/projects/image-with-loader";
import { buttonVariants } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Shell } from "~/components/ui/shell";
import { cn } from "~/lib/utils";
import { allPosts, type Author as AuthorType, type Post } from "content-layer/generated";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import Author from "./author";
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
  authors: (AuthorType | undefined)[];
  incrementViews: (slug: string) => Promise<number>;
}

const MdxPager = dynamic(() => import("~/components/pagers/mdx-pager"), { ssr: false });

const Post = ({ post, authors, incrementViews }: Props) => (
  <Shell
    variant="spaced"
    className="bg-gradient-to-b from-neutral-700/50 via-neutral-900 to-neutral-950 md:bg-transparent 
    md:from-transparent md:to-transparent
    ">
    <header className="space-y-4">
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
        <ul className="flex items-center space-x-4" role="list">
          {authors.map((author) => (
            <Author key={author?._id} author={author} />
          ))}
        </ul>
      )}
    </header>
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
    <main
      className={cn(
        "prose prose-neutral prose-invert max-w-4xl prose-img:rounded-md prose-img:border",
        poppins.className
      )}>
      <Mdx code={post.body.code} />
    </main>
    <Separator className="my-4" />
    <MdxPager currentItem={post} allItems={allPosts} as="footer" />
    <Link href="/blog" className={cn(buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" }))}>
      <ChevronLeftIcon className="mr-2 h-4 w-4" aria-hidden="true" />
      <span>See all posts</span>
      <span className="sr-only">See all posts</span>
    </Link>
  </Shell>
);

export default Post;
