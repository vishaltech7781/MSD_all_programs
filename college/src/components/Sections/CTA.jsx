import {
  ArrowForward,
  SchoolOutlined,
} from "@mui/icons-material";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const CTA = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            gap: { xs: 4, md: 6 },

            px: { xs: 3, sm: 4, md: 6 },
            py: { xs: 4, sm: 5, md: 6 },

            borderRadius: 2,

            backgroundColor: "primary.main",

            "&::after": {
              content: '""',
              position: "absolute",
              width: 280,
              height: 280,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.08)",
              right: -100,
              bottom: -150,
            },
          }}
        >

          {/* ================= LEFT ================= */}

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: 650,
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

                backgroundColor: "rgba(201, 162, 39, 0.15)",
                color: "secondary.main",

                mb: 2.5,
              }}
            >
              <SchoolOutlined sx={{ fontSize: 25 }} />
            </Box>

            {/* LABEL */}

            <Typography
              component="span"
              sx={{
                display: "block",

                color: "secondary.light",

                fontSize: "0.72rem",
                fontWeight: 700,

                letterSpacing: "0.14em",

                mb: 1.5,
              }}
            >
              COMPUTER SCIENCE & ENGINEERING
            </Typography>

            {/* HEADING */}

            <Typography
              component="h2"
              sx={{
                color: "#ffffff",

                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                },

                lineHeight: 1.15,
                fontWeight: 700,

                mb: 2,
              }}
            >
              Building the
              <br />
              Technology Leaders
              <br />
              of Tomorrow.
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              component="p"
              sx={{
                color: "rgba(255,255,255,0.72)",

                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                },

                lineHeight: 1.8,

                maxWidth: 570,

                mb: 0,
              }}
            >
              Discover opportunities to learn,
              innovate, research and build the future
              through Computer Science & Engineering.
            </Typography>

          </Box>


          {/* ================= RIGHT ================= */}

          <Stack
            spacing={2}
            sx={{
              position: "relative",
              zIndex: 1,

              minWidth: {
                xs: "100%",
                sm: 240,
                md: 260,
              },

              alignItems: {
                xs: "stretch",
                sm: "flex-start",
              },
            }}
          >

            {/* PRIMARY BUTTON */}

            <Button
              href="#"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForward />}
              sx={{
                px: 3,
                py: 1.35,

                width: {
                  xs: "100%",
                  sm: "auto",
                },

                color: "primary.main",

                fontSize: "0.9rem",
                fontWeight: 700,

                whiteSpace: "nowrap",

                "&:hover": {
                  backgroundColor: "secondary.light",
                },
              }}
            >
              Explore Our Department
            </Button>


            {/* SECONDARY BUTTON */}

            <Button
              href="#"
              variant="text"
              sx={{
                px: 0,

                color: "#ffffff",

                fontSize: "0.9rem",
                fontWeight: 600,

                justifyContent: {
                  xs: "center",
                  sm: "flex-start",
                },

                "&:hover": {
                  backgroundColor: "transparent",
                  color: "secondary.light",
                },
              }}
            >
              Contact Department
            </Button>

          </Stack>

        </Box>

      </Container>
    </Box>
  );
};

export default CTA;