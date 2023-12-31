"use client";

import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { motion } from "framer-motion";
import HighlightedSpan from "../ui/highlighted-span";

const Hero = () => (
  <motion.section
    className="flex h-[90dvh] items-center justify-center p-5 md:p-10"
    initial="hidden"
    whileInView="show">
    <motion.p
      className="text-center text-2xl text-neutral-400 md:text-4xl"
      variants={FADE_DOWN_ANIMATION_VARIANTS}>
      Hey, I&apos;m <HighlightedSpan>Bharath Lakshman Kumar</HighlightedSpan> (you can call me Bharath,
      though). I&apos;m a <HighlightedSpan>UI Engineer</HighlightedSpan> and a student based in Hyderabad,
      India. I&apos;m working as a software engineering <HighlightedSpan>intern</HighlightedSpan> at
      Vertocity, where I contribute to building a variety of AI/Ed <HighlightedSpan>SaaS</HighlightedSpan>
      products. My background is in UI development, but I love everything related to
      <HighlightedSpan>Server-Side Engineering</HighlightedSpan>
    </motion.p>
  </motion.section>
);

export default Hero;
