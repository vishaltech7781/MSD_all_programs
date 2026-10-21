import React from "react";

import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

import {
  GroupsOutlined,
  MenuBookOutlined,
  EmojiEventsOutlined,
} from "@mui/icons-material";

const Students = () => {
  const studentSections = [
    {
      icon: <GroupsOutlined />,
      title: "Student Activities",
      description:
        "Technical events, competitions, workshops, clubs and student initiatives.",
    },
    {
      icon: <MenuBookOutlined />,
      title: "Student Resources",
      description:
        "Academic resources and useful departmental information for students.",
    },
    {
      icon: <EmojiEventsOutlined />,
      title: "Achievements",
      description:
        "Highlights of student achievements in academics, competitions and innovation.",
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
          color: "white",
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
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            STUDENTS
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
            Student Corner
          </Typography>

          <Typography
            component="p"
            sx={{
              mt: 1.5,
              maxWidth: 650,
              color: "rgba(255,255,255,0.78)",
              fontFamily: "inherit",
              fontSize: {
                xs: "0.9rem",
                md: "1rem",
              },
              lineHeight: 1.7,
            }}
          >
            Academic resources, activities and opportunities
            for CSE students.
          </Typography>

        </Container>
      </Box>


      {/* ================= CONTENT ================= */}

      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, minmax(0, 1fr))",
            },

            gap: {
              xs: 2,
              md: 3,
            },
          }}
        >

          {studentSections.map((section, index) => (

            <Card
              key={index}
              sx={{
                height: "100%",
                borderRadius: 2,

                backgroundColor: "#ffffff",

                border:
                  "1px solid rgba(7, 27, 58, 0.10)",

                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease",

                "&:hover": {
                  transform: "translateY(-5px)",

                  boxShadow:
                    "0 14px 32px rgba(7, 27, 58, 0.10)",
                },
              }}
            >

              <CardContent
                sx={{
                  p: {
                    xs: 2.5,
                    md: 3,
                  },

                  "&:last-child": {
                    pb: {
                      xs: 2.5,
                      md: 3,
                    },
                  },
                }}
              >

                {/* ICON */}

                <Box
                  sx={{
                    width: 48,
                    height: 48,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: 1.5,

                    color: "primary.main",

                    backgroundColor:
                      "rgba(7, 27, 58, 0.06)",

                    mb: 2.5,

                    "& svg": {
                      fontSize: 25,
                    },
                  }}
                >
                  {section.icon}
                </Box>


                {/* TITLE */}

                <Typography
                  component="h2"
                  sx={{
                    color: "primary.main",
                    fontFamily: "inherit",
                    fontSize: {
                      xs: "1.15rem",
                      md: "1.25rem",
                    },
                    fontWeight: 700,
                    lineHeight: 1.35,
                  }}
                >
                  {section.title}
                </Typography>

                <Divider
                  sx={{
                    my: 1.5,
                    borderColor:
                      "rgba(7, 27, 58, 0.08)",
                  }}
                />


                {/* DESCRIPTION */}

                <Typography
                  component="p"
                  sx={{
                    color: "text.secondary",
                    fontFamily: "inherit",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    m: 0,
                  }}
                >
                  {section.description}
                </Typography>

              </CardContent>

            </Card>

          ))}

        </Box>

      </Container>

    </Box>
  );
};

export default Students;