"use client";

import { biography } from "~/lib/config";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Fragment } from "react";
import ContactLink from "./contact-link";

const ContactLinks = () => (
  <div className="flex flex-row gap-2">
    <ContactLink
      href={`mailto:${biography.contactEmail}`}
      icon={MessageCircle}
      label="Mail me"
      bottomText={
        <Fragment>
          Or reach me out <br /> via LinkedIn
        </Fragment>
      }
      className="mr-2"
    />
    <ContactLink
      href={biography.resumeLink}
      icon={CheckCircle}
      label="Resume"
      bottomText={
        <Fragment>
          Scanned with <br /> virus total
        </Fragment>
      }
      className="mr-5"
    />
  </div>
);

export default ContactLinks;
