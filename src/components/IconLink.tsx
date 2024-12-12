import Link from "next/link";
import React, { FC } from "react";

interface IconLinkProps {
  href: string;
  size: { width: number; height: number };
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const IconLink: FC<IconLinkProps> = ({ href, size, Icon }) => {
  return (
    <Link
      className=" text-green-300 hover:text-green-500 transition-colors duration-300"
      href={href}
    >
      <Icon className={`w-${size.width} h-${size.height}`} />
    </Link>
  );
};

export default IconLink;
