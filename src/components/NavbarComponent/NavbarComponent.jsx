import React, { useEffect, useState } from 'react'
import './NavbarComponent.css'
import { Link, NavLink } from 'react-router-dom'

export default function NavbarComponent({ logo, links }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleIsScrolled = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleIsScrolled);
        return () => window.removeEventListener('scroll', handleIsScrolled);
    }, []);
    return (
        <div className="navbar-wrapper">
            <div className={`mx-50 navbar-container ${isScrolled ? 'nav-scrolled' : ''}`}>
                <Link to={"/"} className="nav-logo">
                    <img src={logo} alt="logo" />
                </Link>
                <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <img
                        src={menuOpen ? "/assets/icons/close_icon.svg" : "/assets/icons/burger_icon.svg"}
                        alt={menuOpen ? "close icon" : "burger icon"}
                    />
                </button>
                <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                    {links.map((link, index) => (
                        <li className="fs-20 nav-link" key={index}>
                            <NavLink
                                to={link.path}
                                end
                                className={({ isActive }) => (isActive ? "active" : "")}
                                onClick={() => setMenuOpen(false)}   
                            >
                                {link.labelNav}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}
