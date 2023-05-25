import React from 'react';
import './testimonialSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function testimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
  
    <div className='slider'>
      
<img className='picture' src={require('../shape_12.d7b08d33.png')} alt="" />
      <div className='backPictures'>
<div className='heading-parent'>
        <h1 className='heading'>What People Say</h1>
        </div>
   
        <p className='parahgraph'>
When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>

<img className='small-img1' src={require('../1.3489a412.png')} alt="" />
<img className='small-img2' src={require('../2.17c2abf4.png')} alt="" />
<img className='small-img3' src={require('../3.16f972fc.png')} alt="" />
<img className='small-img4' src={require('../4.e4d69878.png')} alt="" />
<img className='small-img5' src={require('../5.4e5c8486.png')} alt="" />
<img className='small-img6' src={require('../6.828df4c3.png')} alt="" />
<img className='small-img7' src={require('../7.166ec4ea.png')} alt="" />

    <Slider className='containerr' {...settings} >
    <div  >
      <div className='testimonialContent'>
<div className='backgroundDiv'>
  <img className='testimonialImage' src={require('../testimonial_1.0ba28906.jpg')} alt="" />
  </div>
  <div className='icon'>“</div>
      <div>
        <h1>John Doe</h1>
        <h3>Freelancer UX Designer</h3>
        <p>Donec condimentum vehicula iaculis. Maecenas in aliquet neque. Suspendisse viverra, ante eget
pellentesque pulvinar, nunc nisi molestie ligula, vitae convallis orci justo vitae sem. Integer vitae
imperdiet augue, sed accumsan diam. Etiam non quam commodo dolor convallis cursus. Duis
tempus dolor eget gravida fringilla. In ultricies velit eget sem tempus egestas</p>
</div>
      </div>
    </div>
    <div >

       <div className='testimonialContent'>
      
<div className='backgroundDiv'><img className='testimonialImage' src={require('../testimonial_2.8d9f563b.jpg')} alt="" /></div>
<div className='icon'>“</div>
<h1>Jake Johanson</h1>
        <h3>Web Developer</h3>

        <p>Donec condimentum vehicula iaculis. Maecenas in aliquet neque. Suspendisse viverra, ante eget
pellentesque pulvinar, nunc nisi molestie ligula, vitae convallis orci justo vitae sem. Integer vitae
imperdiet augue, sed accumsan diam. Etiam non quam commodo dolor convallis cursus. Duis
tempus dolor eget gravida fringilla. In ultricies velit eget sem tempus egestas</p>
      </div>
    </div>
<div>
<div className='testimonialContent'>
<div className='backgroundDiv'><img className='testimonialImage' src={require('../testimonial_3.26b66826.jpg')} alt="" /></div>
<div className='icon'>“</div>
<h1>Celesto Anderson</h1>
        <h3>Graphic Designer</h3>

        <p>Donec condimentum vehicula iaculis. Maecenas in aliquet neque. Suspendisse viverra, ante eget
pellentesque pulvinar, nunc nisi molestie ligula, vitae convallis orci justo vitae sem. Integer vitae
imperdiet augue, sed accumsan diam. Etiam non quam commodo dolor convallis cursus. Duis
tempus dolor eget gravida fringilla. In ultricies velit eget sem tempus egestas</p>
      </div>
    </div>
    </Slider>
    </div>
    </div>

  );
}
export default testimonialSlider 