import React from "react";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack
} from "@mui/material";

import resumeData from "../data/resumeData";

function Projects() {
  return (
    <section
      id="projects"
      className="resume-section"
    >

      <Container>

        <Typography
          variant="h4"
          className="section-title"
        >
          Projects
        </Typography>

        <div className="projects-container">

          {resumeData.projects.map(
            (project, index) => (

              <Card
                key={index}
                className="project-card"
              >

                <CardContent>

                  <Typography
                    variant="h5"
                    className="project-title"
                    gutterBottom
                  >
                    {project.title}
                  </Typography>
                    <div className="project-description">

                      {project.description.map((point, pointIndex) => (
                        <Typography
                          key={pointIndex}
                          variant="body2"
                          className="project-point"
                        >
                          • {point}
                        </Typography>
                      ))}

                    </div>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                  >

                    {project.technologies.map(
                      (tech, techIndex) => (

                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          className="project-chip"
                        />

                      )
                    )}

                  </Stack>

                </CardContent>

              </Card>

            )
          )}

        </div>

      </Container>

    </section>
  );
}

export default Projects;