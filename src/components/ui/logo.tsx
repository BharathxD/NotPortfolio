import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "~/lib/config";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {}

const Logo = ({ ...rest }: Props) => (
  <Link href="/" {...rest}>
    <Image
      width={35}
      height={35}
      alt="Logo"
      src={siteConfig.logoUrl}
      className="mask-effect rounded-sm border"
    />
  </Link>
);

Logo.displayName = "Logo";

export default memo(Logo);
