import env from "~/env.mjs";
import Post from "~/features/blog/post";
import { getPostFromParams } from "~/lib/actions";
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "~/lib/constants";
import { absoluteUrl } from "~/lib/utils";
import { allAuthors, allPosts } from "content-layer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "~/styles/mdx.css";

interface Props {
  params: {
    slug: string[];
  };
}

/**
 * Generate metadata for the post.
 *
 * @param {Props} props - The properties for the post.
 * @returns {Promise<Metadata>} The metadata for the post.
 */
const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const post = await getPostFromParams(params);
  const url = new URL(env.NEXT_PUBLIC_APP_URL);

  const defaultMetadata = {
    metadataBase: url,
    title: "Blog doesn't exist",
    description: "The blog you are looking for does not exist.",
    openGraph: {
      title: "Blog doesn't exist",
      description: "The blog you are looking for does not exist.",
      type: "website",
      url,
    },
    twitter: {
      card: "summary",
      title: "Blog doesn't exist",
      description: "The blog you are looking for does not exist.",
    },
  };

  if (!post) return defaultMetadata;

  const ogUrl = new URL(`${env.NEXT_PUBLIC_APP_URL}/api/og`);
  ogUrl.searchParams.set("title", post.title);

  return {
    metadataBase: url,
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          alt: post.title,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
};

/**
 * Generate static parameters for the post.
 *
 * @returns {Promise<Props["params"][]>} The parameters for the post.
 */
// eslint-disable-next-line @typescript-eslint/require-await
const generateStaticParams = async (): Promise<Props["params"][]> =>
  allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));

/**
 * The post page component.
 *
 * @param {Props} props - The properties for the post.
 */
const PostPage = async ({ params }: Props) => {
  const post = await getPostFromParams(params);

  if (!post) return notFound();

  const authors = post.authors.map((author) =>
    allAuthors.find((a) => a.title === author?.replace(/\r$/, ""))
  );

  return <Post post={post} authors={authors} />;
};

export { generateMetadata, generateStaticParams };
export default PostPage;
