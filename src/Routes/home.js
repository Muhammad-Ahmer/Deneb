import React from 'react'
import './home.css';

import SliderComponent from '../Components/SliderComponent';
import ProjectSlider from '../Components/projectSlider';
import TestimonialSlider from '../Components/testimonialSlider';
function home() {
  return (
    <div className='home'>

      <SliderComponent />
      <ProjectSlider />
      <TestimonialSlider />
    
    </div>
  )
}

export default home