import { SheetClose } from "~/components/ui/sheet";
import { cn } from "~/lib/utils";
import type { NavbarLink } from "~/types";
import Link from "next/link";

interface Props extends Omit<React.ComponentProps<typeof Link>, "href">, React.PropsWithChildren {
  item: NavbarLink;
}

const MobileNavItem = ({ item: { name, path }, className, children, ...rest }: Props) => (
  <li className="w-full border-y px-6 py-4">
    <SheetClose asChild>
      <Link
        key={name}
        href={path}
        className={cn(
          "w-full from-neutral-100 bg-clip-text text-left text-6xl text-neutral-50 transition-colors duration-500 hover:text-neutral-400",
          className
        )}
        aria-label={name}
        {...rest}>
        {name ?? children}
      </Link>
    </SheetClose>
  </li>
);

export default MobileNavItem;
