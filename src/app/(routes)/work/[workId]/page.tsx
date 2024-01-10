import getProject from "~/actions/get-project";
import Project from "~/components/projects/project";
import EmptyPage from "~/components/ui/empty-page";
import { Shell } from "~/components/ui/shell";
import env from "~/env.mjs";
import { siteConfig } from "~/lib/config";
import { absoluteUrl } from "~/lib/utils";
import { type Metadata } from "next";

interface Props {
  params: {
    workId: string;
  };
}

/**
 * Generate metadata for the page
 * @param {Props} props - The properties of the page
 * @returns {Metadata} - The metadata of the page
 */
const generateMetadata = ({ params: { workId } }: Props): Metadata => {
  const work = getProject(workId);

  if (!work) return {};

  const ogUrl = new URL(`${env.NEXT_PUBLIC_APP_URL}/api/og`);

  ogUrl.searchParams.set("title", work.name);
  ogUrl.searchParams.set("subtitle", work.tagline);

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: work.name,
    description: work.tagline,
    authors: [
      {
        url: siteConfig.url,
        name: siteConfig.name,
      },
    ],
    openGraph: {
      title: work.name,
      description: work.tagline,
      type: "article",
      url: absoluteUrl(`/work/${work.id}`),
      images: [
        {
          url: ogUrl.toString(),
          alt: work.name,
          width: 1920,
          height: 1080,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: work.name,
      description: work.tagline,
      images: [ogUrl.toString()],
    },
  };
};

/**
 * ProjectPage component
 * @param {Props} props - The properties of the page
 */
const ProjectPage = ({ params: { workId } }: Props) => {
  const work = getProject(workId);

  if (!work)
    return (
      <EmptyPage
        emoticon="disappointed"
        message={`Alas! No trace of a project bearing the name "${workId}" exists in the depths of my portfolio.`}
      />
    );

  return (
    <Shell variant="spaced">
      <Project project={work} />
    </Shell>
  );
};

export { generateMetadata };
export default ProjectPage;
