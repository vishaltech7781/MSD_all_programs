import {
  ArrowForward,
  TrendingUp,
  Groups,
  BusinessCenter,
  EmojiEvents,
} from "@mui/icons-material";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const placementStats = [
  {
    icon: TrendingUp,
    number: "95%",
    label: "Placement Rate",
  },
  {
    icon: EmojiEvents,
    number: "12+ LPA",
    label: "Highest Package",
  },
  {
    icon: BusinessCenter,
    number: "150+",
    label: "Recruiters",
  },
  {
    icon: Groups,
    number: "500+",
    label: "Career Opportunities",
  },
];

const recruiters = [
  "TCS",
  "Infosys",
  "Accenture",
  "Capgemini",
  "Cognizant",
  "Wipro",
  "Tech Mahindra",
  "Persistent",
];

const Placements = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">

        {/* ================================
            HEADER
        ================================= */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 5,
            mb: { xs: 5, md: 7 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <Typography
              component="span"
              sx={{
                display: "block",
                color: "secondary.main",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                mb: 1.5,
              }}
            >
              PLACEMENTS & CAREER
            </Typography>

            <Typography
              component="h2"
              variant="h3"
              sx={{
                color: "primary.main",
                lineHeight: 1.15,
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                },
              }}
            >
              Preparing Students
              <br />
              For Successful Careers
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 430,
              width: "100%",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              Our department focuses on developing
              technical skills, professional knowledge
              and industry readiness to help students
              build successful careers.
            </Typography>

            <Button
              href="#"
              endIcon={<ArrowForward />}
              sx={{
                p: 0,
                color: "primary.main",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "secondary.main",
                },
              }}
            >
              Placement Cell
            </Button>
          </Box>
        </Box>

        {/* ================================
            STATISTICS
        ================================= */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
            mb: { xs: 7, md: 9 },
          }}
        >
          {placementStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Card
                key={index}
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  backgroundColor: "#fafafa",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 30px rgba(7, 27, 58, 0.08)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    "&:last-child": {
                      pb: 3,
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 1.5,
                        backgroundColor: "rgba(201, 162, 39, 0.12)",
                        color: "secondary.main",
                      }}
                    >
                      <Icon sx={{ fontSize: 22 }} />
                    </Box>

                    <Box>
                      <Typography
                        component="strong"
                        sx={{
                          display: "block",
                          color: "primary.main",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          lineHeight: 1.2,
                        }}
                      >
                        {stat.number}
                      </Typography>

                      <Typography
                        component="span"
                        sx={{
                          display: "block",
                          color: "text.secondary",
                          fontSize: "0.85rem",
                          mt: 0.5,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* ================================
            RECRUITERS
        ================================= */}

        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 4,
              mb: 4,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Typography
                component="span"
                sx={{
                  display: "block",
                  color: "secondary.main",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  mb: 1,
                }}
              >
                OUR RECRUITERS
              </Typography>

              <Typography
                component="h3"
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                }}
              >
                Industry Connections
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                maxWidth: 440,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Students get opportunities to interact
              with leading organizations and technology
              companies.
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(4, 1fr)",
              },
              gap: 2,
            }}
          >
            {recruiters.map((company, index) => (
              <Card
                key={index}
                sx={{
                  minHeight: 90,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 1,
                  backgroundColor: "#fff",
                  "&:hover": {
                    borderColor: "secondary.main",
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 25px rgba(7, 27, 58, 0.07)",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: {
                      xs: "0.9rem",
                      sm: "1rem",
                    },
                    textAlign: "center",
                  }}
                >
                  {company}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>

        {/* ================================
            BOTTOM CTA
        ================================= */}

        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            backgroundColor: "primary.main",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Typography
              component="span"
              sx={{
                display: "block",
                color: "secondary.light",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                mb: 1,
              }}
            >
              BUILD YOUR FUTURE
            </Typography>

            <Typography
              component="h3"
              sx={{
                color: "#ffffff",
                fontSize: {
                  xs: "1.25rem",
                  md: "1.5rem",
                },
                fontWeight: 700,
              }}
            >
              Explore Career Opportunities
            </Typography>
          </Box>

          <Button
            href="#"
            variant="contained"
            color="secondary"
            endIcon={<ArrowForward />}
            sx={{
              flexShrink: 0,
              px: 3,
              py: 1.2,
              color: "primary.main",
              "&:hover": {
                backgroundColor: "secondary.light",
              },
            }}
          >
            View Placements
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default Placements;