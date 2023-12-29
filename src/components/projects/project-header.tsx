import { type Project } from "~/types";

const ProjectHeader = ({ name, tagline }: Pick<Project, "name" | "tagline">) => (
  <header>
    <h2 className="bg-gradient-to-br from-neutral-700 to-neutral-900 bg-clip-text text-4xl font-semibold text-transparent dark:from-neutral-300 dark:to-neutral-500">
      {name}
    </h2>
    <p className="text-xl font-medium text-neutral-800 dark:text-neutral-300">{tagline}</p>
  </header>
);

ProjectHeader.displayName = "ProjectHeader";

export default ProjectHeader;
