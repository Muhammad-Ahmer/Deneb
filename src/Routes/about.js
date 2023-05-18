import React, { useState, useRef } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    { image: '../logo.png', caption: 'Slide 1' },
    { image: 'image2.jpg', caption: 'Slide 2' },
    { image: 'image3.jpg', caption: 'Slide 3' },
    // Add more slide data as needed
  ];

  const currentSlide = slides[currentIndex];

  const handleMouseDown = (event) => {
    setDragging(true);
    setStartX(event.clientX || event.touches[0].clientX);
  };

  const handleMouseMove = (event) => {
    if (!dragging) return;
    const currentX = event.clientX || event.touches[0].clientX;
    const deltaX = currentX - startX;
    const sliderWidth = sliderRef.current.offsetWidth;
    const threshold = sliderWidth * 0.3; // Adjust the threshold value as needed

    if (deltaX > threshold) {
      goToPreviousSlide();
    } else if (deltaX < -threshold) {
      goToNextSlide();
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const goToPreviousSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="slider"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      ref={sliderRef}
    >
      <img src={currentSlide.image} alt={currentSlide.caption} />
      <div className="caption">{currentSlide.caption}</div>
    </div>
  );
};

function about() {
  return (
    <div>
      <h1>About Page</h1>
      <Slider />
    </div>
  );
}

export default about;
