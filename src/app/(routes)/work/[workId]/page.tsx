import EmptyPage from "~/components/ui/empty-page";
import { Shell } from "~/components/ui/shell";
import env from "~/env.mjs";
import Project from "~/features/projects/project";
import { getProjectName } from "~/lib/actions";
import { siteConfig } from "~/lib/config";
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "~/lib/constants";
import { absoluteUrl } from "~/lib/utils";
import type { Metadata } from "next";

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
  const work = getProjectName(workId);

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
      url: absoluteUrl(`/work/${work.name.toLocaleLowerCase()}`),
      images: [
        {
          url: ogUrl.toString(),
          alt: work.name,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
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
  const work = getProjectName(workId);

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
