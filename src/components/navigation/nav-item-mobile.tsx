import Link from "next/link";
import { memo } from "react";
import { SheetClose } from "../ui/sheet";

interface Props {
  item: {
    name: string;
    path: string;
  };
}

const NavItemMobile = ({ item: { name, path } }: Props) => (
  <li className="w-full border-y px-6 py-4">
    <SheetClose asChild>
      <Link
        key={name}
        href={path}
        className="w-full bg-gradient-to-tr from-neutral-800 to-neutral-950 bg-clip-text text-left text-6xl text-transparent transition-colors duration-500 hover:text-neutral-400 dark:from-neutral-100 dark:to-neutral-300 dark:hover:text-neutral-50"
        aria-label={name}>
        {name}
      </Link>
    </SheetClose>
  </li>
);

NavItemMobile.displayName = "NavLink";

export default memo(NavItemMobile);
