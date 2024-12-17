import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface HamburgerMenuProps {
  toggleMenu: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}
const HamburgerMenu: FC<HamburgerMenuProps> = ({
  toggleMenu,
  isOpen,
  children,
}) => {
  return (
    <>
      <button onClick={toggleMenu} className="sm:hidden p-2 text-2xl">
        <GiHamburgerMenu />
      </button>

      {isOpen && (
        <div className="sm:hidden absolute top-11 left-0 p-5 gap-5 bg-green-300">
          {children}
        </div>
      )}

      <div className="hidden sm:flex p-5 gap-5 bg-green-300">{children}</div>
    </>
  );
};

export default HamburgerMenu;
