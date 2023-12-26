import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CustomCard = () => {
  return (
    <div className="group relative aspect-square size-full max-h-80 rounded-lg border border-neutral-700 bg-neutral-800">
      <Link
        href="#"
        className="absolute bottom-2.5 right-2.5 hidden size-10 items-center justify-center rounded-full border border-neutral-600 bg-neutral-950 transition-all group-hover:flex hover:scale-110 hover:bg-neutral-700">
        <ArrowRight />
      </Link>
    </div>
  );
};

export default CustomCard;
