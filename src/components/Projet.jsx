import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Projet.css';

function Projet() {
    const [repos, setRepos] = useState([]);
    const username = "AngeloAdragna";

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then((response) => response.json())
            .then((data) => setRepos(data))
            .catch((error) => console.error("Erreur lors de la récupération des dépôts :", error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: window.innerWidth < 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3),
        slidesToScroll: 1,
    };
    
    window.addEventListener('resize', () => {
        settings.slidesToShow = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
        // Si tu as besoin de réinitialiser ton composant ici
        })
    return (
        <section id="project" className="page">
            <h2 className='TitlePage'>Project</h2>
            <section className='caroussel'>
                {repos.length > 0 ? (
                    <Slider {...settings}>
                        {repos.map((repo) => (
                            <div className='card' key={repo.id}>
                                <h3 className='titleCard' >{repo.name}</h3>
                                <p className='textCard' >{repo.description || "Pas de description disponible."}</p>
                                <a href={repo.html_url} className='btn' target="_blank" rel="noopener noreferrer">
                                    Voir le projet sur GitHub
                                </a>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p>Chargement des projets...</p>
                )}
            </section>
        </section>
    );
}

export default Projet;