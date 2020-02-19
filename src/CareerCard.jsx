import React from "react";
import styles from '../dist/mystyle.module.css';

const Careercard = ({ career }) => {
    return (
      <>
        <div class="ui card" style={{borderRadius: "roundest", border: "solid 5px white", marginBottom: 20}}>
          <div class="image">
            <img src={career.image} />
          </div>
          <div style={{backgroundColor: "black"}} class="content">
            <h3 style={{color: "white"}} class="ui header">{project.name}</h3>
            <div class="extra content"><a className={styles.linkcard} href={career.web}>{career.web}</a></div>
            <div style={{color: "white"}} class="description">{career.description}</div>
          </div>
        </div>
      </>
    );
  };
  
  export default Careercard;