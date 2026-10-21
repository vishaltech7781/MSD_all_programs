import React from "react";

import {
  Container,
  Typography
} from "@mui/material";

import resumeData from "../data/resumeData";

function About() {
  return (
    <section
      id="about"
      className="about-section"
    >

      <Container>

        <Typography
          variant="h4"
          className="section-title"
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          className="about-text"
        >
          {resumeData.about}
        </Typography>

      </Container>

    </section>
  );
}

export default About;