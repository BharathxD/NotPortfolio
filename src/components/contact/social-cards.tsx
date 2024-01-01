import { Fragment } from "react";
import SocialCard from "./social-card";

const SocialCards = () => (
  <Fragment>
    <SocialCard
      label="LinkedIn"
      description="10K Average Post Impressions"
      alignImage="right"
      platform="LinkedIn"
    />
    <SocialCard
      label="Github"
      description="300+ days streak with over 3000 commits"
      alignImage="left"
      platform="Github"
    />
  </Fragment>
);

export default SocialCards;