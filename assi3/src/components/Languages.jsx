import React from "react";

import {
  Container,
  Typography,
  Chip
} from "@mui/material";

import resumeData from "../data/resumeData";

function About() {
  return (
    <section
      id="Languages"
      className="lang-known"
    >

      <Container>

        <Typography
          variant="h4"
          className="section-title"
        >
          Languages 
        </Typography>
{/* 
        <Typography
          variant="body1"
          className="about-text"
        >
          {resumeData.languages}


        </Typography> */}
        
        <div className="languages-container">
  {resumeData.languages.map((language, index) => (
    <Chip
      key={index}
      label={language}
      className="language-chip"
    />
  ))}
</div>
      </Container>

    </section>
  );
}

export default About;