"use client";

import HighlightedSpan from "~/components/ui/highlighted-span";
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
        Hi, I'm <HighlightedSpan>Bharath Lakshman Kumar</HighlightedSpan>
      </m.h1>

      <m.p
        className="mt-6 text-center text-xl leading-relaxed text-neutral-300 md:text-2xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        custom={1}
      >
        <HighlightedSpan>Founding Engineer</HighlightedSpan> at Callensights (now acquired). I build impactful B2B products, blending technical craft with a drive to deliver real results. I turn ideas into reality and help teams move fast.
      </m.p>
    </m.div>
  </LazyMotionProvider>
);

export default PersonalIntroduction;

