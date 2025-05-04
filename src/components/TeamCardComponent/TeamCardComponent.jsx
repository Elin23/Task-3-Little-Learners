import React from 'react'
import './TeamCardComponent.css'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'

export default function TeamCardComponent({ img, name, qualification, description }) {
    return (
        <BaseContainerComponent className='team' data_aos={"zoom-in-up"}>
            <div className="team-card-header">
                <div className="member-info">
                    <img src={img} alt="member img" />
                    <div className="member-name fs-30">{name}</div>
                </div>
                <div className="team-contact">
                    <a href="#"><img src="/assets/icons/contact_envelope.svg" alt="envelope" /></a>
                </div>
            </div>
            <div className="team-description">
                <div className="qualification fs-24">{qualification}</div>
                <p className='fs-20'>{description}</p>
            </div>
        </BaseContainerComponent>
    )
}
