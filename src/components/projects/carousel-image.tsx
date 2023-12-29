"use client";

import { cn } from "~/lib/utils";
import Image from "next/image";
import { useState, type ComponentProps } from "react";
import { CarouselItem } from "../ui/carousel";

const CarouselImage = ({ src, alt, className, ...props }: ComponentProps<typeof Image>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleSetIsLoaded = () => setIsLoading(false);
  return (
    <CarouselItem className="relative w-full">
      <Image
        src={src}
        alt={alt}
        className={cn(
          isLoading
            ? "animate-skeleton rounded-2xl border bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]"
            : "z-10 w-full rounded-2xl border transition-all duration-700",
          className
        )}
        onLoad={handleSetIsLoaded}
        quality={80}
        height={1878}
        width={3380}
        {...props}
      />
    </CarouselItem>
  );
};

export default CarouselImage;
