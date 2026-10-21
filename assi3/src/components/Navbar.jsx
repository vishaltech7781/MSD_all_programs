import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Avatar,
  Switch
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import FolderIcon from "@mui/icons-material/Folder";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from "@mui/icons-material/GitHub";

import resumeData from "../data/resumeData";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (event) => {

    const isDark = event.target.checked;

    setDarkMode(isDark);

    document.querySelector(".App").classList.toggle(
      "dark-mode",
      isDark
    );
  };

  return (
    <AppBar
      position="sticky"
      className="navbar"
    >

      <Toolbar>

        {/* Avatar */}
        <Avatar
          sx={{
            width: 40,
            height: 40,
            marginRight: 1.5,
            backgroundColor: "#2563eb",
            fontWeight: "bold"
          }}
        >
          VB
        </Avatar>


        {/* Name */}
        <Typography
          variant="h6"
          className="navbar-title"
          sx={{ flexGrow: 1 }}
        >
          Vishal Biradar
        </Typography>


        {/* About */}
        <Tooltip title="About">
          <IconButton
            color="inherit"
            href="#about"
          >
            <PersonIcon />
          </IconButton>
        </Tooltip>


        {/* Education */}
        <Tooltip title="Education">
          <IconButton
            color="inherit"
            href="#education"
          >
            <SchoolIcon />
          </IconButton>
        </Tooltip>


        {/* Skills */}
        <Tooltip title="Skills">
          <IconButton
            color="inherit"
            href="#skills"
          >
            <CodeIcon />
          </IconButton>
        </Tooltip>


        {/* Projects */}
        <Tooltip title="Projects">
          <IconButton
            color="inherit"
            href="#projects"
          >
            <FolderIcon />
          </IconButton>
        </Tooltip>


        {/* Contact */}
        <Tooltip title="Contact">
          <IconButton
            color="inherit"
            href="#contact"
          >
            <ContactMailIcon />
          </IconButton>
        </Tooltip>


        {/* GitHub */}
        <Tooltip title="GitHub">
          <IconButton
            color="inherit"
            href={resumeData.github.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>


        {/* Dark / Light Switch */}
        <Tooltip
          title={darkMode ? "Dark Mode" : "Light Mode"}
        >
          <Switch
            checked={darkMode}
            onChange={handleThemeChange}
            color="default"
          />
        </Tooltip>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;