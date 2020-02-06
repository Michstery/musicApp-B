import React from "react";
import Songs from "./songs/Songs";
import LandingPage from "./landingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import Playlist from "./Playlist/Playlist";
import Products from "./products/Products";
import Nav from "./nav/Nav";
import SideNav from "./sideNav/SideNav";
import BackDrop from "./backDrop/BackDrop";

class App extends React.Component {
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
        <BrowserRouter>
          <Nav drawerClickHandler={this.drawerToggleClickHandler} />
          <SideNav show={this.state.sideDrawerOpen} />
          {/* style={{ marginTop: "60px" }}  */}
          {backdrop}
          <Route path="/" exact component={LandingPage} />
          <Route path="/songs" exact component={Songs} />
          <Route path="/playlist" exact component={Playlist} />
          <Route path="/product" exact component={Products} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
