// Tout le contenu texte du portfolio est ici : le modifier ne demande pas de toucher aux composants.
// Les "leçons" sont des brouillons à réécrire avec tes propres mots : c'est la partie la plus personnelle du site.

export const identity = {
  name: "Angelo Adragna",
  email: "angelo.adragna.pro@gmail.com",
  github: "AngeloAdragna",
  linkedin: "angelo-adragna-2494491a9",
  cv: "CV_Angelo_Adragna.pdf",
};

export const work = [
  {
    id: "orchestria",
    title: "OrchestrIA",
    where: "ICAP",
    status: "Mission principale",
    context: "Un assistant IA pour réunir des flux de travail dispersés entre Jira, Confluence, SharePoint, Gitea et Teams : documentation de référence, gabarits de cycle de vie projet, organisation des tickets.",
    tech: ["RAG", "IA générative", "Jira", "Confluence"],
    lesson: "Quand deux projets partagent la même stack, leur frontière doit être écrite noir sur blanc. Sinon c'est la documentation qui finit par les fusionner.",
    more: [
      "Confronter un gabarit à de vrais documents de l'établissement montre ses manques bien mieux qu'une conception sur le papier.",
    ],
  },
  {
    id: "rth",
    title: "Interopérabilité Onco et ARIA",
    where: "ICAP",
    status: "Radiothérapie",
    context: "Dématérialisation du circuit de prescription en radiothérapie, jusque-là sur papier : flux ADT, SIU et MDM entre Onco et ARIA via Mirth Connect en HL7 v2, orchestration asynchrone, comptes rendus de fin de traitement générés automatiquement.",
    tech: ["HL7 v2", "Mirth Connect", "Java", "Spring Boot"],
    lesson: "Un même patient a plusieurs identifiants selon le logiciel. Les confondre a suffi à faire rejeter un message en production : maintenant, je nomme les identifiants avant d'écrire la moindre ligne.",
    more: [
      "Un lecteur de documents plus strict que LibreOffice m'a appris qu'une regex appliquée à tout un fichier XML est une fausse bonne idée. Je préfère une logique qui connaît le contexte.",
      "Un modèle à trous casse dès que le nombre de lignes varie. Générer tout le XML est plus long à écrire, et beaucoup plus solide.",
      "Un try/catch qui nettoie quoi qu'il arrive peut faire croire qu'un bug est corrigé. Je relis toujours ce que fait le catch après le repli.",
      "Chaque type de message a une seule stratégie de renvoi, côté client ou côté serveur, jamais les deux.",
    ],
  },
  {
    id: "outlook",
    title: "Synchronisation Onco et Outlook",
    where: "ICAP",
    status: "En production",
    context: "Synchronisation bidirectionnelle et sécurisée des agendas entre Onco et Outlook via Microsoft Graph : architecture Java découplée, anonymisation des données (Privacy by Design), traitements asynchrones. Déployée en production, avec la formation des utilisateurs.",
    tech: ["Java", "Swing", "Spring Boot", "Microsoft Graph", "Privacy by Design"],
    lesson: "Une valeur par défaut écrite dans le code ne vaut rien si la configuration la remplace. Je vérifie d'où vient vraiment une valeur avant de la croire.",
    more: [
      "Renoncer à un algorithme élégant pour une stratégie Delete + Create plus robuste : sans test possible en production, la simplicité est une sécurité.",
      "Appliquer un filtre partout plutôt que multiplier les variantes de méthodes a rendu le code plus court et plus facile à maintenir.",
    ],
  },
  {
    id: "simuloscanner",
    title: "Simuloscanner",
    where: "ICAP",
    status: "Traçabilité en radiothérapie",
    context: "Traçabilité des produits de contraste et des photos de marquage au scanner de simulation : application mobile de saisie, API REST Spring Boot, visionneuse Swing avec chargement asynchrone depuis FTP, trace immuable. En service pour les équipes de radiothérapie, sur des smartphones gérés par Intune.",
    tech: ["React Native", "Spring Boot", "Swing", "Java"],
    lesson: "La signature des APK m'a coûté plus de temps que le code. Livrer fait partie du développement, et ça s'automatise aussi.",
    more: [
      "Refactoriser sans changer le comportement est une discipline : retirer des identifiants commités, du code mort et une connexion automatique cassée, sans toucher à l'interface.",
    ],
  },
  {
    id: "telesuivi",
    title: "Notifications vers le télésuivi",
    where: "ICAP",
    status: "Interopérabilité",
    context: "Mise à jour automatique de l'identité des patients sur une plateforme externe de télésuivi par messages HL7 ADT, depuis le client Swing et les web services Spring Boot.",
    tech: ["HL7 v2", "Java", "Spring Boot", "Swing"],
    lesson: "L'ordre des appels est une règle métier : l'information doit être enregistrée avant que le message parte. Un seul point d'entrée pour tous les écrans rend cette règle impossible à oublier.",
    more: [
      "Une revue de code par un développeur expérimenté m'a appris à suivre une fonctionnalité de bout en bout avant de la dire terminée.",
    ],
  },
  {
    id: "frises",
    title: "Frises de traitement pour la pharmacie",
    where: "ICAP",
    status: "Visualisation",
    context: "Génération de frises de cycles de traitement à partir des protocoles, en distinguant les prises à l'institut et à domicile.",
    tech: ["Python"],
    lesson: "Sur une visualisation qui touche à la sécurité des patients, le manque de place ne justifie jamais de fusionner deux lignes de prescription.",
    more: [],
  },
  {
    id: "imagerie3d",
    title: "Imagerie médicale en 3D",
    where: "ICAP",
    status: "Veille",
    context: "Conversion d'images médicales DICOM en modèles 3D pour la réalité virtuelle et l'impression, en lien avec Avignon Université.",
    tech: ["Python", "Impression 3D"],
    lesson: "Avant de solliciter des partenaires et du matériel, vérifier que les formats et les données suivent. Le reste en dépend.",
    more: [],
  },
  {
    id: "pythoninshape",
    title: "PythonInShape",
    where: "Université",
    status: "Scrum Master et Product Owner",
    context: "Bibliothèque géométrique en Python, développée en équipe avec une méthode Scrum.",
    tech: ["Python", "Scrum"],
    lesson: "L'échec d'un sprint vient rarement d'un manque de compétence. Plus souvent, d'un cadre absent ou d'une équipe fatiguée.",
    more: ["Investir dans le refactoring, c'est aussi protéger l'équipe : la dette technique use les gens avant d'user le code."],
  },
  {
    id: "lia",
    title: "Parseur de PDF scientifiques",
    where: "Université",
    status: "Scrum Master et Product Owner",
    context: "Extraction d'informations depuis des articles scientifiques en PDF pour le Laboratoire Informatique d'Avignon (LIA), face à des données peu structurées.",
    tech: ["Python", "Scrum"],
    lesson: "Face à une équipe qui communique mal, un simple squelette de compte rendu a fait plus qu'un rappel à l'ordre.",
    more: [],
  },
  {
    id: "better",
    title: "Better",
    where: "Université",
    status: "Application temps réel",
    context: "Application web de watch party synchronisée, validée par des tests de bout en bout avec Cucumber.",
    tech: ["JavaScript", "Cucumber"],
    lesson: "Des tests au vert ne disent rien de l'intégrité d'un système : des secrets en clair et des fuites mémoire passaient inaperçus.",
    more: ["Une authentification et un cycle de vie des données ne sont pas des options : ce sont les fondations de la confiance."],
  },
  {
    id: "raytracer",
    title: "Infographie 3D",
    where: "Université de Montréal et personnel",
    status: "Rendu et simulation",
    context: "Un raytracer avec réfractions, réflexions et jitter, un robot 3D animé, et un arbre généré procéduralement sous contraintes physiques, en Three.js et en C++.",
    tech: ["C/C++", "JavaScript", "Three.js"],
    lesson: "Réduire l'éclairage global a réglé un problème de réflexions locales. Certaines solutions ne se trouvent qu'à tâtons.",
    more: [],
  },
  {
    id: "robot",
    title: "Robot traceur de formes géométriques",
    where: "Personnel",
    status: "Fabrication",
    context: "Conception et impression 3D du robot, application mobile de pilotage en Bluetooth.",
    tech: ["Impression 3D", "Électronique"],
    lesson: null,
    more: [],
  },
  {
    id: "compilateur",
    title: "Compilateur",
    where: "Université",
    status: "Compilation",
    context: "Compilateur d'un langage proche du Pascal, avec une analyse syntaxique LL(k), vers l'assembleur x86 64 bits en syntaxe AT&T.",
    tech: ["Assembleur AT&T"],
    lesson: null,
    more: [],
  },
  {
    id: "amiibo",
    title: "Quiz Amiibo",
    where: "Personnel",
    status: "Jeu mobile",
    context: "Application Kotlin qui interroge une API REST et stocke ses données avec Realm.",
    tech: ["Kotlin", "REST/JSON"],
    lesson: null,
    more: [],
  },
  {
    id: "choregraphie",
    title: "« Notre part de lumière »",
    where: "Hip-hop",
    status: "Champion de France FFD",
    context: "Chorégraphie de hip-hop, titrée championne de France de la Fédération Française de Danse.",
    tech: ["Danse"],
    lesson: "Chercher la perfection d'un mouvement, c'est déjà comprendre ce que je voudrais un jour restaurer chez d'autres.",
    more: [],
  },
];

