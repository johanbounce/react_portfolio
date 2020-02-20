import React from "react";
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  return (
    <nav style={{ borderBottom: '3px solid black', fontFamily: "Futura"}} className="ui fixed menu">
      <div className="ui container">
        <Link id="header" className="black header item" to="/">
        <i style={{color: "white"}} class="big black home icon"></i>
        </Link>
        <div className="right menu">
          <NavLink
            id="about-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bolder"}}
            to="/about">
            About Me
          </NavLink>
          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bolder" }}
            to="/projects">
              Projects
          </NavLink>
          <NavLink
          id="career-tab"
          className="ui item"
          activeStyle={{fontWeight: "bolder"}}
          to="/career">
            Career
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header