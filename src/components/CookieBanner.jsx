import React, { useState } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window === 'undefined') return false;
        return !localStorage.getItem('cookie-consent');
    });

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.98)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem 2rem',
            zIndex: 9999,
            backdropFilter: 'blur(10px)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
            }}>
                <p style={{
                    color: '#cbd5e1',
                    margin: 0,
                    flex: '1 1 400px',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                }}>
                    Diese Website verwendet nur technisch notwendige Cookies.
                    Weitere Informationen findest du in unserer{' '}
                    <a
                        href="/datenschutz"
                        style={{ color: '#38bdf8', textDecoration: 'underline' }}
                    >
                        Datenschutzerklärung
                    </a>.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <button
                        onClick={declineCookies}
                        style={{
                            padding: '0.6rem 1.2rem',
                            backgroundColor: 'transparent',
                            border: '1px solid #334155',
                            borderRadius: '6px',
                            color: '#cbd5e1',
                            cursor: 'pointer',
                            fontWeight: '500',
                            fontSize: '0.9rem'
                        }}
                    >
                        Ablehnen
                    </button>
                    <button
                        onClick={acceptCookies}
                        style={{
                            padding: '0.6rem 1.2rem',
                            backgroundColor: '#38bdf8',
                            border: 'none',
                            borderRadius: '6px',
                            color: '#0f172a',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}
                    >
                        Akzeptieren
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
