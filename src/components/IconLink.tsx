import Link from "next/link";
import React, { FC } from "react";

interface IconLinkProps {
  href: string;
  size: { width: number; height: number };
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
}
const IconLink: FC<IconLinkProps> = ({ href, size, Icon, label }) => {
  return (
    <Link
      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-gray-500 hover:shadow-2xl hover:shadow-green-300 text-green-300 hover:text-green-500 flex justify-center items-center p-5 gap-5"
      href={href}
      target="_blank"
    >
      <Icon className={`w-${size.width} h-${size.height}`} />
      <span className="text-3xl">{label}</span>
    </Link>
  );
};

export default IconLink;
