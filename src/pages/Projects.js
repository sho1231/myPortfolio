import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  React.useEffect(() => {
    document.title="Projects"
  },[])
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} info={project.info} image={project.image} front={project.githubFront} back={project.githubBack} dep={project.deployedLink} username={project.username} pass={project.pass} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
