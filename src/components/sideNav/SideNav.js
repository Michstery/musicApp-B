import React from "react";
import "./sideNav.css";
import { Link } from "react-router-dom";

const SideNav = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }
  return (
    <div>
      <nav className={drawerClasses}>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Songs"> Mood </Link>
          </li>
          <li>
            <Link to="/playlist"> Songs </Link>
          </li>
          <li>
            <Link to="/product"> Products </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
