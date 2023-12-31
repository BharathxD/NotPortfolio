import ContactLinks from "~/components/contact/contack-links";
import SocialCards from "~/components/contact/social-cards";

const ContactPage = () => (
  <div className="flex flex-col gap-2 p-4 md:p-10">
    <ContactLinks />
    <SocialCards />
  </div>
);

export default ContactPage;
