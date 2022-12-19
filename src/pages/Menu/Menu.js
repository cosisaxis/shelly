import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import background from "../../assets/background.jpg";
import TodaysMenu from "./TodaysMenu/TodaysMenu";
import Friday from "./Friday/Friday";

const Menu = () => {
  return (
    <div>
      <HeroImage
        bgImage={background}
        heading={["Menu"]}
        text={"Take a look at our incredible menu"}
      />
      <TodaysMenu />
      <Friday />
    </div>
  );
};

export default Menu;
