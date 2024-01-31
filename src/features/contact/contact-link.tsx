"use client";

import LazyMotionProvider from "~/components/ui/lazy-motion-provider";
import { DEFAULT_DOT_COLORS, DOTS_COUNT, FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { cn } from "~/lib/utils";
import type { ClassValue } from "clsx";
import { m } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<typeof m.a> {
  dotsColor?: [ClassValue, ClassValue];
  icon: LucideIcon;
  title: string;
  subtitle: React.ReactNode;
}

const ContactLink = ({
  title,
  href,
  icon: Icon,
  className,
  subtitle,
  dotsColor = DEFAULT_DOT_COLORS,
}: Props) => (
  <LazyMotionProvider>
    <m.a
      href={href}
      target="_blank"
      initial="hidden"
      whileInView="show"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      className="group relative flex size-full h-40 w-full flex-row gap-2 overflow-hidden rounded-xl border border-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="absolute top-0 z-20 h-px w-full bg-glare opacity-30" />
      <div className="absolute bottom-0 z-20 h-px w-full bg-glare opacity-30" />
      <div className="absolute inset-0 z-0 bg-card transition-all duration-500 group-hover:opacity-50 md:rotate-180 md:opacity-0" />
      <div className="relative z-10 flex size-full flex-col items-center justify-center gap-1 md:items-end">
        <h5 className="flex items-center justify-end text-2xl font-medium text-neutral-300">
          <span>{title}</span>
          <ArrowUpRight size={30} className="text-neutral-300" />
        </h5>
        <p className={cn("inline-block text-center text-sm text-neutral-400", className)}>
          <span>{subtitle}</span> <Icon className="-mt-px inline-block text-neutral-400" size={10} />
        </p>
      </div>
      <div className="hidden size-full md:block" />
      <div className="absolute bottom-5 right-4 top-[1.125rem] hidden h-full overflow-hidden md:block">
        <ul className="grid w-fit grid-cols-12 gap-2">
          {Array.from({ length: DOTS_COUNT }).map((_, index) => (
            <li
              key={index}
              className={cn(
                "size-0.5 rounded-full bg-clip-content transition-colors duration-500",
                dotsColor[index % 2]
              )}
            />
          ))}
        </ul>
      </div>
    </m.a>
  </LazyMotionProvider>
);

export default ContactLink;
