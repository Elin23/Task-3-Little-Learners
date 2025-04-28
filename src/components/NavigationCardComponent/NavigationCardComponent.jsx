import React from 'react'
import './NavigationCardComponent.css'
import { Link } from 'react-router-dom'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'
export default function NavigationCardComponent({ link, key }) {
    return (
        <>
            <BaseContainerComponent className={"navigation"}>
                <div className="nav-card-content" key={key}>
                    <div className="nav-card-head">
                        <div className="nav-card-title fs-48">{link.labelNav}</div>
                        <img src="/assets/imgs/line.png" alt="decoration" />
                    </div>
                    <div className="nav-card-description fs-20">{link.description}</div>
                </div>
                <BaseContainerComponent className='learn-more-btn'>
                    <button className='learn-more'><Link className="fs-20" to={link.path}>Learn More <img src="/assets/icons/right_arrow.svg" alt="arrow" /></Link></button>
                </BaseContainerComponent>
            </BaseContainerComponent>
        </>
    )
}
