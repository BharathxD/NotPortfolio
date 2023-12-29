import { type Project } from "~/types";
import { memo } from "react";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";
import CarouselImage from "./carousel-image";

const ProjectCarousel = ({ id, noOfPictures, tagline }: Pick<Project, "id" | "noOfPictures" | "tagline">) => (
  <Carousel className="relative rounded-3xl border border-neutral-700 bg-neutral-950 p-2 shadow-lg">
    <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-80" />
    <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-80" />
    <CarouselContent className="group ml-0 rounded-3xl py-0">
      {Array.from({ length: noOfPictures }).map((_, i) => (
        <CarouselImage key={`${i}_${i + 1}`} src={`/projects/${id}/${i + 1}.webp`} alt={tagline} />
      ))}
    </CarouselContent>
    <CarouselPrevious variant="outline" className="absolute left-5 translate-y-[-50%] transition-all" />
    <CarouselNext variant="outline" className="absolute right-5 translate-y-[-50%] transition-all" />
  </Carousel>
);

ProjectCarousel.displayName = "ProjectCarousel";

export default memo(ProjectCarousel);
