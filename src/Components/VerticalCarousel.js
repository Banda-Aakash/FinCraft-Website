import React, { useState } from 'react';
import './VerticalCarousel.css';

const VerticalCarousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setFade(false);
        }, 500);
    };

    const handlePrev = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
            setFade(false);
        }, 500);
    };

    return (
        <div className="vertical-vcarousel">
            <div className="vcarousel-wrapper">
                <div className="vcarousel-titles">
                    <button onClick={handlePrev} className="arrow-button">▲</button>
                    {slides.map((slide, index) => (
                        <h3 
                            key={index} 
                            className={`vcarousel-title ${index === currentIndex ? 'highlight' : ''}`}
                        >
                            {slide.title}
                        </h3>
                    ))}
                    <button onClick={handleNext} className="arrow-button">▼</button>
                </div>
                <div className={`vcarousel-content ${fade ? 'fade-out' : ''}`}>
                    <div className="vcarousel-description">
                        <h2>{slides[currentIndex].title}</h2>
                        <p>{slides[currentIndex].description}</p>
                    </div>
                    <div className="vcarousel-image">
                        <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalCarousel;
