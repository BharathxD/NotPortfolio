import { Mdx } from "~/components/mdx/mdx-components";
import { allAuthors, allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import "~/styles/mdx.css";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import MdxPager from "~/components/pagers/mdx-pager";
import { buttonVariants } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Shell } from "~/components/ui/shell";
import { cn, formatDate } from "~/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ImageWithLoader from "~/components/projects/image-with-loader";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

const getPostFromParams = (params: PostPageProps["params"]) => {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const generateStaticParams = async (): Promise<PostPageProps["params"][]> =>
  allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));

const PostPage = async ({ params }: PostPageProps) => {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const post = await getPostFromParams(params);

  if (!post) return notFound();

  const authors = post.authors.map((author) =>allAuthors.find((a) => a.title === author?.replace(/\r$/, "")));

  return (
    <Shell as="article" variant="spaced">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          {post.date ? <div>•</div> : null}
          <div>{post.readingTime}min</div>
        </div>
        <h1 className="inline-block text-4xl font-medium lg:text-5xl">{post.title}</h1>
        {authors?.length && (
          <div className="flex items-center space-x-4 pb-4">
            {authors.map((author) =>
              author && (
                <Link
                  key={author._id}
                  href={`https://linkedin.com/in/${author.linkedin}`}
                  className="flex items-center space-x-2 text-sm">
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={40}
                    height={40}
                    className="rounded-full bg-white"
                  />
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
          <ImageWithLoader src={post.image} alt={post.title} className="rounded-md border bg-muted" height={500} width={1000} priority />
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
