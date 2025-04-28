import React from 'react'
import './BaseContainerComponent.css'
export default function BaseContainerComponent({children, className=""}) {
  return (
    <div className={`base-container ${className}`} data-aos={(className === "footer" || className === "learn-more-btn") ? "zoom-in" : "flip-left"}>
      {children}
    </div>
  )
}
