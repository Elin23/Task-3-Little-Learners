import React, { useState } from 'react'
import './GalleryComponent.css'
import { galleryData } from '../../data/galleryData'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent';
import SliderComponent from '../SliderComponent/SliderComponent';
export default function GalleryComponent() {
    const [activeTab, setActiveTab] = useState("all");
    const [isFading, setIsFading] = useState(false);

    const handelTabChange = (label) => {
        setIsFading(true); // start fading effect (note: fading classes are in index.css)
        setTimeout(() => {
            setActiveTab(label); // change the active tab value
            setIsFading(false); // end fading effect (display the selected slider) 
        }, 350);
    };
    return (
        <div className="gallery-content">
            <div className="gallery-tabs-container mt-100" data-aos="fade">
                <button
                    onClick={() => handelTabChange('all')}
                    className={`fs-20 ${activeTab === "all" ? "active-tab" : ""}`}>
                    All
                </button>
                {
                    galleryData.map((gallery, index) => (
                        <button
                            key={index}
                            onClick={() => handelTabChange(gallery.label)}
                            className={`fs-20 ${activeTab === gallery.label ? "active-tab" : ""}`}>
                            {gallery.label}
                        </button>
                    ))
                }
            </div>
            <div className={`gallery-slider-container fading ${isFading ? 'fade-out' : 'fade-in'}`}>
                {
                    galleryData.filter(gallery => activeTab === 'all' || gallery.label === activeTab).map((gallery, index) => (
                        <BaseContainerComponent className='gallery'>
                            <SliderComponent className='gallery' sideContent={{ title: gallery.label, desc: gallery.description }}>
                                {
                                    gallery.imgs.map((img, index) => (
                                        <img src={img.src} alt={img.alt} className='gallery-img-card' data-aos="fade-up" />
                                    ))
                                }
                            </SliderComponent>
                        </BaseContainerComponent>
                    ))
                }
            </div>
        </div>
    )
}
