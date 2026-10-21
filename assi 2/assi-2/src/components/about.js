import React, { Component } from "react";
import styles from "./about.module.css";
import chakra from "../photos/ashoka.png";

class About extends Component {
  render() {
    return (
      <div className={styles.box}>
    <img src={chakra} alt="Ashoka Chakra" className={styles.chakra} />
    </div>
      
    );
  }
}

export default About;