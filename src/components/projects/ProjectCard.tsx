import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="rounded-3xl shadow-lg bg-gray-500 shadow-green-300 p-4">
      <Link href={project.link} target="_blank" className="flex gap-5">
        <Image
          className="rounded-3xl"
          width={200}
          height={100}
          alt={`Screenshot: ${project.title}`}
          src={project.imgSrc}
        />
        <div>
          <h1 className="font-bold text-2xl">{project.title}</h1>
          <p>{project.blurb}</p>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
