"use server";

import { kv } from "@vercel/kv";
import { biography } from "~/lib/config";
import type { Count, PostWithViewCount, Project } from "~/types";
import { allPosts, type Post } from "content-layer/generated";
import { unstable_noStore as noStore } from "next/cache";

/**
 * Increments the view count for a given slug.
 *
 * This function is responsible for incrementing the view count of a given slug. It first ensures that the response
 * will not be stored in cache by calling the `noStore` function from the `next/cache` package. Then, it increments
 * the view count in the `views` hash of the `kv` store by 1 for the given slug.
 *
 * @param {string} slug The slug for which to increment the view count.
 * @returns {Promise<number>} A promise that resolves with the new view count.
 *
 * @example
 *
 * increment('example-slug')
 *   .then(newCount => console.log(`New count: ${newCount}`))
 *   .catch(err => console.error(`Failed to increment count: ${err}`));
 *
 * @throws {Error} When the `kv.hincrby` operation fails.
 */
const increment = async (slug: string): Promise<number> => {
  noStore();
  return await kv.hincrby("views", slug, 1);
};

/**
 * This function gets the count of views for all pages from the Vercel KV store.
 * It uses the `hgetall` method of the `kv` object to get all hash keys and their corresponding values.
 * The function then returns this data as a `Count` object or `null` if no data is found.
 *
 * @returns {Promise<Count | null>} A promise that resolves to an object containing the count of views for all pages, or null if no data is found.
 */
const getViewsCount = async (): Promise<Count> => {
  noStore();
  return (await kv.hgetall("views")) ?? {};
};

/**
 * Find a project by its id
 * @param {string} projectId - The id of the project
 * @returns {Project} - The project if found, null otherwise
 */
const getProject = (projectId: string): Project | null =>
  biography.portfolioProjects.find((project) => project.id === projectId) ?? null;

interface GetPostFromParamsOptions {
  slug: string[];
}

/**
 * This function retrieves a post based on the provided slug parameters.
 *
 * @param {GetPostFromParamsOptions} options An object containing slug parameters.
 * @param {string[]} options.slug An array of strings representing the slug parameters.
 * @returns {Promise<Post|null>} Returns a Promise that resolves to a Post object if found, or null if not.
 *
 * @example
 *
 * getPostFromParams({ slug: ['post', 'first-post'] })
 * .then(post => console.log(post))
 * .catch(err => console.error(err));
 *
 */
const getPostFromParams = async (options: GetPostFromParamsOptions): Promise<Post | null> => {
  const slug = options?.slug?.join("/");
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const post = await allPosts.find((post) => post.slugAsParams === slug);
  if (!post) return null;
  return post;
};

/**
 * Fetches all posts with their respective views count.
 *F
 * @returns {Promise<PostWithViewCount>} An array of all posts with their views count.
 */
const getAllPostsWithViewCount = async (): Promise<PostWithViewCount[]> => {
  const views = await getViewsCount();

  return allPosts
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => ({
      ...post,
      views: views[post.slug] || 0,
    }));
};

export { increment, getViewsCount, getProject, getPostFromParams, getAllPostsWithViewCount };
