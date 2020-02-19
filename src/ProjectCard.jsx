import React from "react";

const ProjectCard = ({ project }) => {
    return (
      <>
        <div class="ui card" style={{marginBottom: 20}}>
          <div class="image">
            <img src={project.image} />
          </div>
          <div style={{backgroundColor: "black"}} class="content">
            <h3 style={{color: "white"}} class="ui header">{project.name}</h3>
            <div style={{color: "white"}} class="extra content">{project.web}</div>
            <div style={{color: "white"}} class="description">{project.description}</div>
          </div>
        </div>
      </>
    );
  };
  
  export default ProjectCard;