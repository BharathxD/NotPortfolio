import ContactLinks from "~/components/contact/contact-links";
import SocialCards from "~/components/contact/social-cards";
import { Shell } from "~/components/ui/shell";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with me through various platforms and stay in touch.",
};

const ContactPage = () => (
  <Shell variant="ordered">
    <ContactLinks />
    <SocialCards />
  </Shell>
);

export default ContactPage;
