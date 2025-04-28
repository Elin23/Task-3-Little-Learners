import React from 'react'
import './OurBenefitsCardComponent.css'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'
export default function OurBenefitsCardComponent({icon, alt, title, text}) {
    return (
        <>
            <BaseContainerComponent className='benefit-card'>
                <div className="benefit-icon">
                    <img src={icon} alt={alt} />
                </div>
                <div className="benefit-content">
                    <div className="benefit-title fs-28">{title}</div>
                    <div className="benefit-text fs-20">{text}</div>
                </div>
            </BaseContainerComponent>
        </>
    )
}
