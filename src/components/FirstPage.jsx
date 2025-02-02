import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { SiReaddotcv } from "react-icons/si";
import { GiHistogram } from "react-icons/gi";
import { FiGithub } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import VantaBackground from "../components/ui/VantaBackground";
import '../styles/FirstPage.css';

function FirstPage() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [repos, setRepos] = useState([]);
    const username = "AngeloAdragna";

    const handleLinkClick = () => {
        setIsCollapsed((prev) => !prev);
    };

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) throw new Error("Erreur lors de la récupération des dépôts");
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchRepos();
    }, [username]);

    return (
        <section className="firstPage">
            <header>
                <div className="bg">
                    <VantaBackground />
                </div>

                <section className={`bar ${isCollapsed ? 'collapsed' : ''}`}>
                    <ul className={`list_bar ${isCollapsed ? 'collapsed' : ''}`}>
                        <li className="linkicone">
                            <Link to="firstPage" smooth={true} duration={1000}>
                                <HiOutlineHome />
                            </Link>
                        </li>
                        <li className="linkicone">
                            <Link to="about" smooth={true} duration={1000}>
                                <GoPerson />
                            </Link>
                        </li>
                        <li className="linkicone">
                            <Link to="SkillPage" smooth={true} duration={1000}>
                                <GiHistogram />
                            </Link>
                        </li>
                        <li className="linkicone">
                            <Link to="formation" smooth={true} duration={1000}>
                                <IoSchoolOutline />
                            </Link>
                        </li>
                        <li className="linkicone">
                            <Link to="projet" smooth={true} duration={1000}>
                                <FiGithub />
                            </Link>
                        </li>
                        <li className="linkicone">
                            <Link to="contact" smooth={true} duration={1000}>
                                <IoMailOutline />
                            </Link>
                        </li>
                        <li className="linkicone">
                            <a href="/CV_Angelo_Adragna_2024.pdf" download="CV_Angelo_Adragna_2024.pdf">
                                <SiReaddotcv />
                            </a>
                        </li>
                        <li
                            onClick={handleLinkClick}
                            className={`arrow-icon ${isCollapsed ? 'rotated' : 'linkicone'}`}>
                            <IoIosArrowForward />
                        </li>
                    </ul>
                </section>

                <section className="App-header">
                    <h1>ANGELO ADRAGNA</h1>
                    <p>Étudiant en informatique</p>
                </section>
            </header>
        </section>
    );
}

export default FirstPage;
