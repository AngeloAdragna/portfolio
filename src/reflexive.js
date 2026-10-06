// Portfolio réflexif : une fiche par expérience fondatrice.
// Chaque fiche suit la grille d'analyse réflexive en quatre niveaux, puis modélise
// la compétence qui en sort selon quatre dimensions : action, ressources, situation, contexte.
// "projects" relie la fiche aux projets de la section Projets (par leur id, voir data.js).

export const quote = "Ce que l'on a de différent, c'est qui l'on est ; c'est ce qu'on a à proposer.";

export const levels = [
  {
    key: "verbalisation",
    label: "Verbalisation",
    hint: "Dire ce qui s'est passé, sans encore l'interpréter.",
  },
  {
    key: "analyse",
    label: "Analyse",
    hint: "Quels facteurs expliquent ce que j'ai ressenti.",
  },
  {
    key: "meta",
    label: "Méta-réflexion",
    hint: "Sous quel angle j'ai tourné les choses, et ce que j'en conceptualise.",
  },
  {
    key: "transfert",
    label: "Transfert",
    hint: "Ce que j'en fais ailleurs : la compétence qui en sort.",
  },
];

export const experiences = [
  {
    id: "artisan",
    archetype: "L'artisan humaniste",
    title: "Danse, fabrication et regard sur l'humain",
    when: "12 ans de hip-hop",
    verbalisation:
      "Douze ans de hip-hop à haut niveau, jusqu'au titre de champion de France FFD avec la chorégraphie « Notre part de lumière ». À côté, de la fabrication tangible : électronique, bricolage, Lego. Et une appétence pour les cuisines du monde, les œuvres d'art regardées sans chercher à les rationaliser, et l'évolution psychologique des personnages de fiction.",
    analyse:
      "Le code pur me laisse un manque s'il ne s'ancre pas dans la matière, l'esthétique et le mouvement. Ma satisfaction vient de pouvoir toucher, assembler, et observer les dynamiques humaines et physiques.",
    meta:
      "Vouloir concevoir des prothèses connectées au système nerveux n'est pas un hasard d'orientation : c'est la réponse technologique à un parcours de vie. Avoir exploré la biomécanique et la perfection du mouvement par la danse donne un sens viscéral à l'envie de restaurer ce mouvement chez d'autres. Ma porosité à l'art et à la psychologie garantit que la technologie restera au service de la dignité de la personne.",
    transfert:
      "Je ne suis pas un programmeur déconnecté : je veux être un architecte de la réparation humaine, capable de ressentir la technologie autant que de la concevoir.",
    competence: {
      name: "Intelligence kinesthésique et empathie structurelle",
      action: "Concevoir une technologie à partir du corps, du geste et de l'usage réel.",
      ressources: "Douze ans de danse, la fabrication électronique, un regard formé par l'art et la psychologie.",
      situation: "La compétition de danse au niveau national et les projets de fabrication.",
      contexte: "Une vocation : les prothèses connectées au système nerveux.",
    },
    projects: ["choregraphie", "robot", "imagerie3d"],
  },
  {
    id: "daher",
    archetype: "Le pragmatique systémique",
    title: "Opérateur logistique chez Daher",
    when: "Usine, environnement ultra-normé",
    verbalisation:
      "Opérateur logistique en usine : gestion des flux, conditionnement et contrôle qualité, dans un environnement industriel très normé, sous forte pression de productivité et de délais.",
    analyse:
      "En bas de l'échelle, j'ai dû me créer des raccourcis mentaux pour maîtriser un logiciel métier complexe. La moindre erreur individuelle bloquait toute la chaîne de production en aval.",
    meta:
      "L'efficacité naît de la compréhension de sa place exacte dans un écosystème. Un système n'est robuste que si ses maillons les plus invisibles le sont. La contrainte matérielle ou temporelle n'est pas un frein : c'est un paramètre qui force à optimiser ses propres processus.",
    transfert:
      "J'aborde l'architecture logicielle avec une robustesse industrielle : je cherche où une erreur va se propager avant qu'elle n'apparaisse.",
    competence: {
      name: "Vision systémique",
      action: "Anticiper la propagation d'une erreur et ses effets de bord dans une chaîne.",
      ressources: "Des raccourcis mentaux pour assimiler un logiciel métier, la rigueur du contrôle qualité.",
      situation: "Flux, conditionnement et contrôle qualité sous pression de délais.",
      contexte: "L'usine Daher, un environnement industriel ultra-normé.",
    },
    projects: ["rth", "telesuivi"],
  },
  {
    id: "udem",
    archetype: "L'explorateur heuristique",
    title: "Semestre à l'Université de Montréal",
    when: "Mobilité internationale, L3",
    verbalisation:
      "À l'Université de Montréal, j'ai implémenté des modèles complexes en infographie (lancer de rayons, réfractions, jitter) et exploré l'apprentissage automatique et la science des données, sur des bases de code mêlant C++ et JavaScript.",
    analyse:
      "Face à des architectures mathématiques denses où la théorie se heurte aux anomalies visuelles, j'ai surtout ressenti un amusement devant la difficulté. Il m'a mené à chercher à tâtons.",
    meta:
      "Innover demande d'accepter l'imperfection temporaire. L'approche empirique est une méthode valide face à l'inconnu. Sacrifier ponctuellement la rigueur architecturale (les principes SOLID) au profit de l'expérimentation permet de résoudre des problèmes contre-intuitifs : par exemple réduire l'éclairage global pour maîtriser les réflexions locales.",
    transfert:
      "Cette démarche heuristique sera mon atout en R&D cybernétique, où traiter des signaux nerveux impose de prototyper dans un environnement bruité et incertain.",
    competence: {
      name: "Modélisation empirique et optimisation sous contraintes",
      action: "Prototyper par essais successifs quand le modèle résiste à la théorie.",
      ressources: "C++, JavaScript, lancer de rayons, apprentissage automatique, science des données.",
      situation: "Des anomalies visuelles : réfractions, réflexions, jitter.",
      contexte: "Un semestre de mobilité internationale à Montréal.",
    },
    projects: ["raytracer"],
  },
  {
    id: "icap",
    archetype: "Le stratège éthique",
    title: "Alternance à l'ICAP",
    when: "Institut du Cancer Avignon-Provence",
    verbalisation:
      "En alternance à l'Institut du Cancer Avignon-Provence, j'ai conçu la synchronisation bidirectionnelle des agendas médicaux entre un logiciel métier monolithique (Onco) et Microsoft 365, en anticipant les contraintes du RGPD et de l'IA Act.",
    analyse:
      "La donnée médicale réelle est volumineuse, et la loi interdit de tester en production. Le code que j'écris touche directement la charge de travail des secrétariats et le parcours de soin des patients.",
    meta:
      "La technique doit s'effacer devant la valeur métier. Renoncer à un algorithme élégant pour une solution plus robuste (des crons externes, une stratégie Delete + Create) est une marque de maturité. Le vrai leadership consiste à traduire des limites matérielles ou légales en stratégies compréhensibles par des décideurs non techniques.",
    transfert:
      "Je dialogue avec des directeurs, des médecins et des DPO en parlant bénéfice utilisateur et conformité : la technologie devient un levier, pas une fin.",
    competence: {
      name: "Pilotage technico-fonctionnel",
      action: "Traduire des contraintes légales et techniques en choix compréhensibles par les décideurs.",
      ressources: "Microsoft Graph, crons externes, stratégie Delete + Create, RGPD, IA Act.",
      situation: "Une synchronisation bidirectionnelle sans possibilité de tester en production.",
      contexte: "Un centre de lutte contre le cancer : secrétariats, médecins, patients.",
    },
    projects: ["outlook", "orchestria", "rth", "simuloscanner", "telesuivi", "frises"],
  },
  {
    id: "agile",
    archetype: "L'architecte agile",
    title: "Scrum Master sur PythonInShape et le parseur LIA",
    when: "Projets universitaires",
    verbalisation:
      "Scrum Master et Product Owner sur deux projets universitaires. PythonInShape, une bibliothèque géométrique, partait d'une planification irréaliste et multipliait les conflits de merge. Le parseur de PDF scientifiques du LIA se heurtait aux données non structurées, qui faisaient chuter la précision, et à une communication d'équipe défaillante.",
    analyse:
      "L'échec d'un sprint n'est souvent pas un manque de compétence, mais le frottement d'un cadre absent ou de la fatigue. Face à une équipe qui communique mal, il faut dépasser sa propre frustration de chef de projet pour éviter la paralysie.",
    meta:
      "Diriger, ce n'est pas imposer une cadence : c'est donner du sens et concevoir des processus. Des outils de remédiation, comme des squelettes de compte rendu, font naître la collaboration. Investir dans la dette technique est d'abord une prévention des risques psychosociaux pour l'équipe.",
    transfert:
      "J'aligne le bien-être d'une équipe et les impératifs de livraison, en utilisant l'agilité (Poker Planning, Definition of Done) et l'architecture logicielle comme outils de résolution de crises humaines.",
    competence: {
      name: "Agilité managériale et fédération pluridisciplinaire",
      action: "Concevoir des processus qui font collaborer une équipe en difficulté.",
      ressources: "Scrum, Poker Planning, Definition of Done, squelettes de compte rendu, refactoring.",
      situation: "Planification irréaliste, conflits de merge, communication défaillante.",
      contexte: "Deux projets universitaires, en rôle de Scrum Master et Product Owner.",
    },
    projects: ["pythoninshape", "lia"],
  },
  {
    id: "better",
    archetype: "Le garant de l'intégrité",
    title: "L'audit de Better",
    when: "Projet universitaire, relu après coup",
    verbalisation:
      "Better est une application web de watch party synchronisée, validée par des tests de bout en bout (Cucumber). En coulisses, l'architecture assumait des compromis dangereux : des secrets en clair dans le dépôt, des fuites mémoire lentes (des salons jamais détruits), un couplage front et back par injection d'adresse IP.",
    analyse:
      "Ces choix étaient pragmatiques dans un bac à sable scolaire pour valider le temps réel. Évalués avec un regard industriel ou médical, ce sont des failles critiques.",
    meta:
      "J'ai pris conscience du syndrome de la façade : il y a un gouffre entre une interface fluide aux tests verts et l'intégrité réelle d'un système. Un middleware d'authentification ou la gestion du cycle de vie des données ne sont pas des options, ce sont les fondations de la confiance numérique.",
    transfert:
      "J'évalue un système au-delà de son apparence fonctionnelle, pour que les solutions d'IA médicale que je concevrai ne s'effondrent jamais en silence.",
    competence: {
      name: "Security by design et audit de la dette technique",
      action: "Auditer un système au-delà de ses tests au vert.",
      ressources: "Tests de bout en bout, relecture critique de mes propres compromis.",
      situation: "Secrets en clair, fuites mémoire, couplage par adresse IP.",
      contexte: "Une application temps réel, relue avec les exigences du médical.",
    },
    projects: ["better", "simuloscanner", "outlook"],
  },
];

export const conclusion =
  "J'aime à me positionner en tant qu'ingénieur hybride : le pragmatisme du terrain, la rigueur de la recherche, l'agilité du travail d'équipe et une vocation humaniste. Mon objectif reste de transformer la complexité algorithmique en solutions tangibles, éthiques et fédératrices.";
