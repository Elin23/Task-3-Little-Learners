import React from 'react'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'
import './MissionVisionCardComponent.css'
export default function MissionVisionCardComponent({title, img, description, id}) {
  return (
    <BaseContainerComponent className='MissionVision' data_aos={"fade"}>
        <div className="MV-header" id={id}>
            <h4 className='fs-48'>{title}</h4>
            <img src={img} alt="mission&vision icon" />
        </div>
        <p className='MV-description fs-20'>{description}</p>
    </BaseContainerComponent>
  )
}
