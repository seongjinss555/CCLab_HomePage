import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(true);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            CCLab.
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/introduction" className="nav-links">
                Introduction
              </Link>
            </li>
            <li className="nav-item">
              <li className="nav-links">Researchers</li>
              {dropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/professor" className="dropdown-link">
                      Professor
                    </Link>
                  </li>
                  <li>
                    <Link to="/researchers" className="dropdown-link">
                      Students
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link to="/achievements" className="nav-links">
                Achievements
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/comments" className="nav-links">
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
