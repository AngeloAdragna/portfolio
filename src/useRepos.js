import { useEffect, useState } from "react";
import { identity } from "./data.js";

const MAX_REPOS = 8;

// Dépôts GitHub publics, chargés une fois et partagés entre l'assistant et la section GitHub.
export function useRepos() {
  const [state, setState] = useState({ status: "loading", repos: [] });

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://api.github.com/users/${identity.github}/repos?sort=pushed&per_page=100`, { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub a répondu ${r.status}`);
        return r.json();
      })
      .then((data) => {
        const repos = data.filter((r) => !r.fork && r.name !== identity.github).slice(0, MAX_REPOS);
        setState({ status: "ok", repos });
      })
      .catch((e) => {
        if (e.name !== "AbortError") setState({ status: "error", repos: [] });
      });
    return () => ctrl.abort();
  }, []);

  return state;
}
