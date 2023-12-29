import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import type { Project as ProjectMetdata } from "~/types";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import CarouselImage from "./carousel-image";

interface Props {
  project: ProjectMetdata;
}

const Project = ({ project }: Props) => {
  return (
    <motion.section
      className="flex flex-col gap-4"
      initial="hidden"
      whileInView="show"
      variants={FADE_DOWN_ANIMATION_VARIANTS}>
      <div>
        <h2 className="bg-gradient-to-br from-neutral-700 to-neutral-900 bg-clip-text text-4xl font-semibold text-transparent dark:from-neutral-300 dark:to-neutral-500">
          {project.name}
        </h2>
        <p className="text-xl font-medium text-neutral-800 dark:text-neutral-300">{project.tagline}</p>
      </div>
      <ul className="flex" role="list">
        <li>
          <Link
            href={project.github}
            className="underline-offset-4 transition-all hover:underline"
            target="_blank"
            referrerPolicy="no-referrer">
            Github
          </Link>
        </li>
        <Dot />
        <li>
          <Link
            href={project.projectUrl}
            className="underline-offset-4 transition-all hover:underline"
            target="_blank"
            referrerPolicy="no-referrer">
            Website
          </Link>
        </li>
      </ul>
      <Carousel className="relative rounded-3xl border border-neutral-700 bg-neutral-950 p-2 shadow-lg">
        <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-80" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-80" />
        <CarouselContent className="group ml-0 rounded-3xl py-0">
          {Array.from({ length: project.noOfPictures }).map((_, i) => (
            <CarouselImage
              key={`${i}_${i + 1}`}
              src={`/projects/${project.id}/${i + 1}.webp`}
              alt={project.tagline}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious variant="outline" className="absolute left-5 translate-y-[-50%] transition-all" />
        <CarouselNext variant="outline" className="absolute right-5 translate-y-[-50%] transition-all" />
      </Carousel>
      <ul>
        {project.points.map((point, i) => (
          <li key={i}>
            <p className="inline-flex items-start justify-start gap-2 text-lg">
              <span>
                <Dot />
              </span>
              <span>{point}</span>
            </p>
          </li>
        ))}
      </ul>
      <ul className="mt-2 flex flex-wrap gap-2" role="list">
        {project.stack.map((techStack, i) => (
          <li
            key={i}
            className="inline-flex flex-row gap-1 rounded-lg border border-neutral-700 bg-neutral-50 px-2 py-1 text-sm text-neutral-950 dark:bg-neutral-800/80 dark:text-neutral-50">
            {techStack}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

Project.displayName = "Project";

export default memo(Project);
