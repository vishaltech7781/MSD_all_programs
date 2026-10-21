import React from "react";

import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

import {
  EventOutlined,
  CalendarMonthOutlined,
  ArrowForward,
} from "@mui/icons-material";

const EventsPage = () => {
  const events = [
    {
      day: "15",
      month: "SEP",
      title: "Technical Workshop",
      description:
        "Department workshop and hands-on technical learning session.",
    },
    {
      day: "20",
      month: "OCT",
      title: "Expert Lecture",
      description:
        "Expert lecture on emerging technologies and industry trends.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fb",
      }}
    >

      {/* ================= PAGE BANNER ================= */}

      <Box
        sx={{
          backgroundColor: "primary.main",
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >
        <Container maxWidth="lg">

          <Typography
            component="p"
            sx={{
              mb: 1.5,
              color: "secondary.main",
              fontFamily: "inherit",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
            }}
          >
            EVENTS
          </Typography>

          <Typography
            component="h1"
            sx={{
              color: "#ffffff",
              fontFamily: "inherit",
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Events & Activities
          </Typography>

        </Container>
      </Box>


      {/* ================= EVENTS CONTENT ================= */}

      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >

        <Stack spacing={2.5}>

          {events.map((event, index) => (

            <Card
              key={index}
              sx={{
                width: "100%",

                borderRadius: 2,

                border:
                  "1px solid rgba(7, 27, 58, 0.10)",

                backgroundColor: "#ffffff",

                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease",

                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 12px 30px rgba(7, 27, 58, 0.10)",
                },
              }}
            >

              <CardContent
                sx={{
                  p: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                  },

                  "&:last-child": {
                    pb: {
                      xs: 2,
                      sm: 2.5,
                      md: 3,
                    },
                  },
                }}
              >

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    gap: {
                      xs: 2,
                      sm: 3,
                    },
                  }}
                >

                  {/* ================= DATE ================= */}

                  <Box
                    sx={{
                      width: {
                        xs: 65,
                        sm: 75,
                        md: 85,
                      },

                      minWidth: {
                        xs: 65,
                        sm: 75,
                        md: 85,
                      },

                      height: {
                        xs: 70,
                        sm: 80,
                        md: 90,
                      },

                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",

                      borderRadius: 1.5,

                      backgroundColor:
                        "primary.main",

                      color: "#ffffff",
                    }}
                  >

                    <Typography
                      component="strong"
                      sx={{
                        fontFamily: "inherit",
                        fontSize: {
                          xs: "1.5rem",
                          md: "1.8rem",
                        },
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {event.day}
                    </Typography>

                    <Typography
                      component="span"
                      sx={{
                        mt: 0.7,
                        color: "secondary.main",
                        fontFamily: "inherit",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {event.month}
                    </Typography>

                  </Box>


                  {/* ================= EVENT DETAILS ================= */}

                  <Box
                    sx={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 0.8,
                      }}
                    >

                      <EventOutlined
                        sx={{
                          color: "secondary.main",
                          fontSize: 19,
                        }}
                      />

                      <Typography
                        component="span"
                        sx={{
                          color: "text.secondary",
                          fontFamily: "inherit",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                        }}
                      >
                        DEPARTMENT EVENT
                      </Typography>

                    </Box>


                    <Typography
                      component="h2"
                      sx={{
                        m: 0,

                        color: "primary.main",

                        fontFamily: "inherit",

                        fontSize: {
                          xs: "1.1rem",
                          md: "1.35rem",
                        },

                        fontWeight: 700,

                        lineHeight: 1.35,
                      }}
                    >
                      {event.title}
                    </Typography>


                    <Typography
                      component="p"
                      sx={{
                        mt: 0.8,
                        mb: 0,

                        maxWidth: 700,

                        color: "text.secondary",

                        fontFamily: "inherit",

                        fontSize: {
                          xs: "0.82rem",
                          md: "0.9rem",
                        },

                        lineHeight: 1.7,
                      }}
                    >
                      {event.description}
                    </Typography>

                  </Box>


                  {/* ================= ARROW ================= */}

                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        sm: "flex",
                      },

                      alignItems: "center",
                      justifyContent: "center",

                      width: 40,
                      height: 40,

                      borderRadius: "50%",

                      color: "primary.main",

                      backgroundColor:
                        "rgba(7, 27, 58, 0.05)",

                      flexShrink: 0,

                      transition:
                        "all 0.25s ease",

                      "&:hover": {
                        backgroundColor:
                          "primary.main",

                        color: "#ffffff",
                      },
                    }}
                  >
                    <ArrowForward
                      sx={{
                        fontSize: 19,
                      }}
                    />
                  </Box>

                </Box>

              </CardContent>

            </Card>

          ))}

        </Stack>

      </Container>

    </Box>
  );
};

export default EventsPage;  