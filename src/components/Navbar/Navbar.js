import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
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
            <li>
              <NavLink className="nav-item" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/delivery">
                Delivery
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <button>Contact us</button>
            </li>
          </ul>
          <div className="burger" onClick={burgerClicking}>
            {burgerClick ? (
              <FaTimes size={20} style={{ color: "#000" }} />
            ) : (
              <FaBars size={20} style={{ color: "000" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
