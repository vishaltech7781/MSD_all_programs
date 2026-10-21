import React from "react";

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

const LatestUpdates = () => {
  const updates = [
    {
      date: "15 Sep 2026",
      category: "NOTICE",
      title: "Department Notice",
      description:
        "Important academic and departmental information for students and faculty members.",
    },
    {
      date: "10 Sep 2026",
      category: "ACADEMICS",
      title: "Academic Updates",
      description:
        "Latest updates regarding academic activities, schedules and departmental programs.",
    },
    {
      date: "05 Sep 2026",
      category: "EVENT",
      title: "Upcoming Department Event",
      description:
        "Stay updated with upcoming seminars, workshops and technical activities.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#f8f9fb",
      }}
    >
      <Container maxWidth="lg">

        {/* ================= SECTION HEADING ================= */}

        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 5 },
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "secondary.main",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Stay Updated
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: "primary.main",
              fontSize: {
                xs: "1.8rem",
                md: "2.3rem",
              },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Latest Updates
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              mt: 1.5,
              color: "text.secondary",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Stay informed about the latest notices, academic
            activities and events from the department.
          </Typography>
        </Box>

        {/* ================= UPDATE CARDS ================= */}

        <Grid
          container
          spacing={{ xs: 2.5, md: 3 }}
          justifyContent="center"
        >
          {updates.map((update, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: 560,
                  minHeight: 250,

                  display: "flex",
                  flexDirection: "column",

                  p: { xs: 2.5, md: 3 },

                  borderRadius: 2,
                  backgroundColor: "#fff",

                  border: "1px solid",
                  borderColor: "divider",

                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "rgba(7, 27, 58, 0.18)",
                    boxShadow:
                      "0 12px 30px rgba(7, 27, 58, 0.09)",
                  },
                }}
              >

                {/* TOP INFORMATION */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Chip
                    label={update.category}
                    size="small"
                    icon={<CampaignOutlinedIcon />}
                    sx={{
                      height: 28,

                      color: "primary.main",
                      backgroundColor:
                        "rgba(7, 27, 58, 0.06)",

                      fontSize: "0.68rem",
                      fontWeight: 700,

                      "& .MuiChip-icon": {
                        color: "secondary.main",
                        fontSize: 17,
                      },
                    }}
                  />

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.75rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {update.date}
                  </Typography>
                </Box>

                <Divider />

                {/* TITLE */}

                <Typography
                  component="h3"
                  sx={{
                    color: "primary.main",
                    fontSize: {
                      xs: "1.05rem",
                      md: "1.15rem",
                    },
                    fontWeight: 700,
                    lineHeight: 1.4,

                    mt: 2,
                    mb: 1.2,
                  }}
                >
                  {update.title}
                </Typography>

                {/* DESCRIPTION */}

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}
                >
                  {update.description}
                </Typography>

                {/* READ MORE */}

                <Button
                  variant="text"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    alignSelf: "flex-start",
                    mt: 2.5,
                    px: 0,

                    color: "primary.main",
                    fontSize: "0.85rem",
                    fontWeight: 700,

                    "&:hover": {
                      px: 0,
                      backgroundColor: "transparent",
                      color: "secondary.main",
                    },

                    "& .MuiButton-endIcon": {
                      transition: "transform 0.25s ease",
                    },

                    "&:hover .MuiButton-endIcon": {
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  Read More
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* ================= VIEW ALL ================= */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 3,
              py: 1.1,

              borderRadius: 1,

              borderColor: "primary.main",
              color: "primary.main",

              fontWeight: 600,

              "&:hover": {
                borderColor: "secondary.main",
                color: "secondary.main",
                backgroundColor: "transparent",
              },
            }}
          >
            View All Updates
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default LatestUpdates;