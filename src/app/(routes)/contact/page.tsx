import ContactLinks from "~/components/contact/contact-links";
import SocialCard from "~/components/contact/social-card";
import { Shell } from "~/components/ui/shell";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with me through various platforms and stay in touch.",
};

const ContactPage = () => (
  <Shell variant="ordered">
    <ContactLinks />
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
  </Shell>
);

export default ContactPage;
