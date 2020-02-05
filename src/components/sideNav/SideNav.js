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
            <Link to="/"> Products </Link>
          </li>
          <li>
            <Link to="/Songs"> songs </Link>
          </li>
          <li>
            <Link to="/"> Products </Link>
          </li>
          <li>
            <Link to="/"> Products </Link>
          </li>
          <li>
            <Link to="/"> Products </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
