import React, { useEffect, useState } from 'react';
import './SliderComponent.css';

export default function SliderComponent({ children }) {
  const [position, setPosition] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); 
  const totalCards = children.length;

  const updateCardsToShow = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setCardsToShow(3); 
    } else if (width >= 992) {
      setCardsToShow(2); 
    } else {
      setCardsToShow(1); 
    }
  };

  
  useEffect(() => {
    updateCardsToShow(); 
    window.addEventListener('resize', updateCardsToShow); 
    return () => {
      window.removeEventListener('resize', updateCardsToShow); 
    };
  }, []);


  const handleNext = () => {
    setPosition((prev) => (prev + cardsToShow) % totalCards);
  };

  const handlePrev = () => {
    setPosition((prev) => (prev - cardsToShow + totalCards) % totalCards); 
  };

  const visibleCards = [
    ...children.slice(-position),
    ...children.slice(0, totalCards - position),
  ];

  return (
    <div className="main-slider-container">

      <button className="left-arrow" onClick={handlePrev}>
        <img src="/assets/icons/slider_left_arrow.svg" alt="left arrow" />
      </button>

      <div className="slider-wrapper">
        {visibleCards.slice(0, cardsToShow).map((card, index) => (
          <div className="slider-card" key={index}>
            {card}
          </div>
        ))}
      </div>

      <button className="right-arrow" onClick={handleNext}>
        <img src="/assets/icons/slider_right_arrow.svg" alt="right arrow" />
      </button>


      <div className="mobile-buttons">
        <button className="left-arrow-mobile" onClick={handlePrev}>
          <img src="/assets/icons/slider_left_arrow.svg" alt="left arrow" />
        </button>
        <button className="right-arrow-mobile" onClick={handleNext}>
          <img src="/assets/icons/slider_right_arrow.svg" alt="right arrow" />
        </button>
      </div>
    </div>
  );
}
