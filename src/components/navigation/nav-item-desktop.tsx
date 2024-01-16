import type { NavbarLink } from "~/types";
import Link from "next/link";
import { memo, type ComponentProps } from "react";

interface Props extends Omit<ComponentProps<typeof Link>, "href">, React.PropsWithChildren {
  item: NavbarLink;
}

const NavItemDesktop = ({ item: { name, path }, children, ...rest }: Props) => (
  <li className="p-2 first:pl-0">
    <Link
      key={name}
      href={path}
      className="bg-gradient-to-tr from-neutral-100 to-neutral-300 bg-clip-text text-xl text-transparent opacity-60 transition-all duration-500  hover:text-neutral-50 hover:opacity-100"
      aria-label={name}
      {...rest}>
      {name ?? children}
    </Link>
  </li>
);

NavItemDesktop.displayName = "NavLink";

export default memo(NavItemDesktop);
