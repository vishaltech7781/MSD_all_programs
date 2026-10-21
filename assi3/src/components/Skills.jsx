import React from "react";

import {
  Container,
  Typography,
  Chip
} from "@mui/material";

import resumeData from "../data/resumeData";

function Skills() {
  return (
    <section
      id="skills"
      className="resume-section"
    >

      <Container>

        <Typography
          variant="h4"
          className="section-title"
        >
          Skills
        </Typography>

        <div className="skills-container">

          {resumeData.skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              className="skill-chip"
            />
          ))}

        </div>

      </Container>

    </section>
  );
}

export default Skills;