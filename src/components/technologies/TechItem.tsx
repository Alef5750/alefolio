import React, { FC } from "react";

import IconLink from "../IconLink";
import { ITech } from "@/types";

interface TechItemProps {
  tech: ITech;
}
const TechItem: FC<TechItemProps> = ({ tech }) => {
  return (
    <article className="ml-8 p-2 shadow-md bg-slate-600 shadow-white hover:translate-y-1">
      <IconLink
        href="#"
        Icon={tech.Icon}
        size={{ width: "50", height: "50" }}
        label={tech.name}
        color={tech.iconColor}
      />
    </article>
  );
};

export default TechItem;
