// sections.jsx — HowItWorks + Results + Packages
const { useState } = React;

const STEPS_COPY = {
  fr: {
    label: 'COMMENT ÇA MARCHE',
    h2: 'Opérationnel en 7 jours. Votre équipe ne touche à rien.',
    steps: [
      { day: 'Jour 1', title: 'On regarde votre entreprise ensemble', desc: "On prend 15 minutes pour comprendre ce qui vous échappe. Les rappels manqués, les appels après les heures, les suivis que personne ne fait. Votre équipe n'est pas en cause. Le volume l'est." },
      { day: 'Jour 3', title: 'On construit votre système de qualification et de prise de rendez-vous', desc: "Scripts sur mesure, voix bilingues (FR/EN), branché sur vos outils existants. Qualification des prospects entrants, prise de rendez-vous automatique, relances de no-show, suivi de complétion de cure. Tout ça tourne sans qu'on ait besoin d'intervenir." },
      { day: 'Jour 7', title: "Allô gère le volume. Votre équipe s'occupe de ce qui compte.", desc: "On répond aux appels, les suivis partent tout seuls, les rendez-vous sont confirmés. Votre équipe peut faire ce qu'elle fait vraiment bien." },
    ],
    foot: "On s'occupe de tout le côté technique. Votre équipe ne change rien à ses habitudes.",
  },
  en: {
    label: 'HOW IT WORKS',
    h2: 'Live in 7 days. Your team changes nothing.',
    steps: [
      { day: 'Day 1', title: 'We look at your business together', desc: "We take 15 minutes to understand what you're missing: missed recalls, after-hours emergency calls, estimate follow-ups nobody gets to. Your team isn't the problem. The volume is." },
      { day: 'Day 3', title: 'We build your lead qualification and booking system', desc: "Custom scripts, bilingual voices (FR/EN), connected to your existing tools. Inbound lead qualification, automatic appointment booking, no-show recovery, series completion follow-ups. All of it runs without anyone having to step in." },
      { day: 'Day 7', title: "Allô handles the volume. Your team handles what matters.", desc: "Calls get answered, follow-ups go out automatically, appointments are confirmed. Your team does what they're actually good at." },
    ],
    foot: 'We handle everything technical. Your team changes nothing about how they work.',
  },
};


