import React from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data";

const ProjectsPage = () => {
  return (
    <>
      <h1 className="text-4xl">My Projects</h1>
      <section className="grid grid-cols-2">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </section>
    </>
  );
};

export default ProjectsPage;
