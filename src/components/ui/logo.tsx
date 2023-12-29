import { siteConfig } from "~/lib/config";
import { cn } from "~/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {}

const Logo = ({ className, ...rest }: Props) => (
  <Link href="/" {...rest} className={cn("shadow-item", className)}>
    <Image
      width={35}
      height={35}
      alt="Logo"
      src={siteConfig.logoUrl}
      className="mask-effect size-12 rounded-sm border"
      priority
    />
  </Link>
);

Logo.displayName = "Logo";

export default memo(Logo);
