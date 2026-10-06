import { useEffect, useRef, useState } from "react";
import { identity } from "../data.js";
import { quote } from "../reflexive.js";

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fond animé d'origine (Vanta WAVES, chargé dans index.html avec three.js r121).
// Sans WebGL, sans le script, ou si l'utilisateur réduit les animations : un dégradé fixe prend le relais.
function Waves() {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduceMotion()) return;
    let effect = null;
    let tries = 0;
    const init = () => {
      if (!window.VANTA?.WAVES) {
        if (tries++ < 40) timer = setTimeout(init, 100);
        return;
      }
      try {
        effect = window.VANTA.WAVES({
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: 0x05403f,
          shininess: 70,
          waveHeight: 45,
          waveSpeed: 0.9,
          zoom: 0.8,
        });
        setReady(true);
      } catch {
        /* pas de WebGL : on garde le dégradé */
      }
    };
    let timer = setTimeout(init, 0);
    return () => {
      clearTimeout(timer);
      effect?.destroy();
    };
  }, []);

  return <div ref={ref} className={`waves${ready ? " is-ready" : ""}`} aria-hidden="true" />;
}

export default function Landing() {
  return (
    <section className="landing" id="top">
      <Waves />
      <div className="landing-inner">
        <p className="landing-kicker">Portfolio réflexif</p>
        <h1 className="landing-name">{identity.name}</h1>
        <p className="landing-role">Futur ingénieur en intelligence artificielle et science des données</p>
        <blockquote className="landing-quote">« {quote} »</blockquote>
      </div>
      <a className="scroll-cue" href="#bonjour" aria-label="Découvrir le portfolio">
        <span />
      </a>
    </section>
  );
}
