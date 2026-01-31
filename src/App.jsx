import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Komponenten
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';
import SEO from './components/SEO';
import Maintenance from './components/Maintenance';
import ErrorBoundary from './components/ErrorBoundary';
import CookieBanner from './components/CookieBanner';

function App() {
    const isMaintenance = import.meta.env.VITE_MAINTENANCE === 'true';

    if (isMaintenance) {
        return <Maintenance />;
    }

    return (
        <ErrorBoundary>
            <Router>
                <ScrollToTop />
                <CookieBanner />

                <div className="portfolio-container">
                    <Navbar />

                    <Routes>
                        {/* Startseite */}
                        <Route path="/" element={
                            <>
                                <SEO
                                    title="IT-Freelancer & Student"
                                    description="Hi, ich bin Elias! Wirtschaftsinformatik-Student und IT-Freelancer aus Würzburg. Ich entwickle moderne Webseiten und digitale Lösungen."
                                />
                                <Hero />
                                <About />
                                <Projects />
                                <Contact />
                            </>
                        } />

                        {/* Rechtliches */}
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/datenschutz" element={<Datenschutz />} />

                        {/* Fallback */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>

                    <Footer />
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;