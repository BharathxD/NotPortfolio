"use client";

import { domAnimation, LazyMotion } from "framer-motion";

const LazyMotionProvider = ({ children }: React.PropsWithChildren) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);

export default LazyMotionProvider;
