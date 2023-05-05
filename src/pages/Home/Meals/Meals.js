import React, { useState } from "react";
import "./Meals.css";
import image1 from "../../../assets/ackee.jpg";
import image2 from "../../../assets/curry.jpg";
import image3 from "../../../assets/img3.jpg";
import image4 from "../../../assets/img4.jpg";
import image5 from "../../../assets/img5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillStarFill } from "react-icons/bs";

import Slider from "react-slick";

const Meals = () => {
  const [dishs, setDishs] = useState([
    // { id: 1, url: image1 },
    { id: 2, url: image2 },
    // { id: 3, url: image3 },
    // { id: 4, url: image4 },
    { id: 4, url: image5 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="section">
      <div className="container">
        <div className="meal-container">
          <div className="meal-carousel">
            <div>
              <Slider {...settings}>
                {dishs.map((dish) => (
                  <div key={dish.id}>
                    <img src={dish.url} alt="carousel-pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="meal-content">
            <h2 className="heading-secondary">
              Amzingg meals <span className="ampersand">&#38;</span>
              <br />
              <span>
                Home <br /> Cooked
              </span>
            </h2>
            <h4>We hope to hear from you soon</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
              <br />
              <br />
              Veritatis obcaecati tenetur iure eius earum ut molestias
              architecto voluptate aliquam nihil, eveniet aliquid culpa officia
              aut! Impedit sit sunt quaerat, odit,
            </p>
            <blockquote>
              Veritatis obcaecati tenetur iure eius earum ut molestias
            </blockquote>
          </div>
        </div>
        <div className="meal-card-container">
          <div className="meal-card meal-card-left">
            <img src={image1} alt="" className="meal-card-image" />
            <div className="meal-card-content">
              <div className="meal-card-title">
                <BsFillStarFill color="#fff" />
                <h3 className="heading-tertiary">
                  the best <span>ingredients</span>
                </h3>
              </div>
              <p>
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet
              </p>
            </div>
          </div>
          <div className="meal-card meal-card-right">
            <img src={image2} alt="" className="meal-card-image" />
            <div className="meal-card-content">
              <div className="meal-card-title">
                <BsFillStarFill color="#fff" />
                <h3 className="heading-tertiary">
                  the best <span>ingredients</span>
                </h3>
              </div>
              <p>
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
