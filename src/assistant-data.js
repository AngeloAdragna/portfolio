// Réponses de l'assistant du portfolio.
// Pas de modèle de langage : chaque question est associée à une réponse rédigée à la main,
// par mots-clés. Les réponses sont affichées en flux pour l'effet "assistant".
//
// id        : identifiant de l'intention
// question  : libellé des suggestions cliquables
// keywords  : mots-clés (sans accents, en minuscules) qui déclenchent la réponse
// steps     : étapes de "réflexion" affichées avant la réponse
// text      : la réponse
// block     : contenu riche affiché sous la réponse (work, lessons, hl7, timeline, repos, skills, contact)
// sources   : sections du portfolio citées [id, libellé]
// next      : suggestions proposées ensuite

export const greeting =
  "Bonjour. Je suis l'assistant du portfolio d'Angelo. Je réponds à partir de ce qu'il a écrit : ses projets, son parcours, et les fiches où il relit ses expériences. Par où voulez-vous commencer ?";

export const greetingNext = ["why", "now", "method", "about"];

export const intents = [
  {
    id: "why",
    question: "Pourquoi l'IA et la cybernétique ?",
    keywords: ["pourquoi", "prothese", "protheses", "cybernetique", "objectif", "but", "vocation", "danse", "hip", "corps", "mouvement", "motivation", "reve", "avenir"],
    steps: ["Lecture de la fiche « L'artisan humaniste »"],
    text: "Parce que je veux concevoir des prothèses connectées au système nerveux. Ce n'est pas un hasard d'orientation : douze ans de hip-hop à haut niveau m'ont fait explorer le mouvement et sa perfection. Vouloir le restaurer chez d'autres en est la suite logique. Le code seul me laisse un manque ; j'ai besoin qu'il touche la matière et le corps.",
    block: "fiche:artisan",
    sources: [["fiche-artisan", "Fiche : l'artisan humaniste"]],
    next: ["method", "udem", "now"],
  },
  {
    id: "method",
    question: "C'est quoi ce portfolio réflexif ?",
    keywords: ["reflexif", "reflexive", "reflexivite", "grille", "methode", "verbalisation", "metareflexion", "meta", "transfert", "fiche", "fiches", "analyse"],
    steps: ["Lecture de la méthode", "6 fiches trouvées"],
    text: "Chaque expérience qui m'a construit est relue à quatre profondeurs : la verbalisation (ce qui s'est passé), l'analyse (ce qui explique mon ressenti), la méta-réflexion (sous quel angle je l'ai regardé) et le transfert (ce que j'en fais ailleurs). Chaque fiche se termine par une compétence modélisée : action, ressources, situation, contexte. Vous pouvez choisir le niveau de lecture pour toutes les fiches à la fois.",
    block: "fiches",
    sources: [["reflexif", "Portfolio réflexif"], ["liens", "Carte des liens"]],
    next: ["why", "team", "security"],
  },
  {
    id: "team",
    question: "Comment travailles-tu en équipe ?",
    keywords: ["equipe", "scrum", "agile", "agilite", "management", "manager", "gerer", "conflit", "conflits", "chef", "leader", "leadership", "collaboration", "communication", "pythoninshape", "lia", "parseur"],
    steps: ["Lecture de la fiche « L'architecte agile »"],
    text: "J'ai été Scrum Master et Product Owner sur deux projets difficiles. J'en retiens que l'échec d'un sprint vient rarement d'un manque de compétence, plutôt d'un cadre absent ou de la fatigue. Diriger, pour moi, c'est donner du sens et concevoir des processus : un simple squelette de compte rendu a débloqué une équipe qui ne communiquait plus.",
    block: "fiche:agile",
    sources: [["fiche-agile", "Fiche : l'architecte agile"]],
    next: ["security", "daher", "contact"],
  },
  {
    id: "security",
    question: "Et la sécurité, la qualité ?",
    keywords: ["securite", "faille", "failles", "audit", "dette", "secret", "secrets", "qualite", "robustesse", "better", "tests", "rgpd", "conformite"],
    steps: ["Lecture de la fiche « Le garant de l'intégrité »"],
    text: "Mon projet Better passait tous ses tests de bout en bout, mais cachait des secrets en clair et des fuites mémoire. En le relisant avec un regard médical, j'ai compris le syndrome de la façade : des tests au vert ne disent rien de l'intégrité d'un système. Depuis, l'authentification et le cycle de vie des données sont pour moi des fondations, pas des options.",
    block: "fiche:better",
    sources: [["fiche-better", "Fiche : le garant de l'intégrité"], ["p-better", "Projet Better"]],
    next: ["daher", "interop", "team"],
  },
  {
    id: "daher",
    question: "Qu'as-tu appris hors de l'informatique ?",
    keywords: ["daher", "usine", "logistique", "terrain", "industrie", "industriel", "operateur", "hors"],
    steps: ["Lecture de la fiche « Le pragmatique systémique »"],
    text: "Opérateur logistique chez Daher, en bas de l'échelle, j'ai vu qu'une seule erreur individuelle pouvait bloquer toute la chaîne en aval. Un système n'est robuste que si ses maillons les plus invisibles le sont. C'est ce regard que je porte aujourd'hui sur le code : chercher où une erreur va se propager avant qu'elle n'apparaisse.",
    block: "fiche:daher",
    sources: [["fiche-daher", "Fiche : le pragmatique systémique"]],
    next: ["why", "udem", "now"],
  },
  {
    id: "udem",
    question: "Comment abordes-tu l'inconnu ?",
    keywords: ["montreal", "udem", "quebec", "canada", "inconnu", "incertitude", "recherche", "experimentation", "rayons", "raytracing", "infographie", "empirique"],
    steps: ["Lecture de la fiche « L'explorateur heuristique »"],
    text: "À Montréal, en implémentant un moteur de lancer de rayons, j'ai appris qu'innover demande d'accepter l'imperfection temporaire. Chercher à tâtons est une méthode valable face à l'inconnu : réduire l'éclairage global a réglé un problème de réflexions locales. C'est la démarche dont j'aurai besoin pour traiter des signaux nerveux, bruités par nature.",
    block: "fiche:udem",
    sources: [["fiche-udem", "Fiche : l'explorateur heuristique"], ["p-raytracer", "Projet lancer de rayons"]],
    next: ["why", "path", "skills"],
  },
  {
    id: "now",
    question: "Sur quoi travailles-tu en ce moment ?",
    keywords: ["moment", "actuel", "actuellement", "alternance", "icap", "mission", "orchestria", "travailles", "fais", "job", "poste", "entreprise"],
    steps: ["Lecture du profil", "Recherche des projets en cours"],
    text: "Je suis en Master 2 informatique au CERI, en alternance au pôle développement de la DSI de l'Institut du Cancer Avignon-Provence. Ma mission principale cette année, c'est OrchestrIA : un assistant IA qui réunit des flux de travail dispersés entre Jira, Confluence, SharePoint, Gitea et Teams. À côté, je travaille sur l'interopérabilité entre logiciels de soin, sur un client Java et sur une application mobile.",
    block: "work",
    sources: [["travaux", "Projets et réflexions"]],
    next: ["learn", "method", "contact"],
  },
  {
    id: "learn",
    question: "Qu'as-tu appris à l'ICAP ?",
    keywords: ["appris", "apprendre", "lecon", "lecons", "retiens", "erreur", "erreurs", "difficulte", "reflexion", "experience", "retour"],
    steps: ["Recherche dans 7 projets", "Sélection de 3 leçons"],
    text: "Trois leçons qui ont changé ma façon de travailler. Chacune vient d'un projet précis, souvent d'un moment où quelque chose a cassé.",
    block: "lessons",
    sources: [["travaux", "Projets et réflexions"]],
    next: ["interop", "about", "path"],
  },
  {
    id: "interop",
    question: "Que fais-tu avec HL7 et Mirth ?",
    keywords: ["hl7", "mirth", "interop", "interoperabilite", "aria", "radiotherapie", "message", "messages", "sante", "hopital", "onco"],
    steps: ["Recherche des projets d'interopérabilité", "2 projets trouvés"],
    text: "Je fais dialoguer Onco, le logiciel métier de l'établissement, avec d'autres systèmes. En radiothérapie, nous dématérialisons le circuit de prescription, jusque-là sur papier : flux ADT, SIU et MDM entre Onco et ARIA via Mirth Connect, et comptes rendus de fin de traitement générés automatiquement. Côté télésuivi, des messages HL7 ADT tiennent à jour les dossiers sur une plateforme externe.",
    block: "hl7",
    sources: [["travaux", "Projets et réflexions"], ["liens", "Compétences"]],
    next: ["learn", "skills", "github"],
  },
  {
    id: "path",
    question: "Quel est ton parcours ?",
    keywords: ["parcours", "formation", "etudes", "etudie", "master", "licence", "ceri", "ecole", "universite", "diplome", "cmi"],
    steps: ["Lecture du parcours"],
    text: "Licence puis master d'informatique, parcours IA, au CERI d'Avignon, avec le Cursus Master Ingénierie depuis 2022. J'ai passé un semestre à l'Université de Montréal en L3, et je suis en alternance à l'ICAP depuis 2025, pour les deux années de master.",
    block: "timeline",
    sources: [["parcours", "Parcours"]],
    next: ["now", "skills", "contact"],
  },
  {
    id: "github",
    question: "Montre-moi tes projets GitHub",
    keywords: ["github", "depot", "depots", "repo", "repos", "perso", "personnel", "personnels", "code", "universitaire", "projets"],
    steps: ["Connexion à GitHub", "Tri par date de mise à jour"],
    text: "Voici mes dépôts les plus récemment mis à jour. Les projets de l'ICAP n'y sont pas : ils restent internes à l'établissement.",
    block: "repos",
    sources: [["github", "Dépôts GitHub"], ["travaux", "Projets"]],
    next: ["now", "skills", "about"],
  },
  {
    id: "skills",
    question: "Quelles technologies utilises-tu ?",
    keywords: ["competence", "competences", "technologie", "technologies", "techno", "langage", "langages", "stack", "java", "python", "react", "spring", "outils", "maitrise", "ml", "machine", "learning", "deep", "pytorch", "tensorflow", "nlp", "data"],
    steps: ["Lecture des compétences"],
    text: "Au quotidien : Java, Spring Boot et Swing, HL7 v2 et Mirth Connect pour l'interopérabilité. Côté IA : RAG, fine-tuning, NER, PyTorch et TensorFlow, avec des métriques comme le F1-score ou BLEU. Le détail par usage :",
    block: "skills",
    sources: [["liens", "Compétences"]],
    next: ["interop", "github", "contact"],
  },
  {
    id: "contact",
    question: "Comment te contacter ?",
    keywords: ["contact", "contacter", "mail", "email", "joindre", "cv", "linkedin", "embauche", "recrutement", "recruter", "disponible", "disponibilite", "dispo", "offre", "cdi"],
    steps: ["Recherche des coordonnées"],
    text: "Mon alternance se termine en 2027. Le plus simple est de m'écrire, je réponds vite.",
    block: "contact",
    sources: [["contact", "Contact"]],
    next: ["now", "path"],
  },
  {
    id: "about",
    question: "Comment fonctionne cet assistant ?",
    keywords: ["assistant", "fonctionne", "fonctionnes", "marche", "toi", "llm", "chatgpt", "claude", "gpt", "modele", "robot", "bot", "vrai"],
    steps: ["Analyse de la question", "Lecture de mon propre code"],
    text: "Je ne suis pas un vrai modèle de langage. Je suis un petit moteur écrit par Angelo : je repère les mots-clés de votre question, je choisis une réponse qu'il a rédigée lui-même, puis je l'affiche en flux et je cite la section du portfolio d'où elle vient. Il a préféré des réponses justes à des réponses inventées. C'est aussi un clin d'œil à OrchestrIA, l'assistant qu'il conçoit en alternance, qui doit lui aussi citer ses sources.",
    block: null,
    sources: [],
    next: ["now", "learn"],
  },
];

export const fallback = {
  id: "fallback",
  steps: ["Recherche dans le portfolio", "Aucune source trouvée"],
  text: "Je n'ai rien sur ce sujet dans le portfolio, et je préfère ne pas inventer de réponse. Vous pouvez poser la question directement à Angelo, ou choisir un des sujets ci-dessous.",
  block: null,
  sources: [],
  next: ["contact", "now", "learn"],
};

// Questions affichées une à une dans le champ de saisie vide.
export const placeholders = [
  "Pourquoi les prothèses connectées ?",
  "Qu'as-tu appris en alternance ?",
  "Tu utilises quelles technos ?",
  "C'est quoi OrchestrIA ?",
  "Tu es disponible quand ?",
];

const normalize = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ");

export function matchIntent(question) {
  const words = normalize(question).split(/\s+/).filter(Boolean);
  let best = null;
  let bestScore = 0;
  for (const intent of intents) {
    const score = words.filter((w) => intent.keywords.some((k) => w === k || (k.length > 4 && w.startsWith(k)))).length;
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  return best ?? fallback;
}

export const intentById = Object.fromEntries(intents.map((i) => [i.id, i]));
