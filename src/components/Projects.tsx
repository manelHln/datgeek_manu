import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="text-primary-text flex w-full justify-center">
      <div className="w-full max-w-[1400px] grid grid-cols-2 gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
