import React from 'react'
import HeroImage from "../../components/HeroImage/HeroImage";
import background from "../../assets/delivery.jpg";
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';


const Delivery = () => {
  return (
    <div>
        <HeroImage
        bgImage={background}
        heading={["Menu"]}
        text={"Take a look at our incredible menu"}
      />
      <DeliveryInfo />
    </div>
  )
}

export default Delivery