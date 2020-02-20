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
        <h1 style={{color: "white"}} id="hello">Hello Worldz</h1>
      </div>
    </div>
  );
};

export default Hello;