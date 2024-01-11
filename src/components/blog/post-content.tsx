import { cn } from "~/lib/utils";
import type { Post } from "content-layer/generated";
import { Poppins } from "next/font/google";
import { Mdx } from "../mdx/components";

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
