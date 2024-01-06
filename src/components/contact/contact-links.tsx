import { biography } from "~/lib/config";
import { CheckCircle, MessageCircle } from "lucide-react";
import ContactLink from "./contact-link";

const ContactLinks = () => (
  <div className="flex flex-row gap-2">
    <ContactLink
      href={`mailto:${biography.contactEmail}`}
      icon={MessageCircle}
      label="Mail me"
      description={
        <>
          Or reach me out <br /> via LinkedIn
        </>
      }
      className="mr-2"
    />
    <ContactLink
      href={biography.resumeLink}
      icon={CheckCircle}
      label="Resume"
      description={
        <>
          Scanned with <br /> virus total
        </>
      }
      className="mr-5"
    />
  </div>
);

export default ContactLinks;
