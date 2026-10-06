import { useState } from "react";
import { work } from "../data.js";
import { experiences } from "../reflexive.js";
import { goToSection } from "../nav.js";
import GithubRepos from "./GithubRepos.jsx";

// Pour chaque projet, les fiches réflexives qu'il nourrit.
const feeds = Object.fromEntries(
  work.map((w) => [w.id, experiences.filter((e) => e.projects.includes(w.id))])
);

export default function Work({ repos }) {
  const [filter, setFilter] = useState(null);
  const visible = (w) => !filter || feeds[w.id].some((e) => e.id === filter);
  const count = work.filter(visible).length;

  return (
    <>
      <div className="section-head">
        <h2>Projets</h2>
        <p className="muted">
          À l'ICAP, à l'université et en dehors. Pour chacun, la leçon d'abord, puis le projet et la fiche
          réflexive qu'il nourrit. Les dépôts GitHub suivent.
        </p>
        <div className="filters" role="group" aria-label="Filtrer par expérience">
          {experiences.map((e) => (
            <button
              key={e.id}
              type="button"
              className={`chip${filter === e.id ? " is-on" : ""}`}
              aria-pressed={filter === e.id}
              onClick={() => setFilter(filter === e.id ? null : e.id)}
            >
              {e.archetype}
            </button>
          ))}
        </div>
        <p className="filter-count muted" role="status">
          {count} projet{count > 1 ? "s" : ""}
          {filter ? ` liés à « ${experiences.find((e) => e.id === filter).archetype.toLowerCase()} »` : ""}
        </p>
      </div>

      <ul className="section-body work">
        {work.map((w) => {
          const dim = !visible(w);
          return (
            <li key={w.id} id={`p-${w.id}`} className={dim ? "is-dim" : ""} aria-hidden={dim || undefined}>
              <div className="work-meta">
                <h3>{w.title}</h3>
                <span className="status">{w.where}</span>
                <span className="status muted">{w.status}</span>
              </div>
              {w.lesson && <p className="lesson">{w.lesson}</p>}
              <p className={w.lesson ? "context" : "context context-only"}>{w.context}</p>
              <p className="tech">{w.tech.join(", ")}</p>
              {feeds[w.id].length > 0 && (
                <p className="feeds">
                  <span className="muted">Nourrit</span>
                  {feeds[w.id].map((e) => (
                    <button key={e.id} type="button" className="link-btn" onClick={() => goToSection(`fiche-${e.id}`)}>
                      {e.archetype}
                    </button>
                  ))}
                </p>
              )}
              {w.more.length > 0 && (
                <details>
                  <summary>{w.more.length === 1 ? "Une autre leçon" : `${w.more.length} autres leçons`}</summary>
                  <ul className="more-lessons">
                    {w.more.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </details>
              )}
            </li>
          );
        })}
        <li className="github-item">
          <GithubRepos repos={repos} />
        </li>
      </ul>
    </>
  );
}
