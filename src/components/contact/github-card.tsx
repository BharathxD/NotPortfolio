"use client";

import { biography } from "~/lib/config";
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ImageWithLoader from "../projects/ImageWithLoader";

const GithubCard = () => {
  return (
    <motion.a
      href={biography.socialProfiles.find((profile) => profile.platform === "Github")!.url}
      target="_blank"
      referrerPolicy="no-referrer"
      initial="hidden"
      whileInView="show"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      className="group relative flex h-80 w-full flex-col-reverse items-center justify-center overflow-hidden rounded-xl border border-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-950 p-2 shadow-lg md:flex-row">
      <div className="size-full px-10" />
      <ImageWithLoader
        src="/github.webp"
        alt="Github Contribution Page"
        className="absolute inset-x-0 bottom-[-20%] z-10 h-[352px] w-[600px] rounded-xl object-contain grayscale transition-all duration-700 group-hover:grayscale-0 data-[loading=true]:h-[344px] data-[loading=true]:w-[592px] md:inset-x-[auto] md:left-[-20%]"
        // height={352}
        // width={600}
        height={2138}
        width={3644}
      />
      <div className="relative z-10 flex size-full flex-col items-center justify-center gap-2 px-10">
        <div className="inline-flex items-center justify-center">
          <h4 className="text-4xl">Github</h4>
          <ArrowUpRight size={40} />
        </div>
        <p className="text-center">300+ days streak with over 3000 commits</p>
      </div>
      <div className="absolute inset-0 z-0 bg-card opacity-0 transition-all duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-40" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-40" />
    </motion.a>
  );
};

export default GithubCard;
