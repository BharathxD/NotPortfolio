import { cn } from "~/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
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

  if (!pager) return null;

  return (
    <nav className={cn("flex flex-row items-center justify-between", className)} {...props}>
      {pager?.prev && (
        <Link
          aria-label={pager.prev.title.toLowerCase()}
          href={pager.prev.slug}
          className={cn(buttonVariants({ variant: "ghost" }))}>
          <ChevronLeftIcon className="mr-2 h-4 w-4" aria-hidden="true" />
          <span className="hidden md:block">{pager.prev.title}</span>
        </Link>
      )}
      {pager?.next && (
        <Link
          aria-label={pager.next.title.toLowerCase()}
          href={pager.next.slug}
          className={cn(buttonVariants({ variant: "ghost" }), "md:ml-auto")}>
          <span className="hidden md:block">{pager.next.title}</span>
          <ChevronRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </nav>
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
