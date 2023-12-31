import { type Project } from "~/types";

const ProjectHeader = ({ name, tagline }: Pick<Project, "name" | "tagline">) => (
  <header>
    <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 bg-clip-text text-4xl font-semibold text-transparent">
      {name}
    </h2>
    <p className=":text-neutral-300 text-xl font-medium">{tagline}</p>
  </header>
);

ProjectHeader.displayName = "ProjectHeader";

export default ProjectHeader;
