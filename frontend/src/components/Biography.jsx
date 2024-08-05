import React from "react";

const Biography = ({ imageUrl, children }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="about-image" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit,
          ipsam edit consequuiam tenetur incidunt ipsum.
        </p>
        <p>Lorem ipsum dolor, Obcaecatioklfsdkg ljafoashf</p>
        <p>lorem ipsum det consecsit</p>
        <p>
          lorem ipsum tore, rem, est vero illo voluptas quisq tore, rem, est
          vero illo volillo voluptas quisq dolor sit
        </p>
      </div>
    </div>
  );
};

export default Biography;