const PKG_COPY = {
  fr: {
    label: 'FORFAITS',
    h2: 'Choisissez votre forfait.',
    sub: "Frais d'intégration uniques + abonnement mensuel forfaitaire. Transparent. Sans surprise.",
    popular: 'PLUS POPULAIRE',
    setupLbl: 'Intégration',
    mo: '/mois',
    compare: 'Voir la comparaison complète →',
    plans: [
      {
        name: "L'Amplificateur",
        desc: 'Pour les entreprises en croissance — 10+ employés ou multi-sites',
        setup: '1 500 $',
        price: '1 690 $',
        cta: 'Discuter de cette solution',
        limit: '4 000 minutes incluses · 0,35 $/min supplémentaire',
        onboarding: "Intégration 7 à 10 jours ouvrables (audit de base de données + segmentation inclus)",
        features: [
          "Tout le forfait Le Protecteur inclus",
          "Contacts inactifs 3 à 24 mois contactés automatiquement (anciens clients, leads froids, demandes incomplètes)",
          "Chaque message référence leur historique spécifique — pas un envoi générique",
          "3+ points de contact par contact : voix, SMS, courriel",
          "Contacts réengagés qualifiés et transmis à votre équipe comme leads chauds",
          "Annulation → liste d'attente contactée en temps réel pour combler le créneau",
          "Suivi post-rendez-vous selon le service reçu",
          "Tableau de bord mensuel : contacts réactivés, revenus récupérés, performance des séquences, santé de la base de données",
          "Responsable de compte dédié + appel stratégie mensuel",
        ],
      },
      {
        name: 'Le Protecteur',
        desc: 'Pour les équipes de 3 à 10 qui veulent récupérer ce qui leur échappe',
        setup: '800 $',
        price: '990 $',
        popular: true,
        cta: "Commencer l'intégration",
        limit: '2 000 minutes incluses · 0,35 $/min supplémentaire',
        onboarding: "Support < 4 h · Intégration 5 à 8 jours ouvrables",
        features: [
          "Tout le forfait Le Gardien inclus",
          "Chaque nouveau lead reçoit 3+ contacts sur 7 à 14 jours (SMS + appel)",
          "Un contact qui réserve ou répond sort de la séquence automatiquement; votre équipe est notifiée",
          "Rendez-vous manqué → séquence de replanification sortante déclenchée automatiquement",
          "Demande d'avis Google envoyée automatiquement après le rendez-vous",
          "Appels en débordement et hors heures pris en charge",
          "Intégration CRM et calendrier",
          "Rapport mensuel : leads, séquences, no-shows récupérés, impact revenus",
        ],
      },
      {
        name: 'Le Gardien',
        desc: 'Pour tout propriétaire qui perd des appels ou des rendez-vous',
        setup: 'Gratuit',
        price: '640 $',
        cta: 'Voir les détails',
        limit: '1 000 minutes incluses · 0,35 $/min supplémentaire',
        onboarding: "Intégration gratuite · 3 à 5 jours ouvrables",
        features: [
          "Tous les appels entrants répondus 24h/24 7j/7 FR+EN — pas de messagerie vocale",
          "Nouveaux leads qualifiés dès le premier appel (budget, service, urgence, zone)",
          "Leads qualifiés routés immédiatement avec le contexte complet",
          "Rendez-vous pris dans votre système existant pendant l'appel",
          "Confirmation SMS envoyée à la prise de rendez-vous",
          "Appels urgents escaladés selon vos règles",
          "FAQ gérées automatiquement",
          "Rapport hebdomadaire : appels + leads",
        ],
      },
    ],
    compareRows: [
      { feature: "Réception d'appels bilingue 24h/24 7j/7",       a: true,  b: true,  c: true  },
      { feature: 'Qualification des leads au premier appel',       a: true,  b: true,  c: true  },
      { feature: "Rendez-vous pris pendant l'appel",               a: true,  b: true,  c: true  },
      { feature: 'Confirmations SMS',                              a: true,  b: true,  c: true  },
      { feature: "Escalade d'urgence sur mesure",                  a: true,  b: true,  c: true  },
      { feature: 'FAQ gérées automatiquement',                     a: true,  b: true,  c: true  },
      { feature: 'Rapport hebdomadaire',                           a: true,  b: true,  c: true  },
      { feature: 'Suivi sortant 3+ contacts / 7–14 jours',        a: true,  b: true,  c: false },
      { feature: 'Replanification automatique des no-shows',       a: true,  b: true,  c: false },
      { feature: "Demande d'avis Google post-rendez-vous",         a: true,  b: true,  c: false },
      { feature: 'Gestion des débordements / hors heures',         a: true,  b: true,  c: false },
      { feature: 'Intégration CRM et calendrier',                  a: true,  b: true,  c: false },
      { feature: 'Rapport mensuel de performance',                 a: true,  b: true,  c: false },
      { feature: 'Support prioritaire (< 4 h)',                    a: true,  b: true,  c: false },
      { feature: 'Réactivation des contacts dormants',             a: true,  b: false, c: false },
      { feature: "Remplissage liste d'attente en temps réel",      a: true,  b: false, c: false },
      { feature: 'Responsable de compte dédié',                    a: true,  b: false, c: false },
    ],
  },
  en: {
    label: 'PACKAGES',
    h2: 'Choose your package.',
    sub: 'One-time onboarding fee + flat monthly subscription. Transparent. No surprises.',
    popular: 'MOST POPULAR',
    setupLbl: 'Onboarding',
    mo: '/mo',
    compare: 'See full comparison →',
    plans: [
      {
        name: 'The Amplifier',
        desc: 'For growing businesses — 10+ employees or multi-location',
        setup: '$1,500',
        price: '$1,690',
        cta: 'Discuss this solution',
        limit: '4,000 minutes included · $0.35/min after',
        onboarding: "Onboarding 7–10 business days (includes database audit + segmentation)",
        features: [
          "Everything in The Protector",
          "Contacts inactive 3–24 months contacted automatically (past clients, dead leads, incomplete inquiries)",
          "Each message references their specific history — not a generic blast",
          "3+ touchpoints per contact via voice, SMS, email",
          "Re-engaged contacts auto-qualified and handed to your team as warm leads",
          "Cancellation → waitlist contacted in real time to fill the slot",
          "Post-appointment follow-up based on service received",
          "Monthly dashboard: reactivated contacts, recovered revenue, sequence performance, database health",
          "Dedicated account manager + monthly strategy call",
        ],
      },
      {
        name: 'The Protector',
        desc: "For teams of 3–10 who want to recover what's slipping through",
        setup: '$800',
        price: '$990',
        popular: true,
        cta: 'Start onboarding',
        limit: '2,000 minutes included · $0.35/min after',
        onboarding: "Support < 4 h · Onboarding 5–8 business days",
        features: [
          "Everything in The Guardian",
          "Every new lead gets 3+ follow-up touchpoints over 7–14 days (SMS + call)",
          "Contacts who book or reply exit the sequence automatically; your team is notified",
          "Missed appointment → outbound rebook sequence fires automatically",
          "Post-appointment Google review request sent automatically",
          "Overflow + after-hours calls handled",
          "CRM + calendar integration",
          "Monthly report: leads, sequences, no-shows recovered, revenue impact",
        ],
      },
      {
        name: 'The Guardian',
        desc: 'For any owner losing calls or appointments',
        setup: 'Free',
        price: '$640',
        cta: 'See details',
        limit: '1,000 minutes included · $0.35/min after',
        onboarding: "Onboarding free · 3–5 business days",
        features: [
          "Every inbound call answered 24/7 FR+EN — no voicemail",
          "New leads qualified on first call (budget, service, urgency, location)",
          "Qualified leads routed instantly with full context",
          "Appointments booked into your existing system during the call",
          "SMS confirmation sent at time of booking",
          "Urgent calls escalated by rules you define",
          "FAQ handled automatically",
          "Weekly call + lead summary",
        ],
      },
    ],
    compareRows: [
      { feature: 'Bilingual inbound answering 24/7',               a: true,  b: true,  c: true  },
      { feature: 'Lead qualification on first call',               a: true,  b: true,  c: true  },
      { feature: 'Appointments booked during the call',            a: true,  b: true,  c: true  },
      { feature: 'SMS confirmations',                              a: true,  b: true,  c: true  },
      { feature: 'Custom emergency escalation',                    a: true,  b: true,  c: true  },
      { feature: 'FAQ handled automatically',                      a: true,  b: true,  c: true  },
      { feature: 'Weekly call + lead report',                      a: true,  b: true,  c: true  },
      { feature: 'Outbound follow-up: 3+ contacts / 7–14 days',   a: true,  b: true,  c: false },
      { feature: 'Automatic no-show rebook sequence',              a: true,  b: true,  c: false },
      { feature: 'Post-appointment Google review request',         a: true,  b: true,  c: false },
      { feature: 'Overflow and after-hours handling',              a: true,  b: true,  c: false },
      { feature: 'CRM and calendar integration',                   a: true,  b: true,  c: false },
      { feature: 'Monthly performance report',                     a: true,  b: true,  c: false },
      { feature: 'Priority support (< 4 h)',                       a: true,  b: true,  c: false },
      { feature: 'Dormant contact reactivation',                   a: true,  b: false, c: false },
      { feature: 'Real-time waitlist backfill',                    a: true,  b: false, c: false },
      { feature: 'Dedicated account manager',                      a: true,  b: false, c: false },
    ],
  },
};

