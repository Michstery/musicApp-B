import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return (
      <div
        style={{ color: "#ffffff", display: "flex", justifyContent: "center" }}
      >
        <h5>Select A Mood</h5>
      </div>
    );
  }
  return (
    <div>
      <div className="card">
        <div
          className="card header"
          style={{
            textAlign: "center",
            display: "inline-block",
            fontSize: "1.7em",
            fontWeight: "bold",
            padding: " 5px 15px",
            background: "#293042",
            color: "#ffffff"
          }}
        >
          <h3>SONG MOOD : {mySelectedSong.mood}</h3>
        </div>
        <div style={{ background: "silver" }} className="card body p-2">
          <ul>
            <div className="row">
              <div className="col-md-6">{mySelectedSong.song1}</div>
              <div className="col-md-6">
                <iframe
                  width="100%"
                  height="120"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={mySelectedSong.song1Url}
                ></iframe>
              </div>
              <hr />
            </div>
            <div className="row">
              <div className="col-md-6">{mySelectedSong.song2}</div>
              <div className="col-md-6">
                <iframe
                  width="100%"
                  height="120"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={mySelectedSong.song2Url}
                ></iframe>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">{mySelectedSong.song3}</div>
              <div className="col-md-6">
                <iframe
                  width="100%"
                  height="120"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={mySelectedSong.song3Url}
                ></iframe>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">{mySelectedSong.song4}</div>
              <div className="col-md-6">
                <iframe
                  width="100%"
                  height="120"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={mySelectedSong.song4Url}
                ></iframe>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">{mySelectedSong.song5}</div>
              <div className="col-md-6">
                {" "}
                <iframe
                  width="100%"
                  height="120"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={mySelectedSong.song5Url}
                ></iframe>
              </div>
            </div>
          </ul>
        </div>
        <div
          className="card footer"
          style={{
            textAlign: "center",
            display: "inline-block",
            fontSize: "1.7em",
            fontWeight: "bold",
            padding: " 5px 15px",
            background: "#293042",
            color: "#ffffff"
          }}
        >
          <h3>SONG MOOD : {mySelectedSong.mood}</h3>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
