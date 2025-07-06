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
        className="text-center text-4xl font-bold leading-tight text-neutral-100 md:text-6xl lg:text-7xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Hey, {`I'm`} <HighlightedSpan>Bharath Lakshman Kumar</HighlightedSpan>
      </m.h1>

      <m.p
        className="mt-8 text-center text-lg leading-relaxed text-neutral-300 md:text-2xl md:leading-[1.7] lg:text-3xl lg:leading-[1.6]"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        custom={1}
      >
        (But you can just call me <i>Bharath</i>). As a <HighlightedSpan>Founding Engineer</HighlightedSpan>{" "}
        at Callensights (Now Acquired), I blend vision with execution, building the future of B2B software. My
        approach combines <HighlightedSpan>technical craft</HighlightedSpan> with a relentless{" "}
        <HighlightedSpan>drive</HighlightedSpan> to deliver. I don&apos;t just solve problems—I{" "}
        <HighlightedSpan>make things happen</HighlightedSpan>. This mindset turned our vision into reality
        with our first major U.S. client.
      </m.p>
    </m.div>
  </LazyMotionProvider>
);

export default PersonalIntroduction;

