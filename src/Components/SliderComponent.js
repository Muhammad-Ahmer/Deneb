import React, { useState } from 'react';

import './SliderComponent.css';
import { NavLink } from 'react-router-dom';
function SliderComponent() {

  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

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
        <div className='variable-images' >
          <img src={require('../banner_1.0f834e57.png')} alt='' />
        </div>
    
        <div class="slider-dots">
        <div className={`slider-dot ${activeDot === 0 ? 'active' : ''}`} onClick={() => {handleDotClick(0)}}></div>
        <div className={`slider-dot ${activeDot === 1 ? 'active' : ''}`} onClick={() => {handleDotClick(1)}}></div>
        <div className={`slider-dot ${activeDot === 2 ? 'active' : ''}`} onClick={() => {handleDotClick(2)}} ></div>
        </div>
    </div>
  );
}

export default SliderComponent 