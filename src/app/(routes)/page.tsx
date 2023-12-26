import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/constants";
import { motion } from "framer-motion";

const HighlightedText = ({ children }: React.PropsWithChildren) => (
  <span className="bg-highlight text-shadow-lg bg-clip-text text-2xl font-semibold italic text-neutral-950 md:text-4xl dark:text-neutral-200">
    {" "}
    {children}
    {"  "}
  </span>
);

const AboutPage = () => {
  // bg-gradient-to-b from-neutral-50/50 via-neutral-100/75 to-neutral-500/90
  return (
    <div className="flex h-full items-center justify-center">
      <motion.p
        className="text-center text-2xl text-neutral-600 md:text-4xl dark:text-neutral-400"
        variants={FADE_DOWN_ANIMATION_VARIANTS}>
        Hey, I&apos;m <HighlightedText>Bharath Lakshman Kumar</HighlightedText> (you can call me Bharath,
        though). I&apos;m a <HighlightedText>UI Engineer</HighlightedText> and a student based in Hyderabad,
        India. I&apos;m working as a software engineering <HighlightedText>intern</HighlightedText> at
        Vertocity, where I contribute to building a variety of AI/Ed <HighlightedText>SaaS</HighlightedText>
        products. My background is in UI development, but I love everything related to
        <HighlightedText>Server-Side Engineering</HighlightedText>
      </motion.p>
    </div>
  );
};

export default AboutPage;
