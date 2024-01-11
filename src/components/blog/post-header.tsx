import type { Author as AuthorType, Post } from "content-layer/generated";
import { Suspense } from "react";
import Author from "./author";
import PostMeta from "./post-meta";
import Views from "./views";

interface Props {
  post: Post;
  authors: (AuthorType | undefined)[];
  incrementViews: (slug: string) => Promise<number>;
}

const PostHeader = ({ post, authors, incrementViews }: Props) => (
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
    {authors?.length !== 0 && (
      <ul className="flex items-center space-x-4" role="list">
        {authors.map((author) => (
          <Author key={author?._id} author={author} />
        ))}
      </ul>
    )}
  </header>
);

export default PostHeader;
