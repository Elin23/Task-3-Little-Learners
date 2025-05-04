import React from 'react'
import './TestimonialCardComponent.css'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'

export default function TestimonialCardComponent({ name, text, rate, avatar }) {
    return (
        <BaseContainerComponent className='testimonial' data_aos={"zoom-in-up"}>
            <div className="testimonial-card">
                <div className="avatar-info">
                    <div className="avatar-img-container">
                        <img src={avatar} alt={name} className="avatar" />
                    </div>
                    <h3 className='fs-24'>{name}</h3>
                </div>
                <div className="stars">
                    {Array.from({ length: rate }, (_, i) => (
                        <img key={i} src="/assets/icons/star.svg" alt="star" className="star-icon" />
                    ))}
                </div>
                <p className='fs-20 testimonial-text'>{text}</p>
            </div>
        </BaseContainerComponent>
    )
}
