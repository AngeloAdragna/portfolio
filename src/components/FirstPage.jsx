import React, { useState, useEffect } from 'react';
import VantaBackground from "../components/ui/VantaBackground";
import '../styles/FirstPage.css';
import SideBar from '../components/ui/SideBar';

function FirstPage() {
    const [repos, setRepos] = useState([]);
    const username = "AngeloAdragna";

    // GitHub API
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
        <section>
            <header>
                {/* Background with VantaBackground component */}
                <div className="bg">
                    <VantaBackground />
                </div>

                {/* Side bar fixed */}
               <SideBar />

                <section className="App-header">
                    <h1>ANGELO ADRAGNA</h1>
                    <p>Étudiant en informatique</p>
                </section>
            </header>
        </section>
    );
}

export default FirstPage;
