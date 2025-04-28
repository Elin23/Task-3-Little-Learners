import React, { useEffect, useRef, useState } from 'react';
import './CounterComponent.css';
import { statistics } from '../../data/statistics';

export default function CounterComponent() {
  return (
    <div className='statistics-container'>
      {statistics.map((value, index) => (
        <CounterBox key={index} count={value.count} label={value.label} />
      ))}
    </div>
  );
}

function CounterBox({ count, label }) {
  const ref = useRef();
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    setCurrentCount(0); 
    let start = 0;
    const duration = 2000; 
    const increment = count / (duration / 16); 

    const counter = setInterval(() => {
      start += increment;
      if (start >= count) {
        start = count;
        clearInterval(counter);
      }
      setCurrentCount(Math.floor(start));
    }, 16); 
  };

  return (
    <div className="static-box" ref={ref}>
      <div className="box-value fs-44">+{currentCount}</div>
      <div className="box-label fs-18">{label}</div>
    </div>
  );
}
