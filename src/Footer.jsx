import React from "react";

const Footer = () => {
  return (
    <footer>
      <div style={{borderTopStyle: "solid", borderColor: "white", borderWidth: 3}}  className="ui basic center aligned segment">
        <p id="footer">Made with React {React.version}</p>
      </div>
    </footer>
  );
};

export default Footer;
