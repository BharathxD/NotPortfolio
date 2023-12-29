"use client";

import EmptyPage from "~/components/empty-page";
import Project from "~/components/projects/project";
import { biography } from "~/lib/config";
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { motion } from "framer-motion";

interface Props {
  params: {
    projectId: string;
  };
}

const ProjectPage = ({ params: { projectId } }: Props) => {
  const project = biography.portfolioProjects.find((project) => project.id === projectId);
  if (!project)
    return (
      <EmptyPage
        emoticon="disappointed"
        message={`Alas! No trace of a project bearing the name "${projectId}" exists in the depths of my portfolio.`}
      />
    );
  return (
    <motion.section
      className="p-4 md:p-10"
      initial="hidden"
      whileInView="show"
      variants={FADE_DOWN_ANIMATION_VARIANTS}>
      <Project project={project} />
    </motion.section>
  );
};

export default ProjectPage;
