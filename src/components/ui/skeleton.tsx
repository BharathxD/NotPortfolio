import { cn } from "~/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = ({ className, ...rest }: Props) => (
  <div
    className={cn(
      "animate-skeleton rounded-sm bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 bg-[400%,100%]",
      className
    )}
    {...rest}
  />
);

export default Skeleton;
