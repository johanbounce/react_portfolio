import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { UndrawDashboard } from "react-undraw-illustrations";

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

      <div className="hero-image"
    style={{
      background: 'url("./images/gallery.jpg")',
      backgroundSize: 'cover',
      height: '100%',
      marginTop: '-1rem',
      display: 'flex',
      alignItems: 'center'
      }}>
      <div style={{margin: 120, fontFamily: "Futura",}} className="ui main container">
              <div className="ui stackable two column grid">
                <div className="column">
                  <h1 style={{color: "white"}} className="ui header">My Projects</h1>
                  <p>
                    These are the websites that I have owned and operated in my carreer this far. Hopefully, one day I will 
                  </p>
                </div>
              </div>
              <div className="ui stackable two column grid">{projectsList}</div>
            </div>
</div>
        
    );
  }
}

export default Projects;