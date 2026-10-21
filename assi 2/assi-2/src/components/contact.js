import React, { Component } from "react";

class Contact extends Component {
  render() {

    const myStyle = {
      color: "white",
      backgroundColor: "green",
      padding: "10px",
      textAlign: "center",
      fontSize: "55px",
      fontWeight: "bold"
    };

    return (
      <div style={myStyle}>
        <h2>MATARAM</h2>
      </div>
    );
  }
}

export default Contact;