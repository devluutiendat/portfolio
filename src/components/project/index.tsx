import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="projects">
      <h3 className="text-3xl font-bold text-black dark:text-white ">
        My Projects
      </h3>
      <ProjectCard />
    </section>
  );
};

export default Project;
