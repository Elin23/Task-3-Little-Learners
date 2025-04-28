import React from 'react'
import './NavigateSectionComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { navLinks } from '../../data/linksData'
import NavigationCardComponent from '../NavigationCardComponent/NavigationCardComponent'

export default function NavigateSectionComponent() {
    const navigationLinks = navLinks.filter(link => link.description);
    return (
        <div className='navigation-container mx-162'>
            <TitleComponent
                heading={"Explore More"}
                title={"Navigate through our Pages"}
                text={"Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"}
            />
            <div className="navigation-cards">
                {
                    navigationLinks.map((link, index) => (
                        <NavigationCardComponent key={index} link={link} />
                    ))
                }
            </div>
        </div>
    )
}
