import ImageWithLoader from "~/components/projects/image-with-loader";
import { Separator } from "~/components/ui/separator";
import { Shell } from "~/components/ui/shell";
import type { Author as AuthorType, Post as PostType } from "content-layer/generated";
import PostContent from "./post-content";
import PostFooter from "./post-footer";
import PostHeader from "./post-header";

interface Props {
  post: PostType;
  authors: (AuthorType | undefined)[];
  incrementViews: (slug: string) => Promise<number>;
}

const Post = ({ post, authors, incrementViews }: Props) => (
  <Shell
    variant="spaced"
    className="bg-gradient-to-b from-neutral-700/50 via-neutral-900 to-neutral-950 md:bg-transparent md:from-transparent md:to-transparent">
    <PostHeader post={post} authors={authors} incrementViews={incrementViews} />
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
    <PostContent post={post} />
    <Separator className="my-4" />
    <PostFooter post={post} />
  </Shell>
);

export default Post;
