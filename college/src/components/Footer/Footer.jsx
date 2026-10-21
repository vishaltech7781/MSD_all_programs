import React from "react";

import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  IconButton,
  Link,
} from "@mui/material";

import {
  EmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Faculty", href: "/faculty" },
    { label: "Students", href: "/students" },
    { label: "Research", href: "/research" },
  ];

  const resourceLinks = [
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
    { label: "Notices", href: "#" },
    { label: "Downloads", href: "#" },
    { label: "Library", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      href: "#",
    },
    {
      icon: <FaXTwitter />,
      label: "X",
      href: "#",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "#",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "#",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "#ffffff",
      }}
    >

      {/* ================= MAIN FOOTER ================= */}

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
              sm: "repeat(2, minmax(0, 1fr))",
              md: "1.5fr 1fr 1fr 1.2fr",
            },

            gap: {
              xs: 4,
              md: 5,
            },
          }}
        >

          {/* ================= ABOUT ================= */}

          <Box>

            {/* BRAND */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2.5,
              }}
            >

              <Box
                component="img"
                src="/logo.png"
                alt="College Logo"
                sx={{
                  width: 52,
                  height: 52,
                  objectFit: "contain",
                  display: "block",
                }}
              />

              <Box>

                <Typography
                  component="strong"
                  sx={{
                    display: "block",
                    color: "#ffffff",
                    fontFamily: "inherit",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  Department of CSE
                </Typography>

                <Typography
                  component="span"
                  sx={{
                    display: "block",
                    mt: 0.3,
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "inherit",
                    fontSize: "0.75rem",
                  }}
                >
                  Your College Name
                </Typography>

              </Box>

            </Box>


            {/* DESCRIPTION */}

            <Typography
              component="p"
              sx={{
                maxWidth: 360,
                m: 0,

                color: "rgba(255,255,255,0.68)",

                fontFamily: "inherit",

                fontSize: "0.85rem",

                lineHeight: 1.8,
              }}
            >
              Empowering students through quality education,
              research, innovation and technology.
            </Typography>


            {/* SOCIAL MEDIA */}

            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 2.5,
              }}
            >

              {socialLinks.map((social, index) => (

                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  aria-label={social.label}
                  sx={{
                    width: 36,
                    height: 36,

                    border:
                      "1px solid rgba(255,255,255,0.18)",

                    borderRadius: 1,

                    color:
                      "rgba(255,255,255,0.75)",

                    transition:
                      "all 0.25s ease",

                    "&:hover": {
                      color: "primary.main",

                      backgroundColor:
                        "secondary.main",

                      borderColor:
                        "secondary.main",

                      transform:
                        "translateY(-2px)",
                    },

                    "& svg": {
                      fontSize: 15,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>

              ))}

            </Stack>

          </Box>


          {/* ================= QUICK LINKS ================= */}

          <Box>

            <Typography
              component="h3"
              sx={{
                mb: 2.2,

                color: "#ffffff",

                fontFamily: "inherit",

                fontSize: "0.95rem",

                fontWeight: 700,
              }}
            >
              Quick Links
            </Typography>

            <Stack spacing={1.2}>

              {quickLinks.map((link) => (

                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    width: "fit-content",

                    color:
                      "rgba(255,255,255,0.65)",

                    fontFamily: "inherit",

                    fontSize: "0.83rem",

                    transition:
                      "color 0.2s ease",

                    "&:hover": {
                      color:
                        "secondary.main",
                    },
                  }}
                >
                  {link.label}
                </Link>

              ))}

            </Stack>

          </Box>


          {/* ================= RESOURCES ================= */}

          <Box>

            <Typography
              component="h3"
              sx={{
                mb: 2.2,

                color: "#ffffff",

                fontFamily: "inherit",

                fontSize: "0.95rem",

                fontWeight: 700,
              }}
            >
              Resources
            </Typography>

            <Stack spacing={1.2}>

              {resourceLinks.map((link) => (

                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    width: "fit-content",

                    color:
                      "rgba(255,255,255,0.65)",

                    fontFamily: "inherit",

                    fontSize: "0.83rem",

                    transition:
                      "color 0.2s ease",

                    "&:hover": {
                      color:
                        "secondary.main",
                    },
                  }}
                >
                  {link.label}
                </Link>

              ))}

            </Stack>

          </Box>


          {/* ================= CONTACT ================= */}

          <Box>

            <Typography
              component="h3"
              sx={{
                mb: 2.2,

                color: "#ffffff",

                fontFamily: "inherit",

                fontSize: "0.95rem",

                fontWeight: 700,
              }}
            >
              Contact
            </Typography>


            <Stack spacing={2}>

              {/* LOCATION */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.3,
                }}
              >

                <LocationOnOutlined
                  sx={{
                    mt: 0.15,
                    fontSize: 18,
                    color: "secondary.main",
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    color:
                      "rgba(255,255,255,0.65)",

                    fontFamily: "inherit",

                    fontSize: "0.83rem",

                    lineHeight: 1.6,
                  }}
                >
                  College Campus, India
                </Typography>

              </Box>


              {/* EMAIL */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.3,
                }}
              >

                <EmailOutlined
                  sx={{
                    mt: 0.15,
                    fontSize: 18,
                    color: "secondary.main",
                    flexShrink: 0,
                  }}
                />

                <Link
                  href="mailto:cse@college.edu"
                  underline="none"
                  sx={{
                    color:
                      "rgba(255,255,255,0.65)",

                    fontFamily: "inherit",

                    fontSize: "0.83rem",

                    "&:hover": {
                      color:
                        "secondary.main",
                    },
                  }}
                >
                  cse@college.edu
                </Link>

              </Box>


              {/* PHONE */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.3,
                }}
              >

                <PhoneOutlined
                  sx={{
                    mt: 0.15,
                    fontSize: 18,
                    color: "secondary.main",
                    flexShrink: 0,
                  }}
                />

                <Link
                  href="tel:+911234567890"
                  underline="none"
                  sx={{
                    color:
                      "rgba(255,255,255,0.65)",

                    fontFamily: "inherit",

                    fontSize: "0.83rem",

                    "&:hover": {
                      color:
                        "secondary.main",
                    },
                  }}
                >
                  +91 12345 67890
                </Link>

              </Box>

            </Stack>

          </Box>

        </Box>

      </Container>


      {/* ================= COPYRIGHT ================= */}

      <Divider
        sx={{
          borderColor:
            "rgba(255,255,255,0.10)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          py: 2.5,
        }}
      >

        <Typography
          component="p"
          sx={{
            m: 0,

            color:
              "rgba(255,255,255,0.50)",

            fontFamily: "inherit",

            fontSize: {
              xs: "0.7rem",
              md: "0.75rem",
            },

            textAlign: {
              xs: "center",
              md: "left",
            },

            lineHeight: 1.6,
          }}
        >
          © 2026 Department of Computer Science &
          Engineering. All Rights Reserved.
        </Typography>

      </Container>

    </Box>
  );
};

export default Footer;