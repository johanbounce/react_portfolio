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
      <a class="header">{career.name}</a>
      <div class="meta">
        <span class="date">{career.description}</span>
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