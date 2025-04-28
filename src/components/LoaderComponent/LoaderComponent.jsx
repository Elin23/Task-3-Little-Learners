import React, { useState, useEffect } from 'react'
import './LoaderComponent.css'

export default function LoaderComponent() {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 1800); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader">
                <div className="book">
                    <div className="page"></div>
                    <div className="page page2"></div>
                </div>
            </div>
        </div>
    )
}
