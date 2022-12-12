import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                welcome to <span>Shelly's</span> 
            </h1>

            <p className='text-white'>The best home-style restaurant available in Jamaica</p>

            <p className='text-white'>
                Book online or call <span className='special-word'>(876)867-2788</span>
            </p>
        </div>
    </div>
  )
}

export default Hero