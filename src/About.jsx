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
        <div>
        <Popup
          trigger={<Icon style={{color: "white"}} size='huge' circular name='gem' />}
          content="hej"
          size='huge'
          offset='0, 50px'
          position='top center'
        />
        </div>
      </div>
      );
  };

export default About;