import { memo } from "react";
import Link from "next/link";
import type { Project as ProjectMetdata } from "~/types";
import { Dot } from "lucide-react";

interface Props {
  project: ProjectMetdata;
}

const Project = ({ project }: Props) => {
  return (
    <div className="flex flex-col gap-4">
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
      <ul className="flex flex-wrap gap-2" role="list">
        {project.stack.map((techStack, i) => (
          <li
            key={i}
            className="inline-flex flex-row gap-1 rounded-lg border border-neutral-700 bg-neutral-50 px-2 py-1 text-sm text-neutral-950 dark:bg-neutral-800/80 dark:text-neutral-50">
            {techStack}
          </li>
        ))}
      </ul>
    </div>
  );
};

Project.displayName = "Project";

export default memo(Project);
