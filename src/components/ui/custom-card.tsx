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
        "relative rounded-3xl border border-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-950 p-2 shadow-lg",
        className
      )}
      {...rest}>
      <div className="absolute inset-x-0 -top-px bottom-[auto] z-20 h-px bg-glare opacity-80" />
      <div className="absolute inset-x-0 top-2 z-20 h-px bg-glare opacity-80" />
      <div className="relative aspect-square size-full rounded-xl border">{children}</div>
      <Link
        href="#"
        className="absolute bottom-5 right-5 hidden size-10 items-center justify-center rounded-full border border-neutral-600 bg-neutral-950 transition-all fade-in group-hover:flex hover:scale-110 hover:bg-neutral-700">
        <ArrowRight />
      </Link>
    </div>
  );
};

export default CustomCard;
