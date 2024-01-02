import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface MdxPagerItem {
  title: string;
  slug: string;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  currentItem: MdxPagerItem;
  allItems: MdxPagerItem[];
}

const MdxPager = ({ currentItem, allItems, className, ...props }: Props) => {
  const pager = getPager(currentItem, allItems);

  if (!pager) {
    return null;
  }

  return (
    <div className={cn("flex flex-row items-center justify-between", className)} {...props}>
      {pager?.prev ? (
        <Link
          aria-label="Previous post"
          href={pager.prev.slug}
          className={cn(buttonVariants({ variant: "ghost" }))}>
          <ChevronLeftIcon className="mr-2 h-4 w-4" aria-hidden="true" />
          <span className="hidden md:block">{pager.prev.title}</span>
        </Link>
      ) : null}
      {pager?.next ? (
        <Link
          aria-label="Next post"
          href={pager.next.slug}
          className={cn(buttonVariants({ variant: "ghost" }), "md:ml-auto")}>
          <span className="hidden md:block">{pager.next.title}</span>
          <ChevronRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
};

const getPager = (currentItem: MdxPagerItem, allItems: MdxPagerItem[]) => {
  const flattenedLinks = allItems.flat();
  const activeIndex = flattenedLinks.findIndex((link) => currentItem.slug === link?.slug);
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;
  return {
    prev,
    next,
  };
};

export { getPager };
export default MdxPager;