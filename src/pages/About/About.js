import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import background from "../../assets/background2.jpg";
import AboutInfo from "./AboutInfo/AboutInfo";
import ResData from "./ResData/ResData";

const About = () => {
  return (
    <div>
      <HeroImage
        bgImage={background}
        heading={["About us"]}
        text={"We bring decades of culinary experience right to your doorsteps"}
      />
      <AboutInfo />
      <ResData />
    </div>
  );
};

export default About;
