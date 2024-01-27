"use client";

import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { type Project } from "~/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import BlurImage from "../ui/blur-image";
import ImageWithLoader from "../ui/image-with-loader";

interface Props {
  project: Pick<Project, "name" | "tagline" | "id">;
}

const ProjectCard = ({ project }: Props) => (
  <motion.li
    initial="hidden"
    whileInView="show"
    variants={FADE_DOWN_ANIMATION_VARIANTS}
    className="group relative rounded-3xl border border-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-950 p-2 shadow-lg"
    role="listitem"
    aria-label={`Project ${project.name}`}>
    <div className="absolute inset-x-0 -top-px bottom-[auto] z-20 h-px bg-glare opacity-80" />
    <div className="absolute inset-x-0 top-2 z-20 h-px bg-glare opacity-80" />
    <Link
      href={`/work/${project.id}`}
      className="relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-neutral-800 to-neutral-950 px-6 pt-6 transition-colors hover:border-neutral-700 md:h-[30rem]">
      <div className="z-10 mb-4">
        <h1 className="mb-2 text-xl md:text-4xl">{project.name}</h1>
        <p>{project.tagline}</p>
      </div>
      <div className="absolute inset-0 z-0 bg-card opacity-0 transition-all duration-500 group-hover:opacity-100" />
      <ImageWithLoader
        className="z-10 mx-auto mt-4 object-contain p-1 transition-all duration-700 data-[loading=true]:w-[660px] data-[loading=true]:animate-skeleton data-[loading=true]:rounded-xl data-[loading=true]:rounded-b-none data-[loading=true]:md:h-[500px] data-[loading=false]:md:group-hover:mt-0"
        src={`/work/${project.name.toLowerCase()}.webp`}
        alt={project.tagline}
        sizes="(max-width: 767px) 75vw, (max-width: 991px) 73vw, (max-width: 1439px) 727.78125px, (max-width: 1919px) 866.375px, 1193.9896240234375px"
        loading="eager"
        height={500}
        width={660}
        priority
      />
    </Link>
  </motion.li>
);

ProjectCard.displayName = "ProjectCard";

export default memo(ProjectCard);
