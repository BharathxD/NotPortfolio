import { cn } from "~/lib/utils";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { memo } from "react";

/**
 * Configuration for the Montserrat font
 */
const montserrat = Montserrat({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {}

const Logo = ({ className, ...rest }: Props) => (
  <Link href="/" {...rest} className={cn("font-extrabold shadow-item", className, montserrat.className)}>
    <span className="mask-effect size-12 rounded-sm border bg-neutral-950 px-2 text-4xl font-medium">B</span>
  </Link>
);

Logo.displayName = "Logo";

export default memo(Logo);
