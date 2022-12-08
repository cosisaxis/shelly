import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from "../../assets/logo.png"
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <Link>
          <img src={logo} alt="logo" width={100} />
          </Link>
          <ul className='navbar-menu'>
            <li>
              <NavLink className="nav-item" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/delivery">Delivery</NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/contact">Contact</NavLink>
            </li>
            <li>
              <button>Contact us</button>
            </li>
          </ul>
          <div className='burger'>
            <FaTimes size={20} style={{color:"#fff"}} />
            <FaBars size={20} style={{color:"#fff"}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar