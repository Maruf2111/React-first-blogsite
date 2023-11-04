import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="footer-text">
                      <div className="footer-logo">
                        <NavLink to="/"><img src="./images/logo.png" alt="footer-logo" /></NavLink>
                      </div>
                      <p>Mymensing, Dhaka, Bangladesh</p>
                      <p>+453 345 435</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-text">
                      <h2 className="footer-title">Main Navigation</h2>
                      <NavLink to="/" className="footer-navbar">Home</NavLink>
                      <NavLink to="/service" className="footer-navbar">Service</NavLink>
                      <NavLink to="/about" className="footer-navbar">About</NavLink>
                      <NavLink to="/contact" className="footer-navbar">Contact</NavLink>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-text">
                      <h2 className="footer-title">Information For</h2>
                      <NavLink to="/contact" className="footer-navbar">How to Apply</NavLink>
                      <NavLink to="/contact" className="footer-navbar">Student Activities</NavLink>
                      <NavLink to="/contact" className="footer-navbar">Support</NavLink>
                      <NavLink to="/contact" className="footer-navbar">Others Information</NavLink>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-text">
                      <h2 className="footer-title">Quick Links</h2>
                      <NavLink to="/contact" className="footer-navbar">Apply Now</NavLink>
                      <NavLink to="/contact" className="footer-navbar">Blog</NavLink>
                      <NavLink to="/contact" className="footer-navbar">Teachers</NavLink>
                      <NavLink to="/contact" className="footer-navbar">Others Information</NavLink>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="copyright-section">
                        <p>&copy; Maruf Ahmod</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer