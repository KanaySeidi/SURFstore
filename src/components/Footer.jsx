import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-background"></div>
      <div className="footer-list">
        <span>
          <Link to="/shop">Серфинг</Link>
        </span>
        <span>
          <Link to="/where">Где Серфить</Link>
        </span>
        <span>
          <Link to="/when">Когда Серфить</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
