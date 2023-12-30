import { cn } from "~/lib/utils";
import Link from "next/link";
import { memo } from "react";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {}

const Logo = ({ className, ...rest }: Props) => (
  <Link href="/" {...rest} className={cn("font-motserrat font-extrabold shadow-item", className)}>
    <span className="mask-effect size-12 rounded-sm border bg-neutral-950 px-2 text-4xl font-medium">B</span>
  </Link>
);

Logo.displayName = "Logo";

export default memo(Logo);
