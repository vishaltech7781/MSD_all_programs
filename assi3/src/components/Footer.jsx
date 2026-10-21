import React from "react";

import {
  Typography
} from "@mui/material";

import resumeData from "../data/resumeData";

function Footer() {
  return (
    <footer className="footer">

      <Typography
        variant="body2"
        className="footer-text"
      >
        © 2026 {resumeData.name}. All Rights Reserved.
      </Typography>

    </footer>
  );
}

export default Footer;