const Check = ({ color = 'var(--ink)' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
    <polyline points="3,8.5 6.5,12 13,5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Cross = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
    <line x1="5" y1="8" x2="11" y2="8" stroke="var(--pale)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HowItWorksSection = ({ lang }) => {
  const t = STEPS_COPY[lang];
  useScrollReveal(lang);
  return (
    <section id="comment" style={{ background: 'var(--near-black)' }}>
      <div className="container">
        <div className="steps-heading" style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="label fu" style={{ color: 'var(--stone)' }}>{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ color: 'var(--paper)', maxWidth: 560, margin: '0 auto' }}>{t.h2}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, position: 'relative', zIndex: 0 }} className="steps-grid">
          {/* Dashed connector */}
          <div className="steps-connector" style={{ position: 'absolute', top: 85, left: '16.7%', right: '16.7%', height: 1, borderTop: '1px dashed rgba(255,255,255,0.15)', zIndex: -1 }} />
          {t.steps.map((step, i) => (
            <div key={i} className="fu" data-delay={i * 100} style={{ padding: '0 32px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <div style={{ marginBottom: 12 }}>
                <span style={{ display: 'inline-block', border: '1px solid rgba(245,243,239,0.25)', borderRadius: 999, padding: '5px 14px', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--paper)' }}>{step.day}</span>
              </div>
              <div className="step-deco-num" style={{ fontFamily: 'DM Serif Display', fontSize: 96, color: 'var(--paper)', opacity: 0.07, lineHeight: 1, marginBottom: 16, pointerEvents: 'none', userSelect: 'none' }}>{i + 1}</div>
              <h3 style={{ fontSize: 18, fontWeight: 500, color: 'var(--paper)', marginBottom: 12 }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--stone)', lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="fu" data-delay="320" style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ fontSize: 14, color: 'var(--stone)' }}>{t.foot}</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-connector { display: none !important; }
          .step-deco-num { display: none !important; }
          .steps-grid > div { padding: 0 16px !important; }
          .steps-heading { margin-bottom: 40px !important; }
        }
      `}</style>
    </section>
  );
};


const PackagesSection = ({ lang }) => {
  const t = PKG_COPY[lang];
  const [showCompare, setShowCompare] = useState(false);
  useScrollReveal(lang + showCompare);

  return (
    <section id="forfaits" style={{ background: 'var(--paper)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="label fu">{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ marginBottom: 12 }}>{t.h2}</h2>
          <p className="fu" data-delay="100" style={{ color: 'var(--charcoal)', fontSize: 15 }}>{t.sub}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 56, marginBottom: 24 }} className="pkg-grid">
          {t.plans.map((plan, i) => (
            <div key={i} className="fu" data-delay={i * 80} style={{
              background: 'var(--paper)', borderRadius: 20,
              border: '1px solid var(--pale)', padding: '32px 28px',
              display: 'flex', flexDirection: 'column',
              boxShadow: plan.popular ? '0 8px 32px rgba(0,0,0,0.28)' : 'none',
              position: 'relative',
            }}>
              {plan.popular && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--ink)', color: 'var(--paper)', borderRadius: 999, padding: '4px 14px', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>{t.popular}</div>
              )}
              <div style={{ fontFamily: 'DM Serif Display', fontSize: 26, marginBottom: 6, lineHeight: 1.2 }}>{plan.name}</div>
              <div style={{ fontSize: 13, color: 'var(--stone)', marginBottom: 24 }}>{plan.desc}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, padding: '14px 0', borderTop: '1px solid var(--pale)', borderBottom: '1px solid var(--pale)' }}>
                <span style={{ fontSize: 13, color: 'var(--stone)' }}>{t.setupLbl}</span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{plan.setup}</span>
              </div>
              <div style={{ marginBottom: 6 }}>
                <span style={{ fontFamily: 'DM Serif Display', fontSize: 42, lineHeight: 1 }}>{plan.price}</span>
                <span style={{ fontSize: 15, color: 'var(--stone)' }}>{t.mo}</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--stone)', letterSpacing: '0.02em', marginBottom: 4 }}>{plan.limit}</div>
              <div style={{ fontSize: 11, color: 'var(--stone)', letterSpacing: '0.02em', marginBottom: 20 }}>{plan.onboarding}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32, flex: 1 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--charcoal)', lineHeight: 1.45 }}>
                    <Check />{f}
                  </li>
                ))}
              </ul>
              <a href="#audit" className={plan.popular ? 'btn btn-primary' : 'btn btn-ghost'} style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', ...(plan.popular ? { background: '#0D0D0D', color: '#F5F3EF', borderColor: '#0D0D0D' } : {}) }}>{plan.cta}</a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: showCompare ? 40 : 0 }}>
          <button onClick={() => setShowCompare(v => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'var(--stone)', textDecoration: 'underline', textDecorationColor: 'rgba(154,154,154,0.4)', fontFamily: 'DM Sans', transition: 'opacity 0.2s' }} onMouseEnter={e=>e.target.style.opacity=0.6} onMouseLeave={e=>e.target.style.opacity=1}>
            {t.compare}
          </button>
        </div>

        {showCompare && (
          <div className="fu" style={{ background: 'var(--near-black)', borderRadius: 16, overflowX: 'auto', WebkitOverflowScrolling: 'touch', border: '1px solid var(--pale)' }}>
            <table style={{ width: '100%', minWidth: 480, borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', color: 'var(--stone)', fontWeight: 500, width: '40%' }}></th>
                  {t.plans.map((p, i) => <th key={i} style={{ padding: '16px 16px', textAlign: 'center', color: 'var(--paper)', fontWeight: 500 }}>{p.price}</th>)}
                </tr>
              </thead>
              <tbody>
                {t.compareRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '13px 24px', color: 'var(--stone)' }}>{row.feature}</td>
                    {[row.a, row.b, row.c].map((v, j) => (
                      <td key={j} style={{ padding: '13px 16px', textAlign: 'center' }}>
                        {v ? <Check color="var(--paper)" /> : <Cross />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <style>{`@media (max-width: 768px) { .pkg-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

Object.assign(window, { HowItWorksSection, PackagesSection });
