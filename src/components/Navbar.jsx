import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons für das Menü

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="navbar-container">

                <Link to="/" className="logo" onClick={closeMenu}>
                    Elias Schlappner
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="/#about" onClick={closeMenu}>Über mich</a>
                    <a href="/#projects" onClick={closeMenu}>Projekte</a>
                    <a href="/#contact" onClick={closeMenu}>Kontakt</a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;