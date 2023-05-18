import React from 'react'
import './SliderComponent.css';
import { NavLink } from 'react-router-dom';
function SliderComponent() {
  return (
    <div className='SliderComponent'>
      
        <div className='fix-content'>
        <div>
        <h1>We Are Creative <span>Denab Agency</span></h1>
        <h5>We Are Professional Freelance Web Desiners</h5>
        <p>Nulla id euismod massa. Donce accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.
        </p>
        <NavLink to="/contact" activeClassName="active">
          <button className="hire-btn">HIRE US</button>
        </NavLink>
        </div>
        </div>
        <div className='variable-images'>
            <img src={require('../banner_1.0f834e57.png')} alt="" />
        </div>
        <div className='three-dots'><NavLink to="/contact" activeClassName="active">
          <button className="hire-btn">HIRE US</button>
        </NavLink></div>
        
    </div>
  )
}

export default SliderComponent