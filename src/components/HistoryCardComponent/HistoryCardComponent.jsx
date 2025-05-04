import React from 'react'
import './HistoryCardComponent.css'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'
export default function HistoryCardComponent({ year, label, description }) {
    return (
        <div className='history-card-container' data_aos="fade-up">
            <div className="line-decoration"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="history-info">
                <BaseContainerComponent className='history-year'>
                    <img src="/assets/imgs/history_decoration.png" alt="decoration" className='history-decoration'/>
                    <span className='year fs-68'>{year}</span>
                </BaseContainerComponent>
                <div className="history-text">
                    <div className="history-label fs-28">{label}</div>
                    <div className='history-desc fs-20'>{description}</div>
                </div>
            </div>
        </div>
    )
}
