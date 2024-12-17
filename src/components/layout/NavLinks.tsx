import Link from "next/link";
import React, { FC } from "react";

const NavLinks: FC = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-start sm:flex-row">
      <Link className="hover:text-gray-500" href="/">
        Home
      </Link>
      <Link className="hover:text-gray-500" href="/about">
        About
      </Link>
      <Link className="hover:text-gray-500" href="/contact">
        Contact Me
      </Link>
      <Link className="hover:text-gray-500" href="/projects">
        My Projects
      </Link>
      <Link className="hover:text-gray-500" href="/technologies">
        Technologies
      </Link>
    </div>
  );
};

export default NavLinks;
