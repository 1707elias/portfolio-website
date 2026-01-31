import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} Elias Schlappner.
                <br />
                Built with <span style={{ color: '#38bdf8' }}>React</span> & <span style={{ color: '#a78bfa' }}>Vite</span>.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
                <Link to="/impressum" style={{ color: '#64748b', textDecoration: 'none', marginRight: '1rem' }}>Impressum</Link>
                <Link to="/datenschutz" style={{ color: '#64748b', textDecoration: 'none' }}>Datenschutz</Link>
            </p>
        </footer>
    );
};

export default Footer;