import { cn } from "~/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CustomCard = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "group relative aspect-square size-full h-full rounded-lg border border-neutral-700 bg-neutral-800",
        className
      )}
      {...rest}>
      {children}
      <Link
        href="#"
        className="absolute bottom-2.5 right-2.5 hidden size-10 items-center justify-center rounded-full border border-neutral-600 bg-neutral-950 transition-all group-hover:flex hover:scale-110 hover:bg-neutral-700">
        <ArrowRight />
      </Link>
    </div>
  );
};

export default CustomCard;
