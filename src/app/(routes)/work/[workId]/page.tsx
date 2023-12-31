import EmptyPage from "~/components/empty-page";
import Project from "~/components/projects/project";
import { biography } from "~/lib/config";

interface Props {
  params: {
    workId: string;
  };
}

const ProjectPage = ({ params: { workId } }: Props) => {
  const project = biography.portfolioProjects.find((project) => project.id === workId);
  if (!project)
    return (
      <EmptyPage
        emoticon="disappointed"
        message={`Alas! No trace of a project bearing the name "${workId}" exists in the depths of my portfolio.`}
      />
    );
  return <Project project={project} />;
};

export default ProjectPage;
