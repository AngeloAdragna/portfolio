import { useState } from "react";
import { identity, path, skills, work } from "../data.js";
import { experiences } from "../reflexive.js";
import { IconDownload, IconGithub, IconLinkedin, IconMail } from "./Icons.jsx";
import { goToSection } from "../nav.js";

function Repos({ repos }) {
  const profile = `https://github.com/${identity.github}`;
  if (repos.status === "loading") return <p className="muted">Chargement des dépôts…</p>;
  if (repos.status === "error")
    return (
      <p className="muted">
        GitHub ne répond pas pour l'instant. Les dépôts sont visibles sur <a href={profile}>le profil GitHub</a>.
      </p>
    );
  return (
    <ul className="b-list">
      {repos.repos.slice(0, 4).map((r) => (
        <li key={r.id}>
          <a href={r.html_url} target="_blank" rel="noopener noreferrer"><strong>{r.name}</strong></a>
          <span className="muted">{r.description || r.language || "Pas de description."}</span>
        </li>
      ))}
    </ul>
  );
}

function ContactBlock() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${identity.email}`;
    }
  };
  return (
    <div className="b-contact">
      <a className="btn" href={`mailto:${identity.email}`}><IconMail /> {identity.email}</a>
      <button type="button" className="btn btn-ghost" onClick={copy}>{copied ? "Adresse copiée" : "Copier l'adresse"}</button>
      <a className="btn btn-ghost" href={`https://www.linkedin.com/in/${identity.linkedin}/`} target="_blank" rel="noopener noreferrer"><IconLinkedin /> LinkedIn</a>
      <a className="btn btn-ghost" href={`https://github.com/${identity.github}`} target="_blank" rel="noopener noreferrer"><IconGithub /> GitHub</a>
      <a className="btn btn-ghost" href={`${import.meta.env.BASE_URL}${identity.cv}`} download><IconDownload /> CV</a>
    </div>
  );
}

// Contenu riche affiché sous une réponse de l'assistant.
export default function AnswerBlock({ type, repos }) {
  if (type.startsWith("fiche:")) {
    const e = experiences.find((x) => x.id === type.slice(6));
    return (
      <div className="b-fiche">
        <p className="b-fiche-arch">{e.archetype}</p>
        <p className="b-fiche-comp">{e.competence.name}</p>
        <p className="muted">{e.competence.action}</p>
        <button type="button" className="link-btn" onClick={() => goToSection(`fiche-${e.id}`)}>
          Lire la fiche à quatre niveaux
        </button>
      </div>
    );
  }
  switch (type) {
    case "fiches":
      return (
        <ul className="b-list">
          {experiences.map((e) => (
            <li key={e.id}>
              <button type="button" className="b-link" onClick={() => goToSection(`fiche-${e.id}`)}><strong>{e.archetype}</strong></button>
              <span className="muted">{e.competence.name}</span>
            </li>
          ))}
        </ul>
      );
    case "work":
      return (
        <ul className="b-list">
          {work.filter((w) => w.where === "ICAP").slice(0, 5).map((w) => (
            <li key={w.title}>
              <button type="button" className="b-link" onClick={() => goToSection("travaux")}><strong>{w.title}</strong></button>
              <span className="muted">{w.status}</span>
            </li>
          ))}
        </ul>
      );
    case "lessons":
      return (
        <ol className="b-lessons">
          {["rth", "telesuivi", "simuloscanner"].map((id) => work.find((w) => w.id === id)).map((w) => (
            <li key={w.title}>
              <p>{w.lesson}</p>
              <span className="muted">{w.title}</span>
            </li>
          ))}
        </ol>
      );
    case "hl7":
      return (
        <ul className="b-list">
          {work.filter((w) => w.tech.includes("HL7 v2")).map((w) => (
            <li key={w.title}>
              <strong>{w.title}</strong>
              <span className="muted">{w.tech.join(", ")}</span>
            </li>
          ))}
        </ul>
      );
    case "timeline":
      return (
        <ol className="b-timeline">
          {path.map((p) => (
            <li key={p.years}>
              <span className="muted">{p.years}</span>
              <strong>{p.title}</strong>
            </li>
          ))}
        </ol>
      );
    case "skills":
      return (
        <dl className="b-skills">
          {skills.map((s) => (
            <div key={s.group}>
              <dt>{s.group}</dt>
              <dd>{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      );
    case "repos":
      return <Repos repos={repos} />;
    case "contact":
      return <ContactBlock />;
    default:
      return null;
  }
}
