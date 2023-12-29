"use client";

import ProjectCard from "~/components/projects/card";
import { biography } from "~/lib/config";

const ProjectPage = () => (
  <section className="p-5 md:p-10">
    <ul className="flex flex-col gap-4 md:gap-12">
      {biography.portfolioProjects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ul>
  </section>
);

export default ProjectPage;
