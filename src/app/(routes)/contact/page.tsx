import ContactLinks from "~/components/contact/contact-links";
import SocialCards from "~/components/contact/social-cards";
import { Shell } from "~/components/ui/shell";

const ContactPage = () => (
  <Shell variant="ordered">
    <ContactLinks />
    <SocialCards />
  </Shell>
);

export default ContactPage;
