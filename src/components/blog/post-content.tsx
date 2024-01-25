import { poppins } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import type { Post } from "content-layer/generated";
import { Mdx } from "../mdx/components";

interface Props {
  post: Post;
}

const PostContent = ({ post }: Props) => (
  <main
    className={cn(
      "prose prose-neutral prose-invert max-w-4xl prose-img:rounded-md prose-img:border",
      poppins.className
    )}>
    <Mdx code={post.body?.code} />
  </main>
);

export default PostContent;
