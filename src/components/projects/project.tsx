"use client";

import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import type { Project as ProjectMetdata } from "~/types";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import BulletPoint from "./bullet-point";
import Pill from "./pill";
import ProjectHeader from "./project-header";
import ProjectCarousel from "./project.carousel";

interface Props {
  project: ProjectMetdata;
}

const Project = ({ project }: Props) => {
  return (
    <motion.section
      className="flex flex-col gap-4 p-4 md:p-10"
      initial="hidden"
      whileInView="show"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      aria-label="Project details">
      <ProjectHeader name={project.name} tagline={project.tagline} />
      <ul className="flex" role="list">
        <li>
          <Link
            href={project.github}
            className="underline-offset-4 transition-all hover:underline"
            target="_blank"
            referrerPolicy="no-referrer"
            aria-label="Github link">
            Github
          </Link>
        </li>
        <Dot />
        <li>
          <Link
            href={project.projectUrl}
            className="underline-offset-4 transition-all hover:underline"
            target="_blank"
            referrerPolicy="no-referrer"
            aria-label="Website link">
            Website
          </Link>
        </li>
      </ul>
      <ProjectCarousel id={project.id} noOfPictures={project.noOfPictures} tagline={project.tagline} />
      <ul>
        {project.points.map((point, i) => (
          <BulletPoint key={i}>{point}</BulletPoint>
        ))}
      </ul>
      <ul className="mt-2 flex flex-wrap gap-2" role="list">
        {project.stack.map((techStack, i) => (
          <Pill key={i}>{techStack}</Pill>
        ))}
      </ul>
    </motion.section>
  );
};

Project.displayName = "Project";

export default memo(Project);
