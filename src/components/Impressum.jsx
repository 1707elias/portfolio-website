import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const Impressum = () => {
    return (
        <section className="section" style={{ padding: '8rem 2rem 4rem', minHeight: '80vh', borderTop: 'none' }}>
            <SEO title="Impressum" description="Rechtliche Angaben." />

            <div className="content-box">
                <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none' }}>&larr; Zurück zur Startseite</Link>

                <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '2rem' }}>Impressum</h1>

                <h3>Angaben gemäß § 5 TMG</h3>
                <p>
                    Max Mustermann<br />
                    Musterstraße 1<br />
                    Musterstadt, 12345
                </p>

                <h3>Kontakt</h3>
                <p>
                    E-Mail: <a href="mailto:business@elias-schlappner.de" style={{ color: '#38bdf8' }}>business@elias-schlappner.de</a><br />
                </p>

                <h3>Umsatzsteuer-ID</h3>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet.
                </p>

                <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>
                    Max Mustermann<br />
                    (Adresse wie oben)
                </p>

                <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
                    Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b' }}>e-recht24.de</a>
                </p>
            </div>
        </section>
    );
};

export default Impressum;