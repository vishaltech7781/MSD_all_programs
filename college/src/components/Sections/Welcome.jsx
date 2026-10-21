import React from "react";

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Welcome = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 7 }}
          alignItems="center"
        >
          {/* ================= LEFT CONTENT ================= */}

          <Grid item xs={12} md={7}>
            <Box>
              <Typography
                component="span"
                sx={{
                  display: "block",
                  color: "secondary.main",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Welcome to the Department
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: "primary.main",
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.1rem",
                    md: "2.5rem",
                  },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                Computer Science & Engineering
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                The Department of Computer Science & Engineering is
                committed to providing quality education and creating
                an environment that encourages innovation, research and
                technological excellence.
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Our academic programs focus on developing strong
                fundamentals, practical skills and problem-solving
                abilities to prepare students for the rapidly evolving
                field of computer science.
              </Typography>

              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                sx={{
                  p: 0,
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: "0.95rem",

                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "secondary.main",
                  },

                  "& .MuiButton-endIcon": {
                    transition: "transform 0.25s ease",
                  },

                  "&:hover .MuiButton-endIcon": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                Learn More About Department
              </Button>
            </Box>
          </Grid>

          {/* ================= RIGHT HIGHLIGHT ================= */}

          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                position: "relative",
                p: { xs: 3, sm: 4, md: 4.5 },

                borderRadius: 2,

                border: "1px solid",
                borderColor: "divider",

                backgroundColor: "#fafafa",

                overflow: "hidden",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  backgroundColor: "secondary.main",
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  color: "primary.main",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Our Commitment
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                We strive to build a strong academic foundation while
                encouraging creativity, collaboration and research.
                Our goal is to develop skilled professionals who can
                contribute meaningfully to the technology industry and
                society.
              </Typography>

              {/* COMMITMENT FEATURES */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 2,
                }}
              >
                {/* Quality Education */}

                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    Quality Education
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.82rem",
                      mt: 0.5,
                    }}
                  >
                    Strong academic foundation
                  </Typography>
                </Box>

                {/* Innovation */}

                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    Innovation
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.82rem",
                      mt: 0.5,
                    }}
                  >
                    Research & technology
                  </Typography>
                </Box>

                {/* Industry Focus */}

                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    Industry Focus
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.82rem",
                      mt: 0.5,
                    }}
                  >
                    Practical skills
                  </Typography>
                </Box>

                {/* Student Growth */}

                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    Student Growth
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.82rem",
                      mt: 0.5,
                    }}
                  >
                    Overall development
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Welcome;