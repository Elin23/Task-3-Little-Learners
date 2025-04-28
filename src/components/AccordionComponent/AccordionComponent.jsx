import React, { useState } from 'react'
import './AccordionComponent.css'
export default function AccordionComponent({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const resetAccordion = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className={`accordion-container ${isOpen ? "open" : ""}`}>
            <div className="accordion-header" onClick={resetAccordion}>
                <span className='accordion-title fs-22'>{title}</span>
                <div className="accordion-icon-container">
                    <img src={isOpen ? "/assets/icons/minus.svg" : "/assets/icons/plus.svg"} alt="vector" />
                </div>
            </div>
            <div className="accordion-content fs-20">
                {content}
            </div>
        </div>
    )
}
