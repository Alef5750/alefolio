import React from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data";

const ProjectsPage = () => {
  return (
    <>
      <h1 className="font-extrabold text-5xl mb-6">My Projects</h1>
      <section className="grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </section>
    </>
  );
};

export default ProjectsPage;
