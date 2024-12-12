import Image from "next/image";
import React from "react";
import logoFull from "@/assets/images/logo-full.png";
const HomePage = () => {
  return (
    <div className="flex items-center gap-10">
      <Image
        src={logoFull}
        height={500}
        width={500}
        alt="logo-full"
        className="rounded-3xl"
      />
      <div className="text-3xl">
        <span className="text-5xl ">
          Atoms of Innovation: <br />
        </span>
        <span className="italic">
          Precision Engineering for Exceptional Web Experiences
        </span>
        <p>
          Hi! I'm Alef, a people-focused Web Developer based in Jerusalem,
          specializing in crafting problem-solving user-friendly Web Apps, and
          helping startups get from the runway, to flight!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
