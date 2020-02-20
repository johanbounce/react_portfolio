import React from "react";

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
      <div className="ui main container">
        <h1 style={{color: "white"}} id="hello">BONS, JOHAN</h1>
        <h2 style={{color: "white"}} id="hello">ENTREPRENUER</h2>
        <h3 style={{color: "white"}} id="hello">FULL STACK DEVELOPER</h3>
        </div>
      </div>
  );
};

export default Hello;