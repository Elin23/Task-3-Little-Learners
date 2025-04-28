import React, { useEffect, useState } from 'react'
import "./AdComponent.css"
import { Link } from 'react-router-dom'
export default function AdComponent({text, icon}) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(()=>{
    const handleIsScrolled= () =>{
      if(window.scrollY > 50){
        setIsVisible(false); // Hide the ad in scrolling down more than 50px
      }else{
        setIsVisible(true); 
      }
    };
    window.addEventListener('scroll', handleIsScrolled);
    return () => window.removeEventListener('scroll', handleIsScrolled);
  }, []);
  return (
    <div className={`mx-50 ad-container ${isVisible ? 'show-ad' : 'hide-ad'}`} data-aos="fade-down">
      <img className='ad-decoration' src="/assets/imgs/abstract_4.png" alt="decoration" />
      <Link to={"/"} className="ad-text">
        <span className='fs-20'>{text}</span>
        <img src={icon} alt="icon" />
      </Link>
      <img className='ad-decoration' src="/assets/imgs/abstract_1.png" alt="decoration" />
    </div>
  )
}
