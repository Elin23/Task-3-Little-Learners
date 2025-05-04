import React from 'react'
import './BaseContainerComponent.css'
export default function BaseContainerComponent({children, className="", data_aos}) {
  return (
    <div className={`base-container ${className}`} data-aos={data_aos}>
      {children}
    </div>
  )
}
