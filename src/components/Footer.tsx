import React, { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-300 row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <p>&copy; {currentYear} Alef Lewitt. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
