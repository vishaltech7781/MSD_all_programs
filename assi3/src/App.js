import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Hero />

      <About />

      <Education />

      <Skills />

      <Projects />

      <Contacts />

      <Footer />

    </div>
  );
}

export default App;