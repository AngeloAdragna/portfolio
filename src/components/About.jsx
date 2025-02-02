import React, { useState, useEffect, useRef } from 'react';
import '../styles/About.css';

function About() {
    const SectionAbout = useRef(null);
    const [progress, setProgress] = useState(0); // Contrôle la progression du carré

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = SectionAbout.current.offsetTop;
            const sectionHeight = SectionAbout.current.offsetHeight;
            const windowScroll = window.scrollY;
            const windowHeight = window.innerHeight;

            if (windowScroll + windowHeight >= sectionTop && windowScroll < sectionTop + sectionHeight) {
                const scrollProgress = Math.min((windowScroll + windowHeight - sectionTop) / sectionHeight, 1);
                setProgress(scrollProgress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <section ref={SectionAbout} id="about">
            <h2 className='TitlePage' id='TitleAboutPage' >About me</h2>
            <div className="container">
                <div>
                    <img id='imgWeb' src="/website-development.svg" alt="" />
                </div>
                <div style={{ opacity: progress }} id='divAbout' >
                    <p>
                        Actuellement étudiant en troisième année de licence en informatique, je suis également inscrit dans le cursus CMI Informatique (Cursus Master Ingénierie) au CERI (Centre d’Enseignement et de Recherche en Informatique) d’Avignon.
                        Ce double cursus exigeant me permet de consolider mes compétences tout en explorant des domaines tels que l’intelligence artificielle, la gestion et l’économie d’entreprise.
                        Tout au long de mon parcours, j’ai développé des compétences variées en développement logiciel, intelligence artificielle, gestion de réseaux et algorithmie.
                        <br /><br />
                        Récemment, je me suis passionné pour la modélisation 3D et l’infographie, qui allient rigueur et créativité.
                        Curieux et motivé, j’aime apprendre et m’adapter à de nouvelles technologies.
                        Mon parcours m’a aussi permis de renforcer mes capacités en programmation, conception d’algorithmes et gestion de projets, tout en développant mon esprit d’équipe et ma polyvalence.
                        En parallèle de mes études, je m’&nbsp;investis dans des projets personnels et collaboratifs pour enrichir mes connaissances pratiques.
                        <br /><br />
                        Je serais ravi d’échanger avec vous sur des sujets techniques ou professionnels. <br />
                        N’hésitez pas à me contacter !
                    </p>
                </div>
            </div>
        </section>
    );
}
export default About;