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
        name: 'La Machine de croissance',
        desc: 'Pour les entreprises qui veulent aller plus loin',
        setup: '5 000 $',
        price: '2 500 $',
        cta: 'Discuter de cette solution',
        limit: '3 500 minutes incluses · 0,18 $/min supplémentaire',
        features: [
          "Tout le forfait Core inclus",
          "Automatisation multicanale (voix, SMS, courriel)",
          "Appels de vente incitative post-traitement",
          "Routage complexe sur mesure",
          "Remplissage de liste d'attente sur annulation",
          "Rapports BI sur mesure",
        ],
      },
      {
        name: 'Le Protecteur de revenus',
        desc: 'Pour récupérer ce qui vous échappe',
        setup: '2 500 $',
        price: '1 800 $',
        popular: true,
        cta: "Commencer l'intégration",
        limit: '1 500 minutes incluses · 0,22 $/min supplémentaire',
        features: [
          "Tout le forfait Base inclus",
          "Récupération des rendez-vous manqués (no-show)",
          "Séquences de réactivation des clients dormants",
          "Génération d'avis Google",
        ],
      },
      {
        name: 'La Réceptionniste',
        desc: 'Pour protéger votre équipe du volume entrant',
        setup: '1 500 $',
        price: '1 200 $',
        cta: 'Voir les détails',
        limit: '800 minutes incluses · 0,25 $/min supplémentaire',
        features: [
          "Réception d'appels entrants (bilingue FR/EN)",
          "Qualification des prospects et prise de rendez-vous",
          "Routage des questions fréquentes (FAQ)",
        ],
      },
    ],
    compareRows: [
      { feature: "Réception d'appels bilingue", a: true, b: true, c: true },
      { feature: 'Qualification des prospects et prise de rendez-vous', a: true, b: true, c: true },
      { feature: 'Routage FAQ', a: true, b: true, c: true },
      { feature: 'Récupération no-shows', a: true, b: true, c: false },
      { feature: 'Réactivation clients dormants', a: true, b: true, c: false },
      { feature: "Génération d'avis Google", a: true, b: true, c: false },
      { feature: 'Automatisation multicanale', a: true, b: false, c: false },
      { feature: 'Vente incitative post-traitement', a: true, b: false, c: false },
      { feature: 'Rapports BI sur mesure', a: true, b: false, c: false },
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
        name: 'The Growth Machine',
        desc: 'For businesses that want to go further',
        setup: '$5,000',
        price: '$2,500',
        cta: 'Discuss this solution',
        limit: '3,500 minutes included · $0.18/min after',
        features: [
          "Everything in Core",
          "Multichannel automation (voice, SMS, email)",
          "Post-treatment upsell calls",
          "Complex custom routing",
          "Waitlist backfill on cancellation",
          "Custom BI reporting",
        ],
      },
      {
        name: 'The Revenue Protector',
        desc: 'Recover what is slipping through',
        setup: '$2,500',
        price: '$1,800',
        popular: true,
        cta: 'Start onboarding',
        limit: '1,500 minutes included · $0.22/min after',
        features: [
          "Everything in Base",
          "No-show appointment recovery",
          "Dormant client reactivation sequences",
          "Google review generation",
        ],
      },
      {
        name: 'The Receptionist',
        desc: 'To protect your team from inbound volume',
        setup: '$1,500',
        price: '$1,200',
        cta: 'See details',
        limit: '800 minutes included · $0.25/min after',
        features: [
          "Inbound call answering (bilingual FR/EN)",
          "Lead qualification and booking system",
          "FAQ routing",
        ],
      },
    ],
    compareRows: [
      { feature: 'Bilingual inbound calls', a: true, b: true, c: true },
      { feature: 'Lead qualification and booking system', a: true, b: true, c: true },
      { feature: 'FAQ routing', a: true, b: true, c: true },
      { feature: 'No-show recovery', a: true, b: true, c: false },
      { feature: 'Dormant client reactivation', a: true, b: true, c: false },
      { feature: 'Google review generation', a: true, b: true, c: false },
      { feature: 'Multichannel automation', a: true, b: false, c: false },
      { feature: 'Post-treatment upsell calls', a: true, b: false, c: false },
      { feature: 'Custom BI reporting', a: true, b: false, c: false },
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, position: 'relative' }} className="steps-grid">
          {/* Dashed connector */}
          <div className="steps-connector" style={{ position: 'absolute', top: 56, left: '16.7%', right: '16.7%', height: 1, borderTop: '1px dashed rgba(255,255,255,0.15)', zIndex: 0 }} />
          {t.steps.map((step, i) => (
            <div key={i} className="fu" data-delay={i * 100} style={{ padding: '0 32px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
              {/* Day tag */}
              <div style={{ display: 'inline-flex', marginBottom: 20 }}>
                <span style={{ border: '1px solid rgba(245,243,239,0.25)', borderRadius: 999, padding: '5px 14px', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--paper)' }}>{step.day}</span>
              </div>
              {/* Big decorative number */}
              <div className="step-deco-num" style={{ fontFamily: 'DM Serif Display', fontSize: 96, color: 'var(--paper)', opacity: 0.07, lineHeight: 1, position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', userSelect: 'none' }}>{i + 1}</div>
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
              <div style={{ fontSize: 11, color: 'var(--stone)', letterSpacing: '0.02em', marginBottom: 20 }}>{plan.limit}</div>
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
