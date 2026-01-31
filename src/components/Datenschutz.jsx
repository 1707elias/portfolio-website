import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const Datenschutz = () => {
    return (
        <section className="section" style={{ padding: '8rem 2rem 4rem', minHeight: '80vh', borderTop: 'none' }}>

            <SEO title="Datenschutzerklärung" description="Hinweise zum Datenschutz auf der Website von Elias Schlappner." />

            <div className="content-box">
                <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none' }}>&larr; Zurück zur Startseite</Link>

                <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '2rem' }}>Datenschutzerklärung</h1>

                <h3>1. Datenschutz auf einen Blick</h3>
                <p>
                    <strong>Allgemeine Hinweise</strong><br />
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>

                <h3>2. Hosting</h3>
                <p>
                    Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br /><br />
                    <strong>Cloudflare Pages</strong><br />
                    Anbieter ist die Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA.<br />
                    Cloudflare erfasst Daten über den Zugriff auf diese Website. Zu den Zugriffsdaten gehören: Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.<br />
                    Die Verwendung von Cloudflare Pages erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                </p>

                <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
                <p>
                    <strong>Datenschutz</strong><br />
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.<br /><br />

                    <strong>Hinweis zur verantwortlichen Stelle</strong><br />
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    Max Mustermann<br />
                    Musterstraße 1<br />
                    12345 Musterstadt<br /><br />
                    E-Mail: business@elias-schlappner.de
                </p>

                <h3>4. Datenerfassung auf dieser Website</h3>
                <p>
                    <strong>Kontakt per E-Mail</strong><br />
                    Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3>5. SSL- bzw. TLS-Verschlüsselung</h3>
                <p>
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>

                <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
                    Quelle: Muster von <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b' }}>e-recht24.de</a>
                </p>
            </div>
        </section>
    );
};

export default Datenschutz;