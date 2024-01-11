import { cn } from "~/lib/utils";
import { allPosts, type Post } from "content-layer/generated";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import MdxPager from "../pagers/mdx-pager";
import { buttonVariants } from "../ui/button";

interface Props {
  post: Post;
}

const PostFooter = ({ post }: Props) => (
  <>
    <MdxPager currentItem={post} allItems={allPosts} as="footer" />
    <Link href="/blog" className={cn(buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" }))}>
      <ChevronLeftIcon className="mr-2 h-4 w-4" aria-hidden="true" />
      <span>See all posts</span>
      <span className="sr-only">See all posts</span>
    </Link>
  </>
);

export default PostFooter;
