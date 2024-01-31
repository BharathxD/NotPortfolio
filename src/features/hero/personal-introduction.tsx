"use client";

import HighlightedSpan from "~/components/ui/highlighted-span";
import LazyMotionProvider from "~/components/ui/lazy-motion-provider";
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { m } from "framer-motion";

const PersonalIntroduction = () => (
  <LazyMotionProvider>
    <m.h1
      className="text-center text-2xl text-neutral-400 md:text-4xl"
      initial="hidden"
      whileInView="show"
      variants={FADE_DOWN_ANIMATION_VARIANTS}>
      Hey, {`I'm`} <HighlightedSpan>Bharath Lakshman Kumar</HighlightedSpan> (you can call me Bharath,
      though). {`I'm`} a <HighlightedSpan>UI Engineer</HighlightedSpan> and a student based in Hyderabad,
      India. {`I'm`} working as a software engineering <HighlightedSpan>intern</HighlightedSpan> at Vertocity,
      where I contribute to building a variety of AI/Ed <HighlightedSpan>SaaS</HighlightedSpan>
      products. My background is in UI development, but I love everything related to
      <HighlightedSpan>Server-Side Engineering</HighlightedSpan>
    </m.h1>
  </LazyMotionProvider>
);

export default PersonalIntroduction;
