import { useState, useEffect } from "react";

const useResponsiveSlides = ({
  breakpoints = { x_small: 1, small: 2, medium: 3, large: 4 }}) => {
  const [displayedSlides, setDisplayedSlides] = useState(breakpoints.large);

  useEffect(() => {
    const Monitor = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;

        if (width < 540) {
          setDisplayedSlides(breakpoints.x_small);
        } else if (width < 992) {
          setDisplayedSlides(breakpoints.small);
        } else if (width <= 1200) {
          setDisplayedSlides(breakpoints.medium);
        } else {
          setDisplayedSlides(breakpoints.large);
        }
      }
    });

    Monitor.observe(document.documentElement);

    return () => {
      Monitor.disconnect();
    };
  }, [breakpoints]);

  return displayedSlides;
};

export default useResponsiveSlides;
