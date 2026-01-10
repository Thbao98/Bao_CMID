import React, { useState } from 'react';
import './Carousel.css';

const images = [
  'https://picsum.photos/900/400?random=1',
  'https://picsum.photos/900/400?random=2',
  'https://picsum.photos/900/400?random=3',
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>‹</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="arrow right" onClick={nextSlide}>›</button>
    </div>
  );
}

export default Carousel;
