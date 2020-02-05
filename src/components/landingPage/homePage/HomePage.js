import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../nav/Nav";
import SideNav from "../../sideNav/SideNav";
import BackDrop from "../../backDrop/BackDrop";

import "./homepage.css";
import { template } from "@babel/core";

class HomePage extends React.Component {
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
      <div style={{ height: "100%" }}>
        <Nav drawerClickHandler={this.drawerToggleClickHandler} />
        <SideNav
          style={{ marginTop: "60px" }}
          show={this.state.sideDrawerOpen}
        />
        {/* hero section */}
        <div className="first-section">
          <section style={{ marginTop: "60px" }}>
            {backdrop}
            <div className="first-div">
              <h1>
                We make Your Music <br />
                Dreams Come True
              </h1>
              <br />
              <p>
                Listen To Top Chart Songs
                <br />
                that fits your Mood.
                <br />
                No Worries
                <br />
                Just Sit Back Relax
                <br />
                and enjoy the Music
              </p>
              <Link to="/songs" style={{ color: "#fff" }}>
                <button className="get-involvedButton btn-outline-">
                  Listen Now
                </button>
              </Link>
            </div>
          </section>
        </div>
        {/* hero section ends here */}

        {/* banner section */}
        <section
          style={{
            paddingTop: "80px",
            minHeight: "80vh",
            background: "#14161f"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div style={{ padding: "70px 10px" }}>
                  <h1
                    style={{
                      fontSize: "33px",
                      fontWeight: "800",
                      color: "#ffffff",
                      padding: "20px 0"
                    }}
                  >
                    Music That Fits Your Mood
                  </h1>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "#00ffff",
                      lineHeight: "2"
                    }}
                  >
                    Listen to tracks and tons of exclusive interviews and <br />
                    videos, MUSIXX is here to bring you closer <br />
                    to the songs that fits your Mood
                  </p>
                </div>
              </div>
              <div className="blocked col-md-7">
                <div style={{ padding: "70px 10px" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(350px, 1fr))",
                          margin: "0"
                        }}
                        className="container"
                      >
                        <div
                          style={{
                            width: "250px",
                            height: "250px",
                            margin: "0 auto",
                            boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                          }}
                          className="card"
                        >
                          <div className="face face1">
                            <div className="content">
                              <img
                                width="250x"
                                height="250px"
                                src="https://images.pexels.com/photos/838702/pexels-photo-838702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              />
                            </div>
                          </div>
                          <div className="face face2">
                            <h2>Rap</h2>
                          </div>
                        </div>
                        <img src="" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(350px, 1fr))",
                          margin: "-34px"
                        }}
                        className="container"
                      >
                        <div
                          style={{
                            width: "250px",
                            height: "250px",
                            margin: "0 auto",
                            boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                          }}
                          className="card"
                        >
                          <div className="face face1">
                            <div className="content">
                              <img
                                width="248x"
                                height="248px"
                                src="https://images.pexels.com/photos/759815/pexels-photo-759815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              />
                            </div>
                          </div>
                          <div className="face face2">
                            <h2>Hip-hop</h2>
                          </div>
                        </div>
                        <img src="" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(350px, 1fr))",
                          margin: "0 auto"
                        }}
                        className="container"
                      >
                        <div
                          style={{
                            width: "250px",
                            height: "250px",
                            margin: "0 19px",
                            boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                          }}
                          className="card"
                        >
                          <div className="face face1">
                            <div className="content">
                              <img
                                width="248x"
                                height="248px"
                                src="https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              />
                            </div>
                          </div>
                          <div className="face face2">
                            <h2>Blues</h2>
                          </div>
                        </div>
                        <img src="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner section ends here */}

        {/* section 3 */}
        <section
          style={{
            paddingTop: "80px",
            minHeight: "80vh",
            background: "#14161f"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="blocked col-md-6">
                <img
                  style={{ margin: "-177px 0 9px -100px" }}
                  src="http://pngimg.com/uploads/rock_music/rock_music_PNG32.png"
                  width=""
                  height=""
                />
              </div>
              <div className="col-md-6">
                <div style={{ padding: "70px 10px" }}>
                  <h1
                    style={{
                      fontSize: "38px",
                      fontWeight: "800",
                      color: "#ffffff",
                      padding: "20px 0",
                      // fontFamily: " 'Sigmar One', cursive ",
                      fontFamily: " 'Roboto', sans-serif "
                    }}
                  >
                    Classic Mood Playlist
                  </h1>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#00ffff",
                      lineHeight: "2"
                    }}
                  >
                    Stream good Music curated by the artists you love.
                    <br /> Also, check out our original playlists
                    <br /> hand-picked by our team of experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 3 ends here*/}

        {/* section 4 */}
        <section
          style={{
            // paddingTop: "40px",
            minHeight: "50vh",
            background: "#293042",
            marginBottom: "0px"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1
                  style={{
                    fontSize: "38px",
                    fontWeight: "800",
                    color: "#ffffff",
                    padding: "60px 0 20px",
                    // fontFamily: " 'Sigmar One', cursive ",
                    fontFamily: " 'Roboto', sans-serif ",
                    textAlign: "center"
                  }}
                >
                  Classic Mood Playlist
                </h1>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "550",
                    color: "#ffffff",
                    lineHeight: "2",
                    textAlign: "center"
                  }}
                >
                  Stream good Music curated by the artists you love.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section 4 ends here */}
      </div>
    );
  }
}
export default HomePage;
