import React from "react";
import styles from '../dist/mystyle.module.css';

const CareerCard = ({ career }) => {
  return (
      <div class="ui special cards" style={{margin: 10}} >
  <div class="card">
    <div class="blurring dimmable image">
      <div class="ui dimmer">
        <div class="content">
          <div class="center">
            <div class="ui inverted button">{career.web}</div>
          </div>
        </div>
      </div>
      <img src={career.image}/>
    </div>
    <div class="content">
      <a style={{fontFamily: "futura"}} class="header">{career.name}</a>
      <div class="meta">
        <span class="date">{career.description}</span>
        <div style={{marginBottom: 5, wordWrap: "break-word",}} class="extra content"><a className={styles.linkcard} href={career.web}>{career.web}</a></div>
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="calendar alternate outline icon"></i>
        {career.date}
      </a>
    </div>
  </div>
  </div>
  );
};
  
  export default CareerCard;