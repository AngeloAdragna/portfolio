import { useLayoutEffect, useRef, useState } from "react";
import { experiences } from "../reflexive.js";
import { skills, work } from "../data.js";
import { goToSection } from "../nav.js";

// Tous les projets, dans l'ordre de la section Projets.
const projects = work;
// Compétences techniques réellement utilisées dans au moins un projet.
const usedTech = new Set(work.flatMap((w) => w.tech));
const edges = experiences.flatMap((e) => e.projects.map((p) => ({ exp: e.id, project: p })));

// Ce qui est relié au nœud survolé.
function related(focus) {
  if (!focus) return null;
  const [kind, id] = focus.split(":");
  const exps = new Set();
  const projs = new Set();
  if (kind === "s") {
    work.filter((w) => w.tech.includes(id)).forEach((w) => projs.add(w.id));
    edges.filter((e) => projs.has(e.project)).forEach((e) => exps.add(e.exp));
  } else if (kind === "p") {
    projs.add(id);
    edges.filter((e) => e.project === id).forEach((e) => exps.add(e.exp));
  } else {
    exps.add(id);
    edges.filter((e) => e.exp === id).forEach((e) => projs.add(e.project));
  }
  return { exps, projs };
}

export default function LinkMap() {
  const box = useRef(null);
  const [paths, setPaths] = useState([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [focus, setFocus] = useState(null);
  const rel = related(focus);

  // Recalcule les courbes quand la mise en page change.
  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const compute = () => {
      const b = el.getBoundingClientRect();
      const pos = (sel) => {
        const n = el.querySelector(sel);
        if (!n) return null;
        const r = n.getBoundingClientRect();
        return { l: r.left - b.left, r: r.right - b.left, y: r.top - b.top + r.height / 2 };
      };
      const ps = [];
      edges.forEach((e) => {
        const p = pos(`[data-node="p:${e.project}"]`);
        const x = pos(`[data-node="e:${e.exp}"]`);
        if (p && x) ps.push({ ...e, d: curve(p.r, p.y, x.l, x.y) });
      });
      experiences.forEach((e) => {
        const x = pos(`[data-node="e:${e.id}"]`);
        const c = pos(`[data-node="c:${e.id}"]`);
        if (x && c) ps.push({ exp: e.id, project: null, d: curve(x.r, x.y, c.l, c.y) });
      });
      setPaths(ps);
      setSize({ w: b.width, h: b.height });
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    document.fonts?.ready.then(compute);
    return () => ro.disconnect();
  }, []);

  const lit = (p) => rel && rel.exps.has(p.exp) && (p.project === null || rel.projs.has(p.project));
  const nodeClass = (on) => (rel ? (on ? " is-lit" : " is-dim") : "");

  return (
    <section id="liens" className="linkmap-section">
      <div className="reflexive-intro">
        <h2>Compétences : ce que chaque projet a construit</h2>
        <p className="lead-left">
          Un projet nourrit souvent plusieurs expériences, et chaque expérience débouche sur une compétence
          transversale. Survolez ou touchez un projet, une expérience ou un outil pour suivre le fil.
        </p>
      </div>

      <div className="toolbox" onMouseLeave={() => setFocus(null)}>
        <h3>Compétences techniques</h3>
        <p className="muted toolbox-hint">
          {focus?.startsWith("s:")
            ? `${rel.projs.size} projet${rel.projs.size > 1 ? "s" : ""} avec ${focus.slice(2)}`
            : "Les outils soulignés ont servi dans un projet : survolez-les pour voir lesquels sur la carte."}
        </p>
        <dl className="toolbox-groups">
          {skills.map((g) => (
            <div key={g.group}>
              <dt>{g.group}</dt>
              <dd>
                {g.items.map((t) =>
                  usedTech.has(t) ? (
                    <button
                      key={t}
                      type="button"
                      className={`tool is-used${focus === `s:${t}` ? " is-on" : ""}`}
                      onMouseEnter={() => setFocus(`s:${t}`)}
                      onFocus={() => setFocus(`s:${t}`)}
                      onBlur={() => setFocus(null)}
                      onClick={() => box.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    >
                      {t}
                    </button>
                  ) : (
                    <span key={t} className="tool">{t}</span>
                  )
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {/* Sur téléphone, les courbes n'ont pas la place : chaque expérience devient une carte. */}
      <ul className="linkmap-mobile">
        {experiences.map((e) => (
          <li key={e.id} className={`lmm-card${nodeClass(rel?.exps.has(e.id))}`}>
            <button type="button" className="lmm-exp" onClick={() => goToSection(`fiche-${e.id}`)}>
              {e.archetype}
            </button>
            <p className="lmm-comp">
              <span className="muted">Compétence</span> {e.competence.name}
            </p>
            <p className="lmm-projects">
              {e.projects.map((id) => {
                const p = work.find((w) => w.id === id);
                return (
                  <button
                    key={id}
                    type="button"
                    className={`chip${rel?.projs.has(id) ? " is-on" : ""}`}
                    onClick={() => goToSection(`p-${id}`)}
                  >
                    {p.title}
                  </button>
                );
              })}
            </p>
          </li>
        ))}
      </ul>

      <div className="linkmap" ref={box} onMouseLeave={() => setFocus(null)}>
        <svg className="linkmap-svg" width={size.w} height={size.h} aria-hidden="true">
          {paths.map((p, i) => (
            <path key={i} d={p.d} className={rel ? (lit(p) ? "is-lit" : "is-dim") : ""} />
          ))}
        </svg>

        <div className="lm-col">
          <p className="lm-head">Projets</p>
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              data-node={`p:${p.id}`}
              className={`lm-node lm-project${nodeClass(rel?.projs.has(p.id))}`}
              onMouseEnter={() => setFocus(`p:${p.id}`)}
              onFocus={() => setFocus(`p:${p.id}`)}
              onBlur={() => setFocus(null)}
              onClick={() => goToSection(`p-${p.id}`)}
            >
              {p.title}
              <span className="lm-sub">{p.where}</span>
            </button>
          ))}
        </div>

        <div className="lm-col lm-center">
          <p className="lm-head">Expériences</p>
          {experiences.map((e) => (
            <button
              key={e.id}
              type="button"
              data-node={`e:${e.id}`}
              className={`lm-node lm-exp${nodeClass(rel?.exps.has(e.id))}`}
              onMouseEnter={() => setFocus(`e:${e.id}`)}
              onFocus={() => setFocus(`e:${e.id}`)}
              onBlur={() => setFocus(null)}
              onClick={() => goToSection(`fiche-${e.id}`)}
            >
              {e.archetype}
              <span className="lm-sub">{e.title}</span>
            </button>
          ))}
        </div>

        <div className="lm-col">
          <p className="lm-head">Compétences</p>
          {experiences.map((e) => (
            <p
              key={e.id}
              data-node={`c:${e.id}`}
              className={`lm-node lm-comp${nodeClass(rel?.exps.has(e.id))}`}
              onMouseEnter={() => setFocus(`e:${e.id}`)}
            >
              {e.competence.name}
            </p>
          ))}
        </div>
      </div>

    </section>
  );
}

function curve(x1, y1, x2, y2) {
  const dx = (x2 - x1) * 0.5;
  return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
}
