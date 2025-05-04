import React from 'react'
import './TitleComponent.css'
export default function TitleComponent({heading, title, text}) {
  return (
    <div className='title-container mt-200'>
      <div className="title-head"><span className='fs-18'>{heading}</span></div>
      <h3 className='fs-58 section-title'>{title}</h3>
      <span className='fs-20 section-text'>{text}</span>
    </div>
  )
}
