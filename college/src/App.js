import { BrowserRouter, Routes, Route } from "react-router-dom";

// ================= HEADER & FOOTER =================
import TopBar from "./components/Header/TopBar";
import MainHeader from "./components/Header/MainHeader";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

// ================= HOME =================
import Home from "./pages/Home";

// ================= ABOUT =================
import About from "./pages/About/About";
import VisionMission from "./pages/About/VisionMission";
import HeadMessage from "./pages/About/HeadMessage";

// ================= ACADEMICS =================
import Academics from "./pages/Academics/Academics";
import ProgramsPage from "./pages/Academics/Programs";
import Curriculum from "./pages/Academics/Curriculum";
import AcademicCalendar from "./pages/Academics/AcademicCalendar";

// ================= FACULTY =================
import FacultyPage from "./pages/Faculty/FacultyPage";

// ================= STUDENTS =================
import Students from "./pages/Students/Students";

// ================= RESEARCH =================
import Research from "./pages/Research/Research";
import ResearchAreas from "./pages/Research/ResearchAreas";
import ResearchLabs from "./pages/Research/ResearchLabs";
import Publications from "./pages/Research/Publications";

// ================= EVENTS =================
import EventsPage from "./pages/Events/EventsPage";

// ================= CONTACT =================
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <BrowserRouter>

      {/* ================= HEADER ================= */}
      <TopBar />
      <MainHeader />
      <Navbar />


      {/* ================= MAIN CONTENT ================= */}
      <main>

        <Routes>

          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* ================= ABOUT ================= */}
          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/about/vision-mission"
            element={<VisionMission />}
          />

          <Route
            path="/about/head-message"
            element={<HeadMessage />}
          />


          {/* ================= ACADEMICS ================= */}
          <Route
            path="/academics"
            element={<Academics />}
          />

          <Route
            path="/academics/programs"
            element={<ProgramsPage />}
          />

          <Route
            path="/academics/curriculum"
            element={<Curriculum />}
          />

          <Route
            path="/academics/academic-calendar"
            element={<AcademicCalendar />}
          />


          {/* ================= FACULTY ================= */}
          {/* Faculty information appears ONLY at /faculty */}
          <Route
            path="/faculty"
            element={<FacultyPage />}
          />


          {/* ================= STUDENTS ================= */}
          {/* Student information appears ONLY at /students */}
          <Route
            path="/students"
            element={<Students />}
          />


          {/* ================= RESEARCH ================= */}
          {/* Research information appears ONLY on research pages */}
          <Route
            path="/research"
            element={<Research />}
          />

          <Route
            path="/research/areas"
            element={<ResearchAreas />}
          />

          <Route
            path="/research/labs"
            element={<ResearchLabs />}
          />

          <Route
            path="/research/publications"
            element={<Publications />}
          />


          {/* ================= EVENTS ================= */}
          {/* Events appear ONLY at /events */}
          <Route
            path="/events"
            element={<EventsPage />}
          />


          {/* ================= CONTACT ================= */}
          {/* Contact information appears ONLY at /contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* ================= 404 PAGE ================= */}
          <Route
            path="*"
            element={
              <div
                style={{
                  minHeight: "60vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "40px",
                }}
              >
                <h1>404</h1>
                <p>Page Not Found</p>
              </div>
            }
          />

        </Routes>

      </main>


      {/* ================= FOOTER ================= */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;