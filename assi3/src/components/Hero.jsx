import React from "react";

import {
  Container,
  Typography,
  Button,
  Box
} from "@mui/material";

import resumeData from "../data/resumeData";

function Hero() {
  return (
    <section className="hero-section">

      <Container>

        <Typography
          variant="h2"
          className="hero-name"
        >
          {resumeData.name}
        </Typography>
{/* 
        <Typography
          variant="h5"
          className="hero-role"
        >
          {resumeData.role}
        </Typography> */}
{/* 
        <Typography
          variant="body1"
          className="hero-description"
        >
          {resumeData.about}
        </Typography> */}


        {/* BUTTONS */}
        <Box className="hero-buttons">

          <Button
            className="hero-button"
            variant="contained"
            href="#contact"
          >
            Contact Me
          </Button>

          <Button
            className="hero-button"
            variant="contained"
            href={resumeData.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>

          <Button
            className="hero-button"
            variant="contained"
            href={resumeData.github.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>

        </Box>

      </Container>

    </section>
  );
}

export default Hero;