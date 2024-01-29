import Mdx from "~/components/mdx/components";
import type { Post } from "content-layer/generated";
import { Poppins } from "next/font/google";

interface Props {
  post: Post;
}

/**
 * Configuration for the Poppins font
 * This configuration includes the paths to the font files, their weights, and styles.
 * The variable `--font-poppins` is used to reference this font in CSS.
 */
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const PostContent = ({ post }: Props) => (
  <main className="pt-5">
    <Mdx code={post.body?.code} className={poppins.className} />
  </main>
);

export default PostContent;
