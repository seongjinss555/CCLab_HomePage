import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CCLab.
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/introduction"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Introduction
              </Link>
            </li>
            <li className="nav-item" onClick={() => setDropdown(!dropdown)}>
              <span className="nav-links">Researchers</span>
              {dropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/professor"
                      className="dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Professor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/researchers"
                      className="dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Students
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link
                to="/achievements"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Achievements
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/comments"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
