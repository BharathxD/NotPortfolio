import { Shell } from "~/components/ui/shell";
import ContactLinks from "~/features/contact/contact-links";
import SocialCard from "~/features/contact/social-card";
import type { Metadata } from "next";

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
      description="400+ days streak with over 6500+ commits"
      alignImage="left"
      platform="Github"
    />
  </Shell>
);

export default ContactPage;
