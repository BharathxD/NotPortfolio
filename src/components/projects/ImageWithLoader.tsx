"use client";

import { cn } from "~/lib/utils";
import Image from "next/image";
import { memo, useCallback, useState, type ComponentProps } from "react";

const ImageWithLoader = ({ src, alt, className, ...props }: ComponentProps<typeof Image>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleSetIsLoaded = useCallback(() => setIsLoading(false), []);
  return (
    <Image
      src={src}
      alt={alt}
      className={cn(
        "data-[loading=true]:animate-skeleton data-[loading=true]:bg-gradient-to-r data-[loading=true]:from-neutral-950 data-[loading=true]:via-neutral-700 data-[loading=true]:to-neutral-950 data-[loading=true]:bg-[400%,100%]",
        className
      )}
      onLoad={handleSetIsLoaded}
      data-loading={isLoading}
      aria-busy={isLoading}
      role="img"
      {...props}
    />
  );
};

ImageWithLoader.displayName = "ImageWithLoader";

export default memo(ImageWithLoader);
