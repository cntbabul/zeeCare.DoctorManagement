import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h3>{title}</h3>
        <p>
          ZeeCare Medical Institute offers advanced healthcare services with
          compassion and expertise. Our dedicated team provides personalized
          care to ensure your optimal health and well-being. Experience a
          harmonious journey to wellness at ZeeCare.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="./Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
