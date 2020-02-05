import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song, index) => {
      return (
        <div className="col-md-4 pr-2 pb-2 pt-3">
          <div
            onClick={() => this.props.selectSong(song)}
            className="card"
            style={{
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            {/* <div style={{}} className="card-header">
              
            </div> */}
            <div
              style={{
                padding: "1.0rem",
                display: "flex",
                backgroundImage: `url( ${song.bg} )`,
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
              }}
              className="card-body"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(45deg, #ccff00, #09afff) ",
                  opacity: ".3",
                  position: "absolute"
                }}
                className="overlay"
              ></div>
              <button
                style={{
                  margin: "22px",
                  color: "#000",
                  background: "#293042",
                  color: "#ffffff",
                  top: "50%",
                  left: "50%",
                  zIndex: "1"
                }}
                type="button"
                key={index}
                className="btn btn-outline get-involvedButton mx-auto"
                onClick={() => this.props.selectSong(song)}
                id={song.mood}
              >
                {song.mood}
              </button>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="card-footer"
            >
              {" "}
              {song.mood}{" "}
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <button
            id="btnGiveCommand"
            className="btn-lg col-md-12"
            style={{
              width: "100%",
              color: "#ffffff",
              background: "#293042"
            }}
          >
            Give Command !!!
          </button>
          <br />
          <br />
          <span id="message"> </span>
          <br />
          <br />
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
