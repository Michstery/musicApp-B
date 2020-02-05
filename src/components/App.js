import React from "react";
import Songs from "./songs/Songs";
import LandingPage from "./landingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import Playlist from "./Playlist/Playlist";
import Products from "./products/Products";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/songs" exact component={Songs} />
        <Route path="/playlist" exact component={Playlist} />
        <Route path="/product" exact component={Products} />
      </BrowserRouter>
    </div>
  );
};

export default App;
