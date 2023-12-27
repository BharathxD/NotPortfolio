"use client";

import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GithubCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      className="group relative flex h-80 w-full flex-col-reverse items-center justify-center overflow-hidden rounded-xl border border-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-950 p-2 shadow-lg md:flex-row">
      <div className="size-full" />
      <div className="absolute inset-x-0 bottom-[-20%] z-10 md:inset-x-[auto] md:left-[-20%]">
        <Image
          src="/github.webp"
          alt="Github Contribution Page"
          className="z-10 object-contain grayscale transition-all duration-700 group-hover:grayscale-0"
          height={600}
          width={600}
        />
      </div>
      <Link
        href="#"
        target="_blank"
        referrerPolicy="no-referrer"
        className="relative z-10 flex size-full flex-col items-center justify-center gap-2 px-10">
        <div className="inline-flex items-center justify-center">
          <h4 className="text-4xl">Github</h4>
          <ArrowUpRight size={40} />
        </div>
        <p className="text-center">300+ days streak with over 3000 commits</p>
      </Link>
      <div className="absolute inset-0 z-0 bg-card opacity-0 transition-all duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 z-20 h-px bg-glare opacity-40" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-glare opacity-40" />
    </motion.div>
  );
};

export default GithubCard;
