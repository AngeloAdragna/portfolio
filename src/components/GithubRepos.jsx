import { identity } from "../data.js";

// Dépôts GitHub publics, affichés à la fin de la liste des projets.
export default function GithubRepos({ repos }) {
  const profile = `https://github.com/${identity.github}`;
  return (
    <div id="github">
      <div className="work-meta">
        <h3>Aussi sur GitHub</h3>
        <span className="status">Dépôts publics, les plus récents d'abord</span>
      </div>
      {repos.status === "loading" && <p className="context">Chargement des dépôts GitHub…</p>}
      {repos.status === "error" && (
        <p className="context">
          Les dépôts n'ont pas pu être chargés depuis GitHub. Ils sont tous visibles sur{" "}
          <a href={profile}>mon profil GitHub</a>.
        </p>
      )}
      {repos.status === "ok" && (
        <>
          <ul className="repos">
            {repos.repos.map((r) => (
              <li key={r.id}>
                <a className="repo-name" href={r.html_url} target="_blank" rel="noopener noreferrer">{r.name}</a>
                <p className="repo-desc">{r.description || "Pas de description."}</p>
                <p className="repo-meta">
                  {r.language && <span>{r.language}</span>}
                  <span>Mis à jour en {new Date(r.pushed_at).getFullYear()}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="more">
            <a href={profile} target="_blank" rel="noopener noreferrer">Voir tous les dépôts sur GitHub</a>
          </p>
        </>
      )}
    </div>
  );
}
