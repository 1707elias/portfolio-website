import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsVisible(window.scrollY > 100);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isMenuOpen]);

    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="navbar-container">

                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="logo-link"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        textDecoration: 'none',
                        color: 'inherit'
                    }}
                >
                    <img
                        src="/favicon-32x32.png"
                        alt="Elias Schlappner Logo"
                        style={{ width: '32px', height: '32px', borderRadius: '4px' }}
                    />
                    <span>Elias Schlappner</span>
                </Link>

                <button
                    className="menu-icon"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                    aria-expanded={isMenuOpen}
                    aria-controls="nav-links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <nav
                    id="nav-links"
                    className={`nav-links ${isMenuOpen ? 'active' : ''}`}
                    role="navigation"
                    aria-label="Hauptnavigation"
                >
                    <a href="/#about" onClick={closeMenu}>Über mich</a>
                    <a href="/#projects" onClick={closeMenu}>Projekte</a>
                    <a href="/#contact" onClick={closeMenu}>Kontakt</a>
                </nav>

            </div>
        </nav>
    );
};

export default Navbar;