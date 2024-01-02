import { type Count } from "~/actions/get-views-count";

interface Props {
  slug: string;
  allViews: Count | null;
  trackView?: boolean;
}

const ViewCounter = ({ slug, allViews }: Props) => {
  const number = allViews?.[slug] || 0;
  return (
    <p className="gap-2 text-sm text-muted-foreground">
      <span>{number.toLocaleString()} Views</span>
    </p>
  );
};

export default ViewCounter;
