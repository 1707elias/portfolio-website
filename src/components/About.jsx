import React from 'react';
import { FaReact, FaPython, FaJava, FaWordpress } from 'react-icons/fa';
import { SiVite, SiMysql } from 'react-icons/si';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="about" className="section">
            <h3>Über mich</h3>
            <div
                ref={ref}
                className={`content-box reveal ${isVisible ? 'visible' : ''}`}
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                <p>
                    Hi, ich bin Elias! Ich studiere aktuell Wirtschaftsinformatik an der THWS in Würzburg
                    und sammle nebenbei erste Erfahrungen als <strong>IT-Freelancer</strong>.
                    <br /><br />
                    Ich würde mich selbst noch als Lernenden bezeichnen: Ich habe mir die Grundlagen in
                    verschiedenen Bereichen erarbeitet und brenne darauf, mein Wissen in echten Projekten
                    zu vertiefen. Ich arbeite mich gerne in neue Themen ein und freue mich über jede
                    Gelegenheit, praktisch dazuzulernen – auch wenn ich sicher noch kein "Profi" mit
                    jahrzehntelanger Erfahrung bin.
                    <br /><br />
                    Hier sind die Tools, mit denen ich aktuell am liebsten experimentiere und lerne:
                </p>

                <div className="skills-grid" style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={skillStyle}>
                        <FaReact size={40} color="#61DAFB" />
                        <span style={labelStyle}>React</span>
                    </div>
                    <div style={skillStyle}>
                        <SiVite size={40} color="#646CFF" />
                        <span style={labelStyle}>Vite</span>
                    </div>
                    <div style={skillStyle}>
                        <FaPython size={40} color="#3776AB" />
                        <span style={labelStyle}>Python</span>
                    </div>
                    <div style={skillStyle}>
                        <FaJava size={40} color="#007396" />
                        <span style={labelStyle}>Java</span>
                    </div>
                    <div style={skillStyle}>
                        <SiMysql size={40} color="#4479A1" />
                        <span style={labelStyle}>SQL</span>
                    </div>
                    <div style={skillStyle}>
                        <FaWordpress size={40} color="#21759B" />
                        <span style={labelStyle}>WordPress</span>
                    </div>
                </div>

                <p style={{ marginTop: '2rem' }}>
                    Du hast ein kleineres Projekt oder eine Aufgabe, bei der ich unterstützen und
                    gleichzeitig wachsen kann? Dann melde dich gerne bei mir!
                </p>
            </div>
        </section>
    );
};

const skillStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    minWidth: '80px'
};

const labelStyle = {
    fontSize: '0.9rem',
    color: '#cbd5e1'
};

export default About;