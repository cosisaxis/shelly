import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import background from "../../assets/background2.jpg";

const About = () => {
  return (
    <div>
      <HeroImage
        bgImage={background}
        heading={["About us"]}
        text={"We bring decades of culinary experience right to your doorsteps"}
      />
    </div>
  );
};

export default About;
