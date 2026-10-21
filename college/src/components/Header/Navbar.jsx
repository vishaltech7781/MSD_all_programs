import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  KeyboardArrowDown,
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material";

const Navbar = () => {
  const [aboutAnchor, setAboutAnchor] = useState(null);
  const [academicsAnchor, setAcademicsAnchor] = useState(null);
  const [researchAnchor, setResearchAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();

  const handleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: "#071b3a",
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 60, md: 68 },
              justifyContent: "space-between",
            }}
          >
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={handleMobileMenu}
                sx={{
                  color: "#fff",
                  mr: 1,
                }}
                aria-label="open navigation menu"
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                  gap: { md: 0.5, lg: 1 },
                }}
              >
                {/* Home */}
                <Button
                  component={Link}
                  to="/"
                  sx={{
                    color: "#fff",
                    px: 2,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 0,
                    borderBottom: isActive("/") ? "3px solid #c9a227" : "3px solid transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderBottom: "3px solid #c9a227",
                    },
                  }}
                >
                  Home
                </Button>

                {/* ABOUT */}
                <Button
                  onClick={(event) => setAboutAnchor(event.currentTarget)}
                  endIcon={<KeyboardArrowDown />}
                  sx={{
                    color: "#fff",
                    px: 2,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  About
                </Button>

                <Menu
                  anchorEl={aboutAnchor}
                  open={Boolean(aboutAnchor)}
                  onClose={() => setAboutAnchor(null)}
                  MenuListProps={{
                    sx: {
                      py: 0.5,
                    },
                  }}
                  slotProps={{
                    paper: {
                      elevation: 5,
                      sx: {
                        mt: 1,
                        minWidth: 220,
                        borderRadius: 1,
                      },
                    },
                  }}
                >
                  <MenuItem
                    component={Link}
                    to="/about"
                    onClick={() => setAboutAnchor(null)}
                  >
                    About Department
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/about/vision-mission"
                    onClick={() => setAboutAnchor(null)}
                  >
                    Vision & Mission
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/about/head-message"
                    onClick={() => setAboutAnchor(null)}
                  >
                    Head's Message
                  </MenuItem>
                </Menu>

                {/* ACADEMICS */}
                <Button
                  onClick={(event) => setAcademicsAnchor(event.currentTarget)}
                  endIcon={<KeyboardArrowDown />}
                  sx={{
                    color: "#fff",
                    px: 2,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  Academics
                </Button>

                <Menu
                  anchorEl={academicsAnchor}
                  open={Boolean(academicsAnchor)}
                  onClose={() => setAcademicsAnchor(null)}
                  slotProps={{
                    paper: {
                      elevation: 5,
                      sx: {
                        mt: 1,
                        minWidth: 220,
                        borderRadius: 1,
                      },
                    },
                  }}
                >
                  <MenuItem
                    component={Link}
                    to="/academics"
                    onClick={() => setAcademicsAnchor(null)}
                  >
                    Academics Overview
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/academics/programs"
                    onClick={() => setAcademicsAnchor(null)}
                  >
                    Programs
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/academics/curriculum"
                    onClick={() => setAcademicsAnchor(null)}
                  >
                    Curriculum
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/academics/academic-calendar"
                    onClick={() => setAcademicsAnchor(null)}
                  >
                    Academic Calendar
                  </MenuItem>
                </Menu>

                {/* Faculty */}
                <Button
                  component={Link}
                  to="/faculty"
                  sx={{
                    color: "#fff",
                    px: 2,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 0,
                    borderBottom: isActive("/faculty")
                      ? "3px solid #c9a227"
                      : "3px solid transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderBottom: "3px solid #c9a227",
                    },
                  }}
                >
                  Faculty
                </Button>

                {/* Students */}
                <Button
                  component={Link}
                  to="/students"
                  sx={{
                    color: "#fff",
                    px: 2,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 0,
                    borderBottom: isActive("/students")
                      ? "3px solid #c9a227"
                      : "3px solid transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderBottom: "3px solid #c9a227",
                    },
                  }}
                >
                  Students
                </Button>

                {/* RESEARCH */}
                <Button
                  onClick={(event) => setResearchAnchor(event.currentTarget)}
                  endIcon={<KeyboardArrowDown />}
                  sx={{
                    color: "#fff",
                    px: 2,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  Research
                </Button>

                <Menu
                  anchorEl={researchAnchor}
                  open={Boolean(researchAnchor)}
                  onClose={() => setResearchAnchor(null)}
                  slotProps={{
                    paper: {
                      elevation: 5,
                      sx: {
                        mt: 1,
                        minWidth: 220,
                        borderRadius: 1,
                      },
                    },
                  }}
                >
                  <MenuItem
                    component={Link}
                    to="/research"
                    onClick={() => setResearchAnchor(null)}
                  >
                    Research Overview
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/research/areas"
                    onClick={() => setResearchAnchor(null)}
                  >
                    Research Areas
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/research/labs"
                    onClick={() => setResearchAnchor(null)}
                  >
                    Research Labs
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/research/publications"
                    onClick={() => setResearchAnchor(null)}
                  >
                    Publications
                  </MenuItem>
                </Menu>

                {/* Events */}
                <Button
                  component={Link}
                  to="/events"
                  sx={{
                    color: "#fff",
                    px: 2,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 0,
                    borderBottom: isActive("/events")
                      ? "3px solid #c9a227"
                      : "3px solid transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderBottom: "3px solid #c9a227",
                    },
                  }}
                >
                  Events
                </Button>

                {/* Contact */}
                <Button
                  component={Link}
                  to="/contact"
                  sx={{
                    color: "#fff",
                    px: 2,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 0,
                    borderBottom: isActive("/contact")
                      ? "3px solid #c9a227"
                      : "3px solid transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderBottom: "3px solid #c9a227",
                    },
                  }}
                >
                  Contact
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={closeMobileMenu}
        PaperProps={{
          sx: {
            width: 290,
            backgroundColor: "#071b3a",
            color: "#fff",
          },
        }}
      >
        <Box>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1.5,
            }}
          >
            <Box
              sx={{
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              CSE Department
            </Box>

            <IconButton
              onClick={closeMobileMenu}
              sx={{ color: "#fff" }}
            >
              <Close />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <List>
            {/* Home */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            {/* About */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/about"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="About Department" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/about/vision-mission"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="Vision & Mission" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/about/head-message"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="Head's Message" />
              </ListItemButton>
            </ListItem>

            <Divider
              sx={{
                my: 1,
                borderColor: "rgba(255,255,255,0.15)",
              }}
            />

            {/* Academics */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/academics"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="Academics" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/academics/programs"
                onClick={closeMobileMenu}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Programs" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/academics/curriculum"
                onClick={closeMobileMenu}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Curriculum" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/academics/academic-calendar"
                onClick={closeMobileMenu}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Academic Calendar" />
              </ListItemButton>
            </ListItem>

            <Divider
              sx={{
                my: 1,
                borderColor: "rgba(255,255,255,0.15)",
              }}
            />

            {/* Faculty */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/faculty"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="Faculty" />
              </ListItemButton>
            </ListItem>

            {/* Students */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/students"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>

            {/* Research */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/research"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="Research" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/research/areas"
                onClick={closeMobileMenu}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Research Areas" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/research/labs"
                onClick={closeMobileMenu}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Research Labs" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/research/publications"
                onClick={closeMobileMenu}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Publications" />
              </ListItemButton>
            </ListItem>

            <Divider
              sx={{
                my: 1,
                borderColor: "rgba(255,255,255,0.15)",
              }}
            />

            {/* Events */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/events"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="Events" />
              </ListItemButton>
            </ListItem>

            {/* Contact */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/contact"
                onClick={closeMobileMenu}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;