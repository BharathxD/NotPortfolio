import Link from "next/link";
import { memo } from "react";

interface Props {
  item: {
    name: string;
    path: string;
  };
}

const NavItemDesktop = ({ item: { name, path } }: Props) => (
  <li className="p-2 first:pl-0">
    <Link
      key={name}
      href={path}
      className="bg-gradient-to-tr from-neutral-100 to-neutral-300 bg-clip-text text-xl text-transparent opacity-60 transition-all duration-500  hover:text-neutral-50 hover:opacity-100"
      aria-label={name}>
      {name}
    </Link>
  </li>
);

NavItemDesktop.displayName = "NavLink";

export default memo(NavItemDesktop);
