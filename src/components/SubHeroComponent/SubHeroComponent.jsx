import React from 'react'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'
import './SubHeroComponent.css'
import { Link } from 'react-router-dom'
export default function SubHeroComponent({title, text, link_label}) {
  return (
    <div className='mx-50 sub-hero'>
      <BaseContainerComponent className='sub-hero' data_aos={"fade"}>
      <img src='/assets/imgs/subHeroDecoration.png' className='decoration-img' alt='decoration'/>
      <div className="sub-hero-label">
        <Link className='fs-18' to={`/${link_label}`}>{link_label}</Link>
        <h3 className="sub-hero-title fs-48">{title}</h3>
      </div>
      <p className="sub-hero-paragraph fs-20">{text}</p>
      </BaseContainerComponent>
    </div>
  )
}
