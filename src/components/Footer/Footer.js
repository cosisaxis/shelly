import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <Link>
            <img src={logo} alt="logo" width={150} />
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Friday</h3>
            <p>Opening hours: 5:00pm</p>
            <p>Closing hours: 9:00pm</p>
            <p>(876) 301 9218</p>
            <Link to="#" className="text-white">
              shellynyamings@gmail.com
            </Link>
          </div>
          <div className="footer-grid-item">
            <h3>Saturday</h3>
            <p>Opening hours: 3:00pm</p>
            <p>Closing hours: 9:00pm</p>
            <p>(876) 301 9218</p>
            <Link to="#" className="text-white">
              shellynyamings@gmail.com
            </Link>
          </div>
          <div className="footer-grid-item">
            <h3>Friday</h3>
            <p>Opening hours: 1:00pm</p>
            <p>Closing hours: 7:00pm</p>
            <p>(876) 301 9218</p>
            <Link to="#" className="text-white">
              shellynyamings@gmail.com
            </Link>
          </div>

          {/* <div className="footer-grid-item">
            <h3>enfold seattle</h3>
            <p>4326 University Way NE</p>
            <p>Seattle, WA, United States</p>
            <p>(555) 345 888</p>
            <Link to="#" className="text-white">
              seattle@enfold-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>enfold dallas</h3>
            <p>11311 Harry Hines Blvd</p>
            <p>Dallas, TX, United States</p>
            <p>(555) 389 976</p>
            <Link to="#" className="text-white">
              dallas@enfold-restaurant.com
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
