import React from 'react'
import HeroImage from '../../components/HeroImage/HeroImage'
import background from "../../assets/background.jpg"

const Menu = () => {
  return (
    <div>
      <HeroImage 
      bgImage = {background}
      heading = {["Menu"]}
      text = {"Take a look at our incredible menu"}
    
    
      />
    </div>
  )
}

export default Menu