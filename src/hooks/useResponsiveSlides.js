import { useState, useEffect } from "react";

const useResponsiveSlides = ({
  breakpoints = { x_small: 1, small: 2, medium: 3, large: 4 }
}) => {
  const [slidesToShow, setSlidesToShow] = useState(breakpoints.large);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;

        if (width < 540) {
          setSlidesToShow(breakpoints.x_small);
        } else if (width < 992) {
          setSlidesToShow(breakpoints.small);
        } else if (width <= 1200) {
          setSlidesToShow(breakpoints.medium);
        } else {
          setSlidesToShow(breakpoints.large);
        }
      }
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, [breakpoints]);

  return slidesToShow;
};

export default useResponsiveSlides;
