import { useState } from "react";
import { experiences, levels, conclusion } from "../reflexive.js";
import { work } from "../data.js";
import { goToSection } from "../nav.js";

const projectTitle = Object.fromEntries(work.map((w) => [w.id, w.title]));

function Competence({ c }) {
  return (
    <div className="competence">
      <p className="competence-label">Compétence modélisée</p>
      <h4>{c.name}</h4>
      <dl>
        <div><dt>Action</dt><dd>{c.action}</dd></div>
        <div><dt>Ressources</dt><dd>{c.ressources}</dd></div>
        <div><dt>Situation</dt><dd>{c.situation}</dd></div>
        <div><dt>Contexte</dt><dd>{c.contexte}</dd></div>
      </dl>
    </div>
  );
}

function Fiche({ exp, index, globalLevel, readAll }) {
  const [local, setLocal] = useState(null);
  const level = local ?? globalLevel;
  const li = levels.findIndex((l) => l.key === level);

  return (
    <article className="fiche" id={`fiche-${exp.id}`}>
      <header className="fiche-head">
        <span className="fiche-num">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="fiche-archetype">{exp.archetype}</h3>
          <p className="fiche-title">{exp.title}</p>
          <p className="fiche-when muted">{exp.when}</p>
        </div>
      </header>

      {readAll ? (
        <div className="fiche-all">
          {levels.map((l) => (
            <section key={l.key} className={`level level-${l.key}`}>
              <h4 className="level-name">{l.label}</h4>
              <p>{exp[l.key]}</p>
            </section>
          ))}
          <Competence c={exp.competence} />
        </div>
      ) : (
        <>
          <div className="stepper" role="tablist" aria-label={`Niveaux d'analyse : ${exp.archetype}`}>
            {levels.map((l, i) => (
              <button
                key={l.key}
                type="button"
                role="tab"
                aria-selected={l.key === level}
                className={`step${l.key === level ? " is-on" : ""}${i < li ? " is-past" : ""}`}
                onClick={() => setLocal(l.key)}
              >
                <span className="step-dot" />
                <span className="step-label">{l.label}</span>
              </button>
            ))}
          </div>
          <div className="fiche-body" role="tabpanel" key={level}>
            <p className={`level-text level-${level}`}>{exp[level]}</p>
            {level === "transfert" && <Competence c={exp.competence} />}
            {li < levels.length - 1 && (
              <button type="button" className="link-btn deeper" onClick={() => setLocal(levels[li + 1].key)}>
                Creuser : {levels[li + 1].label.toLowerCase()}
              </button>
            )}
          </div>
        </>
      )}

      <p className="fiche-links">
        <span className="muted">Projets liés</span>
        {exp.projects.map((id) => (
          <button key={id} type="button" className="chip" onClick={() => goToSection(`p-${id}`)}>
            {projectTitle[id]}
          </button>
        ))}
      </p>
    </article>
  );
}

export default function Reflexive() {
  const [level, setLevel] = useState("verbalisation");
  const [readAll, setReadAll] = useState(false);
  const [version, setVersion] = useState(0);
  const current = levels.find((l) => l.key === level);

  const choose = (key) => {
    setReadAll(false);
    setLevel(key);
    setVersion((v) => v + 1); // réinitialise les choix faits fiche par fiche
  };

  return (
    <section id="reflexif" className="reflexive">
      <div className="reflexive-intro">
        <h2>Six expériences, relues à quatre profondeurs</h2>
        <p className="lead-left">
          Pour chaque expérience qui m'a construit, je questionne ce que j'ai fait, ce que j'ai ressenti, sous
          quel angle je l'ai regardé, puis ce que j'en transfère.
        </p>
      </div>

      <div className="depth" role="group" aria-label="Niveau de lecture pour toutes les fiches">
        <p className="depth-label">Niveau de lecture</p>
        <div className="depth-control">
          {levels.map((l, i) => (
            <button
              key={l.key}
              type="button"
              className={!readAll && level === l.key ? "is-on" : ""}
              aria-pressed={!readAll && level === l.key}
              onClick={() => choose(l.key)}
            >
              <span className="depth-n">{i + 1}</span> {l.label}
            </button>
          ))}
          <button
            type="button"
            className={readAll ? "is-on" : ""}
            aria-pressed={readAll}
            onClick={() => setReadAll(true)}
          >
            Tout lire
          </button>
        </div>
        <p className="depth-hint muted">{readAll ? "Les quatre niveaux de chaque fiche, à la suite." : current.hint}</p>
      </div>

      <div className="fiches">
        {experiences.map((exp, i) => (
          <Fiche key={`${exp.id}-${version}`} exp={exp} index={i} globalLevel={level} readAll={readAll} />
        ))}
      </div>

      <p className="conclusion">{conclusion}</p>
    </section>
  );
}
