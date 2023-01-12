import React from 'react'
import HeroImage from "../../components/HeroImage/HeroImage";
import background from "../../assets/contact6.jpg";
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <div>
        <HeroImage
        bgImage={background}
        heading={["About us"]}
        text={"We bring decades of culinary experience right to your doorsteps"}
      />
      <ContactForm />
    </div>
  )
}

export default Contact