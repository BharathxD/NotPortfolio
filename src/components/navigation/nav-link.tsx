import Link from "next/link";
import { memo } from "react";

interface Props {
  navLink: {
    name: string;
    path: string;
  };
}

const NavLink = ({ navLink }: Props) => {
  const { name, path } = navLink;
  return (
    <Link className="p-2 text-neutral-50 hover:text-neutral-300" key={name} href={path}>
      {name}
    </Link>
  );
};

NavLink.displayName = "NavLink";

export default memo(NavLink);
