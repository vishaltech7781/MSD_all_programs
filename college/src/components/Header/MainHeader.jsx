import { Award } from "lucide-react";
import { Box } from "@mui/material";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container main-header-container">

        {/* ================= BRAND ================= */}

        <div className="brand">

          <Box className="brand-logo">
            <img
              src="/logo.png"
              alt="College Logo"
            />
          </Box>

          <div className="brand-content">

            <span className="brand-department">
              Department of
            </span>

            <h1>
              Computer Science & Engineering
            </h1>

            <p>
              D. Y. COLLEGE OF ENGINEERING AND TECHNOLOGY
            </p>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="header-highlight">

          <Award
            size={32}
            strokeWidth={1.8}
          />

          <div className="header-highlight-content">

            <strong>
              Excellence in
            </strong>

            <span>
              Technology & Innovation
            </span>

          </div>

        </div>

      </div>
    </header>
  );
};

export default MainHeader;