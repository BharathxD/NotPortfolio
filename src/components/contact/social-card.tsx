"use client";

import BlurImage from "~/components/projects/blur-image";
import { biography } from "~/lib/config";
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SocialCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  platform: "LinkedIn" | "Github";
  label: string;
  description: string;
  alignImage: "left" | "right";
}

const SocialCard = ({ platform, alignImage, label, description }: SocialCardProps) => {
  const profile = biography.socialProfiles.find((profile) => profile.platform === platform);
  if (!profile) {
    console.error(`Profile for ${platform} not found`);
    return null;
  }

  return (
    <motion.a
      href={profile.url}
      target="_blank"
      referrerPolicy="no-referrer"
      initial="hidden"
      whileInView="show"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      className={cn(
        "group relative flex h-80 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-950 p-2 shadow-lg",
        alignImage === "left" ? "md:flex-row-reverse" : "md:flex-row"
      )}>
      <div className="relative z-10 flex size-full flex-col items-center justify-center gap-2 px-10">
        <div className="inline-flex items-center justify-center bg-gradient-to-tr from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          <span className="text-4xl">{label}</span>
          <ArrowUpRight size={40} className="text-neutral-400" />
        </div>
        <p className="text-neutral-400">{description}</p>
      </div>
      <div className="absolute inset-0 z-0 bg-card opacity-0 transition-all duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-40" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-40" />
      <div className="size-full px-10" />
      <BlurImage
        src={profile.imageUrl}
        alt={platform}
        className={cn(
          "absolute inset-x-0 bottom-[-40%] z-10 h-[352px] w-[600px] rounded-xl object-contain transition-all duration-700 group-hover:grayscale-0 md:inset-x-[auto] md:bottom-[-20%] md:grayscale",
          alignImage === "left" ? "md:left-[-20%]" : "md:right-[-20%]"
        )}
        loading="eager"
        height={352}
        width={600}
      />
    </motion.a>
  );
};

export default SocialCard;
