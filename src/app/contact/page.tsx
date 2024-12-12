import React from "react";
import { FaGithub } from "react-icons/fa"; // Example icon from react-icons
import { SiMinutemailer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDev } from "react-icons/fa";

import IconLink from "@/components/IconLink";

const ContactPage = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6">
      <IconLink
        href="https://wa.me/+972549419450"
        Icon={IoLogoWhatsapp}
        size={{ width: 40, height: 40 }}
        label="Reach out on WhatsApp!"
      />
      <IconLink
        href="mailto:alewitt@gmail.com"
        Icon={SiMinutemailer}
        size={{ width: 40, height: 40 }}
        label="Send me an email!"
      />
      <IconLink
        href="https://github.com/Alef5750"
        Icon={FaGithub}
        size={{ width: 40, height: 40 }}
        label="Check out my GitHub!"
      />
      <IconLink
        href="https://dev.to/aleflewitt"
        Icon={FaDev}
        size={{ width: 40, height: 40 }}
        label="Peruse my DEV articles!"
      />
    </div>
  );
};

export default ContactPage;
