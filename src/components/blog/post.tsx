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
}

const Post = ({ post, authors }: Props) => (
  <Shell variant="spaced">
    <PostHeader post={post} authors={authors} />
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
