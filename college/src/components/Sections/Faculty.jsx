import React from "react";

import {
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

import {
  Box,
  Container,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Divider,
  Chip,
  Stack,
} from "@mui/material";

const faculty = [
  {
    image: "/images/faculty/radhika.jpg",
    name: "Dr. Radhika J. Dhanal",
    designation: "Associate Professor & HOD",
    qualification: "M.E. (CSE), PhD (CSE)",
    specialization:
      "Automata Theory, Computer Theory, Computer Algorithms",
    joining: "07 Jul 2003",
    association: "Regular",
  },

  {
    image: "/images/faculty/bhagatsingh.jpg",
    name: "Dr. Bhagatsingh D Jitkar",
    designation: "Professor",
    qualification: "Ph.D (CSE), MCA",
    specialization: "Database engineering",
    joining: "13 Jul 1992",
    association: "Regular",
  },

  {
    image: "/images/faculty/kapil.jpg",
    name: "Dr. Kapil B. Kadam",
    designation: "Associate Professor",
    qualification: "BE CSE, MTech CSE, Ph.D. IIT Bombay",
    specialization:
      "Computer Science & Engineering, Educational Technology",
    joining: "03 Jul 2023",
    association: "Regular",
  },

  {
    image: "/images/faculty/amolkumar.jpg",
    name: "Dr. Amolkumar N. Jadhav",
    designation: "Associate Professor",
    qualification: "Post Doctorate, Ph.D. (CSE)",
    specialization:
      "Data Mining, Big Data, Optimization Techniques, AI",
    joining: "01 Jul 2025",
    association: "Regular",
  },

  {
    image: "/images/faculty/shatakshi.jpg",
    name: "Mrs. Shatakshi S Kokate",
    designation: "Assistant Professor",
    qualification:
      "Diploma (Computer Engineering), BE(CSE), ME(CSE), PhD (Pursuing)",
    specialization: "Computer Networks, Blockchain",
    joining: "24 Feb 2006",
    association: "Regular",
  },

  {
    image: "/images/faculty/shobha.jpg",
    name: "Dr. Shobha B Patil",
    designation: "Assistant Professor",
    qualification: "PhD(CSE), M.E.(CSE)",
    specialization:
      "Database Engineering, Web Usage Mining",
    joining: "15 Jan 2005",
    association: "Regular",
  },

  {
    image: "/images/faculty/kt-mane.jpg",
    name: "Mr. K. T. Mane",
    designation: "Assistant Professor",
    qualification: "M.E.(CSE), PhD (Pursuing)",
    specialization:
      "Social Media Analytics, Big Data Analytics, Machine Learning, Cloud Computing, Full Stack",
    joining: "14 Jan 2008",
    association: "Regular",
  },

  {
    image: "/images/faculty/pardesi.jpg",
    name: "Mr. M. A. Pardesi",
    designation: "Assistant Professor",
    qualification: "ME(Electronics)",
    specialization:
      "Digital/Analog Communication",
    joining: "13 Jul 1992",
    association: "Regular",
  },

  {
    image: "/images/faculty/ketaki.jpg",
    name: "Mrs. Ketaki A Bhosale",
    designation: "Assistant Professor",
    qualification: "ME.(CSE), PhD (Pursuing)",
    specialization: "Network Security",
    joining: "01 Jul 2011",
    association: "Regular",
  },

  {
    image: "/images/faculty/ajinkya.jpg",
    name: "Dr. Ajinkya S Yadav",
    designation: "Assistant Professor",
    qualification: "M.E.(CSE), Ph. D",
    specialization:
      "Programming Languages, Network Security & Data Mining",
    joining: "08 Jul 2014",
    association: "Regular",
  },

  {
    image: "/images/faculty/vishal-mangave.jpg",
    name: "Mr. Vishal V. Mangave",
    designation: "Assistant Professor",
    qualification:
      "M. Tech. (CST), Ph. D (Pursuing)",
    specialization:
      "Operating System, Distributed System",
    joining: "11 Aug 2014",
    association: "Regular",
  },

  {
    image: "/images/faculty/niraj-haval.jpg",
    name: "Mr. Niraj A Haval",
    designation: "Assistant Professor",
    qualification:
      "M. Tech. (CST), Ph.D.(Pursuing)",
    specialization:
      "Networking, Operating Systems",
    joining: "27 Jun 2016",
    association: "Regular",
  },

  {
    image: "/images/faculty/ranjita.jpg",
    name: "Mrs. Ranjita S Jadhav",
    designation: "Assistant Professor",
    qualification:
      "M.E.(CSE), Ph.D.(Pursuing)",
    specialization: "Network Security",
    joining: "08 Sept 2010",
    association: "Regular",
  },

  {
    image: "/images/faculty/sunny.jpg",
    name: "Dr. Sunny B. Mohite",
    designation: "Assistant Professor",
    qualification:
      "B.E, M.E(CSE), Ph. D",
    specialization:
      "Full Stack Development, Cloud Computing, Agile Technology, Project management",
    joining: "01 Jul 2022",
    association: "Regular",
  },

  {
    image: "/images/faculty/sonali.jpg",
    name: "Mrs. Sonali V. Shinge",
    designation: "Assistant Professor",
    qualification:
      "M.E. (Comp. Engg.), PhD(Pursuing)",
    specialization:
      "Image Processing, Cloud Computing, Blockchain Technology",
    joining: "19 Jun 2017",
    association: "Regular",
  },

  {
    image: "/images/faculty/santosh.jpg",
    name: "Mr. Santosh S. Kore",
    designation: "Assistant Professor",
    qualification:
      "M. Tech (Computer Science), B.E. (CSE), Ph.D(Pursuing)",
    specialization:
      "Programming Languages, Computer Network, Artificial Intelligence",
    joining: "01 Dec 2021",
    association: "Regular",
  },

  {
    image: "/images/faculty/dhanashree.jpg",
    name: "Mrs. Dhanashree R Patil",
    designation: "Assistant Professor",
    qualification:
      "M.E.(CSE), Ph.D.(Pursuing)",
    specialization: "Data Mining",
    joining: "12 Jun 2017",
    association: "Regular",
  },

  {
    image: "/images/faculty/swati.jpg",
    name: "Mrs. Swati G. Ambi",
    designation: "Assistant Professor",
    qualification:
      "M. Tech (CSE), Ph.D. Pursuing",
    specialization:
      "AI, Machine Learning, Deep Learning, Image Processing",
    joining: "23 Mar 2022",
    association: "Regular",
  },

  {
    image: "/images/faculty/pralhad.jpg",
    name: "Dr. Pralhad R. Gavali",
    designation: "Assistant Professor",
    qualification:
      "Ph.D., M.E(CSE)",
    specialization:
      "Machine Learning, Deep Learning, HPC, Block Chain Technology, Software project management",
    joining: "14 Aug 2023",
    association: "Regular",
  },

  {
    image: "/images/faculty/meghana.jpg",
    name: "Miss Meghana V. Bandiwadekar",
    designation: "Assistant Professor",
    qualification:
      "B. Tech(CST),M.Tech(CST), Ph. D (Pursuing)",
    specialization:
      "Python programming, software engineering, Machine Learning",
    joining: "01 Jul 2023",
    association: "Regular",
  },

  {
    image: "/images/faculty/pooja.jpg",
    name: "Dr. Pooja R. Patil",
    designation: "Assistant Professor",
    qualification:
      "Ph.D. , BE(CSE), M.E(CSE)",
    specialization:
      "Data Structures, Database Engineering, Machine Learning",
    joining: "01 Jul 2023",
    association: "Regular",
  },

  {
    image: "/images/faculty/priyanka.jpg",
    name: "Mrs. Priyanka Khopkar",
    designation: "Assistant Professor",
    qualification:
      "B.E (CSE), M.E (CSE), Ph.D (Pursuing)",
    specialization:
      "Machine Learning, Deep Learning",
    joining: "10 Jul 2023",
    association: "Regular",
  },

  {
    image: "/images/faculty/omkarshif.jpg",
    name: "Mr. Omkarshif A. Terdalkar",
    designation: "Assistant Professor",
    qualification:
      "M.E. (CSE), PhD(Pursuing)",
    specialization:
      "Big Data, Machine Learning",
    joining: "07 Jul 2025",
    association: "Regular",
  },

  {
    image: "/images/faculty/shnarayu.jpg",
    name: "Mrs. Shnarayu N Patil",
    designation: "Assistant Professor",
    qualification:
      "M.E.(Computer Science & Engineering), PhD (Pursuing)",
    specialization:
      "Computer Networks, Software Testing",
    joining: "01 Jul 2022",
    association: "Regular",
  },

  {
    image: "/images/faculty/aishwarya.jpg",
    name: "Miss Aishwarya M Phadtare",
    designation: "Assistant Professor",
    qualification:
      "B.E (CSE), M.E (CSE)",
    specialization:
      "Computer Algorithm, Android OS, Python Programming",
    joining: "01 Jul 2022",
    association: "Regular",
  },

  {
    image: "/images/faculty/nandini.jpg",
    name: "Mrs. Nandini N. Patil",
    designation: "Assistant Professor",
    qualification:
      "M.E.(CSE) PhD Pursuing",
    specialization:
      "Computer Networks, Block Chain Technology",
    joining: "01 Jul 2022",
    association: "Regular",
  },

  {
    image: "/images/faculty/varsha.jpg",
    name: "Mrs. Varsha Parag Patil",
    designation: "Assistant Professor",
    qualification:
      "B. E. (CSE), M. E. (Computer)",
    specialization:
      "Virtualization, Computer Network",
    joining: "01 Feb 2014",
    association: "Regular",
  },

  {
    image: "/images/faculty/aditee.jpg",
    name: "Mrs. Aditee A. Salokhe",
    designation: "Assistant Professor",
    qualification:
      "B.E(CSE), M.C.A, M. Tech(CSE)",
    specialization:
      "System Programming, Search Engine Optimization, Web Technology",
    joining: "01 Jul 2025",
    association: "Regular",
  },
];

const Faculty = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        backgroundColor: "#f8f9fb",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >

        {/* ================= BACK BUTTON ================= */}

        <Button
          component="a"
          href="/"
          startIcon={<ArrowLeft size={15} />}
          sx={{
            mb: 4,
            px: 0,

            color: "primary.main",

            fontFamily: "inherit",
            fontSize: "0.85rem",
            fontWeight: 600,
            textTransform: "none",

            "&:hover": {
              px: 0,
              backgroundColor: "transparent",
              color: "secondary.main",
            },
          }}
        >
          Back to Computer Science & Engineering
        </Button>


        {/* ================= PAGE HEADING ================= */}

        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              color: "primary.main",
              fontFamily: "inherit",

              fontSize: {
                xs: "2rem",
                md: "2.8rem",
              },

              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Faculty
          </Typography>

          <Typography
            sx={{
              mt: 1,

              color: "text.secondary",

              fontFamily: "inherit",
              fontSize: "1rem",
            }}
          >
            Computer Science & Engineering
          </Typography>
        </Box>


        {/* =====================================================
            FACULTY GRID
            EXACTLY 2 CARDS PER ROW
        ===================================================== */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns:
              "repeat(2, minmax(0, 1fr))",

            gap: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },

            width: "100%",
          }}
        >

          {faculty.map((member, index) => (

            <Card
              key={index}
              sx={{
                width: "100%",
                minWidth: 0,

                display: "flex",
                flexDirection: "column",

                borderRadius: 2,

                border:
                  "1px solid rgba(7, 27, 58, 0.10)",

                backgroundColor: "#ffffff",

                overflow: "hidden",

                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease",

                "&:hover": {
                  transform: "translateY(-5px)",

                  boxShadow:
                    "0 14px 32px rgba(7, 27, 58, 0.10)",
                },
              }}
            >

              {/* ================= TOP INFORMATION ================= */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  gap: {
                    xs: 1.5,
                    md: 2,
                  },

                  p: {
                    xs: 1.5,
                    sm: 2,
                    md: 2.5,
                  },
                }}
              >

                {/* FACULTY PHOTO */}

                <Avatar
                  src={member.image}
                  alt={member.name}
                  variant="rounded"
                  sx={{
                    width: {
                      xs: 65,
                      sm: 75,
                      md: 88,
                    },

                    height: {
                      xs: 75,
                      sm: 85,
                      md: 98,
                    },

                    borderRadius: 1.5,

                    backgroundColor:
                      "rgba(7, 27, 58, 0.06)",

                    flexShrink: 0,
                  }}
                />


                {/* NAME + DESIGNATION */}

                <Box
                  sx={{
                    minWidth: 0,
                    flex: 1,
                  }}
                >

                  <Typography
                    component="h2"
                    sx={{
                      color: "primary.main",

                      fontFamily: "inherit",

                      fontSize: {
                        xs: "0.85rem",
                        sm: "0.95rem",
                        md: "1.05rem",
                      },

                      fontWeight: 700,

                      lineHeight: 1.35,

                      overflowWrap: "break-word",
                    }}
                  >
                    {member.name}
                  </Typography>


                  <Chip
                    label={member.designation}
                    size="small"
                    sx={{
                      mt: 1,

                      maxWidth: "100%",

                      height: "auto",

                      color: "primary.main",

                      backgroundColor:
                        "rgba(7, 27, 58, 0.06)",

                      fontFamily: "inherit",

                      fontSize: {
                        xs: "0.62rem",
                        md: "0.68rem",
                      },

                      fontWeight: 600,

                      "& .MuiChip-label": {
                        whiteSpace: "normal",
                        py: 0.5,
                      },
                    }}
                  />

                </Box>

              </Box>


              <Divider />


              {/* ================= FACULTY DETAILS ================= */}

              <CardContent
                sx={{
                  px: {
                    xs: 1.5,
                    sm: 2,
                    md: 2.5,
                  },

                  py: {
                    xs: 1.5,
                    sm: 2,
                    md: 2.5,
                  },

                  flexGrow: 1,

                  "&:last-child": {
                    pb: {
                      xs: 1.5,
                      sm: 2,
                      md: 2.5,
                    },
                  },
                }}
              >

                <Stack spacing={1.2}>

                  {/* QUALIFICATION */}

                  <Typography
                    sx={{
                      color: "text.secondary",

                      fontFamily: "inherit",

                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.76rem",
                        md: "0.82rem",
                      },

                      lineHeight: 1.6,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                      }}
                    >
                      Qualification:
                    </Box>{" "}
                    {member.qualification}
                  </Typography>


                  {/* SPECIALIZATION */}

                  <Typography
                    sx={{
                      color: "text.secondary",

                      fontFamily: "inherit",

                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.76rem",
                        md: "0.82rem",
                      },

                      lineHeight: 1.6,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                      }}
                    >
                      Specialization:
                    </Box>{" "}
                    {member.specialization}
                  </Typography>


                  {/* JOINING DATE */}

                  <Typography
                    sx={{
                      color: "text.secondary",

                      fontFamily: "inherit",

                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.76rem",
                        md: "0.82rem",
                      },

                      lineHeight: 1.6,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                      }}
                    >
                      Date of Joining:
                    </Box>{" "}
                    {member.joining}
                  </Typography>


                  {/* ASSOCIATION */}

                  <Typography
                    sx={{
                      color: "text.secondary",

                      fontFamily: "inherit",

                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.76rem",
                        md: "0.82rem",
                      },

                      lineHeight: 1.6,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                      }}
                    >
                      Nature of Association:
                    </Box>{" "}
                    {member.association}
                  </Typography>

                </Stack>


                {/* ================= PROFILE BUTTON ================= */}

                {member.profile && (
                  <Button
                    component="a"
                    href="#"
                    endIcon={
                      <ExternalLink size={13} />
                    }
                    sx={{
                      mt: 2,

                      px: 0,

                      color: "primary.main",

                      fontFamily: "inherit",

                      fontSize: "0.82rem",

                      fontWeight: 700,

                      textTransform: "none",

                      "&:hover": {
                        px: 0,

                        backgroundColor:
                          "transparent",

                        color: "secondary.main",
                      },
                    }}
                  >
                    View Profile
                  </Button>
                )}

              </CardContent>

            </Card>

          ))}

        </Box>

      </Container>
    </Box>
  );
};

export default Faculty;