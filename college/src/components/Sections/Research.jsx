import React from "react";

import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stack,
  Divider,
} from "@mui/material";

import {
  ArrowForward,
  PsychologyOutlined,
  StorageOutlined,
  SecurityOutlined,
  CloudOutlined,
  CodeOutlined,
} from "@mui/icons-material";

const researchAreas = [
  {
    icon: <PsychologyOutlined />,
    title: "Artificial Intelligence",
    description:
      "Research in artificial intelligence, machine learning and intelligent systems.",
  },
  {
    icon: <StorageOutlined />,
    title: "Data Science & Big Data",
    description:
      "Advanced research in data analytics, data mining and big data technologies.",
  },
  {
    icon: <SecurityOutlined />,
    title: "Cyber Security",
    description:
      "Exploring secure systems, network security and modern cybersecurity techniques.",
  },
  {
    icon: <CloudOutlined />,
    title: "Cloud & Distributed Computing",
    description:
      "Research focused on cloud platforms, distributed systems and scalable computing.",
  },
  {
    icon: <CodeOutlined />,
    title: "Software Engineering",
    description:
      "Modern software development methodologies, testing and engineering practices.",
  },
];

const Research = () => {
  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: 6,
          md: 9,
        },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },
            gap: {
              xs: 3,
              md: 6,
            },
            mb: {
              xs: 5,
              md: 6,
            },
          }}
        >

          {/* LEFT HEADING */}

          <Box>
            <Typography
              component="span"
              sx={{
                display: "block",

                mb: 1.5,

                color: "secondary.main",

                fontFamily: "inherit",

                fontSize: "0.75rem",

                fontWeight: 700,

                letterSpacing: "0.14em",
              }}
            >
              RESEARCH & INNOVATION
            </Typography>


            <Typography
              component="h2"
              sx={{
                m: 0,

                color: "primary.main",

                fontFamily: "inherit",

                fontSize: {
                  xs: "2rem",
                  sm: "2.4rem",
                  md: "2.8rem",
                },

                fontWeight: 700,

                lineHeight: 1.15,
              }}
            >
              Driving Innovation
              <br />
              Through Research
            </Typography>
          </Box>


          {/* RIGHT INTRO */}

          <Box
            sx={{
              maxWidth: {
                xs: "100%",
                md: 470,
              },
            }}
          >

            <Typography
              component="p"
              sx={{
                m: 0,

                color: "text.secondary",

                fontFamily: "inherit",

                fontSize: "0.95rem",

                lineHeight: 1.8,
              }}
            >
              Our department encourages research,
              innovation and collaboration in emerging
              areas of computer science and technology.
            </Typography>


            <Button
              component="a"
              href="/research"
              endIcon={<ArrowForward />}
              sx={{
                mt: 2,

                px: 0,

                color: "primary.main",

                fontFamily: "inherit",

                fontSize: "0.88rem",

                fontWeight: 700,

                textTransform: "none",

                "& .MuiButton-endIcon": {
                  transition:
                    "transform 0.25s ease",
                },

                "&:hover": {
                  px: 0,

                  backgroundColor:
                    "transparent",

                  color: "secondary.main",

                  "& .MuiButton-endIcon": {
                    transform:
                      "translateX(4px)",
                  },
                },
              }}
            >
              Explore Research
            </Button>

          </Box>

        </Box>


        {/* =====================================================
            RESEARCH CONTENT
        ===================================================== */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            },

            gap: {
              xs: 3,
              md: 4,
            },

            alignItems: "stretch",
          }}
        >

          {/* =================================================
              IMAGE
          ================================================= */}

          <Paper
            elevation={0}
            sx={{
              position: "relative",

              minHeight: {
                xs: 360,
                sm: 430,
                md: 560,
              },

              overflow: "hidden",

              borderRadius: 2,

              border:
                "1px solid rgba(7, 27, 58, 0.10)",

              backgroundColor:
                "primary.main",
            }}
          >

            <Box
              component="img"
              src="/images/research.jpg"
              alt="Computer Science Research"
              sx={{
                position: "absolute",

                inset: 0,

                width: "100%",

                height: "100%",

                objectFit: "cover",

                display: "block",

                transition:
                  "transform 0.5s ease",

                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />


            {/* IMAGE DARK OVERLAY */}

            <Box
              sx={{
                position: "absolute",

                inset: 0,

                background:
                  "linear-gradient(180deg, rgba(7,27,58,0.05) 20%, rgba(7,27,58,0.88) 100%)",
              }}
            />


            {/* IMAGE CONTENT */}

            <Box
              sx={{
                position: "absolute",

                left: {
                  xs: 24,
                  md: 32,
                },

                right: {
                  xs: 24,
                  md: 32,
                },

                bottom: {
                  xs: 24,
                  md: 32,
                },

                color: "#ffffff",
              }}
            >

              <Typography
                component="span"
                sx={{
                  display: "inline-block",

                  mb: 1.2,

                  color: "secondary.main",

                  fontFamily: "inherit",

                  fontSize: "0.75rem",

                  fontWeight: 700,

                  letterSpacing: "0.12em",
                }}
              >
                CSE
              </Typography>


              <Typography
                component="h3"
                sx={{
                  m: 0,

                  color: "#ffffff",

                  fontFamily: "inherit",

                  fontSize: {
                    xs: "1.8rem",
                    md: "2.2rem",
                  },

                  fontWeight: 700,

                  lineHeight: 1.15,
                }}
              >
                Research &
                <br />
                Innovation
              </Typography>

            </Box>

          </Paper>


          {/* =================================================
              RESEARCH AREAS
          ================================================= */}

          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,

              border:
                "1px solid rgba(7, 27, 58, 0.10)",

              backgroundColor: "#ffffff",

              overflow: "hidden",
            }}
          >

            <Stack>
              {researchAreas.map((area, index) => (

                <React.Fragment key={index}>

                  <Button
                    component="a"
                    href="/research/areas"
                    sx={{
                      width: "100%",

                      display: "grid",

                      gridTemplateColumns:
                        "48px minmax(0, 1fr) 24px",

                      alignItems: "center",

                      gap: {
                        xs: 1.5,
                        md: 2,
                      },

                      p: {
                        xs: 2,
                        sm: 2.5,
                        md: 3,
                      },

                      textAlign: "left",

                      borderRadius: 0,

                      color: "inherit",

                      textTransform: "none",

                      justifyContent: "initial",

                      "&:hover": {
                        backgroundColor:
                          "rgba(7, 27, 58, 0.025)",

                        "& .research-icon": {
                          backgroundColor:
                            "primary.main",

                          color: "#ffffff",
                        },

                        "& .research-arrow": {
                          color:
                            "secondary.main",

                          transform:
                            "translateX(4px)",
                        },
                      },
                    }}
                  >

                    {/* ICON */}

                    <Box
                      className="research-icon"
                      sx={{
                        width: 46,
                        height: 46,

                        display: "flex",

                        alignItems: "center",

                        justifyContent:
                          "center",

                        borderRadius: 1.5,

                        color: "primary.main",

                        backgroundColor:
                          "rgba(7, 27, 58, 0.06)",

                        transition:
                          "all 0.25s ease",

                        "& svg": {
                          fontSize: 23,
                        },
                      }}
                    >
                      {area.icon}
                    </Box>


                    {/* CONTENT */}

                    <Box
                      sx={{
                        minWidth: 0,
                      }}
                    >

                      <Typography
                        component="h3"
                        sx={{
                          m: 0,

                          color:
                            "primary.main",

                          fontFamily: "inherit",

                          fontSize: {
                            xs: "0.95rem",
                            md: "1.05rem",
                          },

                          fontWeight: 700,

                          lineHeight: 1.4,
                        }}
                      >
                        {area.title}
                      </Typography>


                      <Typography
                        component="p"
                        sx={{
                          mt: 0.6,

                          mb: 0,

                          color:
                            "text.secondary",

                          fontFamily: "inherit",

                          fontSize: {
                            xs: "0.76rem",
                            md: "0.82rem",
                          },

                          lineHeight: 1.6,
                        }}
                      >
                        {area.description}
                      </Typography>

                    </Box>


                    {/* ARROW */}

                    <ArrowForward
                      className="research-arrow"
                      sx={{
                        fontSize: 20,

                        color:
                          "rgba(7, 27, 58, 0.45)",

                        transition:
                          "all 0.25s ease",
                      }}
                    />

                  </Button>


                  {index <
                    researchAreas.length - 1 && (
                    <Divider
                      sx={{
                        borderColor:
                          "rgba(7, 27, 58, 0.08)",
                      }}
                    />
                  )}

                </React.Fragment>

              ))}
            </Stack>

          </Paper>

        </Box>

      </Container>
    </Box>
  );
};

export default Research;