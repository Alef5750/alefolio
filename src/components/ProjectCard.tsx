import Image from "next/image";
import React, { FC } from "react";

const ProjectCard: FC = () => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      <Image alt="put-project-id-here" src="" />
    </article>
  );
};

export default ProjectCard;