// Ordre chronologique inverse : l'année en cours en premier.
export const path = [
  {
    years: "2025 – 2027",
    title: "Master informatique, parcours IA",
    place: "CERI, Avignon Université",
    note: "En alternance au pôle développement de la DSI de l'Institut du Cancer Avignon-Provence.",
    courses: [
      "Fondements de l'apprentissage automatique (supervisé, non-supervisé, profond, par renforcement, sur graphes)",
      "Explicabilité, interprétabilité (XAI) et apprentissage symbolique",
      "Traitement du langage naturel (TALN) et traitement d'images",
      "Business Intelligence, données massives (Big Data) et entrepôts de données",
      "Génie logiciel avancé (processus de développement, DevOps)",
      "Management des systèmes d'information, droit des données et de l'innovation"
    ],
  },
  {
    years: "2022 – 2027",
    title: "Cursus Master Ingénierie (CMI) informatique",
    place: "Diplôme universitaire, Avignon Université",
    note: "Un cursus de cinq ans adossé à la licence et au master, avec projets intégrateurs, recherche et innovation.",
    courses: [
      "Culture et économie de l'innovation, élaboration de modèle économique",
      "Projets intégrateurs, initiation à la recherche et étude de faisabilité technique",
      "Paradigmes de programmation pour l'IA et interfaces du réel au numérique",
      "Management des ressources humaines, création et gestion d'entreprise",
      "Modélisation de systèmes probabilistes, statistiques et systèmes complexes"
    ],
  },
  {
    years: "2024",
    title: "Mobilité internationale en L3",
    place: "Université de Montréal",
    courses: [
      "Fondements de l'apprentissage machine",
      "Qualité du logiciel et métriques",
      "Science des données",
      "Infographie",
    ],
  },
  {
    years: "2022 – 2025",
    title: "Licence informatique",
    place: "CERI, Avignon Université",
    courses: [
      "Programmation, programmation orientée objet, modélisation",
      "Algorithmique avancée, optimisation, programmation linéaire",
      "Théorie des langages, analyse syntaxique, assembleur et compilation",
      "Systèmes d'exploitation, administration, routage et commutation",
      "Bases de données, architecture web et système d'information d'entreprises",
      "Analyse de données, probabilités, statistiques et sécurité informatique"
    ],
  },
];

