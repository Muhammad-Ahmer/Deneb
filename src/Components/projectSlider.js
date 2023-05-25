import React from 'react';
import './projectSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';


function projectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='slider'>
      {/* <img className='pic' src={require('../shape_1.db11f05a.png')} alt="" /> */}
    <Slider className='container' {...settings} >
<div>
    <div  className='SliderComponent'>
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
    </div>
    </div>


    <div  >
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
          <img src={require('../banner_02.3f4ea2a0.png')} alt='' />
        </div>
    </div>
    </div>
    
    <div  >
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
          <img src={require('../banner_03.d032c081.png')} alt='' />
        </div>
    </div>
    </div>
    </Slider>
    </div>

  );
}
export default projectSlider 