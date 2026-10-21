import React from "react";

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

const Programs = () => {
  const programs = [
    {
      title: "B.Tech in Computer Science & Engineering",
      description:
        "An undergraduate program focused on programming, algorithms, software development, computer systems and emerging technologies.",
      duration: "4 Years",
      icon: SchoolOutlinedIcon,
    },
    {
      title: "M.Tech in Computer Science & Engineering",
      description:
        "A postgraduate program focused on advanced computer science concepts, specialization, research and emerging technologies.",
      duration: "2 Years",
      icon: MenuBookOutlinedIcon,
    },
  ];

  return (
    <Box
      component="section"
      className="programs-section"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">

        {/* SECTION HEADING */}

        <Box
          sx={{
            textAlign: "center",
            mb: 5,
          }}
        >
          <Typography
            component="span"
            sx={{
              color: "var(--secondary, #c9a227)",
              fontFamily: "inherit",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Academic Programs
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: "var(--primary, #071b3a)",
              fontFamily: "inherit",
              fontSize: {
                xs: "1.8rem",
                md: "2.3rem",
              },
              fontWeight: 700,
              mt: 1,
            }}
          >
            Programs Offered
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              mt: 1.5,
              color: "var(--text-light, #666)",
              fontFamily: "inherit",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Our department offers undergraduate and postgraduate
            programs designed to develop strong technical and
            professional skills.
          </Typography>
        </Box>


        {/* PROGRAM CARDS */}

        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <Grid
                item
                xs={12}
                md={5}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  elevation={0}
                  className="program-card"
                  sx={{
                    width: "100%",
                    maxWidth: 480,
                    minHeight: 300,

                    p: { xs: 3, md: 3.5 },

                    display: "flex",
                    flexDirection: "column",

                    borderRadius: 2,
                    border: "1px solid rgba(7, 27, 58, 0.10)",

                    backgroundColor: "#fff",

                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 14px 32px rgba(7, 27, 58, 0.10)",
                    },
                  }}
                >

                  {/* ICON */}

                  <Box
                    sx={{
                      width: 55,
                      height: 55,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      borderRadius: 1.5,

                      backgroundColor:
                        "rgba(7, 27, 58, 0.06)",

                      color:
                        "var(--primary, #071b3a)",

                      mb: 2.5,
                    }}
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.7}
                    />
                  </Box>


                  {/* TITLE */}

                  <Typography
                    component="h3"
                    sx={{
                      color:
                        "var(--primary, #071b3a)",

                      fontFamily: "inherit",

                      fontSize: {
                        xs: "1.1rem",
                        md: "1.2rem",
                      },

                      fontWeight: 700,
                      lineHeight: 1.4,

                      mb: 1.5,
                    }}
                  >
                    {program.title}
                  </Typography>


                  {/* DESCRIPTION */}

                  <Typography
                    sx={{
                      color:
                        "var(--text-light, #666)",

                      fontFamily: "inherit",

                      fontSize: "0.9rem",
                      lineHeight: 1.7,

                      flexGrow: 1,
                    }}
                  >
                    {program.description}
                  </Typography>


                  <Divider
                    sx={{
                      my: 2.5,
                    }}
                  />


                  {/* BOTTOM */}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#888",
                          fontFamily: "inherit",
                          fontSize: "0.7rem",
                          textTransform: "uppercase",
                        }}
                      >
                        Duration
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            "var(--primary, #071b3a)",
                          fontFamily: "inherit",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          mt: 0.3,
                        }}
                      >
                        {program.duration}
                      </Typography>
                    </Box>

                    <Button
                      variant="text"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color:
                          "var(--primary, #071b3a)",

                        fontFamily: "inherit",
                        fontWeight: 700,
                        textTransform: "none",

                        "&:hover": {
                          backgroundColor: "transparent",
                          color:
                            "var(--secondary, #c9a227)",
                        },
                      }}
                    >
                      Details
                    </Button>
                  </Box>

                </Paper>
              </Grid>
            );
          })}
        </Grid>

      </Container>
    </Box>
  );
};

export default Programs;