import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  state = {
    projects: []
  };
  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
        projectsList = projects.map(project => {
          return (
            <div id={'project-' + project.id} key={project.id}>
              <ProjectCard project={project} />
            </div>
          );
        });
      }

    return (
      <div className="ui main container">
          <h1 id="projects-header" className="ui header">My Projects</h1>
          <div className="ui stackable four column grid">{projectsList}</div>
      </div>
    );
  }
}

export default Projects;