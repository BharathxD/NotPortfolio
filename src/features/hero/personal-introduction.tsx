"use client";

import LazyMotionProvider from "~/components/ui/lazy-motion-provider";
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { m } from "framer-motion";

const PersonalIntroduction = () => (
  <LazyMotionProvider>
    <m.div
      className="mx-auto max-w-3xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <m.h1
        className="text-center text-2xl font-medium leading-relaxed text-neutral-300 md:text-4xl lg:text-5xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Bharath Lakshman Kumar
      </m.h1>
    </m.div>
  </LazyMotionProvider>
);

export default PersonalIntroduction;

