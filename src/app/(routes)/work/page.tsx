import { Shell } from "~/components/ui/shell";
import ProjectCard from "~/features/projects/project-card";
import { biography } from "~/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work, projects and contributions.",
};

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
