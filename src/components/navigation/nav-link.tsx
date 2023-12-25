import Link from "next/link";
import { memo } from "react";

interface Props {
  item: {
    name: string;
    path: string;
  };
}

const NavLink = ({ item: { name, path } }: Props) => (
  <li className="p-2 first:pl-0">
    <Link
      key={name}
      href={path}
      className="bg-gradient-to-tr from-neutral-800 to-neutral-950 bg-clip-text leading-tight tracking-tighter text-transparent transition-colors duration-500 hover:text-neutral-500 dark:from-neutral-200 dark:to-neutral-400 dark:hover:text-neutral-50"
      aria-label={name}>
      {name}
    </Link>
  </li>
);

NavLink.displayName = "NavLink";

export default memo(NavLink);
