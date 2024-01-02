import getViewsCount from "~/actions/get-views-count";
import ViewCounter from "./view-counter";

interface Props {
  slug: string;
  cachedIncrement?: (slug: string) => Promise<void>;
}

const Views = async ({ slug, cachedIncrement }: Props) => {
  const views = await getViewsCount();
  await cachedIncrement?.(slug);
  return <ViewCounter allViews={views} slug={slug} />;
};

export default Views;
