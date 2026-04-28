// med-spa.jsx — Med spa vertical page
const MED_SPA_DATA = {
  hero: {
    fr: {
      label: 'MED SPAS ET CLINIQUES ESTHÉTIQUES · MONTRÉAL',
      h1: "Votre meilleure cliente est repartie sans reprendre rendez-vous. Pas parce qu'elle voulait partir.",
      body: "On construit des systèmes d'automatisation pour les med spas et cliniques esthétiques — suivi post-traitement, récupération de no-shows sur injections, renouvellement de membres, campagnes saisonnières. Opérationnel en 7 jours.",
      cta1: 'Réserver mon audit gratuit',
      cta2: "← Retour à l'accueil",
      stats: [
        "28 % : taux de no-show moyen sur les injections sans séquence de rappel structurée.",
        "La fenêtre de 24 à 48h après un traitement réussi est votre meilleur moment de conversion.",
        "Une cliente perdue ne vous dit rien — elle trouve simplement un autre endroit.",
      ],
    },
    en: {
      label: 'MED SPAS AND AESTHETIC CLINICS · MONTREAL',
      h1: "Your best client left without rebooking. Not because she wanted to.",
      body: "We build automation systems for med spas and aesthetic clinics — post-treatment follow-up, injectable no-show recovery, membership renewal, seasonal campaigns. Live in 7 days.",
      cta1: 'Book my free audit',
      cta2: '← Back to main site',
      stats: [
        "28% average no-show rate on injectables without a structured reminder sequence.",
        "The 24–48h window after a successful treatment is your highest conversion moment.",
        "A lost client says nothing — she simply finds somewhere else.",
      ],
    },
  },

  dayInLife: {
    fr: {
      label: 'UNE JOURNÉE DANS VOTRE SPA',
      h2: "Vous êtes l'experte. Et pourtant vous gérez aussi tout le reste.",
      narrative: "Vous commencez la journée avec quatre traitements Botox d'affilée. Pendant que vous êtes avec vos clientes, votre téléphone reçoit trois DMs Instagram sur les prix et deux demandes de disponibilité. Vous ne les verrez qu'en soirée, et d'ici là, ces personnes ont probablement réservé ailleurs. À 14h, une cliente a un no-show pour un traitement au laser à 700 $. Vous aviez préparé la salle, réservé le bloc, et vous restez là avec une heure de temps mort. En fin de journée, une cliente que vous avez très bien aidée repart en vous disant qu'elle était ravie du résultat. Vous pensez qu'elle reviendra. Personne ne la rappelle dans les 24 heures. Trois semaines plus tard, elle n'a pas repris rendez-vous. Vous avez aussi quatre membres dont l'abonnement arrive à terme ce mois-ci — vous ne savez pas lesquels. Et votre série laser de six sessions : deux clientes n'ont pas fait leur quatrième séance. Elles ne vous ont pas dit pourquoi. Ce n'est qu'en soirée que vous réalisez tout ce qui s'est passé entre les traitements.",
    },
    en: {
      label: 'A DAY IN YOUR SPA',
      h2: "You are the expert. And yet you're managing everything else too.",
      narrative: "You start the day with four back-to-back Botox treatments. While you're with clients, your phone receives three Instagram DMs about pricing and two availability requests. You won't see them until evening, and by then those people have probably booked elsewhere. At 2 PM, a client no-shows for a $700 laser treatment. You prepped the room, blocked the time, and now you're sitting there with an hour of dead time. At the end of the day, a client you helped beautifully leaves saying she's thrilled. You assume she'll come back. Nobody calls her within 24 hours. Three weeks later, she hasn't rebooked. You also have four members whose memberships renew this month — you're not sure which ones. And your six-session laser series: two clients haven't shown for their fourth session. They didn't say why. It's only in the evening that you realize everything that happened between treatments.",
    },
  },

  cost: {
    fr: {
      label: 'CE QUE ÇA COÛTE DE NE RIEN CHANGER',
      h2: 'Trois scénarios qui se répètent chaque semaine dans votre spa.',
      cards: [
        {
          cost: '700 $',
          title: 'Le no-show sur une injection',
          what: "Un rendez-vous Botox ou filler à 700 $ qui ne se présente pas. La salle était préparée, le produit sorti, votre heure bloquée. Ce n'est pas comme un nettoyage — c'est votre temps le plus précieux gaspillé.",
          keeps: "Sans séquence de rappel à 72h + 24h + 2h, votre taux de no-show sur les traitements à haute valeur reste entre 20 et 30 %. Chaque point de pourcentage représente des milliers de dollars par mois.",
        },
        {
          cost: '6 semaines',
          title: 'La fenêtre post-traitement non capturée',
          what: "Les 24 à 48h après un traitement réussi, votre cliente est au sommet de sa confiance dans votre travail. C'est le moment le plus facile pour présenter le prochain soin. Presque aucun spa n'a de système pour capturer ce moment.",
          keeps: "Chaque traitement sans suivi post-visite est une occasion manquée. Sur 100 traitements par mois, même 10 % de conversion représente 10 rendez-vous supplémentaires que vous n'avez pas à chercher.",
        },
        {
          cost: '3–4 / mois',
          title: 'Les membres qui lâchent en silence',
          what: "Un membre qui arrête de venir ne vous appelle pas pour annuler. Il arrête simplement de réserver. Trois à quatre abonnements perdus par mois, à 150–300 $ chacun, c'est 450–1 200 $ de revenus récurrents évaporés.",
          keeps: "Un appel 7 jours avant le renouvellement et un appel de reconquête à 30 jours sans rendez-vous récupèrent une fraction importante de ces clientes avant qu'elles trouvent ailleurs.",
        },
      ],
    },
    en: {
      label: 'WHAT IT COSTS TO CHANGE NOTHING',
      h2: 'Three scenarios that repeat every week in your spa.',
      cards: [
        {
          cost: '$700',
          title: 'The no-show on an injectable',
          what: "A $700 Botox or filler appointment that doesn't show. The room was prepped, product pulled, your hour blocked. This isn't like a cleaning — it's your most valuable time wasted.",
          keeps: "Without a 72h + 24h + 2h reminder sequence, your no-show rate on high-value treatments stays between 20–30%. Each percentage point represents thousands of dollars per month.",
        },
        {
          cost: '6 weeks',
          title: 'The post-treatment window not captured',
          what: "The 24–48 hours after a successful treatment, your client is at the peak of their confidence in your work. It's the easiest moment to introduce the next treatment. Almost no spas have a system to capture this.",
          keeps: "Every treatment without a post-visit follow-up is a missed opportunity. Out of 100 treatments per month, even 10% conversion means 10 additional appointments you didn't have to chase.",
        },
        {
          cost: '3–4/mo',
          title: 'Members who lapse in silence',
          what: "A member who stops coming doesn't call to cancel. They just stop booking. Three to four memberships lost per month, at $150–300 each, is $450–1,200 in recurring revenue evaporated.",
          keeps: "A call 7 days before renewal and a winback call at 30 days without a booking recover a meaningful share of these clients before they find somewhere else.",
        },
      ],
    },
  },

  automations: {
    fr: {
      label: 'CE QU\'ON CONSTRUIT POUR VOUS',
      h2: 'Des automatisations conçues pour les med spas.',
      items: [
        { name: 'Agent entrant + réponse aux DMs', outcome: "Les appels entrants et les demandes Instagram ou Facebook reçoivent une réponse immédiate et naturelle. L'agent qualifie, répond aux questions de prix et réserve des consultations — même à 21h." },
        { name: 'Séquence haute valeur 72h + 24h + 2h', outcome: "Pour tout rendez-vous de plus de 300 $, une séquence email + appel voix + SMS. Le taux de no-show sur vos traitements les plus rentables baisse immédiatement." },
        { name: 'Suivi post-traitement 24h', outcome: "Le lendemain du traitement, votre agent appelle pour prendre des nouvelles et présente naturellement le prochain soin recommandé. La cliente se sent accompagnée — et pense déjà à la suite." },
        { name: "Renouvellement d'abonnement", outcome: "7 jours avant le renouvellement : rappel. Jour J : confirmation. Membre sans rendez-vous depuis 30 jours : appel de reconquête avec une offre spécifique. Plus un seul abonnement ne part en silence." },
        { name: 'Suivi de série de traitements', outcome: "Si aucune réservation n'apparaît 3 semaines après la dernière séance d'une série, un appel automatique propose de planifier la suivante. Les résultats sont préservés. La série est complétée." },
        { name: 'Campagne saisonnière', outcome: "Avant l'été et avant les fêtes, appels sortants vers toute votre liste de clientes. Épilation laser, soins de la peau, cartes-cadeaux et forfaits. Votre calendrier se remplit avant la pointe." },
        { name: "Génération d'avis Google", outcome: "24h après le traitement, un SMS qui mentionne le soin spécifique avec lien direct. Les clientes heureuses répondent avant d'oublier. Votre réputation en ligne suit vos résultats en salle." },
        { name: 'Séquence pré-traitement', outcome: "Dès la confirmation : formulaire de consentement, questionnaire soins, demande de photo avant, ce à quoi s'attendre. La cliente arrive préparée. Vous perdez moins de temps en consultation." },
      ],
      cta: "Voir comment ça marche →",
    },
    en: {
      label: 'WHAT WE BUILD FOR YOU',
      h2: 'Automations designed for med spas.',
      items: [
        { name: 'Inbound agent + DM responder', outcome: "Inbound calls and Instagram or Facebook inquiries get an immediate, natural response. The agent qualifies, answers pricing questions, and books consultations — even at 9 PM." },
        { name: 'High-value 72h + 24h + 2h sequence', outcome: "For every appointment over $300, an email + voice call + SMS sequence. The no-show rate on your most profitable treatments drops immediately." },
        { name: '24h post-treatment follow-up', outcome: "The day after treatment, your agent calls to check in and naturally introduces the next recommended service. The client feels cared for — and is already thinking about coming back." },
        { name: 'Membership renewal', outcome: "7 days before renewal: reminder call. Day-of: confirmation. Member 30 days without a booking: winback call with a specific offer. Not one more membership lapses in silence." },
        { name: 'Treatment series tracker', outcome: "If no booking appears 3 weeks after the last session in a series, an automatic call offers to schedule the next one. Results are preserved. The series gets completed." },
        { name: 'Seasonal campaign', outcome: "Before summer and before the holidays, outbound calls to your full client list. Laser, skin prep, gift cards, packages. Your calendar fills before peak demand hits." },
        { name: 'Google review generation', outcome: "24h post-treatment, an SMS referencing the specific service with a direct link. Happy clients respond before they forget. Your online reputation follows your in-room results." },
        { name: 'Pre-treatment sequence', outcome: "From the confirmation: consent form, skincare questionnaire, before-photo request, what to expect. The client arrives prepared. You lose less time in consultation." },
      ],
      cta: 'See how it works →',
    },
  },

  software: {
    fr: {
      label: 'COMPATIBLE AVEC VOS OUTILS',
      h2: "On s'intègre avec les logiciels que vous utilisez déjà.",
      sw: ['Mangomint', 'Mindbody', 'Vagaro', 'Acuity Scheduling', 'Jane App', 'Google Calendar'],
      note: "Peu importe votre logiciel de réservation actuel, on s'y connecte. Pas de migration, pas de formation.",
      caveat: null,
    },
    en: {
      label: 'COMPATIBLE WITH YOUR TOOLS',
      h2: 'We integrate with the software you already use.',
      sw: ['Mangomint', 'Mindbody', 'Vagaro', 'Acuity Scheduling', 'Jane App', 'Google Calendar'],
      note: "Whatever booking software you use today, we connect to it. No migration, no training.",
      caveat: null,
    },
  },

  caseStudy: {
    fr: {
      label: 'RÉSULTAT RÉEL · MED SPA · PLATEAU-MONT-ROYAL',
      badge: '2 PRESTATAIRES · 8 SALLES DE TRAITEMENT · MONTRÉAL',
      metrics: [
        { value: '28 % → 14 %', label: 'taux de no-show sur injectables' },
        { value: '34', label: 'nouveaux avis Google en 45 jours' },
        { value: '6', label: 'clientes converties en membres (mois 1)' },
      ],
      story: "Ce med spa du Plateau avait un problème qu'il ne voyait pas en entier : 28 % de no-shows sur les rendez-vous d'injections, onze avis Google en deux ans, et des dizaines de clientes satisfaites qui repartaient sans qu'on leur propose de revenir. En 45 jours, la séquence de confirmation a ramené le no-show sur injectables à 14 %. Les appels post-traitement ont conduit 6 clientes à souscrire un abonnement mensuel le premier mois. Les demandes d'avis automatiques ont généré 34 nouveaux avis en moins de six semaines.",
      quote: "« Je ne réalisais pas à quel point de revenus sortaient par la porte après chaque traitement. »  — Propriétaire, Plateau-Mont-Royal",
    },
    en: {
      label: 'REAL RESULT · MED SPA · PLATEAU-MONT-ROYAL',
      badge: '2 PROVIDERS · 8 TREATMENT ROOMS · MONTREAL',
      metrics: [
        { value: '28% → 14%', label: 'injectable no-show rate' },
        { value: '34', label: 'new Google reviews in 45 days' },
        { value: '6', label: 'clients converted to memberships (month 1)' },
      ],
      story: "This Plateau med spa had a problem it couldn't see in full: 28% no-shows on injectable appointments, eleven Google reviews in two years, and dozens of happy clients leaving without anyone suggesting they come back. In 45 days, the confirmation sequence brought the injectable no-show rate to 14%. Post-treatment calls led 6 clients to sign up for monthly memberships in the first month. Automated review requests generated 34 new reviews in under six weeks.",
      quote: '"I didn\'t realize how much revenue was walking out the door after every treatment."  — Owner, Plateau-Mont-Royal',
    },
  },

  cta: {
    fr: {
      h2: 'Passons 15 minutes à regarder votre taux de no-show.',
      sub: "On vous montrera exactement ce qui sort par la porte après chaque traitement — et ce qu'on ferait pour le récupérer.",
    },
    en: {
      h2: "Let's spend 15 minutes looking at your no-show rate.",
      sub: "We'll show you exactly what's walking out the door after every treatment — and what we'd do to recover it.",
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(<VerticalApp data={MED_SPA_DATA} />);
