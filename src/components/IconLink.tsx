import Link from "next/link";
import React, { FC } from "react";

interface IconLinkProps {
  href: string;
  size: { width: string; height: string };
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  isExternal?: boolean;
  color?: string;
}
const IconLink: FC<IconLinkProps> = ({
  href,
  size,
  Icon,
  label,
  isExternal,
  color,
}) => {
  const contactStyles =
    "transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 bg-gray-500 hover:shadow-2xl hover:shadow-green-300 text-green-300 hover:text-green-500 flex justify-center items-center p-5 gap-5";
  const techStyles = "flex items-center";

  return (
    <Link
      className={isExternal ? contactStyles : techStyles}
      href={href}
      target={isExternal ? "_blank" : ""}
    >
      <Icon
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
        color={color}
      />
      <span className="text-3xl ml-2.5">{label}</span>
    </Link>
  );
};

export default IconLink;
