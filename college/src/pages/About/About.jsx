import React from "react";

import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      {/* ================= PAGE BANNER ================= */}

      <Box
        component="section"
        sx={{
          backgroundColor: "primary.main",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "secondary.light",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            About Department
          </Typography>

          <Typography
            component="h1"
            sx={{
              color: "#ffffff",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3.2rem",
              },
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 800,
            }}
          >
            Computer Science & Engineering
          </Typography>
        </Container>
      </Box>

      {/* ================= CONTENT ================= */}

      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 9 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 850,
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "primary.main",
                fontSize: {
                  xs: "1.7rem",
                  md: "2.2rem",
                },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              About the Department
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "text.secondary",
                fontSize: {
                  xs: "0.95rem",
                  md: "1rem",
                },
                lineHeight: 1.9,
                mb: 2.5,
              }}
            >
              The Department of Computer Science and Engineering
              is committed to providing quality education,
              practical knowledge and opportunities for research
              and innovation.
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "text.secondary",
                fontSize: {
                  xs: "0.95rem",
                  md: "1rem",
                },
                lineHeight: 1.9,
                mb: 0,
              }}
            >
              The department focuses on developing technically
              skilled professionals who can contribute to the
              rapidly changing world of technology.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;