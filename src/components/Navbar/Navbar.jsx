import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
     <nav>
      <div className="nav-container">
        <a href="/" className="nav-logo" onClick={closeMobileMenu}>
          <h4>Landscapes</h4>
          <FontAwesomeIcon icon={"gem"}></FontAwesomeIcon>
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? "xmark" : "bars"}></FontAwesomeIcon>
        </div>
        <ul className={click ? "nav-list active" : "nav-list"}>
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="Projects" className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="Slide" className="nav-links">Products</a>
          </li>
          <li className="nav-item">
            <a href="Email" className="nav-links">Contact Now</a>
          </li>
        </ul>
      </div>
     </nav>
  );
};

export default Navbar;
