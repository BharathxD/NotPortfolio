import { kv } from "@vercel/kv";
import { unstable_noStore as noStore } from "next/cache";

export type Count = Record<string, number>;

const getViewsCount = async (): Promise<Count | null> => {
  noStore();
  const data = await kv.hgetall("views");

  return data as Count | null;
};

export default getViewsCount;
