import React from "react";
import FabSocial from "./components/FabSocial";

import Navbar from "./components/NavBar";
import HomeC from "./components/HomeC";
import Motive from "./components/Motive";
import VideoSection from "./components/VideoSection"; // New import
import SocialGird from "./components/SocialGird";
import Features from "./components/Features"; 
import FAQ from "./components/FAQ"; 
import DevelopmentNotice from "./components/DevelopmentNotice"; 

function App() {
  return (
    <>
      <Navbar />
      <DevelopmentNotice />
      <HomeC />
      <Motive />
      <VideoSection /> {/* New component */}
      <Features /> 
      <FAQ />
      <FabSocial />
      <SocialGird />
    </>
  );
}

export default App;
