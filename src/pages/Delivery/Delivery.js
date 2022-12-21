import React from 'react'
import HeroImage from "../../components/HeroImage/HeroImage";
import background from "../../assets/delivery.jpg";
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';


const Delivery = () => {
  return (
    <div>
        <HeroImage
        bgImage={background}
        heading={["Delivery"]}
        text={"Our delivery options brought to you"}
      />
      <DeliveryInfo />
    </div>
  )
}

export default Delivery