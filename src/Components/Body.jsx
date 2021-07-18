import React, { Component } from "react";

// Components
import Content from "./Content";
import Sidebar from "./Sidebar";

// Styles
import "./Body.scss";

export default class Body extends Component {
  render() {
    return (
      <main className="main">
        <Content />
        <Sidebar />
      </main>
    );
  }
}
