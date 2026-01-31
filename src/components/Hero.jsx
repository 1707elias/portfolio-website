import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = Math.max(0, 1 - offset / 400);
    const transform = `translateY(${offset * 0.5}px)`;

    return (
        <header className="hero-section">

            <div style={{
                opacity,
                transform,
                transition: 'opacity 0.1s ease-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            }}>

                <p className="greeting">Hallo, ich bin</p>
                <h1 className="name">Elias Schlappner</h1>
                <h2 className="title">
                    Wirtschaftsinformatik Student & <span className="highlight">IT-Freelancer</span>
                </h2>

                <div className="buttons">
                    <a href="#about" className="btn secondary">Über mich</a>
                    <a href="#projects" className="btn primary">Meine Projekte</a>
                    <a href="#contact" className="btn secondary">Kontakt</a>
                </div>

            </div>
        </header>
    );
};

export default Hero;