// dentaires.jsx — Dental clinic vertical page
const DENTAIRES_DATA = {
  hero: {
    fr: {
      label: 'CLINIQUES DENTAIRES · MONTRÉAL',
      h1: "Votre réceptionniste fait le travail de trois personnes. La liste de rappel n'est jamais faite.",
      body: "On construit des systèmes d'automatisation spécifiques aux cliniques dentaires — appels entrants, rappels de nettoyage, récupération de no-shows, suivi de plans de traitement. Opérationnel en 7 jours.",
      cta1: 'Réserver mon audit gratuit',
      cta2: "← Retour à l'accueil",
      stats: [
        "En moyenne, 280 patients en retard pour leur nettoyage dans une clinique de 2 fauteuils.",
        "40 à 60 % des plans de traitement présentés ne sont jamais réservés.",
        "Le premier cabinet à rappeler un nouveau patient l'obtient 78 % du temps.",
      ],
    },
    en: {
      label: 'DENTAL CLINICS · MONTREAL',
      h1: "Your receptionist is doing the work of three people. The recall list never gets done.",
      body: "We build automation systems specifically for dental clinics — inbound calls, cleaning reminders, no-show recovery, treatment plan follow-up. Live in 7 days.",
      cta1: 'Book my free audit',
      cta2: '← Back to main site',
      stats: [
        "On average, 280 patients overdue for a cleaning in a 2-chair clinic.",
        "40–60% of presented treatment plans are never booked.",
        "The first clinic to call back a new patient gets them 78% of the time.",
      ],
    },
  },

  dayInLife: {
    fr: {
      label: 'UNE JOURNÉE DANS VOTRE CLINIQUE',
      h2: 'Vous êtes le soignant. Et parfois le seul à tout gérer.',
      narrative: "Vous arrivez à 8h00. Il y a deux messages vocaux depuis hier soir — dont un nouveau patient qui a mentionné une douleur. Votre réceptionniste n'est pas encore là. Votre première extraction est à 8h30. Vous rappelez rapidement entre deux préparations, mais le patient ne répond pas. En fin de matinée, un patient ne se présente pas pour sa couronne de 9h00 du matin. Votre réceptionniste a appelé une fois, pas de réponse, et est passée à autre chose — elle a quatre personnes qui attendent à la réception, deux assurances à traiter et le téléphone qui sonne. L'après-midi, vous terminez les soins, vous jetez un œil à Dentitek et vous voyez la liste de rappel — 340 patients en retard pour leur nettoyage, dont certains depuis 18 mois. Vous savez que cette liste représente des dizaines de milliers de dollars. Vous le savez depuis six mois. Personne n'a le temps d'appeler. En fin de journée, vous avez fait d'excellent travail clinique. Mais vous avez aussi manqué deux nouveaux patients potentiels, raté un no-show récupérable et regardé la liste sans la toucher, encore une fois.",
    },
    en: {
      label: 'A DAY IN YOUR CLINIC',
      h2: 'You are the clinician. And sometimes the only one handling everything.',
      narrative: "You arrive at 8:00 AM. There are two voicemails from the night before — one from a new patient who mentioned pain. Your receptionist isn't in yet. Your first extraction is at 8:30. You quickly return the call between preps, but no answer. Mid-morning, a patient doesn't show for their crown prep. Your receptionist called once, no answer, moved on — she has four people waiting at the front desk, two insurance claims to process, and the phone ringing. In the afternoon, you finish your procedures, glance at Dentitek and see the recall list — 340 patients overdue for a cleaning, some for 18 months. You know this list represents tens of thousands of dollars. You've known it for six months. Nobody has time to call. At the end of the day, you did excellent clinical work. But you also missed two potential new patients, lost a recoverable no-show, and looked at the list without touching it, again.",
    },
  },

  cost: {
    fr: {
      label: 'CE QUE ÇA COÛTE DE NE RIEN CHANGER',
      h2: 'Trois scénarios qui se répètent chaque semaine dans votre clinique.',
      cards: [
        {
          cost: '~8 000 $',
          title: "La liste de rappel que personne n'appelle",
          what: "Une clinique de 2 fauteuils avec 280 patients en retard représente environ 42 nettoyages récupérables. À 190 $ le nettoyage, c'est 7 980 $ de revenus qui attendent un appel — chaque mois.",
          keeps: "Ces patients ne sont pas perdus. Ils sont juste en attente. Chaque mois sans système de rappel, la liste grandit et l'inconfort d'appeler grandit avec elle.",
        },
        {
          cost: '400–900 $',
          title: 'Le no-show sur une préparation de couronne',
          what: "Un fauteuil vide pour une préparation de couronne représente entre 400 $ et 900 $ de revenu perdu. Le bloc était réservé, les matériaux préparés, le prochain patient décalé.",
          keeps: "Sans récupération dans les 10 minutes, ce créneau est perdu pour la journée. Avec un rappel à J-2 et J-0 et une reprise rapide, 15 à 25 % de ces no-shows reviennent la même semaine.",
        },
        {
          cost: '60 %',
          title: 'Les plans de traitement qui disparaissent',
          what: "Un patient repart avec un plan pour une couronne et deux obturations. Personne ne fait de suivi. En moyenne, 40 à 60 % des traitements électifs présentés ne sont jamais réservés.",
          keeps: "Un appel 48h après la consultation pour répondre aux questions et offrir un créneau convertit une part significative de ces plans en revenus réels — sans effort de votre part.",
        },
      ],
    },
    en: {
      label: 'WHAT IT COSTS TO CHANGE NOTHING',
      h2: 'Three scenarios that repeat every week in your clinic.',
      cards: [
        {
          cost: '~$8,000',
          title: 'The recall list nobody calls',
          what: "A 2-chair clinic with 280 overdue patients has roughly 42 recoverable cleaning appointments. At $190 per cleaning, that's $7,980 in revenue waiting for a call — every month.",
          keeps: "These patients aren't lost. They're just waiting. Every month without a recall system, the list grows and the discomfort of calling grows with it.",
        },
        {
          cost: '$400–900',
          title: 'The no-show on a crown preparation',
          what: "An empty chair for a crown prep costs between $400 and $900 in lost revenue. The operatory was blocked, materials prepared, the next patient shifted.",
          keeps: "Without recovery within 10 minutes, that slot is gone for the day. With a D-2 + D-0 confirmation and fast recovery, 15–25% of these no-shows come back the same week.",
        },
        {
          cost: '60%',
          title: 'Treatment plans that disappear',
          what: "A patient leaves with a plan for a crown and two fillings. Nobody follows up. On average, 40–60% of presented elective treatments are never booked.",
          keeps: "A call 48 hours after the consultation to answer questions and offer a slot converts a meaningful share of these plans into real revenue — without any effort on your part.",
        },
      ],
    },
  },

  automations: {
    fr: {
      label: 'CE QU\'ON CONSTRUIT POUR VOUS',
      h2: 'Des automatisations conçues pour les cliniques dentaires.',
      items: [
        { name: 'Agent entrant 24h/24', outcome: "Un patient appelle à 19h avec une urgence ou pour prendre rendez-vous. Votre agent répond en français ou en anglais, réserve immédiatement, ou escalade les urgences selon vos instructions. Aucun appel ne va à la messagerie." },
        { name: 'Confirmation J-2 et J-0', outcome: "Un appel automatique 48h avant et 2h avant chaque rendez-vous. Le patient confirme d'une touche, ou l'agent lui propose de reprogrammer sur-le-champ. Vous ne découvrez plus les no-shows à la dernière minute." },
        { name: 'Récupération de no-show', outcome: "Si un patient ne se présente pas à 14h00, votre agent l'appelle dans les 10 minutes. Ton chaleureux, sans reproche. Offre un créneau cette semaine. 15 à 25 % reviennent." },
        { name: 'Campagne de rappel 6 mois', outcome: "Votre agent parcourt la liste des patients en retard automatiquement — appels, textos, rapports hebdomadaires. Vous ne touchez à rien. La liste se réduit d'elle-même." },
        { name: 'Suivi de plan de traitement', outcome: "48h après la consultation, votre agent appelle pour répondre aux questions et offrir de réserver le traitement recommandé. Une conversation sur deux aboutit à un rendez-vous." },
        { name: 'Réactivation patients dormants', outcome: "Les patients absents depuis 12 mois et plus reçoivent un appel personnalisé — pas un texto générique. Une conversation naturelle qui rappelle que votre clinique pense à eux." },
        { name: "Demande d'avis Google", outcome: "24h après la visite, un SMS avec lien direct vers votre fiche Google. 4 à 8 fois plus d'avis qu'avec une demande manuelle, sans que votre équipe ne fasse quoi que ce soit." },
        { name: 'Accueil du nouveau patient', outcome: "Dès la confirmation, le nouveau patient reçoit automatiquement : formulaires d'admission, infos d'assurance, instructions de stationnement, ce à quoi s'attendre. Vous gagnez 10 minutes par nouveau patient." },
      ],
      cta: "Voir comment ça marche →",
    },
    en: {
      label: 'WHAT WE BUILD FOR YOU',
      h2: 'Automations designed for dental clinics.',
      items: [
        { name: '24/7 inbound agent', outcome: "A patient calls at 7 PM with an emergency or to book an appointment. Your agent answers in French or English, books immediately, or escalates emergencies per your instructions. No call goes to voicemail." },
        { name: 'D-2 and D-0 confirmation', outcome: "An automatic call 48 hours before and 2 hours before every appointment. The patient confirms with a keypress, or the agent offers to reschedule on the spot. No more discovering no-shows at the last minute." },
        { name: 'No-show recovery', outcome: "If a patient doesn't show, your agent calls within 10 minutes. Warm tone, no accusation. Offers a slot this week. 15–25% come back." },
        { name: '6-month recall campaign', outcome: "Your agent works through the overdue patient list automatically — calls, texts, weekly reports. You touch nothing. The list shrinks on its own." },
        { name: 'Treatment plan follow-up', outcome: "48 hours after the consultation, your agent calls to answer questions and offer to book the recommended treatment. One in two conversations turns into an appointment." },
        { name: 'Dormant patient reactivation', outcome: "Patients absent for 12+ months receive a personal-sounding call — not a generic text. A natural conversation that reminds them your clinic is thinking about them." },
        { name: 'Google review request', outcome: "24h post-visit, an SMS with a direct link to your Google profile. 4–8× more reviews than with manual asking, without your team doing anything." },
        { name: 'New patient onboarding', outcome: "From the confirmation, the new patient automatically receives: intake forms, insurance info, parking instructions, what to expect. You save 10 minutes per new patient." },
      ],
      cta: 'See how it works →',
    },
  },

  software: {
    fr: {
      label: 'COMPATIBLE AVEC VOS OUTILS',
      h2: "On s'intègre avec les logiciels que vous utilisez déjà.",
      sw: ['Dentitek', 'Jane App', 'Clinicmaster', 'Meditab', 'Google Calendar'],
      note: "Pas besoin de changer de logiciel, ni de former votre équipe sur un nouvel outil.",
      caveat: "Note sur Dentitek : Dentitek n'a pas d'API ouverte. On a résolu ça avec un export CSV quotidien — votre réceptionniste exporte un fichier en 30 secondes chaque matin. C'est tout. On s'occupe du reste.",
    },
    en: {
      label: 'COMPATIBLE WITH YOUR TOOLS',
      h2: 'We integrate with the software you already use.',
      sw: ['Dentitek', 'Jane App', 'Clinicmaster', 'Meditab', 'Google Calendar'],
      note: "No need to change software or train your team on a new tool.",
      caveat: "Note on Dentitek: Dentitek has no open API. We've solved this with a simple daily CSV export — your receptionist exports a file in 30 seconds each morning. That's it. We handle the rest.",
    },
  },

  caseStudy: {
    fr: {
      label: 'RÉSULTAT RÉEL · CLINIQUE DENTAIRE · LAVAL',
      badge: 'CLINIQUE DE 2 FAUTEUILS · DENTISTE SOLO · UNE RÉCEPTIONNISTE',
      metrics: [
        { value: '47', label: 'patients revenus en 60 jours' },
        { value: '7 050 $', label: 'en nettoyages récupérés' },
        { value: '280 → 233', label: 'patients en retard (liste active)' },
      ],
      story: "Cette clinique de Laval avait 280 patients sur sa liste de rappel depuis des mois. La réceptionniste savait que la liste était là. Elle n'avait jamais le temps d'appeler — entre les patients qui se présentaient, les assurances et le téléphone qui sonnait. En 60 jours de campagne automatique, 47 patients ont pris rendez-vous pour leur nettoyage. Sept mille cinquante dollars de revenus qui dormaient dans une liste.",
      quote: "« J'ai arrêté de penser à la liste de rappel — ça se fait maintenant. »  — Dr Tremblay, Laval",
    },
    en: {
      label: 'REAL RESULT · DENTAL CLINIC · LAVAL',
      badge: '2-CHAIR CLINIC · SOLO DENTIST · ONE RECEPTIONIST',
      metrics: [
        { value: '47', label: 'patients rebooked in 60 days' },
        { value: '$7,050', label: 'in recovered cleaning revenue' },
        { value: '280 → 233', label: 'overdue patients (active list)' },
      ],
      story: "This Laval clinic had 280 patients on its recall list for months. The receptionist knew the list was there. She never had time to call — between walk-ins, insurance claims, and the phone ringing. In 60 days of automated outreach, 47 patients booked a cleaning appointment. Seven thousand dollars in revenue that was sitting in a list.",
      quote: '"I stopped thinking about the recall list — it just happens now."  — Dr. Tremblay, Laval',
    },
  },

  cta: {
    fr: {
      h2: 'On va regarder votre liste de rappel ensemble.',
      sub: "15 minutes. On vous montre exactement combien de patients vous avez perdus ce mois-ci — et ce qu'il faudrait pour les récupérer.",
    },
    en: {
      h2: "Let's look at your recall list together.",
      sub: "15 minutes. We'll show you exactly how many patients you've lost this month — and what it would take to get them back.",
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(<VerticalApp data={DENTAIRES_DATA} />);
