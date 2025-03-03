import React, { useState, useEffect, useRef } from 'react';
import { SiReaddotcv } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import '../styles/Contact.css';

function Contact() {
    const [github, setReposGithub] = useState([]);
    const username = "AngeloAdragna";
    const linkedinUsr = "angelo-adragna-2494491a9";

    const SectionContact = useRef(null);
    const [progress, setProgress] = useState(0); // Contrôle la progression du carré

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => setReposGithub(data))
            .catch((error) => console.error("Erreur lors de la récupération des dépôts :", error));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = SectionContact.current.offsetTop;
            const sectionHeight = SectionContact.current.offsetHeight;
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
        <section ref={SectionContact} id="contact" className="contact">
            <div className="container">



                <ul id='divContact'>
                    <li className='titleListContact'>Social network</li>
                    <li style={{ transform: `translateY(${progress * 5}em)`, opacity: progress }} className='elemListContact'><a href={github.html_url} target="_blank" rel="noopener noreferrer">
                        <FiGithub className='iconContactPage' /> Github</a></li>
                    <li style={{ transform: `translateY(${progress * 5}em)`, opacity: progress }} className='elemListContact'>
                        <a href={`https://www.linkedin.com/in/${linkedinUsr}/`} target="_blank" rel="noopener noreferrer">
                            <CiLinkedin className='iconContactPage' /> LinkedIn</a>
                    </li>
                    <li className='titleListContact'>Professional</li>
                    <li
                        style={{ transform: `translateY(${progress * 5}em)`, opacity: progress }}
                        className="elemListContact">
                        <a href="mailto:angelo.adragnadev@gmail.com" target="_blank">
                            <IoMailOutline className='iconContactPage' /> angelo.adragnadev@gmail.com
                        </a>
                    </li>
                    <li style={{ transform: `translateY(${progress * 5}em)`, opacity: progress }} className='elemListContact'><a href="/CV_Angelo_Adragna_2025.pdf" download="CV_Angelo_Adragna_2025.pdf"><SiReaddotcv className='iconContactPage' /> Curriculum vitae</a></li>
                </ul>


                <div>
                    <img id='imgWeb2' src="/social-media-notifications.svg" alt="" />
                </div>
            </div>
        </section >

    );
}

export default Contact;