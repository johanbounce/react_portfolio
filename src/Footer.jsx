import React from "react";
import { Icon, Popup } from 'semantic-ui-react';

const Footer = () => {
  return (
    <footer>
      <div style={{borderTopStyle: "solid", borderColor: "white", borderWidth: 3}}  className="ui basic center aligned segment">
      <p>
        <a href="https://instagram.com/johanbounce/" target="_blank"><i style={{color: "white"}} class="large instagram link icon"/></a>
        <a href="https://se.linkedin.com/in/johan-bons-10b420153" target="_blank"><i style={{color: "white"}} class="large linkedin link icon"/></a>
        <a href="mailto:johan@waytogo.se" target="_blank"><i style={{color: "white"}} class="large mail link icon"/></a>
        <a href="https://waytogo.se/" target="_blank"><i style={{color: "white"}} class="large green heart link icon"/></a>
      </p>
      </div>
    </footer>
  );
};

export default Footer;
