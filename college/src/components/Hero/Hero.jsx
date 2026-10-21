import { useEffect, useState } from "react";

import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    image: "/images/campus.jpg",
    label: "WELCOME TO CSE",
    title: "Department of Computer Science & Engineering",
    description:
      "Building future-ready professionals through quality education, research, innovation and technology.",
  },

  {
    image: "/images/hero-2.jpg",
    label: "LEARN • INNOVATE • EXCEL",
    title: "Where Ideas Become Innovation",
    description:
      "Explore technology, solve real-world problems and create solutions that make a difference.",
  },

  {
    image: "/images/hero-3.jpg",
    label: "RESEARCH & TECHNOLOGY",
    title: "Creating the Technology of Tomorrow",
    description:
      "Our students and researchers work together to explore emerging technologies and new possibilities.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ================================
  // AUTOMATIC SLIDE
  // ================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (previous) =>
          (previous + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ================================
  // NEXT SLIDE
  // ================================

  const nextSlide = () => {
    setCurrentSlide(
      (previous) =>
        (previous + 1) % slides.length
    );
  };

  // ================================
  // PREVIOUS SLIDE
  // ================================

  const previousSlide = () => {
    setCurrentSlide(
      (previous) =>
        previous === 0
          ? slides.length - 1
          : previous - 1
    );
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "520px",
          sm: "580px",
          md: "650px",
        },
        overflow: "hidden",
        backgroundColor: "#071b3a",
      }}
    >

      {/* ================================
          SLIDES
      ================================= */}

      {slides.map((slide, index) => (

        <Box
          key={index}
          sx={{
            position: "absolute",
            inset: 0,

            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            opacity:
              index === currentSlide ? 1 : 0,

            visibility:
              index === currentSlide
                ? "visible"
                : "hidden",

            transition:
              "opacity 0.8s ease-in-out",

            zIndex:
              index === currentSlide ? 1 : 0,
          }}
        >

          {/* ================================
              DARK OVERLAY
          ================================= */}

          <Box
            sx={{
              position: "absolute",
              inset: 0,

              background:
                "linear-gradient(90deg, rgba(4,18,42,0.88) 0%, rgba(4,18,42,0.62) 45%, rgba(4,18,42,0.25) 100%)",
            }}
          />


          {/* ================================
              CONTENT
          ================================= */}

          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "center",
              zIndex: 2,
            }}
          >

            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "85%",
                  md: "68%",
                  lg: "62%",
                },

                pt: {
                  xs: 3,
                  md: 0,
                },
              }}
            >

              {/* LABEL */}

              <Typography
                component="span"
                sx={{
                  display: "inline-block",

                  color:
                    "var(--secondary, #c9a227)",

                  fontFamily: "inherit",

                  fontSize: {
                    xs: "0.72rem",
                    sm: "0.8rem",
                  },

                  fontWeight: 700,

                  letterSpacing: "0.14em",

                  mb: 1.5,
                }}
              >
                {slide.label}
              </Typography>


              {/* TITLE */}

              <Typography
                component="h1"
                sx={{
                  color: "#ffffff",

                  fontFamily: "inherit",

                  fontSize: {
                    xs: "2rem",
                    sm: "2.7rem",
                    md: "3.5rem",
                    lg: "4rem",
                  },

                  fontWeight: 700,

                  lineHeight: 1.12,

                  letterSpacing: "-0.02em",

                  mb: 2,
                }}
              >
                {slide.title}
              </Typography>


              {/* DESCRIPTION */}

              <Typography
                component="p"
                sx={{
                  maxWidth: 650,

                  color:
                    "rgba(255,255,255,0.88)",

                  fontFamily: "inherit",

                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.98rem",
                    md: "1rem",
                  },

                  lineHeight: 1.75,

                  mb: 3.5,
                }}
              >
                {slide.description}
              </Typography>


              {/* ================================
                  BUTTONS
              ================================= */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >

                {/* PRIMARY */}

                <Button
                  component="a"
                  href="/about"
                  variant="contained"
                  endIcon={
                    <ArrowRight size={18} />
                  }
                  sx={{
                    minHeight: 46,

                    px: 2.5,

                    backgroundColor:
                      "var(--secondary, #c9a227)",

                    color:
                      "var(--primary, #071b3a)",

                    fontFamily: "inherit",

                    fontSize: "0.88rem",

                    fontWeight: 700,

                    textTransform: "none",

                    borderRadius: 1,

                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor:
                        "var(--secondary, #c9a227)",

                      boxShadow:
                        "0 6px 18px rgba(0,0,0,0.2)",

                      transform:
                        "translateY(-2px)",
                    },

                    transition:
                      "all 0.25s ease",
                  }}
                >
                  Explore Department
                </Button>


                {/* SECONDARY */}

                <Button
                  component="a"
                  href="/academics"
                  variant="outlined"
                  sx={{
                    minHeight: 46,

                    px: 2.5,

                    color: "#ffffff",

                    borderColor:
                      "rgba(255,255,255,0.65)",

                    fontFamily: "inherit",

                    fontSize: "0.88rem",

                    fontWeight: 600,

                    textTransform: "none",

                    borderRadius: 1,

                    "&:hover": {
                      color: "#ffffff",

                      borderColor: "#ffffff",

                      backgroundColor:
                        "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  View Academics
                </Button>

              </Box>

            </Box>

          </Container>

        </Box>
      ))}


      {/* ================================
          PREVIOUS BUTTON
      ================================= */}

      <IconButton
        onClick={previousSlide}
        aria-label="Previous slide"
        sx={{
          position: "absolute",

          left: {
            xs: 12,
            md: 25,
          },

          top: "50%",

          transform: "translateY(-50%)",

          zIndex: 5,

          width: {
            xs: 40,
            md: 48,
          },

          height: {
            xs: 40,
            md: 48,
          },

          color: "#ffffff",

          border:
            "1px solid rgba(255,255,255,0.4)",

          backgroundColor:
            "rgba(0,0,0,0.20)",

          backdropFilter: "blur(4px)",

          "&:hover": {
            backgroundColor:
              "rgba(255,255,255,0.12)",

            borderColor: "#ffffff",
          },
        }}
      >
        <ChevronLeft size={25} />
      </IconButton>


      {/* ================================
          NEXT BUTTON
      ================================= */}

      <IconButton
        onClick={nextSlide}
        aria-label="Next slide"
        sx={{
          position: "absolute",

          right: {
            xs: 12,
            md: 25,
          },

          top: "50%",

          transform: "translateY(-50%)",

          zIndex: 5,

          width: {
            xs: 40,
            md: 48,
          },

          height: {
            xs: 40,
            md: 48,
          },

          color: "#ffffff",

          border:
            "1px solid rgba(255,255,255,0.4)",

          backgroundColor:
            "rgba(0,0,0,0.20)",

          backdropFilter: "blur(4px)",

          "&:hover": {
            backgroundColor:
              "rgba(255,255,255,0.12)",

            borderColor: "#ffffff",
          },
        }}
      >
        <ChevronRight size={25} />
      </IconButton>


      {/* ================================
          SLIDE INDICATORS
      ================================= */}

      <Box
        sx={{
          position: "absolute",

          bottom: {
            xs: 20,
            md: 28,
          },

          left: "50%",

          transform: "translateX(-50%)",

          zIndex: 5,

          display: "flex",

          alignItems: "center",

          gap: 1,
        }}
      >

        {slides.map((_, index) => (

          <Box
            key={index}
            component="button"
            onClick={() =>
              setCurrentSlide(index)
            }
            aria-label={`Go to slide ${index + 1}`}
            sx={{
              width:
                index === currentSlide
                  ? 30
                  : 9,

              height: 9,

              padding: 0,

              border: "none",

              borderRadius: 10,

              cursor: "pointer",

              backgroundColor:
                index === currentSlide
                  ? "var(--secondary, #c9a227)"
                  : "rgba(255,255,255,0.55)",

              transition:
                "all 0.3s ease",

              "&:hover": {
                backgroundColor:
                  "var(--secondary, #c9a227)",
              },
            }}
          />

        ))}

      </Box>

    </Box>
  );
};

export default Hero;