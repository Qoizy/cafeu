import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import MenuItems from "./components/MenuItems";
import ComingSoon from "./components/ComingSoon";
import TeamMember from "./components/TeamMember";
import Testimonial from "./components/Testimonial";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Newsletter />
      <MenuItems />
      <ComingSoon />
      <TeamMember />
      <Testimonial />
      <LatestNews />
      <Footer />
    </>
  );
}

export default App;
