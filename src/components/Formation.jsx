import React, { useState, useEffect, useRef } from 'react';
import '../styles/Formation.css';
import { FaArrowDownLong } from "react-icons/fa6";

function Formation() {
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0); // Contrôle la progression du carré

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.offsetHeight;
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
        <section ref={sectionRef} id="formation">
            <h2 className='TitlePage'>Formation</h2>
            <div className="textAppear" id='M2' style={{ opacity: progress - 0.4 }}>
                <p> Master 2 en Informatique</p>
                <p> 2026 - 2027 </p>
            </div>
            <div className="textAppear" id='M1' style={{ opacity: progress - 0.3 }}>
                <p> Master 1 en Informatique</p>
                <p> 2025 - 2026 </p>
            </div>
            <div className="textAppear" id='L3' style={{ opacity: progress - 0.2 }}>
                <p> Licence 3 en Informatique</p>
                <p> 2024 - 2025 </p>
            </div>
            <div className="textAppear" id='L2' style={{ opacity: progress - 0.1 }}>
                <p> Licence 2 en Informatique</p>
                <p> 2023 - 2024 </p>
            </div>
            <div className="textAppear" id='L1' style={{ opacity: progress }} >
                <p> Licence 1 en Informatique</p>
                <p>2022 - 2023 </p>
            </div>

            <div className="objectMoving" id="triangle"
                 style={{
                    transform: window.innerWidth <= 1024 ? `translateY(${progress * 82}vh)` : `translateX(${progress * 118}vw)`,
                }}>
            </div>

            <div className="objectMoving square" id='square1'
                style={{
                    transform: window.innerWidth <= 1024 ? `translateY(${progress * 68}vh)` : `translateX(${progress * 118}vw)`,
                }}>
                <p>Soon</p>
            </div>

            <div className="objectMoving square" id='square2'
                style={{
                    transform: window.innerWidth <= 1024 ? `translateY(${progress * 54}vh)` : `translateX(${progress * 102}vw)`,
                }}>
                <p>Soon</p>
            </div>

            <div
                className="objectMoving square openable" id='square3'
                style={{
                    transform: window.innerWidth <= 1024 ? `translateY(${progress * 40}vh)` : `translateX(${progress * 86}vw)`,
                }}>
                <p className='titleInArrow'>S5 - Univesité de Montréal</p>
                <p className='textAppearInArrow'>Fondements de l'apprentissage machine.&nbsp;&nbsp;Qualité du logiciel et métriques.&nbsp;&nbsp;Science des données.&nbsp;&nbsp;Infographie.</p>

                <p className='titleInArrow'>S6 - Avignon Université</p>
                <p className='textAppearInArrow'>Fondements de l'apprentissage machine.&nbsp;&nbsp;Qualité du logiciel et métriques.&nbsp;&nbsp;Science des données.&nbsp;&nbsp;Infographie.</p>

                <p className='titleInArrow'>CMI</p>
                <p className='textAppearInArrow'>Semestre à l'étranger.&nbsp;&nbsp;Processus créatif.&nbsp;&nbsp;Modélisation des systèmes probabilistes et Statistiques.&nbsp;&nbsp;Stage et soutenance en Anglais.</p>

            </div>

            <div
                className="objectMoving square openable" id='square4'
                style={{
                    transform: window.innerWidth <= 1024 ? `translateY(${progress * 26}vh)` : `translateX(${progress * 70}vw)`,
                }}>
                
                <p className='titleInArrow'> S3 - Avignon Université</p>
                <p className='textAppearInArrow'>Programmation linéaire.&nbsp;&nbsp;Théorie des langages et analyse syntaxique.&nbsp;&nbsp;Algorithmie avancée et programmation.&nbsp;&nbsp;Circuits pour systemes embarqués. Base de données.&nbsp;&nbsp;Anglais.</p>

                <p className='titleInArrow' >S4 - Avignon Université</p>
                <p className='textAppearInArrow'>Administration des OS.&nbsp;&nbsp;Algorithmique et optimisation.&nbsp;&nbsp;Statistiques et probabilités.&nbsp;&nbsp;Assembleur et compilation.&nbsp;&nbsp;Modélisation et POO.&nbsp;&nbsp;Routage et communication.&nbsp;&nbsp;Architecture Web et base de données.&nbsp;&nbsp;Anglais.</p>

                <p className='titleInArrow' >CMI</p>
                <p className='textAppearInArrow'>Economie de l'innovation.&nbsp;&nbsp;Faisabilité technique.&nbsp;&nbsp;Modèle économique.&nbsp;&nbsp;Paradigme de programmation de l'IA.</p>

            </div>

            <div className="objectMoving square openable" id='square5'
                 style={{
                    transform: window.innerWidth <= 1024 ? `translateY(${progress * 12}vh)` : `translateX(${progress * 54}vw)`,
                }}>
                <p className='titleInArrow'>S1 - Avignon Université</p>
                <p className='textAppearInArrow'>Analyse 1.&nbsp;&nbsp;Algèbre 1.&nbsp;&nbsp;Base de la programmation.&nbsp;&nbsp;Fondement de l'informatique 1.&nbsp;&nbsp;DBWEB 1 : Conception internet.&nbsp;&nbsp;Anglais.&nbsp;&nbsp;Methodologie.</p>

                <p className='titleInArrow'>S2 - Avignon Université</p>
                <p className='textAppearInArrow'>Introduction aux systemes d'exploitation.&nbsp;&nbsp;Analyse 2.&nbsp;&nbsp;Algèbre 2.&nbsp;&nbsp;Graphes.&nbsp;&nbsp; Structure des ordinateurs.&nbsp;&nbsp; Programmation Orienté Objet.&nbsp;&nbsp;DBWEB 2 : Architecture web dynamique.&nbsp;&nbsp;Anglais.</p>

                <p className='titleInArrow'>CMI</p>
                <p className='textAppearInArrow'>Projet intégrateur - Introduction à la Recherche et à L'Innovation.&nbsp;&nbsp;Interface du monde réel au numérique.&nbsp;&nbsp;Projet intégrateur - Culture de l'innovation.</p>
            </div>

            <div className='littleArrow' id="la1">
                <FaArrowDownLong />
            </div>
            <div className='littleArrow' id="la2">
                <FaArrowDownLong />
            </div>
            <div className='littleArrow' id="la3">
                <FaArrowDownLong />
            </div>

        </section >
    );
}

export default Formation;
