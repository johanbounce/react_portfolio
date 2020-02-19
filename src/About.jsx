import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
    return (
        <div className="ui main container">
    <div class="ui stackable two column grid">
      <div class="column">
        <UndrawDesignerLife />
      </div>
      <div class="column">
        <h1 style={{color: "white"}} className="ui header">About Me</h1>
        <p style={{color: "white"}}> 
          I was born one morning when the sun didn't shine, I picked upp my shovel and I walked to the mine.
        </p>
      </div>
    </div>
  </div>
      );
  };

export default About;