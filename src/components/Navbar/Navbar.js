import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import CallButton from "../CallButton/CallButton";
import "./Navbar.css";

const Navbar = () => {
  const [burgerClick, setBurgerClick] = useState(false);
  const burgerClicking = () =>{
    setBurgerClick(!burgerClick)
  }
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <Link>
            <img src={logo} alt="logo" width={100} />
          </Link>
          <ul className={burgerClick? "navbar-menu active" : "navbar-menu"}>
            <li onClick={burgerClicking}>
              <NavLink className="nav-item" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={burgerClicking}>
              <NavLink className="nav-item" to="/about">
                About
              </NavLink>
            </li>
            <li onClick={burgerClicking}>
              <NavLink className="nav-item" to="/menu">
                Menu
              </NavLink>
            </li>
            <li onClick={burgerClicking}>
              <NavLink className="nav-item" to="/delivery">
                Delivery
              </NavLink>
            </li>
            <li onClick={burgerClicking}>
              <NavLink className="nav-item" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              {/* <button onClick={burgerClicking}>Contact us</button> */}
              <CallButton phoneNumber="8768672788" />

            </li>
          </ul>
          <div className="burger" onClick={burgerClicking}>
            {burgerClick ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
