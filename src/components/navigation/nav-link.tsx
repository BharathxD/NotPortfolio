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
      className="text-neutral-950 hover:text-neutral-300 dark:text-neutral-50"
      aria-label={name}>
      {name}
    </Link>
  </li>
);

NavLink.displayName = "NavLink";

export default memo(NavLink);
