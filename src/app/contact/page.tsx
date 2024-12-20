import React, { FC } from "react";
import { FaGithub } from "react-icons/fa"; // Example icon from react-icons
import { SiMinutemailer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDev } from "react-icons/fa";

import IconLink from "@/components/IconLink";

const ContactPage: FC = () => {
  return (
    <>
      <h1 className="font-extrabold text-5xl mb-6 text-center">Contact Me</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        <IconLink
          href="https://wa.me/+972549419450"
          Icon={IoLogoWhatsapp}
          size={{ width: "100", height: "100" }}
          label="Reach out on WhatsApp!"
          isExternal
        />

        <IconLink
          href="mailto:alewitt@gmail.com"
          Icon={SiMinutemailer}
          size={{ width: "100", height: "100" }}
          label="Send me an email!"
          isExternal
        />

        <IconLink
          href="https://github.com/Alef5750"
          Icon={FaGithub}
          size={{ width: "100", height: "100" }}
          label="Check out my GitHub!"
          isExternal
        />

        <IconLink
          href="https://dev.to/aleflewitt"
          Icon={FaDev}
          size={{ width: "100", height: "100" }}
          label="Peruse my DEV articles!"
          isExternal
        />
      </div>
    </>
  );
};

export default ContactPage;
