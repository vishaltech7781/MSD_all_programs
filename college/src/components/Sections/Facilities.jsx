import {
  ArrowRight,
  Monitor,
  Cpu,
  Wifi,
  BookOpen,
  FlaskConical,
  Users,
} from "lucide-react";

import {
  Box,
  Container,
  Paper,
} from "@mui/material";

const facilities = [
  {
    icon: Monitor,
    title: "Computer Laboratories",
    description:
      "Well-equipped computer laboratories supporting programming, software development and practical learning.",
    image: "/images/facilities/computer-lab.jpg",
  },

  {
    icon: Cpu,
    title: "Advanced Computing Lab",
    description:
      "Modern computing infrastructure for artificial intelligence, machine learning and advanced computing.",
    image: "/images/facilities/advanced-lab.jpg",
  },

  {
    icon: Wifi,
    title: "Networking Lab",
    description:
      "Dedicated networking infrastructure for hands-on learning in computer networks and cybersecurity.",
    image: "/images/facilities/networking-lab.jpg",
  },

  {
    icon: FlaskConical,
    title: "Research Laboratories",
    description:
      "Research-oriented facilities supporting innovation, experimentation and emerging technologies.",
    image: "/images/facilities/research-lab.jpg",
  },

  {
    icon: BookOpen,
    title: "Department Library",
    description:
      "Academic resources, reference books and digital learning material for students and researchers.",
    image: "/images/facilities/library.jpg",
  },

  {
    icon: Users,
    title: "Seminar & Discussion Hall",
    description:
      "Dedicated space for seminars, workshops, technical talks and collaborative activities.",
    image: "/images/facilities/seminar-hall.jpg",
  },
];

const Facilities = () => {
  return (
    <Box
      component="section"
      className="facilities-section"
    >
      <Container
        maxWidth="lg"
        className="container"
      >

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="facilities-header">

          <div>

            <span className="section-label">
              CAMPUS & INFRASTRUCTURE
            </span>

            <h2>
              Facilities That
              <br />
              Enable Learning
            </h2>

          </div>

          <div className="facilities-intro">

            <p>
              Our department provides modern
              infrastructure and learning spaces
              designed to support academic excellence,
              practical learning and research.
            </p>

            <a
              href="#"
              className="view-all-link"
            >
              Explore Facilities
              <ArrowRight size={16} />
            </a>

          </div>

        </div>


        {/* =====================================
            FACILITIES GRID
        ===================================== */}

        <div className="facilities-grid">

          {facilities.map((facility, index) => {

            const Icon = facility.icon;

            return (

              <Paper
                component="article"
                elevation={0}
                className="facility-card"
                key={index}
                sx={{
                  overflow: "hidden",

                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow:
                      "0 12px 28px rgba(7, 27, 58, 0.10)",
                  },
                }}
              >

                {/* IMAGE */}

                <div className="facility-image">

                  <img
                    src={facility.image}
                    alt={facility.title}
                  />

                  <div className="facility-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>


                {/* CONTENT */}

                <Box
                  className="facility-content"
                  sx={{
                    position: "relative",
                  }}
                >

                  <div className="facility-icon">
                    <Icon size={20} />
                  </div>

                  <h3>
                    {facility.title}
                  </h3>

                  <p>
                    {facility.description}
                  </p>

                  <a
                    href="#"
                    className="facility-link"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </a>

                </Box>

              </Paper>

            );
          })}

        </div>

      </Container>
    </Box>
  );
};

export default Facilities;