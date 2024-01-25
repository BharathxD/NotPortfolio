import { cn } from "~/lib/utils";
import type { NavbarLink } from "~/types";
import Link from "next/link";

interface Props extends Omit<React.ComponentProps<typeof Link>, "href">, React.PropsWithChildren {
  item: NavbarLink;
}

const DesktopNavItem = ({ item: { name, path }, className, children, ...rest }: Props) => (
  <li className="p-2 first:pl-0">
    <Link
      key={name}
      href={path}
      className={cn(
        "bg-gradient-to-tr from-neutral-100 to-neutral-300 bg-clip-text text-xl text-transparent opacity-60 transition-all duration-500 hover:text-neutral-50 hover:opacity-100",
        className
      )}
      aria-label={name}
      {...rest}>
      {name ?? children}
    </Link>
  </li>
);

export default DesktopNavItem;
