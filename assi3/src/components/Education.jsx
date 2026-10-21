import React from "react";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip
} from "@mui/material";

import resumeData from "../data/resumeData";

function Education() {
  return (
    <section
      id="education"
      className="resume-section"
    >
      <Container>

        <Typography
          variant="h4"
          className="section-title"
        >
          Education
        </Typography>

        <div className="education-container">

          {/* Schooling */}
          <Card className="education-card">
            <CardContent>

              <Typography
                variant="h5"
                className="education-degree"
              >
                Schooling
              </Typography>

              <Typography
                variant="body1"
                className="education-college"
              >
                {resumeData.schooling.school}
              </Typography>

              <Chip
                label={resumeData.schooling.year}
                className="education-year"
              />

            </CardContent>
          </Card>


          {/* Higher Secondary Education */}
          <Card className="education-card">
            <CardContent>

              <Typography
                variant="h5"
                className="education-degree"
              >
                Higher Secondary Education
              </Typography>

              <Typography
                variant="body1"
                className="education-college"
              >
                {resumeData.hschooling.school}
              </Typography>

              <Chip
                label={resumeData.hschooling.year}
                className="education-year"
              />

            </CardContent>
          </Card>


          {/* B.Tech */}
          <Card className="education-card">
            <CardContent>

              <Typography
                variant="h5"
                className="education-degree"
              >
                {resumeData.education.degree}
              </Typography>

              <Typography
                variant="body1"
                className="education-college"
              >
                {resumeData.education.college}
              </Typography>

              <Chip
                label={resumeData.education.year}
                className="education-year"
              />

            </CardContent>
          </Card>

        </div>

      </Container>
    </section>
  );
}

export default Education;