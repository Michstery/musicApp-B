import React from "react";
import "./backDrop.css";

const BackDrop = props => {
  return <div className="backdrop" onClick={props.click} />;
};

export default BackDrop;
