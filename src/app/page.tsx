import { Shell } from "~/components/ui/shell";
import dynamic from "next/dynamic";

const PersonalIntroduction = dynamic(() => import("~/components/hero/personal-introduction"));

const HeroPage = () => (
  <Shell>
    <PersonalIntroduction />
  </Shell>
);

export default HeroPage;
