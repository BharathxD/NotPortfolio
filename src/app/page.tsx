import { Shell } from "~/components/ui/shell";
import dynamic from "next/dynamic";

const PersonalIntroduction = dynamic(() => import("~/features/hero/personal-introduction"), { ssr: false });

const HeroPage = () => (
  <Shell>
    <PersonalIntroduction />
  </Shell>
);

export default HeroPage;
