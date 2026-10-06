# Portfolio d'Angelo Adragna

Site personnel : alternance à l'Institut du Cancer Avignon-Provence, parcours au CERI, projets GitHub, compétences et contact.

React 18 + Vite, sans autre dépendance d'exécution.

## Lancer en local

```bash
npm install
npm run dev
```

## Modifier le contenu

- `src/reflexive.js` : les six fiches réflexives (verbalisation, analyse, méta-réflexion, transfert), la compétence modélisée de chaque fiche (action, ressources, situation, contexte) et les projets qu'elle relie.
- `src/data.js` : identité, projets et leçons (`lesson`, facultative, et `more`), parcours, autres expériences, compétences techniques. L'`id` d'un projet sert à le relier aux fiches ; ses `tech` doivent reprendre l'orthographe exacte des compétences pour que la carte les relie.
- `src/assistant-data.js` : questions, mots-clés et réponses de l'assistant. Pour ajouter un sujet, ajouter une entrée dans `intents`.

L'assistant n'utilise pas de modèle de langage : il associe la question à une réponse rédigée à la main par mots-clés, puis l'affiche en flux et cite la section du portfolio concernée.

## Déployer

GitHub Pages : `npm run deploy` (publie `dist/` sur la branche `gh-pages`).
Vercel : build `npm run build`, dossier de sortie `dist`.
Le `base: "./"` de `vite.config.js` permet au même build de fonctionner aux deux endroits.

## Structure

```
src/
  data.js, assistant-data.js     contenu
  reflexive.js                   fiches réflexives
  App.jsx                        mise en page
  components/Landing.jsx         page d'accueil d'origine (Vanta WAVES, three.js r121 chargés dans index.html)
  components/Reflexive.jsx       fiches à quatre niveaux, niveau de lecture global
  components/LinkMap.jsx         carte projets, expériences, compétences
  components/Assistant.jsx       conversation, réponses en flux, suggestions
  components/AnswerBlock.jsx     contenus riches dans les réponses
  components/Work.jsx            projets, leçons, filtre par technologie
  components/GithubRepos.jsx     dépôts GitHub, affichés à la fin des projets
  useRepos.js                    chargement des dépôts (API GitHub)
  styles.css                     styles (thème clair/sombre automatique)
public/                          CV, favicon, vanta.waves.min.js
```
