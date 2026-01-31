import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        if (import.meta.env.DEV) {
            console.error('ErrorBoundary:', error, errorInfo);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0f172a',
                    color: '#cbd5e1',
                    textAlign: 'center',
                    padding: '2rem'
                }}>
                    <h1 style={{ color: '#38bdf8', marginBottom: '1rem' }}>
                        Etwas ist schiefgelaufen
                    </h1>
                    <p style={{ marginBottom: '2rem', maxWidth: '500px' }}>
                        Ein unerwarteter Fehler ist aufgetreten. Bitte lade die Seite neu.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            padding: '0.8rem 1.5rem',
                            backgroundColor: '#38bdf8',
                            color: '#0f172a',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Seite neu laden
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
