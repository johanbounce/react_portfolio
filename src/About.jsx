import React from "react";
import { Icon, Popup } from 'semantic-ui-react';

const About = () => {
    return (
      <div className="hero-image"
      style={{
      background: 'url("images/picwall.jpg")',
      backgroundSize: 'cover',
      height: '100vh',
      marginTop: '-1rem',
      display: 'flex',
      alignItems: 'center'
      }}>
        <div class="about-div">
          <img class="picofme" src="/images/picofme.jpg" alt=""/>
          <h1 style={{color: "white", marginLeft: 600, backgroundColor: "black", fontSize: 40, fontFamily: "Futura"}} >Erik Johan Bons</h1>
            <p style={{color: "white", marginLeft: 600, backgroundColor: "black", fontSize: 20, fontFamily: "Futura"}}><i class="child icon"></i> Age: 22.</p>
            <p style={{color: "white", marginLeft: 600, backgroundColor: "black", fontSize: 20, fontFamily: "Futura"}}><i class="globe icon"></i> City: Västerås.</p>
            <p style={{color: "white", marginLeft: 600, backgroundColor: "black", fontSize: 20, fontFamily: "Futura"}}><i class=" users icon"></i> Family: Yeah, I love them.</p>
            <p style={{color: "white", marginLeft: 600, backgroundColor: "black", fontSize: 20, fontFamily: "Futura"}}><i class=" briefcase icon"></i> Occupation: Entreprenuer.</p>
            <p style={{color: "white", marginLeft: 600, backgroundColor: "black", fontSize: 20, fontFamily: "Futura"}}><i class=" book icon"></i>Education: Student, CraftAcademy.</p>
        </div>
    
        
        </div>
      
      );
  };

export default About;