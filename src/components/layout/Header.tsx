import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex justify-around bg-green-300 text-3xl font-thin">
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
      <Link className="hover:text-gray-500" href="/skills">
        Technical Skills
      </Link>
    </header>
  );
};

export default Header;
