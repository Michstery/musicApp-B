import React from "react";
import HomePage from "./homePage/HomePage";
import Footer from "../footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <HomePage />
      <Footer style={{ paddingTop: "0px" }} />
    </div>
  );
};
export default LandingPage;
