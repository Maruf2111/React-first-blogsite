import React from 'react'
import { NavLink } from 'react-router-dom'

function Hero(props) {
  return (
    <div className="hero-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="hero-text">
                        <h4> {props.title4} </h4>
                        <h1 className='hero-title'> {props.title} </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae modi eius blanditiis id iure tempora placeat, odit incidunt nostrum.</p>
                        <NavLink to="/about"><button className="hero-btn"> Read More </button></NavLink>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hero-image">
                        <img src={props.image} alt="hero-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero