import { IProject } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="border-4 border-green-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      <Image
        width={200}
        height={100}
        alt="put-project-id-here"
        src={project.imgSrc}
      />
    </article>
  );
};

export default ProjectCard;
