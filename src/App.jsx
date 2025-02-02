import React, { useState, useEffect } from 'react';
import './styles/App.css';
import LoadingPage from './components/LoadingPage';
import FirstPage from "./components/FirstPage";
import About from "./components/About";
import Skills from "./components/Skills";
import Formation from "./components/Formation";
import Projet from "./components/Projet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [repos, setRepos] = useState([]);
  const username = "AngeloAdragna";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Erreur lors de la récupération des dépôts :", error));
  }, []);

  useEffect(() => {
    // Bloque le scroll pendant le chargement
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false); // Fin du chargement
      document.body.style.overflow = 'auto'; // Débloque le scroll
      window.scrollTo(0, 0); // Ramène à la première page
    }, 2000); // Remplacez 3000 par la durée de votre chargement

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && <LoadingPage />} {/* Page de chargement visible */}
      <div className={` ${!isLoading ? 'fadeIn' : ''}`}>
        <FirstPage />
        <About />
        <Skills />
        <Formation />
        <Projet />
        <Contact />
        <Footer />
      </div>
    </div >
  );
};

export default App;
