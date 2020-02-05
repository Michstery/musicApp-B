import React from "react";
import { connect } from "react-redux";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import SideNav from "../sideNav/SideNav";
import BackDrop from "../backDrop/BackDrop";

class Playlist extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ background: "#4e575f" }}>
        <Nav />
        <SideNav
          style={{ marginTop: "60px" }}
          show={this.state.sideDrawerOpen}
        />
        {/* Playlist Songs */}
        <div className="container pt-3">
          {backdrop}
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
              <h3>SONGS </h3>
            </div>
            <div style={{ background: "silver" }} className="card body p-2">
              <ul>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song1}
                  </div>
                  <div className="col-md-8 ">
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song1Url}
                    ></iframe>
                  </div>
                  <hr />
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song2}
                  </div>
                  <div className="col-md-8">
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song2Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song3}
                  </div>
                  <div className="col-md-8">
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song3Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song4}
                  </div>
                  <div className="col-md-8">
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song4Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song5}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song5Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song5}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song5Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song6}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song6Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song7}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song7Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song8}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song8Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song9}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song9Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song10}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song10Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song11}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song11Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song12}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song12Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song13}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song13Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song14}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song14Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song15}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song15Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song16}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song16Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song17}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song17Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song18}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song18Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song19}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song19Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song20}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song20Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song21}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song21Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song22}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song22Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song23}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song23Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song24}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song24Url}
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="col-md-4 pt-5"
                  >
                    {this.props.playlist.song25}
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <iframe
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.playlist.song25Url}
                    ></iframe>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* Playlist Songs ends here */}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { playlist: state.playlist };
};

export default connect(mapStateToProps)(Playlist);
