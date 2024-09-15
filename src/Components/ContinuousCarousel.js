// ContinuousCarousel.js
import React from 'react';
import './ContinuousCarousel.css';

const ContinuousCarousel = ({ items }) => {
  return (
    <div className="carousel-container2">
      <div className="carousel2">
        {items.concat(items).map((item, index) => (
          <div key={index} className="carousel-item2">
            <img src={item.src} alt={item.alt} className="carousel-image2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousCarousel;
