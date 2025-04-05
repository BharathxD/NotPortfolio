"use client";

import ImageWithLoader from "~/components/ui/image-with-loader";
import LazyMotionProvider from "~/components/ui/lazy-motion-provider";
import { biography } from "~/lib/config";
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { cn } from "~/lib/utils";
import type { SocialProfiles } from "~/types";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  label: string;
  description: string;
  alignImage: "left" | "right";
  platform: SocialProfiles["platform"];
}

const SocialCard = ({ platform, alignImage, label, description }: Props) => {
  const profile = biography.socialProfiles.find((profile) => profile.platform === platform);

  return (
    <LazyMotionProvider>
      <m.a
        href={profile!.url}
        target="_blank"
        initial="hidden"
        whileInView="show"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className={cn(
          "group relative flex h-80 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-950 p-2 shadow-lg",
          alignImage === "left" ? "md:flex-row-reverse" : "md:flex-row"
        )}>
        <div className="relative z-10 flex size-full flex-col items-center justify-center gap-2 px-10">
          <h5 className="flex items-center justify-end text-2xl font-medium text-neutral-300">
            <span className="text-4xl">{label}</span>
            <ArrowUpRight size={40} className="text-neutral-300" />
          </h5>
          <p className="text-center text-neutral-400">{description}</p>
        </div>
        <div className="absolute inset-0 z-0 bg-card opacity-0 transition-all duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-40" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-40" />
        <div className="size-full px-10" />
        <ImageWithLoader
          src={profile!.imageUrl}
          alt={platform}
          className={cn(
            "absolute inset-x-0 bottom-[-40%] top-[50%] z-10 h-fit object-contain transition-all duration-700 group-hover:grayscale-0 data-[loading=true]:rounded-none md:inset-x-auto md:bottom-[-20%] md:top-auto md:h-[340px] md:w-[600px] md:grayscale data-[loading=true]:md:rounded-sm",
            alignImage === "left" ? "md:left-[-20%]" : "md:right-[-20%]"
          )}
          loading="eager"
          height={340}
          width={600}
          priority
        />
      </m.a>
    </LazyMotionProvider>
  );
};

export default SocialCard;
