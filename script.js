const BFH_IMAGE =
  "https://www.bfh.ch/.imaging/mte/bfh-theme/profile-lg-2x/dam/people/k/kld1.jpg/jcr:content/kld1.jpg";
const BFH_LINK = "https://www.bfh.ch/soziale-arbeit/de/";
const IORG_LINK =
  "https://www.bfh.ch/soziale-arbeit/de/forschung/forschungsbereiche/institut-organisation-sozialmanagement/";
const makeLink = (href, text) =>
  `<a class="inline-link" href="${href}" target="_blank" rel="noreferrer">${text}</a>`;

const translations = {
  de: {
    title: "Prof. Dr. Dorian Kessler | Wirksamkeit, Daten und soziale Sicherheit",
    description:
      "Persönliche Profilseite von Prof. Dr. Dorian Kessler zu Wirksamkeit, Datenverknüpfung, Predictive Risk Models, generativer KI, Armut, Familie und sozialer Sicherheit.",
    headerLabel: "Hauptnavigation",
    languageLabel: "Sprachen",
    nav: ["Profil", "Projekte", "Lehre", "Publikationen", "Kontakt"],
    context: `${makeLink(BFH_LINK, "BFH Soziale Arbeit")} · ${makeLink(
      IORG_LINK,
      "Institut Organisation und Sozialmanagement"
    )}`,
    lead:
      "Ich arbeite zu Wirksamkeit sozialer Organisationen, Datenwissenschaft in der Sozialen Arbeit und sozialen Risiken im Zusammenspiel von Armut, Familie, Gesundheit und Sozialpolitik.",
    profileButton: "Profil",
    projectButton: "Projekte",
    teachingButton: "Lehre",
    teaching: {
      kicker: "Lehre",
      title: "Spezialmodule im Bachelor Soziale Arbeit.",
      intro: "Ich lehre im Bachelor und Master Soziale Arbeit zu Daten, Digitalisierung, quantitativen Methoden und Sozialpolitik. Im Zentrum stehen Formate, die aktuelle Fragen, Praxisbezug und forschungsbasiertes Arbeiten verbinden.",
      specialTag: "Spezialmodule · Bachelor Soziale Arbeit · seit HS 2023",
      specialTitle: "Aktuelle Themen in kompakten Formaten",
      specialText: "Spezialmodule sind 3-ECTS-Module, in denen Studierende während des Bachelorstudiums aktuelle Fragen, Entwicklungen und spezifische Themen der Sozialen Arbeit bearbeiten. Die Module können aus der BFH heraus oder gemeinsam mit Fachpersonen aus dem Praxisfeld entwickelt werden.",
      specialItems: ["Formate: Blockmodul, Praxiskooperation, Partnerhochschule, COIL, Studienreise oder Tagung", "Perspektiven: Praxis, Forschung, Vergleich, Interdisziplinarität und Internationalität", "Prozess: Ideenskizze, Auswahl, Durchführung und Evaluation des Moduls"],
      listTitle: "Weitere Lehrangebote und Begleitungen",
      offers: [["HS 2024-2025", "Data Skills for Social Work Professionals", "Datenanalyse mit realen Fragestellungen aus Organisationen der Sozialen Arbeit."], ["HS 2024", "Digitalized Social Work", "Digitale Werkzeuge, Chancen und Risiken für die Praxis Sozialer Arbeit."], ["FS 2024", "Large Language Models in der Praxisforschung", "Forschungswerkstatt zu LLM in qualitativer und quantitativer Praxisforschung."], ["seit HS 2023", "Wissen erarbeiten und quantitative Sozialforschung", "Methodisches Arbeiten, Daten verstehen, Evidenz kritisch bewerten."], ["2015-2023", "Sozialpolitik, Methoden und R", "Sozialpolitik im BSc, Einführung in quantitative Methoden und R-Lehre im CAS Datenanalyse."], ["seit HS 2023", "Bachelor- und Masterarbeiten", "Begleitung empirischer Arbeiten mit Fokus auf Forschungsfrage, Design und Interpretation."]],
      transferTag: "Beispiel Praxistransfer",
      transferText: "Im Modul Data Skills wurden Analysen zu Nutzungs- und Bevölkerungsdaten der JuBU später in der Kommunikation der Praxisorganisation aufgegriffen. Der LinkedIn-Beitrag zeigt den Kontext und das verwendete Bildmaterial.",
      transferLink: "LinkedIn-Beitrag öffnen",
    },
    publicationButton: "Ausgewählte Publikationen",
    portraitAlt: "Porträt von Prof. Dr. Dorian Kessler",
    portraitCaption: "Prof. Dr. Dorian Kessler, BFH Soziale Arbeit",
    profileKicker: "Profil",
    profileTitle: "Daten, Wirkung und Soziale Arbeit.",
    profileText: [
      `Ich bin als Forscher und Dozent an der ${makeLink(BFH_LINK, "BFH Soziale Arbeit")} und am ${makeLink(
        IORG_LINK,
        "Institut Organisation und Sozialmanagement"
      )} tätig. Ich arbeite mit verknüpften Daten, um Fragen zu Wirksamkeit, Armut, Familie, Gesundheit und Sozialpolitik empirisch zu untersuchen.`,
      "Verknüpfte Daten sind Datensätze, die datenschutzkonform zusammengeführt werden, etwa Informationen zu Sozialhilfe, Sozialversicherungen, Gesundheit, Erwerbsverläufen, Haushalten oder Familienereignissen. Dadurch werden Übergänge und Belastungen sichtbar, die in einzelnen Datenquellen oft nur teilweise erkennbar sind.",
      "In diesem Rahmen interessieren mich auch generative KI und Predictive Risk Models: als Werkzeuge, die fachliche Entscheide in der Praxis der Sozialen Arbeit unterstützen können, aber fachlich, ethisch und empirisch geprüft werden müssen. Für Wirkungsfragen nutze ich robuste Designs, die Veränderungen vor und nach einer Intervention oder Reform mit geeigneten Vergleichsgruppen betrachten.",
    ],
    projectsKicker: "Projekte",
    projectsTitle: "Ausgewählte Projekte entlang von Wirkung, Daten und sozialer Sicherheit.",
    filters: { all: "Alle", wirkung: "Wirkung", ki: "Daten/KI", armut: "Armut/Familie" },
    projectLinks: { project: "Projektseite", blog: "Datenauswertungen Kinderleicht gemacht" },
    publicationsKicker: "Publikationen",
    publicationsTitle:
      "Ausgewählte Publikationen sowie Beiträge in Medien und Fachöffentlichkeit.",
    peerTitle: "Peer-reviewte Publikationen",
    mediaTitle: "Zeitung und Fernsehen",
    arbor: "Aktualisierte Publikationsliste auf ARBOR",
    scholar: "Google Scholar-Publikationsliste",
    notes: ["Beitrag öffnen", "Sendung öffnen", "Artikel öffnen"],
    original: "Originalseite öffnen",
    contactKicker: "Kontakt",
    contactTitle: "Kontakt und Zusammenarbeit",
    email: "Email",
    bfhProfile: "BFH-Profil",
    top: "Nach oben",
    projects: {
      foresait: ["2025-2026 · SNF Spark", "FORESAIT - Forecasting in Social Assistance", "Verknüpfte Registerdaten und maschinelles Lernen werden genutzt, um Verläufe in der Sozialhilfe präzise, fair und praxistauglich vorherzusagen."],
      prediction: ["2025-2028 · Kanton Bern/SKOS", "Prognosekompetenzen von Sozialhilfefachpersonen", "Fachliche Prognosen dienen als Vergleichspunkt für statistische Modelle. Untersucht wird, wo Modelle zusätzliche Information liefern und wo professionelle Urteilskraft zentral bleibt."],
      fokus: ["2025-2026 · Stadt Biel", "Fokus Arbeit: Messung der Langzeitwirkung", "Die Evaluation der Gruppenintervention wird langfristig weitergeführt, um Effekte auf Erwerb, Einkommen, Sozialhilfebezug und subjektive Ressourcen sichtbar zu machen."],
      "wohlen-dashboard": ["Regionaler Sozialdienst Wohlen · Dashboard", "Dashboard Kosten Regionaler Sozialdienst Wohlen", "Datenauswertungen werden so aufbereitet, dass Kostenentwicklungen und Steuerungsfragen in sozialen Organisationen leicht zugänglich werden."],
      "ai-survey": ["2026 · AI Micro Grant BFH", "Befragung KI-Nutzung im Sozialbereich", "Empirische Momentaufnahme dazu, wie Fachpersonen im Sozialbereich generative KI einsetzen, einschätzen und organisatorisch einbetten."],
      health: ["2020-2021 · BAG", "Gesundheit von Sozialhilfebeziehenden", "Schweizweite verknüpfte Daten zeigen gesundheitliche Belastungen, Versorgungsnutzung und Zusammenhänge mit Erwerbsintegration."],
      divorce: ["2014-2020 · SNF", "Scheidung als soziales Risiko", "Das Projekt untersucht wirtschaftliche, soziale und institutionelle Folgen von Scheidung in der Schweiz, besonders entlang von Geschlecht und Armut."],
      "family-unemployment": ["2018-2023 · SNF", "Familienmodelle und Arbeitslosigkeit", "Analysen zu Arbeitslosenversicherung, Haushaltsverantwortung, Gesundheit, Partnerschaftsstabilität, Geburtsoutcomes und wirtschaftlicher Prekarität."],
      "violence-costs": ["2024-2028 · Stiftung KidsToo", "Kosten von Gewalt in Paarbeziehungen", "Ein laufendes Projekt zu gesellschaftlichen und institutionellen Kosten von Gewalt in Paarbeziehungen, abhängig vom gesicherten Datenzugang."],
    },
  },
  en: {
    title: "Prof. Dr. Dorian Kessler | Impact, Data and Social Security",
    description:
      "Personal profile of Prof. Dr. Dorian Kessler on impact, linked data, predictive risk models, generative AI, poverty, family and social security.",
    headerLabel: "Main navigation",
    languageLabel: "Languages",
    nav: ["Profile", "Projects", "Teaching", "Publications", "Contact"],
    context: `${makeLink(BFH_LINK, "BFH School of Social Work")} · ${makeLink(
      IORG_LINK,
      "Institute for Organisation and Social Management"
    )}`,
    lead:
      "My work focuses on the impact of social organisations, data science in social work, and social risks at the intersection of poverty, family, health and social policy.",
    profileButton: "Profile",
    projectButton: "Projects",
    teachingButton: "Teaching",
    teaching: {
      kicker: "Teaching",
      title: "Special modules in the Bachelor programme in Social Work.",
      intro: "I teach in the Bachelor and Master programmes in Social Work on data, digitalisation, quantitative methods and social policy. The focus is on formats that connect current questions, practice links and research-based work.",
      specialTag: "Special modules · Bachelor Social Work · since autumn semester 2023",
      specialTitle: "Current topics in compact formats",
      specialText: "Special modules are 3 ECTS modules in which students work on current questions, developments and specific topics in social work during the Bachelor programme. Modules can be developed from within BFH or together with professionals from the field.",
      specialItems: ["Formats: block module, practice cooperation, partner university, COIL, study trip or conference", "Perspectives: practice, research, comparison, interdisciplinarity and internationality", "Process: idea sketch, selection, implementation and evaluation of the module"],
      listTitle: "Further courses and supervision",
      offers: [["Autumn 2024-2025", "Data Skills for Social Work Professionals", "Data analysis with real questions from social work organisations."], ["Autumn 2024", "Digitalized Social Work", "Digital tools, opportunities and risks for social work practice."], ["Spring 2024", "Large Language Models in practice research", "Research workshop on LLMs in qualitative and quantitative practice research."], ["since autumn 2023", "Academic work and quantitative social research", "Methodological work, understanding data and critically assessing evidence."], ["2015-2023", "Social policy, methods and R", "Social policy in the BSc, introduction to quantitative methods and R teaching in the CAS Data Analysis."], ["since autumn 2023", "Bachelor's and master's theses", "Supervision of empirical work with a focus on research question, design and interpretation."]],
      transferTag: "Practice transfer example",
      transferText: "In the Data Skills module, analyses of JuBU usage and population data were later taken up in the practice organisation's communication. The LinkedIn post shows the context and the image material used.",
      transferLink: "Open LinkedIn post",
    },
    publicationButton: "Selected publications",
    portraitAlt: "Portrait of Prof. Dr. Dorian Kessler",
    portraitCaption: "Prof. Dr. Dorian Kessler, BFH School of Social Work",
    profileKicker: "Profile",
    profileTitle: "Data, impact and social work.",
    profileText: [
      `I work as a researcher and lecturer at the ${makeLink(BFH_LINK, "BFH School of Social Work")} and at the ${makeLink(IORG_LINK, "Institute for Organisation and Social Management")}. I use linked data to study impact, poverty, family, health and social policy empirically.`,
      "Linked data are datasets that are combined in a privacy-preserving way, for example information on social assistance, social insurance, health, employment histories, households or family events. This makes transitions and burdens visible that often remain only partly observable in individual data sources.",
      "I am also interested in generative AI and predictive risk models as tools that may support professional decisions in social work practice, but need to be assessed professionally, ethically and empirically. For impact questions, I use robust designs that compare developments before and after an intervention or reform with suitable comparison groups.",
    ],
    projectsKicker: "Projects",
    projectsTitle: "Selected projects across impact, data and social security.",
    filters: { all: "All", wirkung: "Impact", ki: "Data/AI", armut: "Poverty/Family" },
    projectLinks: { project: "Project page", blog: "Making data analyses easy" },
    publicationsKicker: "Publications",
    publicationsTitle:
      "Selected publications and contributions in media and professional debate.",
    peerTitle: "Peer-reviewed publications",
    mediaTitle: "Newspapers and television",
    arbor: "Updated publication list on ARBOR",
    scholar: "Google Scholar publication list",
    notes: ["Open contribution", "Open broadcast", "Open article"],
    original: "Open original page",
    contactKicker: "Contact",
    contactTitle: "Contact and collaboration",
    email: "Email",
    bfhProfile: "BFH profile",
    top: "To top",
    projects: {
      foresait: ["2025-2026 · SNSF Spark", "FORESAIT - Forecasting in Social Assistance", "Linked register data and machine learning are used to forecast trajectories in social assistance in a precise, fair and practice-oriented way."],
      prediction: ["2025-2028 · Canton of Bern/SKOS", "Forecasting skills of social assistance professionals", "Professional forecasts serve as a benchmark for statistical models. The project examines where models add information and where professional judgement remains central."],
      fokus: ["2025-2026 · City of Biel", "Fokus Arbeit: Measuring long-term impact", "The evaluation of the group intervention is extended over the long term to assess effects on employment, income, social assistance receipt and personal resources."],
      "wohlen-dashboard": ["Regional Social Service Wohlen · Dashboard", "Cost dashboard for the Regional Social Service Wohlen", "Data analyses are prepared in a way that makes cost trends and management questions in social organisations easy to access."],
      "ai-survey": ["2026 · AI Micro Grant BFH", "Survey on AI use in the social sector", "An empirical snapshot of how professionals in the social sector use, assess and organisationally embed generative AI."],
      health: ["2020-2021 · FOPH", "Health of social assistance recipients", "Swiss linked data show health burdens, service use and links with labour market integration."],
      divorce: ["2014-2020 · SNSF", "Divorce as a social risk", "The project studies economic, social and institutional consequences of divorce in Switzerland, especially by gender and poverty."],
      "family-unemployment": ["2018-2023 · SNSF", "Family models and unemployment", "Analyses of unemployment insurance, household responsibilities, health, partnership stability, birth outcomes and economic precarity."],
      "violence-costs": ["2024-2028 · KidsToo Foundation", "Costs of intimate partner violence", "An ongoing project on societal and institutional costs of intimate partner violence, depending on secured data access."],
    },
  },
  fr: {
    title: "Prof. Dr. Dorian Kessler | Effets, données et sécurité sociale",
    description:
      "Page personnelle du Prof. Dr. Dorian Kessler sur les effets, les données liées, les modèles prédictifs de risque, l'IA générative, la pauvreté, la famille et la sécurité sociale.",
    headerLabel: "Navigation principale",
    languageLabel: "Langues",
    nav: ["Profil", "Projets", "Enseignement", "Publications", "Contact"],
    context: `${makeLink(BFH_LINK, "BFH Travail social")} · ${makeLink(
      IORG_LINK,
      "Institut Organisation et management social"
    )}`,
    lead:
      "Mes travaux portent sur les effets des organisations sociales, la science des données en travail social et les risques sociaux à l'intersection de la pauvreté, de la famille, de la santé et de la politique sociale.",
    profileButton: "Profil",
    projectButton: "Projets",
    teachingButton: "Enseignement",
    teaching: {
      kicker: "Enseignement",
      title: "Modules spéciaux dans le bachelor en travail social.",
      intro: "J'enseigne dans les programmes bachelor et master en travail social sur les données, la numérisation, les méthodes quantitatives et la politique sociale. L'accent porte sur des formats qui relient questions actuelles, lien à la pratique et travail fondé sur la recherche.",
      specialTag: "Modules spéciaux · bachelor en travail social · depuis le semestre d'automne 2023",
      specialTitle: "Thèmes actuels dans des formats compacts",
      specialText: "Les modules spéciaux sont des modules de 3 ECTS dans lesquels les étudiantes et étudiants traitent, pendant le bachelor, des questions actuelles, des développements et des thèmes spécifiques du travail social. Ils peuvent être développés au sein de la BFH ou avec des professionnel-le-s du terrain.",
      specialItems: ["Formats: module bloc, coopération avec la pratique, haute école partenaire, COIL, voyage d'études ou conférence", "Perspectives: pratique, recherche, comparaison, interdisciplinarité et internationalité", "Processus: esquisse d'idée, sélection, réalisation et évaluation du module"],
      listTitle: "Autres enseignements et accompagnements",
      offers: [["Automne 2024-2025", "Data Skills for Social Work Professionals", "Analyse de données avec des questions réelles issues d'organisations du travail social."], ["Automne 2024", "Digitalized Social Work", "Outils numériques, possibilités et risques pour la pratique du travail social."], ["Printemps 2024", "Large Language Models dans la recherche de pratique", "Atelier de recherche sur les LLM dans la recherche de pratique qualitative et quantitative."], ["depuis automne 2023", "Travail scientifique et recherche sociale quantitative", "Travail méthodologique, compréhension des données et évaluation critique des preuves."], ["2015-2023", "Politique sociale, méthodes et R", "Politique sociale en bachelor, introduction aux méthodes quantitatives et enseignement de R dans le CAS Analyse de données."], ["depuis automne 2023", "Travaux de bachelor et de master", "Accompagnement de travaux empiriques avec un accent sur la question de recherche, le design et l'interprétation."]],
      transferTag: "Exemple de transfert vers la pratique",
      transferText: "Dans le module Data Skills, des analyses des données d'utilisation et de population de la JuBU ont ensuite été reprises dans la communication de l'organisation de terrain. La publication LinkedIn montre le contexte et le matériel visuel utilisé.",
      transferLink: "Ouvrir la publication LinkedIn",
    },
    publicationButton: "Publications choisies",
    portraitAlt: "Portrait du Prof. Dr. Dorian Kessler",
    portraitCaption: "Prof. Dr. Dorian Kessler, BFH Travail social",
    profileKicker: "Profil",
    profileTitle: "Données, effets et travail social.",
    profileText: [
      `Je travaille comme chercheur et enseignant à la ${makeLink(BFH_LINK, "BFH Travail social")} et à l'${makeLink(IORG_LINK, "Institut Organisation et management social")}. J'utilise des données liées pour étudier empiriquement les effets, la pauvreté, la famille, la santé et la politique sociale.`,
      "Les données liées sont des jeux de données réunis dans le respect de la protection des données, par exemple des informations sur l'aide sociale, les assurances sociales, la santé, les parcours professionnels, les ménages ou les événements familiaux.",
      "Je m'intéresse aussi à l'IA générative et aux modèles prédictifs de risque comme outils pouvant soutenir les décisions professionnelles dans la pratique du travail social, mais qui doivent être évalués sur les plans professionnel, éthique et empirique. Pour les questions d'effet, j'utilise des designs robustes qui comparent les évolutions avant et après une intervention ou une réforme avec des groupes de comparaison appropriés.",
    ],
    projectsKicker: "Projets",
    projectsTitle:
      "Projets sélectionnés autour des effets, des données et de la sécurité sociale.",
    filters: { all: "Tous", wirkung: "Effets", ki: "Données/IA", armut: "Pauvreté/Famille" },
    projectLinks: { project: "Page du projet", blog: "Des analyses de données simplifiées" },
    publicationsKicker: "Publications",
    publicationsTitle:
      "Publications choisies et contributions dans les médias et le débat professionnel.",
    peerTitle: "Publications évaluées par les pairs",
    mediaTitle: "Presse et télévision",
    arbor: "Liste actualisée des publications sur ARBOR",
    scholar: "Liste des publications sur Google Scholar",
    notes: ["Ouvrir la contribution", "Ouvrir l'émission", "Ouvrir l'article"],
    original: "Ouvrir la page originale",
    contactKicker: "Contact",
    contactTitle: "Contact et collaboration",
    email: "E-mail",
    bfhProfile: "Profil BFH",
    top: "Haut de page",
    projects: {
      foresait: ["2025-2026 · FNS Spark", "FORESAIT - Forecasting in Social Assistance", "Des données de registre liées et l'apprentissage automatique sont utilisés pour prévoir les parcours dans l'aide sociale de manière précise, équitable et utile à la pratique."],
      prediction: ["2025-2028 · Canton de Berne/CSIAS", "Compétences pronostiques des professionnel-le-s de l'aide sociale", "Les pronostics professionnels servent de point de comparaison aux modèles statistiques. Le projet examine où les modèles ajoutent de l'information et où le jugement professionnel reste central."],
      fokus: ["2025-2026 · Ville de Bienne", "Fokus Arbeit: mesure des effets à long terme", "L'évaluation de l'intervention de groupe est prolongée afin de rendre visibles les effets sur l'emploi, le revenu, le recours à l'aide sociale et les ressources personnelles."],
      "wohlen-dashboard": ["Service social régional de Wohlen · Tableau de bord", "Tableau de bord des coûts du Service social régional de Wohlen", "Les analyses de données sont préparées de manière à rendre les évolutions des coûts et les questions de pilotage dans les organisations sociales facilement accessibles."],
      "ai-survey": ["2026 · AI Micro Grant BFH", "Enquête sur l'utilisation de l'IA dans le domaine social", "Un aperçu empirique de la manière dont les professionnel-le-s du domaine social utilisent, évaluent et intègrent organisationnellement l'IA générative."],
      health: ["2020-2021 · OFSP", "Santé des bénéficiaires de l'aide sociale", "Des données suisses liées montrent les charges de santé, l'utilisation des services et les liens avec l'intégration professionnelle."],
      divorce: ["2014-2020 · FNS", "Le divorce comme risque social", "Le projet étudie les conséquences économiques, sociales et institutionnelles du divorce en Suisse, notamment selon le genre et la pauvreté."],
      "family-unemployment": ["2018-2023 · FNS", "Modèles familiaux et chômage", "Analyses de l'assurance-chômage, des responsabilités au sein du ménage, de la santé, de la stabilité du couple, des issues de naissance et de la précarité économique."],
      "violence-costs": ["2024-2028 · Fondation KidsToo", "Coûts de la violence dans les relations de couple", "Un projet en cours sur les coûts sociaux et institutionnels de la violence dans les relations de couple, en fonction de l'accès sécurisé aux données."],
    },
  },
};

