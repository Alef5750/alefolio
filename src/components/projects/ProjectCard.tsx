import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="border-4 border-green-300 grid grid-cols-1 gap-6 p-4">
      <Link href={project.link} target="_blank">
        <Image
          width={200}
          height={100}
          alt="put-project-id-here"
          src={project.imgSrc}
        />
        <h1>{project.title}</h1>
        <p>{project.blurb}</p>
      </Link>
    </article>
  );
};

export default ProjectCard;
