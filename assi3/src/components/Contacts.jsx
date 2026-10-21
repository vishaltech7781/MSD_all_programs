import React from "react";

import {
  Container,
  Typography,
  TextField,
  Button,
  Stack
} from "@mui/material";

import resumeData from "../data/resumeData";

function Contacts() {
  return (
    <section
      id="contact"
      className="resume-section contact-section"
    >

      <Container>

        <Typography
          variant="h4"
          className="section-title"
        >
          Contact Me
        </Typography>

        <div className="contact-container">

          <Typography className="contact-info">
            Email:{" "}
            <a
              href={`mailto:${resumeData.contact.email}`}
            >
              {resumeData.contact.email}
            </a>
          </Typography>

          <Typography className="contact-info">
            Phone:{" "}
            <a
              href={`tel:${resumeData.contact.phone}`}
            >
              {resumeData.contact.phone}
            </a>
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mb: 4 }}
          >

            <Button
              variant="outlined"
              href={resumeData.linkedin.link}
              target="_blank"
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              href={resumeData.github.link}
              target="_blank"
            >
              GitHub
            </Button>

          </Stack>

          <Stack spacing={2}>

            <TextField
              label="Your Name"
              fullWidth
            />

            <TextField
              label="Your Email"
              fullWidth
            />

            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
            />

            <Button
              variant="contained"
              size="large"
              className="contact-button"
            >
              Send Message
            </Button>

          </Stack>

        </div>

      </Container>

    </section>
  );
}

export default Contacts;