const params = new URLSearchParams(window.location.search);
const isSupportedLang = (value) => Object.prototype.hasOwnProperty.call(translations, value);
const normalizeLang = (value = "") => value.toLowerCase().split("-")[0];
const getStoredLang = () => {
  try {
    return window.localStorage?.getItem("dorianKesslerLang");
  } catch {
    return null;
  }
};
const storeLang = (value) => {
  try {
    window.localStorage?.setItem("dorianKesslerLang", value);
  } catch {
    // Some privacy modes block localStorage; the URL and browser language still work.
  }
};
const browserLang = (navigator.languages || [navigator.language || ""])
  .map(normalizeLang)
  .find(isSupportedLang);
const requestedLang = normalizeLang(params.get("lang") || "");
const storedLang = getStoredLang();
const lang = isSupportedLang(requestedLang)
  ? requestedLang
  : isSupportedLang(storedLang)
    ? storedLang
    : browserLang || "de";
if (isSupportedLang(requestedLang)) storeLang(requestedLang);
const t = translations[lang];
const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};
const setHTML = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
};

document.documentElement.lang = lang;
document.title = t.title;
document.querySelector('meta[name="description"]')?.setAttribute("content", t.description);
document.querySelector(".site-header")?.setAttribute("aria-label", t.headerLabel);
document.querySelector(".language-nav")?.setAttribute("aria-label", t.languageLabel);
document.querySelectorAll(".language-nav a").forEach((anchor) => {
  if (anchor.dataset.lang === lang) anchor.setAttribute("aria-current", "page");
  else anchor.removeAttribute("aria-current");
  anchor.addEventListener("click", () => {
    if (isSupportedLang(anchor.dataset.lang)) storeLang(anchor.dataset.lang);
  });
});
document.querySelectorAll(".site-nav a").forEach((anchor, index) => {
  anchor.textContent = t.nav[index] || anchor.textContent;
});

