import React, { Component } from "react";

// Components
import Header from "../Components/Header";
import Body from "../Components/Body";
import Footer from "../Components/Footer";

// Styles
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
