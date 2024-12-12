import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex justify-around">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact Me</Link>
      <Link href="/projects">My Projects</Link>
      <Link href="/skills">Technical Skills</Link>
    </header>
  );
};

export default Header;
