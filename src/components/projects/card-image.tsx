"use client";

import { cn } from "~/lib/utils";
import Image from "next/image";
import { memo, useState, type ComponentProps } from "react";

const CardImage = ({ src, alt, className, ...props }: ComponentProps<typeof Image>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleSetIsLoaded = () => setIsLoading(false);
  return (
    <Image
      src={src}
      alt={alt}
      sizes="(max-width: 767px) 75vw, (max-width: 991px) 73vw, (max-width: 1439px) 727.78125px, (max-width: 1919px) 866.375px, 1193.9896240234375px"
      className={cn(
        "transition-all duration-700",
        isLoading
          ? "animate-skeleton rounded-lg border bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]"
          : "z-10 object-contain group-hover:-translate-y-2",
        className
      )}
      onLoad={handleSetIsLoaded}
      aria-busy={isLoading}
      height={500}
      width={1000}
      role="img"
      {...props}
    />
  );
};

CardImage.displayName = "CardImage";

export default memo(CardImage);
