import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import background from "../../assets/background2.jpg";
import AboutInfo from "./AboutInfo/AboutInfo";
import ResData from "./ResData/ResData";
import FoodGallery from "./FoodGallery/FoodGallery";

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
      {/* <FoodGallery /> */}
    </div>
  );
};

export default About;
