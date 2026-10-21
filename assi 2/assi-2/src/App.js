import React, { Component } from "react";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;