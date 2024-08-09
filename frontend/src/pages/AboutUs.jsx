import React from "react";
import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography.jsx";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Welcome to ZeeCare Clinic | Your Trusted Caregiver"}
        imageUrl={"./about.png"}
      />
      <Biography imageUrl={"../../public/whoweare.png"} />
    </>
  );
};

export default AboutUs;
