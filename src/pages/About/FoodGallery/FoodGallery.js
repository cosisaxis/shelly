import React from 'react'
import "./FoodGallery.css"

import image1 from "../../../assets/chicken.jpg"
import image2 from "../../../assets/chicken2.jpg"
import image3 from "../../../assets/chicken3.jpg"
import image4 from "../../../assets/chicken.jpg"
import image5 from "../../../assets/img1.jpg"
import image6 from "../../../assets/img2.jpg"
import image7 from "../../../assets/img3.jpg"
import image8 from "../../../assets/img4.jpg"
import image9 from "../../../assets/img5.jpg"
import image10 from "../../../assets/juice.jpg"


const FoodGallery = () => {
  return (
    <div className='gallery'>
        <figure className='gallery__item gallery__item-1'>
            <img src={image1} className='gallery_img' />
        </figure>
        <figure className='gallery__item gallery__item-2'>
            <img src={image2} className='gallery_img' />
        </figure>
        <figure className='gallery__item gallery__item-3'>
            <img src={image3} className='gallery_img' />
        </figure>
        <figure className='gallery__item gallery__item-4'>
            <img src={image4} className='gallery_img' />
        </figure>
        <figure className='gallery__item gallery__item-5'>
            <img src={image5} className='gallery_img' />
        </figure>
        <figure className='gallery__item gallery__item-6'>
            <img src={image6} className='gallery_img' />
        </figure>
        <figure className='gallery__item gallery__item-7'>
            <img src={image7} className='gallery_img' />
        </figure>
        <figure className='gallery__item gallery__item-8'>
            <img src={image8} className='gallery_img' />
        </figure>
        <figure className='gallery__item gallery__item-9'>
            <img src={image9} className='gallery_img' />
        </figure>
        <figure className='gallery__item gallery__item-10'>
            <img src={image10} className='gallery_img' />
        </figure>
    </div>
  )
}

export default FoodGallery