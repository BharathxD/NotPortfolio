"use client";

import { biography } from "~/lib/config";
import { CheckCircle, MessageCircle } from "lucide-react";
import ContactLink from "./contact-link";

const ContactLinks = () => (
  <div className="flex flex-row gap-2">
    <ContactLink
      href={`mailto:${biography.contactEmail}`}
      icon={MessageCircle}
      title="Mail me"
      subtitle={
        <span>
          Or reach me out <br /> via LinkedIn
        </span>
      }
      className="mr-2"
    />
    <ContactLink
      href={biography.resumeLink}
      icon={CheckCircle}
      title="Resume"
      subtitle={
        <span>
          Scanned with <br /> virus total
        </span>
      }
      className="mr-5"
    />
  </div>
);

export default ContactLinks;
