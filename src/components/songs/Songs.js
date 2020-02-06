import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import { Link } from "react-router-dom";
import Instruction from "../Instruction";

const Songs = () => {
  return (
    <div>
      <div
        style={{ background: "#222222", height: "100%" }}
        className="container-fluid"
      >
        <div style={{ padding: "30px" }}>
          <Link to="/" style={{ color: "#fff", paddingBottom: "30px" }}>
            <button
              style={{ backgroundColor: "#293042" }}
              className="btn btn-sm btn-outline-light"
            >
              Home
            </button>
          </Link>
          <div style={{ paddingTop: "20px" }} className="row">
            <div className="col-md-12"></div>
            <div className="col-md-6">
              <div style={{ padding: "4px" }} className="row">
                <SongList />
              </div>
            </div>
            <div className="col-md-6">
              <SongDetail />
            </div>
          </div>
        </div>
      </div>
      <Instruction />
    </div>
  );
};

export default Songs;
