import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa"; // Example icon from react-icons
import { SiMinutemailer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import IconLink from "@/components/IconLink";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center">
      <IconLink
        href="https://wa.me/+972549419450"
        Icon={IoLogoWhatsapp}
        size={{ width: 40, height: 40 }}
      />
      <IconLink
        href="mailto:alewitt@gmail.com"
        Icon={SiMinutemailer}
        size={{ width: 40, height: 40 }}
      />
      <IconLink
        href="https://github.com/Alef5750"
        Icon={FaGithub}
        size={{ width: 40, height: 40 }}
      />
    </div>
  );
};

export default ContactPage;
