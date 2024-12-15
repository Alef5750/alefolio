import React, { FC } from "react";

import IconLink from "../IconLink";
import { ITech } from "@/types";

interface TechItemProps {
  tech: ITech;
}
const TechItem: FC<TechItemProps> = ({ tech }) => {
  return (
    <article>
      <IconLink
        href="/projects"
        Icon={tech.Icon}
        size={{ width: "50", height: "50" }}
        label={tech.name}
      />
    </article>
  );
};

export default TechItem;
