import Link from "next/link";
import React, { FC } from "react";

interface NavLinksProps {
  handleClick: () => void;
}
const NavLinks: FC<NavLinksProps> = ({ handleClick }) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-start sm:flex-row">
      <Link onClick={handleClick} className="hover:text-gray-500" href="/">
        Home
      </Link>
      <Link onClick={handleClick} className="hover:text-gray-500" href="/about">
        About
      </Link>
      <Link
        onClick={handleClick}
        className="hover:text-gray-500"
        href="/contact"
      >
        Contact Me
      </Link>
      <Link
        onClick={handleClick}
        className="hover:text-gray-500"
        href="/projects"
      >
        My Projects
      </Link>
      <Link
        onClick={handleClick}
        className="hover:text-gray-500"
        href="/technologies"
      >
        Technologies
      </Link>
    </div>
  );
};

export default NavLinks;
