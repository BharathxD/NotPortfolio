"use client";

import ProjectCard from "~/components/projects/card";
import { Shell } from "~/components/ui/shell";
import { biography } from "~/lib/config";

const ProjectPage = () => (
  <Shell variant="spaced">
    <ul className="flex flex-col gap-4 md:gap-12">
      {biography.portfolioProjects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ul>
  </Shell>
);

export default ProjectPage;
