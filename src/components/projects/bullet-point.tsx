import { Dot } from "lucide-react";
import { memo } from "react";

const BulletPoint = ({ ...props }: React.PropsWithChildren) => (
  <li>
    <p className="inline-flex items-start justify-start gap-2 text-lg">
      <span>
        <Dot />
      </span>
      <span {...props} />
    </p>
  </li>
);

BulletPoint.displayName = "BulletPoint";

export default memo(BulletPoint);
