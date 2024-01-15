import { allPosts, type Post } from "content-layer/generated";

interface Options {
  slug: string[];
}

/**
 * This function retrieves a post based on the provided slug parameters.
 *
 * @param {Object} params An object containing slug parameters.
 * @param {string[]} params.slug An array of strings representing the slug parameters.
 * @returns {Promise<Post|null>} Returns a Promise that resolves to a Post object if found, or null if not.
 *
 * @example
 *
 * getPostFromParams({ slug: ['post', 'first-post'] })
 * .then(post => console.log(post))
 * .catch(err => console.error(err));
 *
 */
const getPostFromParams = async (options: Options): Promise<Post | null> => {
  const slug = options?.slug?.join("/");
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const post = await allPosts.find((post) => post.slugAsParams === slug);
  if (!post) return null;
  return post;
};

export default getPostFromParams;
