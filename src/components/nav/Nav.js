import React from "react";
import SideNavDrawer from "../sideNav/SideNavDrawer";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = props => {
  return (
    <div>
      <header className="navbar fixed-top">
        <nav className="navbar-navigation ">
          <div className="navbar-toggle-button">
            <SideNavDrawer click={props.drawerClickHandler} />
          </div>
          <div className="navbar-logo">
            <a href="/">
              Mu<b style={{ color: "#00ffff" }}>ZiX</b>X
            </a>
          </div>
          <div className="spacer" />
          <div className="navbar-navigation-items">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/playlist"> Songs </Link>
              </li>
              <li>
                <Link to="/Songs"> Mood </Link>
              </li>
              <li>
                <Link to="/product"> Blog </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
