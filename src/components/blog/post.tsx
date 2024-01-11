import ImageWithLoader from "~/components/projects/image-with-loader";
import { Separator } from "~/components/ui/separator";
import { Shell } from "~/components/ui/shell";
import type { Author as AuthorType, Post as PostType } from "content-layer/generated";
import dynamic from "next/dynamic";
import PostContent from "./post-content";
import PostHeader from "./post-header";

const PostFooter = dynamic(() => import("./post-footer"), { ssr: false });

interface Props {
  post: PostType;
  authors: (AuthorType | undefined)[];
  incrementViews: (slug: string) => Promise<number>;
}

const Post = ({ post, authors, incrementViews }: Props) => (
  <Shell variant="spaced">
    <PostHeader post={post} authors={authors} incrementViews={incrementViews} />
    {post.image && (
      <ImageWithLoader
        src={post.image}
        alt={post.title}
        width={1000}
        height={500}
        className="mt-4 rounded-md border bg-muted"
        priority
      />
    )}
    <PostContent post={post} />
    <Separator className="my-4" />
    <PostFooter post={post} />
  </Shell>
);

export default Post;
