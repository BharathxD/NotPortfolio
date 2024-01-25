"use client";

import { cn } from "~/lib/utils";
import Image from "next/image";
import { memo, useCallback, useState, type ComponentProps } from "react";

const BlurImage = ({ src, alt, className, ...props }: ComponentProps<typeof Image>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSetIsLoaded = useCallback(() => setIsLoading(false), []);
  return (
    <Image
      src={src}
      alt={alt}
      className={cn(
        "data-[loading=false]:scale-100 data-[loading=true]:scale-105 data-[loading=false]:blur-none data-[loading=true]:blur-md",
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

BlurImage.displayName = "BlurImage";

export default memo(BlurImage);
