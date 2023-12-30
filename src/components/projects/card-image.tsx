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
        "z-10 object-contain transition-all duration-700 data-[loading=true]:-mb-4 data-[loading=true]:animate-skeleton data-[loading=true]:rounded-lg data-[loading=true]:bg-gradient-to-r data-[loading=true]:from-neutral-950 data-[loading=true]:via-neutral-700 data-[loading=true]:to-neutral-950 data-[loading=true]:bg-[400%,100%] data-[loading=false]:group-hover:-translate-y-2",
        className
      )}
      onLoad={handleSetIsLoaded}
      aria-busy={isLoading}
      data-loading={isLoading}
      height={500}
      width={1000}
      role="img"
      {...props}
    />
  );
};

CardImage.displayName = "CardImage";

export default memo(CardImage);
