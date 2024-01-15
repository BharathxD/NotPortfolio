import { kv } from "@vercel/kv";
import type { Count } from "~/types";
import { unstable_noStore as noStore } from "next/cache";

/**
 * This function gets the count of views for all pages from the Vercel KV store.
 * It uses the `hgetall` method of the `kv` object to get all hash keys and their corresponding values.
 * The function then returns this data as a `Count` object or `null` if no data is found.
 *
 * @returns {Promise<Count | null>} A promise that resolves to an object containing the count of views for all pages, or null if no data is found.
 */
const getViewsCount = async (): Promise<Count | null> => {
  noStore();
  return await kv.hgetall("views");
};

export default getViewsCount;
