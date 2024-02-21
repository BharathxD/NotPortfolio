"use client";

import BulletPoint from "~/components/ui/bullet-point";
import LazyMotionProvider from "~/components/ui/lazy-motion-provider";
import Pill from "~/components/ui/pill";
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import type { Project as ProjectMetdata } from "~/types";
import { m } from "framer-motion";
import { Dot } from "lucide-react";
import Link from "next/link";
import ProjectCarousel from "./project-carousel";
import ProjectHeader from "./project-header";

interface Props {
  project: ProjectMetdata;
}

const Project = ({ project }: Props) => (
  <LazyMotionProvider>
    <m.div
      className="flex flex-col gap-4"
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
            aria-label="Website link">
            Website
          </Link>
        </li>
      </ul>
      <ProjectCarousel id={project.name} noOfPictures={project.noOfPictures} tagline={project.tagline} />
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
    </m.div>
  </LazyMotionProvider>
);

export default Project;
