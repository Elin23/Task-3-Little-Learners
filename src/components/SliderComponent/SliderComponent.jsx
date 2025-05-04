import { useState } from "react";
import "./SliderComponent.css";
import useResponsiveSlides from "../../hooks/useResponsiveSlides";

const SliderComponent = ({ children, className = "", label = "", sideContent = null }) => {
  const breakpoints =
    className === "gallery"
      ? { x_small: 1, small: 2, medium: 3, large: 4 }
      : { x_small: 1, small: 1, medium: 2, large: 3 };

  // note: I used useResponsiveSlides instead of window.innerWidth because it's more accurate.
  // It watches the screen size directly and updates the number of cards to show based on that.
  const cardsPerSlide = useResponsiveSlides({ breakpoints })

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalChildren = children.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + cardsPerSlide) % totalChildren);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - cardsPerSlide + totalChildren) % totalChildren
    );
  };

  // get the cards that should be visible in the current view
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsPerSlide; i++) {
      const index = (currentIndex + i) % totalChildren;
      visible.push(children[index]);
    }
    return visible;
  };

  return (
    <div
      className={`slider-section ${["awards", "gallery"].includes(className) ? "show-label" : ""}`}>
      <div className="slider-wrapper">
        <div className="desktop-btns">
          <button className="slider-btn" onClick={prevSlide}>
            <img src="/assets/icons/slider_left_arrow.svg" alt="Previous" />
          </button>
        </div>

        <div className={`slider-container ${className == "gallery" ? "gallery" : ""}`}>
          <div className={`slides ${className}`}>
            {getVisibleCards()}
          </div>

          <div className="btns-container">
            {/* Optional button next to slider */}
            {label && <button className="more-cards fs-18">{label}</button>}
            {/* Optional title next to slider */}
            {sideContent && <div className="side-content-title fs-34">{sideContent.title}</div>}

            <div className="mobile-btns">
              <button className="slider-btn" onClick={prevSlide}>
                <img src="/assets/icons/slider_left_arrow.svg" alt="Previous" />
              </button>
              <button className="slider-btn" onClick={nextSlide}>
                <img src="/assets/icons/slider_right_arrow.svg" alt="Next" />
              </button>
            </div>
          </div>
          {/* Optional description under the slider */}
          {sideContent && <p className="side-content-desc fs-20">{sideContent.desc}</p>}
        </div>

        <div className="desktop-btns">
          <button className="slider-btn" onClick={nextSlide}>
            <img src="/assets/icons/slider_right_arrow.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;

