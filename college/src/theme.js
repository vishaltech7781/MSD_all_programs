import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#071b3a",
      dark: "#041329",
      light: "#12315f",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#c9a227",
      dark: "#a98518",
      light: "#dfc35f",
      contrastText: "#071b3a",
    },

    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },

    text: {
      primary: "#071b3a",
      secondary: "#666666",
    },

    divider: "rgba(7, 27, 58, 0.10)",
  },

  typography: {
    fontFamily: "inherit",

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    h3: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 700,
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },

        body: {
          margin: 0,
          backgroundColor: "#ffffff",
        },

        "*": {
          boxSizing: "border-box",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableRipple: false,
      },

      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(7, 27, 58, 0.10)",
          boxShadow: "none",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease",
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

export default theme;