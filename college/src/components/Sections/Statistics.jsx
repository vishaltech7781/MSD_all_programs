import React from "react";

import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import {
  GroupsOutlined,
  SchoolOutlined,
  ScienceOutlined,
  EmojiEventsOutlined,
} from "@mui/icons-material";

const Statistics = () => {
  const statistics = [
    {
      value: "500+",
      label: "Students",
      icon: GroupsOutlined,
    },
    {
      value: "30+",
      label: "Faculty Members",
      icon: SchoolOutlined,
    },
    {
      value: "15+",
      label: "Research Projects",
      icon: ScienceOutlined,
    },
    {
      value: "25+",
      label: "Years of Excellence",
      icon: EmojiEventsOutlined,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, sm: 6, md: 8 },
        backgroundColor: "background.paper",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2, sm: 2.5, md: 3 },
          }}
        >
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  position: "relative",
                  minHeight: {
                    xs: 145,
                    sm: 165,
                    md: 180,
                  },

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",

                  px: { xs: 1.5, sm: 2, md: 2.5 },
                  py: { xs: 2, md: 3 },

                  borderRadius: 2,
                  overflow: "hidden",

                  border: "1px solid",
                  borderColor: "divider",

                  backgroundColor: "background.paper",

                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    backgroundColor: "secondary.main",
                    transform: "scaleX(0)",
                    transformOrigin: "center",
                    transition: "transform 0.3s ease",
                  },

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(7, 27, 58, 0.18)",
                    boxShadow:
                      "0 12px 30px rgba(7, 27, 58, 0.10)",

                    "&::before": {
                      transform: "scaleX(1)",
                    },

                    "& .statistics-icon": {
                      backgroundColor: "primary.main",
                      color: "secondary.main",
                    },
                  },
                }}
              >
                {/* ICON */}

                <Box
                  className="statistics-icon"
                  sx={{
                    width: {
                      xs: 46,
                      sm: 52,
                      md: 56,
                    },
                    height: {
                      xs: 46,
                      sm: 52,
                      md: 56,
                    },

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: "50%",

                    backgroundColor: "rgba(7, 27, 58, 0.06)",
                    color: "primary.main",

                    mb: {
                      xs: 1.5,
                      md: 2,
                    },

                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: {
                        xs: 22,
                        sm: 24,
                        md: 25,
                      },
                    }}
                  />
                </Box>

                {/* VALUE */}

                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: {
                      xs: "1.55rem",
                      sm: "1.8rem",
                      md: "2rem",
                    },
                    lineHeight: 1,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </Typography>

                {/* LABEL */}

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: {
                      xs: "0.78rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                    },
                    fontWeight: 500,
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Statistics;