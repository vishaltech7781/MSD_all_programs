import Hero from "../components/Hero/Hero";

import Welcome from "../components/Sections/Welcome";
import Statistics from "../components/Sections/Statistics";
import LatestUpdates from "../components/Sections/LatestUpdates";
import Programs from "../components/Sections/Programs";
import Faculty from "../components/Sections/Faculty";
import Research from "../components/Sections/Research";
import Facilities from "../components/Sections/Facilities";
import Placements from "../components/Sections/Placements";
import Events from "../components/Sections/Events";
import CTA from "../components/Sections/CTA";

const Home = () => {
  return (
    <>
      <Hero />

      <Welcome />

      <Statistics />

      <LatestUpdates />

      <Programs />

      {/* <Faculty /> */}

      <Research />

      <Facilities />

      <Placements />

      <Events />

      <CTA />
    </>
  );
};

export default Home;