setText(".lead", t.lead);
setText('.hero-actions a[href="#profil"]', t.profileButton);
setText('.hero-actions a[href="#projekte"]', t.projectButton);
setText('.hero-actions a[href="#lehre"]', t.teachingButton);
setText('.hero-actions a[href="#publikationen"]', t.publicationButton);
const portraitImageNew = document.querySelector(".portrait img");
if (portraitImageNew) {
  portraitImageNew.src = BFH_IMAGE;
  portraitImageNew.alt = t.portraitAlt;
}
setText(".portrait figcaption", t.portraitCaption);
setText("#profil .kicker", t.profileKicker);
setText("#profil h2", t.profileTitle);
document.querySelectorAll("#profil .profile-copy p").forEach((paragraph, index) => {
  paragraph.innerHTML = t.profileText[index] || paragraph.innerHTML;
});


if (t.teaching) {
  const teaching = t.teaching;
  setText("#lehre .kicker", teaching.kicker);
  setText("#lehre h2", teaching.title);
  setText("#lehre .teaching-intro", teaching.intro);
  setText("#lehre .teaching-highlight .tag", teaching.specialTag);
  setText("#lehre .teaching-highlight h3", teaching.specialTitle);
  setText("#lehre .teaching-highlight p", teaching.specialText);
  document.querySelectorAll("#lehre .teaching-highlight li").forEach((item, index) => {
    item.textContent = teaching.specialItems[index] || item.textContent;
  });
  setText("#lehre .teaching-offers > h3", teaching.listTitle);
  document.querySelectorAll("#lehre .teaching-offer").forEach((card, index) => {
    const offer = teaching.offers[index];
    if (!offer) return;
    card.querySelector("span").textContent = offer[0];
    card.querySelector("h4").textContent = offer[1];
    card.querySelector("p").textContent = offer[2];
  });
  setText("#lehre .teaching-transfer-note span", teaching.transferTag);
  setText("#lehre .teaching-transfer-note p", teaching.transferText);
  setText("#lehre .teaching-transfer-note a", teaching.transferLink);
}

