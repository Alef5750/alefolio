"use client";
import { FC, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-50 p-2 flex justify-around bg-green-300 text-3xl font-thin">
      <HamburgerMenu toggleMenu={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <NavLinks />
      </HamburgerMenu>
    </header>
  );
};

export default Header;
