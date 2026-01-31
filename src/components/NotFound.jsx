import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const NotFound = () => {
    return (
        <div style={containerStyle}>
            <SEO title="Seite nicht gefunden" description="Fehler 404 - Diese Seite existiert nicht." />

            <h1 style={codeStyle}>404</h1>

            <h2 style={titleStyle}>Hoppla, hier gibt's nichts zu sehen!</h2>

            <p style={textStyle}>
                Die Seite, die du suchst, existiert leider nicht oder wurde verschoben.
                Vielleicht hast du dich vertippt?
            </p>

            <Link to="/" className="btn primary" style={{ marginTop: '2rem' }}>
                &larr; Zurück zur Startseite
            </Link>
        </div>
    );
};

const containerStyle = {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    marginTop: '60px'
};

const codeStyle = {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: '0.5rem',
    lineHeight: '1'
};

const titleStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    fontWeight: '600'
};

const textStyle = {
    fontSize: '1.1rem',
    color: '#cbd5e1',
    maxWidth: '500px'
};

export default NotFound;