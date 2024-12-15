import TechItem from "@/components/technologies/TechItem";
import { technologies } from "@/data";
import { ITech } from "@/types";
import React, { FC } from "react";

const TechnologiesPage: FC = () => {
  return (
    <>
      <h1 className="font-extrabold text-5xl mb-6 text-center">Technologies</h1>
      <div className="grid grid-cols-3 gap-x-5 gap-y-10">
        {technologies.map((tech: ITech) => (
          <TechItem key={tech.id} tech={tech} />
        ))}
      </div>
    </>
  );
};

export default TechnologiesPage;
