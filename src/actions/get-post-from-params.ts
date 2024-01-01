import { allPosts, type Post } from "contentlayer/generated";

const getPostFromParams = async (params: { slug: string[] }): Promise<Post | null> => {
  const slug = params?.slug?.join("/");
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const post = await allPosts.find((post) => post.slugAsParams === slug);
  if (!post) return null;
  return post;
};

export default getPostFromParams;
