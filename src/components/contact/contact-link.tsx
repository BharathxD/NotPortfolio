import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { type ComponentProps } from "react";

const DOTS_COUNT = 156;
const DEFAULT_DOT_COLORS: [string, string] = [
  "bg-neutral-200 group-hover:bg-neutral-400",
  "bg-neutral-400 group-hover:bg-neutral-200",
];

interface Props extends ComponentProps<typeof motion.a> {
  dotsColor?: [string, string];
  icon: LucideIcon;
  label: string;
  bottomText: React.ReactNode;
}

const ContactLink = ({
  label,
  href,
  icon: Icon,
  className,
  bottomText,
  dotsColor = DEFAULT_DOT_COLORS,
}: Props) => (
  <motion.a
    href={href}
    target="_blank"
    referrerPolicy="no-referrer"
    initial="hidden"
    whileInView="show"
    variants={FADE_DOWN_ANIMATION_VARIANTS}
    className="group relative flex size-full h-40 w-full flex-row gap-2 overflow-hidden rounded-xl border border-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-950">
    <div className="absolute top-0 z-20 h-px w-full bg-glare opacity-30" />
    <div className="absolute bottom-0 z-20 h-px w-full bg-glare opacity-30" />
    <div className="absolute inset-0 z-0 bg-card transition-all duration-500 group-hover:opacity-50 md:rotate-180 md:opacity-0" />
    <div className="relative z-10 flex size-full flex-col items-center justify-center gap-1 md:items-end">
      <h5 className="flex items-center justify-end bg-gradient-to-tr from-neutral-200 to-neutral-400 bg-clip-text text-2xl font-medium text-transparent">
        <span>{label}</span>
        <ArrowUpRight size={25} className="text-neutral-400" />
      </h5>
      <p className={cn("text-center text-sm text-neutral-400", className)}>
        {bottomText} <Icon className="inline-block  text-neutral-400" size={10} />
      </p>
    </div>
    <div className="hidden size-full md:block" />
    <div className="absolute bottom-5 right-4 top-[1.125rem] hidden h-full overflow-hidden md:block">
      <ul className="grid w-fit grid-cols-12 gap-2">
        {Array.from({ length: DOTS_COUNT }).map((_, index) => (
          <li
            key={index}
            className={cn(
              "h-0.5 w-0.5 rounded-full bg-clip-content transition-colors duration-500",
              index % 2 ? dotsColor[0] : dotsColor[1]
            )}
          />
        ))}
      </ul>
    </div>
  </motion.a>
);

export default ContactLink;
