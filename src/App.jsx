import React, { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import LoadingPage from "./components/LoadingPage";
import FirstPage from "./components/FirstPage";
import About from "./components/About";
import Skills from "./components/Skills";
import Formation from "./components/Formation";
import Projet from "./components/Projet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const sectionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 } // Détecte quand 60% d'une section est visible
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      let newIndex = activeIndex;

      if (event.deltaY > 0 && activeIndex < sectionsRef.current.length - 1) {
        newIndex = activeIndex + 1;
      } else if (event.deltaY < 0 && activeIndex > 0) {
        newIndex = activeIndex - 1;
      }

      sectionsRef.current[newIndex]?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeIndex]);

  return (
    <div className="App">
      {isLoading && <LoadingPage />}
      <div>
        {[FirstPage, About, Skills, Formation, Projet, Contact].map(
          (Component, index) => (
            <div key={index} ref={(el) => (sectionsRef.current[index] = el)}>
              <Component />
            </div>
          )
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
