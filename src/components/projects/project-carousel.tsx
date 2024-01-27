import { type Project } from "~/types";
import { memo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ImageWithLoader from "../ui/image-with-loader";

const ProjectCarousel = ({ id, noOfPictures, tagline }: Pick<Project, "id" | "noOfPictures" | "tagline">) => (
  <Carousel className="relative rounded-3xl border border-neutral-700 bg-neutral-950 p-2 shadow-lg">
    <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-80" />
    <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-80" />
    <CarouselContent className="group ml-0 rounded-3xl py-0">
      {Array.from({ length: noOfPictures }).map((_, i) => (
        <CarouselItem key={i} className="relative w-full">
          <ImageWithLoader
            key={`${i}_${i + 1}`}
            src={`/_work/${id}/${i + 1}.webp`}
            alt={tagline}
            className="z-10 w-full rounded-2xl border"
            height={1878}
            width={3380}
          />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious variant="outline" className="absolute left-5 translate-y-[-50%] transition-all" />
    <CarouselNext variant="outline" className="absolute right-5 translate-y-[-50%] transition-all" />
  </Carousel>
);

ProjectCarousel.displayName = "ProjectCarousel";

export default memo(ProjectCarousel);
