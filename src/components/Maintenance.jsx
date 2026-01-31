import React from 'react';

const Maintenance = () => {
    return (
        <div className="maintenance-container">
            <div className="maintenance-content">
                <h1>Wartungsarbeiten</h1>
                <p>
                    Ich aktualisiere gerade mein Portfolio, um dir eine noch bessere Experience zu bieten.
                    Schau in Kürze wieder vorbei!
                </p>

                <div className="maintenance-info">
                    <p>Du hast ein dringendes Anliegen?</p>
                    <a href="mailto:business@elias-schlappner.de" className="contact-btn">
                        Schreib mir eine Mail
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;