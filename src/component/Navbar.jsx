import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import { CgMenu, CgClose } from "react-icons/cg";

function Navbar() {

    const [open, openMenu] = useState(false);

  return (
    <div className="navbar-section">
        <div className="navbar-logo">
            <NavLink to="/">
                <img src="./images/logo.png" alt="logo" />
            </NavLink>
        </div>
        <div className={open ? "navbar-list active" : "navbar-list"}>
            <ul className="navbar-item">
                <NavLink to="/" className="list-item"> <li> Home </li></NavLink>
                <NavLink to="/service" className="list-item"> <li> Service </li></NavLink>
                <NavLink to="/about" className="list-item"> <li> About </li></NavLink>
                <NavLink to="/contact" className="list-item"> <li> Contact </li></NavLink>
            </ul>
            <div className="navbar-icon">
                <CgMenu className="menuBar" onClick={()=>openMenu(true)} />
                <CgClose className="menuClose" onClick={()=>openMenu(false)}  />
            </div>
        </div>
    </div>
  )
}

export default Navbar;