import { buttonVariants } from "~/components/ui/button";
import MdxPager from "~/features/pagers/mdx-pager";
import { cn } from "~/lib/utils";
import { allPosts, type Post } from "content-layer/generated";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  post: Pick<Post, "title" | "slug">;
}

const PostFooter = ({ post }: Props) => (
  <footer>
    <MdxPager currentItem={post} allItems={allPosts} as="footer" />
    <Link href="/blog" className={cn(buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" }))}>
      <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
      <span>See all posts</span>
      <span className="sr-only">See all posts</span>
    </Link>
  </footer>
);

export default PostFooter;
