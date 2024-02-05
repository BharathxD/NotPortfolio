import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import type { Post } from "content-layer/generated";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

type PostWithRequiredFields = Pick<Post, "title" | "slug">;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  currentItem: PostWithRequiredFields;
  allItems: PostWithRequiredFields[];
  as?: React.ElementType;
}

const MdxPager = ({ as: Comp = "nav", currentItem, allItems, className, ...props }: Props) => {
  const pager: GetPagerReturnType = getPager(currentItem, allItems);

  if (!pager) return null;

  const { prev, next } = pager;

  return (
    <Comp className={cn("flex flex-row items-center justify-between", className)} {...props}>
      {prev && (
        <Link
          aria-label={prev.title.toLowerCase()}
          href={prev.slug}
          className={cn(buttonVariants({ variant: "ghost" }), "truncate md:p-0")}>
          <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
          <span className={cn("md:block", next && "hidden")}>{prev.title}</span>
        </Link>
      )}
      {next && (
        <Link
          aria-label={next.title.toLowerCase()}
          href={next.slug}
          className={cn(buttonVariants({ variant: "ghost" }), "truncate md:ml-auto md:p-0")}>
          <span className={cn("md:block", prev && "hidden")}>{next.title}</span>
          <ChevronRightIcon className="ml-2 size-4" aria-hidden="true" />
        </Link>
      )}
    </Comp>
  );
};

type GetPagerReturnType = {
  prev: PostWithRequiredFields | null;
  next: PostWithRequiredFields | null;
};

const getPager = (
  currentItem: PostWithRequiredFields,
  allItems: PostWithRequiredFields[]
): GetPagerReturnType => {
  const flattenedLinks = allItems.flat();
  const activeIndex = flattenedLinks.findIndex((link) => currentItem.slug === link?.slug);
  const prev = (activeIndex !== 0 ? flattenedLinks.at(activeIndex - 1) : flattenedLinks.at(-1)) ?? null;
  const next =
    (activeIndex !== flattenedLinks.length - 1 ? flattenedLinks.at(activeIndex + 1) : flattenedLinks.at(0)) ??
    null;
  return {
    prev,
    next,
  };
};

export { getPager };
export default MdxPager;
