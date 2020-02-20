import React from "react";
import styles from '../dist/mystyle.module.css';

const ProjectCard = ({ project }) => {
    return (
        <div class="ui card" style={{borderRadius: "roundest", border: "solid 5px white", marginBottom: 20}}>
          <div class="image">
            <img src={project.image} />
          </div>
          <div style={{backgroundColor: "black"}} class="content">
            <h3 style={{color: "white", fontFamily: "Futura"}} class="ui header">{project.name}</h3>
            <div style={{color: "white", marginBottom: 5}} class="extra content"><i class="keyboard icon"></i>{project.techniques}</div>
            <div style={{marginBottom: 5, wordWrap: "break-word"}} class="extra content"><a className={styles.linkcard} href={project.web}>{project.web}</a></div>
            <div style={{color: "white"}} class="description">{project.description}</div>
          </div>
        </div>
    );
  };
  
  export default ProjectCard;