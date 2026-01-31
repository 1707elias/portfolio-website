import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
    const { ref, isVisible } = useScrollReveal();

    const projectData = [
        {
            title: "Python Bild-Generator",
            description: "Ein Uni-Projekt aus dem 4. Semester. Wir haben ein Tool entwickelt, das mithilfe von Python automatisiert Bilder generieren kann.",
            link: "https://github.com/1707elias/social-media-carousel-generator.git",
            linkText: "Code auf GitHub ansehen →",
            delay: ""
        },
        {
            title: "Portfolio Website",
            description: "Genau diese Seite hier! Ein persönliches Projekt, um meine Skills in React und Vite zu vertiefen und eine moderne Web-Präsenz aufzubauen.",
            link: "https://github.com/1707elias/portfolio-website.git",
            linkText: "Code auf GitHub ansehen →",
            delay: "delay-200"
        },
        {
            title: "J. Neumann GmbH",
            description: "Im Rahmen meines Kleingewerbes betreue ich die Website der J. Neumann Verwaltungsgesellschaft mbH. Technischer Fokus: Pflege & Updates.",
            link: "https://www.jnv-gmbh.de/",
            linkText: "Zur Website →",
            delay: "delay-300"
        }
    ];

    return (
        <section id="projects" className="section">
            <h3>Meine Projekte</h3>

            <div ref={ref} className="projects-grid">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card reveal ${project.delay} ${isVisible ? 'visible' : ''}`}
                        style={{ opacity: isVisible ? 1 : 0 }}
                    >
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}
                        >
                            {project.linkText}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;