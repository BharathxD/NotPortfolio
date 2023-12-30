"use client";

import { cn } from "~/lib/utils";
import Image from "next/image";
import { memo, useState, type ComponentProps } from "react";
import { CarouselItem } from "../ui/carousel";

const CarouselImage = ({ src, alt, className, ...props }: ComponentProps<typeof Image>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleSetIsLoaded = () => setIsLoading(false);
  console.info({ isLoading });
  return (
    <CarouselItem className="relative w-full">
      <Image
        src={src}
        alt={alt}
        className={cn(
          "z-10 w-full rounded-2xl border data-[loading=true]:animate-skeleton data-[loading=true]:bg-gradient-to-r data-[loading=true]:from-neutral-950 data-[loading=true]:via-neutral-700 data-[loading=true]:to-neutral-950 data-[loading=true]:bg-[400%,100%]",
          className
        )}
        onLoad={handleSetIsLoaded}
        data-loading={isLoading}
        aria-busy={isLoading}
        height={1878}
        width={3380}
        role="img"
        {...props}
      />
    </CarouselItem>
  );
};

CarouselImage.displayName = "CarouselImage";

export default memo(CarouselImage);
