import getViewsCount from "~/actions/get-views-count";
import env from "~/env.mjs";
import ViewCounter from "./view-counter";

interface Props {
  slug: string;
  cachedIncrement?: (slug: string) => Promise<void>;
}

const Views = async ({ slug, cachedIncrement }: Props) => {
  const views = await getViewsCount();
  if (env.NODE_ENV !== "development") await cachedIncrement?.(slug);
  return <ViewCounter allViews={views} slug={slug} />;
};

export default Views;
