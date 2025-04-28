import React from 'react'
import "./HeroComponent.css"
import CounterComponent from '../CounterComponent/CounterComponent'
export default function HeroComponent({main_img, title, heading, highlighted, text}) {
  return (
    <div className='mx-162 main-hero-container'>
      <div className="hero-main-img" data-aos="fade-right">
        <img src={main_img} alt="main-img"/>
      </div>
      <div className="hero-text-container" data-aos="zoom-in">
        <span className="greeting fs-22">{title}</span>
        <h3 className='hero-heading fs-54'>{heading}<span className='highlighted'>{highlighted}</span></h3>
        <p className='hero-paragraph fs-20'>{text}</p>
        <CounterComponent/>
      </div>
    </div>
  )
}
