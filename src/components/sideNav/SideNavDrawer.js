import React from "react";
import "./sideNavDrawer.css";

const SideNavDrawer = props => {
  return (
    <div>
      <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    </div>
  );
};

export default SideNavDrawer;
