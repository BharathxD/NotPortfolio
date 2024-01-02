import { kv } from "@vercel/kv";
import { unstable_noStore as noStore } from "next/cache";

const increment = async (slug: string) => {
  noStore();
  await kv.hincrby("views", slug, 1);
};

export default increment;
