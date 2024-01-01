"use client";

import { cn } from "~/lib/utils";
import Image from "next/image";

interface Props extends React.ComponentProps<typeof Image> {}

const MdxImage = ({ className, ...props }: Props) => (
  <Image {...props} alt={props.alt ?? "Uncaptioned"} className={cn(className)} />
);

export default MdxImage;
