import React from "react";

const ProjectCard = ({ project }) => {
    return (
      <>
        <div style={{height: 20 "white"}} class="ui card">
          <div class="image">
            <img src={project.image} />
          </div>
          <div class="content">
            <h3 class="ui header">{project.name}</h3>
            <div class="extra content">{project.web}</div>
            <div class="description">{project.description}</div>
          </div>
        </div>
      </>
    );
  };
  
  export default ProjectCard;