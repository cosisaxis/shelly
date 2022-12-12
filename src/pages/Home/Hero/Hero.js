import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-image'>
        <div className='hero-content'>
            <h1 className='hero-header'>
                Welcome to <span className='hero-name'>Shelly's</span>
            </h1>
            <p className='hero-text'>The best home style cooking in jamaica</p>
            <p className='hero-text'>You can contact us at <span className='hero-number'>1876-867-27-88</span></p>
        </div>
    </div>
  )
}

export default Hero