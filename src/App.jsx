import { useEffect, useState } from "react";
import Assistant from "./components/Assistant.jsx";
import Landing from "./components/Landing.jsx";
import Reflexive from "./components/Reflexive.jsx";
import LinkMap from "./components/LinkMap.jsx";
import Work from "./components/Work.jsx";
import { IconDownload, IconGithub, IconLinkedin, IconMail } from "./components/Icons.jsx";
import { identity, otherJobs, path } from "./data.js";
import { useRepos } from "./useRepos.js";

const nav = [
  ["reflexif", "Réflexif"],
  ["liens", "Compétences"],
  ["travaux", "Projets"],
  ["parcours", "Parcours"],
  ["contact", "Contact"],
];

export default function App() {
  const repos = useRepos();
  const [overLanding, setOverLanding] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu mobile : se ferme avec Échap.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // La barre du haut est transparente tant que la page d'accueil est visible.
  useEffect(() => {
    const el = document.querySelector(".landing");
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setOverLanding(e.isIntersecting), {
      rootMargin: "-64px 0px 0px 0px",
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const cvHref = `${import.meta.env.BASE_URL}${identity.cv}`;

  return (
    <>
      <a className="skip" href="#bonjour">Aller au contenu</a>

      <header className={`topbar${overLanding && !menuOpen ? " is-over" : ""}${menuOpen ? " is-open" : ""}`}>
        <div className="topbar-inner">
          <a className="brand" href="#top">
            <span className="orb orb-small" aria-hidden="true" />
            {identity.name}
          </a>
          <nav aria-label="Sections">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <a className="btn btn-small" href={cvHref} download>
            <IconDownload /> CV
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span />
          </button>
        </div>
        <nav id="menu-mobile" className="menu-mobile" aria-label="Sections" hidden={!menuOpen}>
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="#bonjour" onClick={() => setMenuOpen(false)}>Poser une question</a>
        </nav>
      </header>

      <main>
        <Landing />

        <section className="hero" id="bonjour">
          <div className="glow" aria-hidden="true" />
          <h2 className="hero-title">Bonjour, je suis Angelo.</h2>
          <p className="lead">
            En Master 2 informatique au CERI et en alternance à l'Institut du Cancer Avignon-Provence, je
            conçois OrchestrIA, un assistant IA pour la conduite de projet. Ce portfolio a le sien de façon modeste.
          </p>
          <Assistant repos={repos} />
        </section>

        <p className="divider">Tout le portfolio, pour le lire sans poser de question</p>

        <Reflexive />
        <LinkMap />

        <section id="travaux" className="section">
          <Work repos={repos} />
        </section>

        <section id="parcours" className="section">
          <div className="section-head">
            <h2>Parcours</h2>
            <p className="muted">
              Licence puis master d'informatique au CERI, avec le Cursus Master Ingénierie (CMI), un
              semestre à l'Université de Montréal et l'alternance depuis 2025.
            </p>
          </div>
          <ol className="section-body timeline">
            {path.map((p) => (
              <li key={p.years}>
                <span className="years">{p.years}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.place}</p>
                  {p.note && <p>{p.note}</p>}
                  {p.courses && (
                    <details>
                      <summary>Enseignements suivis</summary>
                      <ul className="courses">
                        {p.courses.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                    </details>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section-tight">
          <div className="section-head">
            <h2>Autres expériences</h2>
          </div>
          <ul className="section-body timeline">
            {otherJobs.map((j) => (
              <li key={j.title}>
                <span className="years">{j.years}</span>
                <div>
                  <h3>{j.title}</h3>
                  <p className="muted">{j.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section">
          <div className="section-head">
            <h2>Contact</h2>
            <p className="muted">Mon alternance se termine en 2027. Pour en parler, écrivez-moi.</p>
          </div>
          <div className="section-body">
            <a className="mail" href={`mailto:${identity.email}`}>{identity.email}</a>
            <ul className="links">
              <li><a href={`mailto:${identity.email}`}><IconMail /> Écrire un mail</a></li>
              <li>
                <a href={`https://github.com/${identity.github}`} target="_blank" rel="noopener noreferrer"><IconGithub /> GitHub</a>
              </li>
              <li>
                <a href={`https://www.linkedin.com/in/${identity.linkedin}/`} target="_blank" rel="noopener noreferrer"><IconLinkedin /> LinkedIn</a>
              </li>
              <li><a href={cvHref} download><IconDownload /> CV (PDF)</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {identity.name}.</p>
      </footer>
    </>
  );
}
