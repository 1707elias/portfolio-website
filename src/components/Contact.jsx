import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useScrollReveal from '../hooks/useScrollReveal';
import { FaDiscord, FaPaperPlane, FaCheck, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
    const { ref, isVisible } = useScrollReveal();
    const form = useRef();

    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        const formData = new FormData(form.current);
        const newErrors = {};

        const name = formData.get('user_name')?.trim();
        const email = formData.get('user_email')?.trim();
        const message = formData.get('message')?.trim();

        if (!name || name.length < 2) {
            newErrors.name = 'Bitte gib deinen Namen ein (mind. 2 Zeichen)';
        }

        if (!email || !validateEmail(email)) {
            newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein';
        }

        if (!message || message.length < 10) {
            newErrors.message = 'Bitte gib eine Nachricht ein (mind. 10 Zeichen)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus('sending');
        setErrors({});

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

    const resetForm = () => {
        setStatus('');
        setErrors({});
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
                    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} noValidate>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="user_name" style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Name</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                style={{ ...inputStyle, ...(errors.name ? errorInputStyle : {}) }}
                                placeholder="Dein Name"
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? 'name-error' : undefined}
                            />
                            {errors.name && <span id="name-error" style={errorStyle}><FaExclamationTriangle size={12} /> {errors.name}</span>}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="user_email" style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>E-Mail</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                style={{ ...inputStyle, ...(errors.email ? errorInputStyle : {}) }}
                                placeholder="deine@email.de"
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            {errors.email && <span id="email-error" style={errorStyle}><FaExclamationTriangle size={12} /> {errors.email}</span>}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="message" style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Nachricht</label>
                            <textarea
                                id="message"
                                name="message"
                                style={{ ...inputStyle, minHeight: '120px', resize: 'vertical', ...(errors.message ? errorInputStyle : {}) }}
                                placeholder="Wie kann ich helfen?"
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? 'message-error' : undefined}
                            />
                            {errors.message && <span id="message-error" style={errorStyle}><FaExclamationTriangle size={12} /> {errors.message}</span>}
                        </div>

                        {status === 'error' ? (
                            <button
                                type="button"
                                onClick={resetForm}
                                className="btn primary"
                                style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                            >
                                <FaExclamationTriangle /> Erneut versuchen
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="btn primary"
                                style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                disabled={status === 'sending' || status === 'success'}
                            >
                                {status === 'sending' && 'Sende...'}
                                {status === 'success' && <><FaCheck /> Gesendet!</>}
                                {status === '' && <><FaPaperPlane /> Absenden</>}
                            </button>
                        )}

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

// Styles für die Inputs (Dark Mode)
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

const errorInputStyle = {
    borderColor: '#ef4444'
};

const errorStyle = {
    color: '#ef4444',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem'
};

export default Contact;