import React from "react";
import { Popup } from "semantic-ui-react";

const Hello = () => {
  return ( 
    <div className="hero-image"
    style={{
      background: 'url("images/michelangelo.jpg")',
      backgroundSize: 'cover',
      height: '100vh',
      marginTop: '-1rem',
      display: 'flex',
      alignItems: 'center'
      }}>
      <div style={{marginLeft: 800, marginBottom: 200}} >
        <Popup
        trigger={
        <h1 style={{marginLeft: 50, fontSize: 70}} class="rainbow-text" >BONS, JOHAN</h1>
        }
          content="Who I am"
          size='huge'
          inverted
        ></Popup>
        <Popup
        trigger={
        <h2 style={{marginLeft: 50, color: "white"}} >ENTREPRENEUR</h2>
        }
        content="What I am"
        size="huge"
        position="left center"
        inverted
        ></Popup>
        <Popup
        trigger={
        <h3 style={{marginLeft: 50, color: "white"}} >FULL STACK DEVELOPER</h3>
        }
        content="What I want to become"
        size="huge"
        position='bottom left'
        inverted
        ></Popup>
        </div>
      </div>
  );
};

export default Hello;