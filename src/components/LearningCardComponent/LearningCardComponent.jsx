import React from 'react'
import './LearningCardComponent.css'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'

export default function LearningCardComponent({img, label, description}) {
  return (
    <BaseContainerComponent className='learning' data_aos={"fade-up"}>
        <img src={img} alt="learning" className='img-learning'/>
        <div className="learning-info">
            <div className="learning-title fs-28">{label}</div>
            <div className="learning-description fs-20">{description}</div>
        </div>
    </BaseContainerComponent>
  )
}