// Autres expériences, hors informatique.
export const otherJobs = [
  { years: "2026", title: "Trésorier du BDE du CERI", text: "Budgets prévisionnels, allocation des coûts, suivi de projets." },
  { years: "Été 2023", title: "Agent logistique chez Daher, Marignane", text: "Contrôle qualité et rédaction technique." },
  { years: "Été 2022", title: "Emploi saisonnier à la mairie de Martigues", text: "Communication et logistique pour des événements culturels." },
];

export const skills = [
  {
    group: "IA, ML, données et évaluation",
    items: ["RAG", "IA générative", "Fine-tuning", "Prompt engineering", "NER", "Diarisation", "ASR", "LSTM", "CNN", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Précision, rappel, F1", "BLEU"],
  },
  {
    group: "Langages et frameworks",
    items: ["Java", "Spring Boot", "Swing", "Python", "Flask", "JavaScript", "React", "React Native", "Three.js", "Kotlin", "C/C++", "R", "HTML/CSS", "Assembleur AT&T"],
  },
  {
    group: "Interopérabilité et API",
    items: ["HL7 v2", "Mirth Connect", "Microsoft Graph", "REST/JSON", "OAuth 2.0"],
  },
  {
    group: "Outils",
    items: ["Git", "Docker", "Jenkins", "SonarQube", "MySQL", "pgAdmin", "Jira", "Confluence", "Eclipse", "VS Code", "Linux", "Windows"],
  },
  {
    group: "Méthodes",
    items: ["Scrum", "Agile", "Cycle en V", "Waterfall", "Privacy by Design", "Design Patterns"],
  },
  {
    group: "Fabrication",
    items: ["Impression 3D", "Électronique"],
  },
];
