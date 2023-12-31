import { memo } from "react";

const Pill = ({ ...props }: React.PropsWithChildren) => (
  <li
    className="inline-flex flex-row gap-1 rounded-lg border border-neutral-700 bg-neutral-800/80 px-2 py-1 text-sm text-neutral-50"
    {...props}
  />
);

Pill.displayName = "Pill";

export default memo(Pill);
