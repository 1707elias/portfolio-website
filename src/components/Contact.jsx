import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useScrollReveal from '../hooks/useScrollReveal';
import { FaDiscord, FaPaperPlane, FaCheck, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const { ref, isVisible } = useScrollReveal();
    const form = useRef();

    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus('success');
                e.target.reset();
            }, () => {
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section">
            <h3>Kontakt aufnehmen</h3>

            <div
                ref={ref}
                className={`content-box reveal ${isVisible ? 'visible' : ''}`}
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

                    {/* Linke Seite: Text & Infos */}
                    <div>
                        <p style={{ marginBottom: '2rem' }}>
                            Du suchst technische Unterstützung für deine Website oder hast eine Idee?
                            <br /><br />
                            Schreib mir einfach direkt hier über das Formular oder kontaktiere mich via Discord.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Discord Button */}
                            <a
                                href="https://discord.com/users/569660151632494635"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ backgroundColor: '#5865F2', color: 'white', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
                            >
                                <FaDiscord size={20} />
                                Via Discord
                            </a>

                            {/* Mailto Fallback */}
                            <a href="mailto:business@elias-schlappner.de" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', textDecoration: 'none', marginTop: '1rem' }}>
                                <FaEnvelope /> business@elias-schlappner.de
                            </a>
                        </div>
                    </div>

                    {/* Rechte Seite: Das Formular */}
                    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Name</label>
                            <input type="text" name="user_name" required style={inputStyle} placeholder="Dein Name" />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>E-Mail</label>
                            <input type="email" name="user_email" required style={inputStyle} placeholder="deine@email.de" />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Nachricht</label>
                            <textarea name="message" required style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="Wie kann ich helfen?" />
                        </div>

                        <button type="submit" className="btn primary" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }} disabled={status === 'sending' || status === 'success'}>
                            {status === 'sending' && 'Sende...'}
                            {status === 'success' && <><FaCheck /> Gesendet!</>}
                            {status === 'error' && 'Fehler, versuch es nochmal'}
                            {status === '' && <><FaPaperPlane /> Absenden</>}
                        </button>

                    </form>

                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
        </section>
    );
};

const inputStyle = {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit'
};

export default Contact;