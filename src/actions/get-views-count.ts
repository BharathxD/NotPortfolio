import { kv } from "@vercel/kv";
import { unstable_noStore as noStore } from "next/cache";

/**
 * @typedef {Object} Count
 * @property {number} [key] - The key is the name of the page, and the value is the number of views.
 */
type Count = Record<string, number>;

/**
 * This function gets the count of views for all pages from the Vercel KV store.
 * It uses the `hgetall` method of the `kv` object to get all hash keys and their corresponding values.
 * The function then returns this data as a `Count` object or `null` if no data is found.
 *
 * @async
 * @function getViewsCount
 * @returns {Promise<Count | null>} A promise that resolves to an object containing the count of views for all pages, or null if no data is found.
 */
const getViewsCount = async (): Promise<Count | null> => {
  noStore();
  const data: Count | null = await kv.hgetall("views");
  return data;
};

export type { Count };
export default getViewsCount;
