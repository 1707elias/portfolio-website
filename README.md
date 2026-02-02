# 👨‍💻 Elias Schlappner - Portfolio Website

Das offizielle Repository für meine persönliche Portfolio-Website [elias-schlappner.de](https://elias-schlappner.de).
Dieses Projekt dient als Showcase für meine Arbeiten als Wirtschaftsinformatik-Student und IT-Freelancer.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-live-success.svg)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features & Highlights

Dieses Projekt ist mehr als nur eine statische Seite. Es ist eine moderne, rechtssichere Single Page Application (SPA).

* **⚡ Tech Stack:** React 19, Vite, React Router v7.
* **🛡️ Stabilität:** Integrierte `ErrorBoundary`-Komponente fängt Laufzeitfehler ab und verhindert White-Screens.
* **🍪 Rechtssicherheit:** Eigener, DSGVO-konformer Cookie-Consent-Manager (keine externen Tracker ohne Zustimmung).
* **🔍 SEO-Optimiert:** Vollständige Konfiguration mit `robots.txt`, `sitemap.xml`, `meta`-Tags und Web-Manifest.
* **📧 Kontakt:** Funktionales Kontaktformular mit Validierung (integriert via EmailJS).
* **🎨 UI/UX:** Responsive Design mit Scroll-Animationen und Dark-Mode Ästhetik.

## 🛠️ Installation & Setup

Möchtest du dir den Code lokal ansehen?

1.  **Repository klonen**
    ```bash
    git clone [https://github.com/1707elias/portfolio-website.git](https://github.com/1707elias/portfolio-website.git)
    cd portfolio-website
    ```

2.  **Abhängigkeiten installieren**
    ```bash
    npm install
    ```

3.  **Umgebungsvariablen setzen**
    Erstelle eine `.env` Datei basierend auf der `.env.example`:
    ```bash
    cp .env.example .env
    # Trage deine eigenen EmailJS Keys ein, um das Formular zu testen
    ```

4.  **Entwicklungsserver starten**
    ```bash
    npm run dev
    ```

## 📂 Projektstruktur

* `/src/components` - Wiederverwendbare UI-Komponenten (Navbar, Hero, Contact...)
* `/src/hooks` - Custom Hooks (z.B. für Scroll-Animationen)
* `/public` - Statische Assets, Robot.txt und Sitemap

---
*Entwickelt von [Elias Schlappner](https://elias-schlappner.de)*