setText("#projekte .kicker", t.projectsKicker);
setText("#projekte h2", t.projectsTitle);
Object.entries(t.filters).forEach(([key, value]) => {
  setText(`.filter-button[data-filter="${key}"]`, value);
});
document.querySelectorAll(".project-card").forEach((card) => {
  const project = t.projects[card.dataset.project];
  if (!project) return;
  card.querySelector(".tag").textContent = project[0];
  card.querySelector("h3").textContent = project[1];
  card.querySelector("p").textContent = project[2];
  const anchor = card.querySelector("a");
  if (anchor) anchor.textContent = card.dataset.project === "wohlen-dashboard" ? t.projectLinks.blog : t.projectLinks.project;
});
setText("#publikationen .kicker", t.publicationsKicker);
setText("#publikationen h2", t.publicationsTitle);
const publicationColumnsNew = document.querySelectorAll(".publication-columns > div");
if (publicationColumnsNew[0]) {
  publicationColumnsNew[0].querySelector("h3").textContent = t.peerTitle;
  publicationColumnsNew[0].querySelectorAll(".source-card-note").forEach((note) => {
    note.textContent = t.original;
  });
  const textLinks = publicationColumnsNew[0].querySelectorAll(".text-link");
  if (textLinks[0]) textLinks[0].textContent = t.arbor;
  if (textLinks[1]) textLinks[1].textContent = t.scholar;
}
if (publicationColumnsNew[1]) {
  publicationColumnsNew[1].querySelector("h3").textContent = t.mediaTitle;
  publicationColumnsNew[1].querySelectorAll(".source-card-note").forEach((note, index) => {
    note.textContent = t.notes[Math.min(index, 2)];
  });
}
setText("#kontakt .kicker", t.contactKicker);
setText("#kontakt h2", t.contactTitle);
setText('.contact-actions a[href^="mailto:"]', t.email);
setText('.contact-actions a[href^="https://www.bfh.ch/"]', t.bfhProfile);
setText(".site-footer a", t.top);

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".project-card").forEach((card) => {
      const topics = card.dataset.topic || "";
      const visible = filter === "all" || topics.includes(filter);
      card.classList.toggle("is-hidden", !visible);
    });
  });
});
