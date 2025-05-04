import React from 'react'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'
import './FooterComponent.css'
import { Link } from 'react-router-dom'
export default function FooterComponent({ logo, text, contact, navbarLinks, footerLinks, social }) {
    const displayedLinks = navbarLinks.filter(link => link.labelFooter);
    return (
        <div className='footer-container mx-50 mt-200' data-aos="fade">
            <BaseContainerComponent className='footer'>
                <div className="footer-content">
                    <div className="footer-info">
                        <div className="footer-brief">
                            <img className="footer-logo" src={logo} alt="logo" />
                            <div className="footer-text fs-20">{text}</div>
                        </div>
                        <div className="contact-info">
                            <ul className='contact-list'>
                                {contact.map((item, index) => (
                                    <li className="contact-item" key={index}>
                                        <div className="contact-icon" data-aos="flip-left">
                                            <img src={item.icon} alt={item.alt} />
                                        </div>
                                        <a className='fs-20' href={item.href}>{item.value}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-links-section">
                        {
                            displayedLinks.map((link, index) => (
                                <div className="site-links">
                                    <div className="main-page fs-20"><Link to={link.path} className="section-link">{link.labelFooter}</Link></div>
                                    {link.subLinks.length > 0 && (
                                        <ul className="sections-link">
                                            {link.subLinks.map((subLink, subIndex) => (
                                                <li key={subIndex}>
                                                    <a className='fs-20' href={subLink.path}>{subLink.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="sub-pages">
                    <ul className="sub-page-links">
                        {footerLinks.map((link, index) => (
                            <li className='fs-18' key={index}><Link to={link.path}>{link.name}</Link></li>
                        ))}
                    </ul>
                    <ul className="social-links">
                        {social.map((item, index) => (
                            <li className='fs-18' key={index} data-aos="flip-left"><a href={item.link}><img src={item.logo} alt={item.name} /></a></li>
                        ))}
                    </ul>
                </div>
                <div className="copyright fs-18">Copyright © [2023] Little Learners Academy. All rights reserved.</div>
            </BaseContainerComponent>
        </div>
    )
}
