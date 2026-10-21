import React from "react";

import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

import {
  BusinessOutlined,
  EmailOutlined,
  PhoneOutlined,
} from "@mui/icons-material";

const Contact = () => {
  const contactDetails = [
    {
      icon: <BusinessOutlined />,
      title: "Department Office",
      content: (
        <>
          <Typography
            component="p"
            sx={{
              m: 0,
              color: "text.secondary",
              fontFamily: "inherit",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            Department of Computer Science & Engineering
          </Typography>

          <Typography
            component="p"
            sx={{
              mt: 1,
              mb: 0,
              color: "text.secondary",
              fontFamily: "inherit",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            D. Y. Patil College of Engineering and Technology
          </Typography>
        </>
      ),
    },

    {
      icon: <EmailOutlined />,
      title: "Email",
      content: (
        <Typography
          component="p"
          sx={{
            m: 0,
            color: "text.secondary",
            fontFamily: "inherit",
            fontSize: "0.9rem",
            lineHeight: 1.7,
          }}
        >
          cse@college.edu
        </Typography>
      ),
    },

    {
      icon: <PhoneOutlined />,
      title: "Phone",
      content: (
        <Typography
          component="p"
          sx={{
            m: 0,
            color: "text.secondary",
            fontFamily: "inherit",
            fontSize: "0.9rem",
            lineHeight: 1.7,
          }}
        >
          +91 XXXXX XXXXX
        </Typography>
      ),
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
            CONTACT
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
            Contact Us
          </Typography>

        </Container>
      </Box>


      {/* ================= CONTACT CONTENT ================= */}

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

          {contactDetails.map((detail, index) => (

            <Card
              key={index}
              sx={{
                height: "100%",

                borderRadius: 2,

                border:
                  "1px solid rgba(7, 27, 58, 0.10)",

                backgroundColor: "#ffffff",

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

                <Stack spacing={2.5}>

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

                      "& svg": {
                        fontSize: 24,
                      },
                    }}
                  >
                    {detail.icon}
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
                    {detail.title}
                  </Typography>


                  {/* CONTENT */}

                  <Box>
                    {detail.content}
                  </Box>

                </Stack>

              </CardContent>

            </Card>

          ))}

        </Box>

      </Container>

    </Box>
  );
};

export default Contact;