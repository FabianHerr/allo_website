// hvac.jsx — HVAC vertical page
const HVAC_DATA = {
  hero: {
    fr: {
      label: 'ENTREPRISES HVAC ET CLIMATISATION · MONTRÉAL',
      h1: "Vous manquez 30 % de vos appels après 18h. En février, ces appels ne se répètent pas.",
      body: "On construit des systèmes d'automatisation pour les entreprises HVAC — agent après les heures, suivi d'estimations, renouvellement de contrats d'entretien, campagnes saisonnières. Opérationnel en 7 jours.",
      cta1: 'Réserver mon audit gratuit',
      cta2: "← Retour à l'accueil",
      stats: [
        "25 à 35 % du volume d'appels total des entreprises HVAC arrive après 18h.",
        "80 % des ventes HVAC nécessitent 5 points de contact ou plus. La plupart des entreprises en font 1 ou 2.",
        "Un contrat d'entretien vaut 3 à 5 fois plus qu'un client ponctuel sur la durée de vie.",
      ],
    },
    en: {
      label: 'HVAC AND COOLING COMPANIES · MONTREAL',
      h1: "You're missing 30% of your calls after 6 PM. In February, those calls don't repeat.",
      body: "We build automation systems for HVAC companies — after-hours agent, estimate follow-up, maintenance contract renewal, seasonal campaigns. Live in 7 days.",
      cta1: 'Book my free audit',
      cta2: '← Back to main site',
      stats: [
        "25–35% of total HVAC call volume arrives after 6 PM.",
        "80% of HVAC sales require 5+ contact points. Most companies make 1 or 2.",
        "A maintenance contract is worth 3–5× more than a one-time client over its lifetime.",
      ],
    },
  },

  dayInLife: {
    fr: {
      label: 'UNE JOURNÉE DANS VOTRE ENTREPRISE',
      h2: "Vous êtes le meilleur technicien de l'équipe. Et aussi le répartiteur, l'estimateur et le directeur.",
      narrative: "Vous partez en appel à 7h30 avec votre technicien. Le téléphone sonne à 8h15 — probablement quelqu'un avec un problème de climatisation. Vous ne pouvez pas décrocher, vous êtes sous un plafond à 30°C. En fin de matinée, vous envoyez une estimation par texto pour un remplacement de fournaise à 8 500 $. Vous ne faites pas de suivi parce que vous avez trois autres appels l'après-midi et que vous espérez qu'ils rappelleront d'eux-mêmes. Ils ne rappellent pas. En soirée pendant le souper, votre téléphone sonne deux fois. Vous ne répondez pas — c'est votre temps avec votre famille. Le lendemain matin, deux messages vocaux d'une urgence de fournaise. Ils ont déjà trouvé quelqu'un d'autre. Votre carnet d'entretien : deux contrats arrivent à terme ce mois-ci. Vous ne savez plus lesquels exactement. Et votre liste d'anciens clients avec des équipements vieillissants — des dizaines de maisons où votre technicien a noté « système de plus de 12 ans » — personne ne les a appelés avant la saison.",
    },
    en: {
      label: 'A DAY IN YOUR COMPANY',
      h2: "You're the best technician on the team. And also the dispatcher, the estimator, and the manager.",
      narrative: "You leave on a call at 7:30 AM with your technician. The phone rings at 8:15 — probably someone with an AC problem. You can't answer, you're under a ceiling at 30°C. Late morning, you send an estimate by text for an $8,500 furnace replacement. You don't follow up because you have three more calls in the afternoon and you're hoping they'll call back on their own. They don't. In the evening during dinner, your phone rings twice. You don't answer — it's family time. The next morning, two voicemails from a furnace emergency. They've already found someone else. Your maintenance calendar: two contracts expire this month. You're not sure exactly which ones. And your list of previous clients with aging equipment — dozens of homes where your technician noted 'system over 12 years old' — nobody called them before the season.",
    },
  },

  cost: {
    fr: {
      label: 'CE QUE ÇA COÛTE DE NE RIEN CHANGER',
      h2: 'Trois scénarios qui se répètent chaque semaine dans votre entreprise.',
      cards: [
        {
          cost: '3–4 / sem.',
          title: "Les urgences après les heures qui vont à un concurrent",
          what: "En février à -18°C, une famille sans chauffage appelle jusqu'à ce que quelqu'un réponde. Elle appelle trois entreprises. Celle qui décroche en premier obtient le contrat. La plupart des entreprises HVAC manquent 25 à 35 % de leurs appels après 18h.",
          keeps: "Ces appels ne viennent pas de gens qui comparent les prix — ils viennent de gens prêts à payer maintenant. Chaque appel manqué est un contrat d'urgence qui va ailleurs.",
        },
        {
          cost: '8 000 $',
          title: "L'estimation qui refroidit sans suivi",
          what: "80 % des ventes HVAC nécessitent 5 points de contact ou plus. La plupart des entreprises font un suivi, peut-être deux. Le concurrent persistant obtient le remplacement de fournaise à 8 000 $ qui était pourtant le vôtre.",
          keeps: "Un suivi au jour 2, au jour 5 et au jour 10 — mentionnant le travail spécifique, la date d'expiration du devis — ferme 30 à 45 % d'estimations supplémentaires sans que vous ayez à y penser.",
        },
        {
          cost: '3–5×',
          title: "Le contrat d'entretien qui part en silence",
          what: "Un client d'entretien vaut 3 à 5 fois plus qu'un client ponctuel. Il référence ses voisins. Il ne compare pas les prix. Il paie chaque année. Et il part silencieusement parce que personne n'a appelé avant la date de renouvellement.",
          keeps: "Un appel 30 jours avant, 7 jours avant et le jour J, puis une reconquête à 14 jours si rien ne s'est passé. Vous ne perdez plus de clients d'entretien au silence.",
        },
      ],
    },
    en: {
      label: 'WHAT IT COSTS TO CHANGE NOTHING',
      h2: 'Three scenarios that repeat every week in your business.',
      cards: [
        {
          cost: '3–4/week',
          title: 'After-hours emergencies going to a competitor',
          what: "In February at -18°C, a family without heat calls until someone answers. They call three companies. The first to pick up gets the job. Most HVAC companies miss 25–35% of their calls after 6 PM.",
          keeps: "These calls don't come from price shoppers — they come from people ready to pay now. Every missed call is an emergency contract that goes somewhere else.",
        },
        {
          cost: '$8,000',
          title: 'The estimate that goes cold without follow-up',
          what: "80% of HVAC sales require 5+ contact points. Most companies follow up once, maybe twice. The persistent competitor gets the $8,000 furnace replacement that was actually yours.",
          keeps: "A follow-up on day 2, day 5, and day 10 — referencing the specific job and quote expiry — closes 30–45% more estimates without you having to think about it.",
        },
        {
          cost: '3–5×',
          title: 'The maintenance contract that lapses in silence',
          what: "A maintenance client is worth 3–5× more than a one-time client. They refer neighbours. They don't shop around. They pay annually. And they lapse silently because nobody called before renewal.",
          keeps: "A call 30 days before, 7 days before, and day-of, then a winback call at 14 days if nothing happened. You stop losing maintenance clients to silence.",
        },
      ],
    },
  },

  automations: {
    fr: {
      label: 'CE QU\'ON CONSTRUIT POUR VOUS',
      h2: 'Des automatisations conçues pour les entreprises HVAC.',
      items: [
        { name: 'Agent après les heures 24h/24', outcome: "Chaque appel en soirée, la fin de semaine et les jours fériés reçoit une réponse. L'agent classe l'urgence, note le statut du contrat, réserve un service d'urgence ou planifie un rappel le matin. Aucun appel ne va à la messagerie." },
        { name: "Séquence de suivi d'estimation", outcome: "Jour 2 + jour 5 + jour 10 après une estimation. Mentionne le travail spécifique, la date d'expiration du devis, offre de répondre aux questions. Ferme 30 à 45 % d'estimations supplémentaires sans que vous ayez à vous en souvenir." },
        { name: "Renouvellement de contrat d'entretien", outcome: "Appel à 30 jours, 7 jours et le jour J. Client sans nouvelle à 14 jours : appel de reconquête avec une offre de réinscription. Vous ne perdez plus jamais un client d'entretien au silence." },
        { name: 'Campagne printemps — climatisation', outcome: "En mars-avril, appels sortants vers tous vos anciens clients : « Faites vérifier votre climatisation avant la pointe de l'été. On a de la disponibilité maintenant. » Votre calendrier se remplit avant la demande de pointe." },
        { name: 'Campagne automne — chauffage', outcome: "En août-septembre, même logique pour l'inspection de fournaise. Vous réservez en septembre quand l'équipe a du temps, pas en octobre quand elle est débordée." },
        { name: 'Demande d\'avis post-intervention', outcome: "24h après l'appel de service, un SMS avec lien direct vers Google. Les clients satisfaits répondent avant d'oublier. Votre réputation en ligne suit la qualité de votre travail." },
        { name: 'Suivi équipement vieillissant', outcome: "Quand un technicien note un système de plus de 10 ans dans son rapport, un suivi automatique part 30 jours plus tard avec une proposition de remplacement ou de mise à niveau." },
        { name: 'Campagne de voisinage', outcome: "Après avoir terminé un travail dans un quartier, une communication ciblée vers les adresses proches avec la disponibilité du jour. Une façon de remplir les créneaux libres sans publicité payante." },
      ],
      cta: "Voir comment ça marche →",
    },
    en: {
      label: 'WHAT WE BUILD FOR YOU',
      h2: 'Automations designed for HVAC companies.',
      items: [
        { name: '24/7 after-hours agent', outcome: "Every call on evenings, weekends, and holidays gets answered. The agent classifies urgency, notes contract status, books emergency service or schedules a morning callback. No call goes to voicemail." },
        { name: 'Estimate follow-up sequence', outcome: "Day 2 + day 5 + day 10 after an estimate. References the specific job and quote expiry, offers to answer questions. Closes 30–45% more estimates without you having to remember." },
        { name: 'Maintenance contract renewal', outcome: "Call at 30 days, 7 days, and day-of. Client unreachable at 14 days: winback call with a re-signup offer. You never lose another maintenance client to silence." },
        { name: 'Spring AC campaign', outcome: "In March–April, outbound calls to all previous clients: 'Get your AC checked before the summer rush. We have availability now.' Your calendar fills before peak demand hits." },
        { name: 'Fall heating campaign', outcome: "In August–September, same logic for furnace inspection. You book in September when the team has time, not October when they're overwhelmed." },
        { name: 'Post-job review request', outcome: "24h after service, an SMS with a direct Google link. Satisfied clients respond before they forget. Your online reputation follows your work quality." },
        { name: 'Aging equipment follow-up', outcome: "When a technician notes a system over 10 years old in the job report, an automated follow-up goes out 30 days later with a replacement or upgrade proposal." },
        { name: 'Neighbourhood proximity campaign', outcome: "After completing a job in a neighbourhood, targeted outreach to nearby addresses with same-day availability. A way to fill open slots without paid advertising." },
      ],
      cta: 'See how it works →',
    },
  },

  software: {
    fr: {
      label: 'COMPATIBLE AVEC VOS OUTILS',
      h2: "On s'intègre avec les logiciels que vous utilisez déjà.",
      sw: ['Housecall Pro', 'Jobber', 'ServiceTitan', 'FieldEdge', 'Google Calendar'],
      note: "Que vous utilisiez un logiciel de gestion de service ou simplement un calendrier Google, on s'y connecte.",
      caveat: "Note pour les entreprises sur tableur ou répartition papier : on a une solution Google Forms qui fonctionne immédiatement — aucune migration de logiciel requise. On commence là où vous êtes.",
    },
    en: {
      label: 'COMPATIBLE WITH YOUR TOOLS',
      h2: 'We integrate with the software you already use.',
      sw: ['Housecall Pro', 'Jobber', 'ServiceTitan', 'FieldEdge', 'Google Calendar'],
      note: "Whether you use field service management software or just a Google Calendar, we connect to it.",
      caveat: "Note for companies using spreadsheets or paper dispatch: we have a Google Forms solution that works immediately — no software migration required. We start where you are.",
    },
  },

  caseStudy: {
    fr: {
      label: 'RÉSULTAT RÉEL · HVAC · RIVE-SUD',
      badge: '4 TECHNICIENS · ENTREPRISE DIRIGÉE PAR LE PROPRIÉTAIRE · RIVE-SUD',
      metrics: [
        { value: '94 %', label: "taux de capture après les heures" },
        { value: '+38 %', label: "taux de fermeture des estimations" },
        { value: '0', label: "contrats d'entretien perdus (2 derniers mois)" },
      ],
      story: "Avant Allô, cette entreprise de la Rive-Sud manquait 30 à 40 % de ses appels après 17h, faisait un ou deux suivis par estimation et perdait 3 à 4 contrats d'entretien par mois sans s'en rendre compte. En 90 jours, le taux de capture des appels après les heures est passé à 94 %, le taux de fermeture des estimations a augmenté de 38 %, et aucun contrat d'entretien n'est parti en silence au cours des deux derniers mois.",
      quote: "« Pour la première fois, je ne suis plus le goulot d'étranglement. Le téléphone est géré. Je me présente juste aux chantiers. »  — Propriétaire, Rive-Sud",
    },
    en: {
      label: 'REAL RESULT · HVAC · SOUTH SHORE',
      badge: '4 TECHNICIANS · OWNER-OPERATED · SOUTH SHORE',
      metrics: [
        { value: '94%', label: 'after-hours call capture rate' },
        { value: '+38%', label: 'estimate close rate improvement' },
        { value: '0', label: 'maintenance contracts lost (last 2 months)' },
      ],
      story: "Before Allô, this South Shore company was missing 30–40% of after-hours calls, doing one or two follow-ups per estimate, and losing 3–4 maintenance contracts per month without realizing it. In 90 days, the after-hours call capture rate reached 94%, the estimate close rate improved by 38%, and not one maintenance contract lapsed silently in the last two months.",
      quote: '"For the first time, I\'m not the bottleneck. The phone is handled. I just show up to the jobs."  — Owner, South Shore',
    },
  },

  cta: {
    fr: {
      h2: "On va regarder combien d'appels vous avez manqués le mois dernier.",
      sub: "15 minutes. On vous montre exactement ce que vous avez manqué après les heures — et ce qu'il faudrait pour ne plus jamais en manquer.",
    },
    en: {
      h2: "Let's look at how many calls you missed last month.",
      sub: "15 minutes. We'll show you exactly what you missed after hours — and what it would take to never miss another one.",
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(<VerticalApp data={HVAC_DATA} />);
