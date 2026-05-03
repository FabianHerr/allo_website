// hero.jsx — Hero section + Pain section
const { useState, useEffect, useRef } = React;

const HERO_COPY = {
  fr: {
    label: 'CLINIQUES DENTAIRES · MED SPAS · ENTREPRISES HVAC',
    h1: 'Chaque appel manqué, c\'est une conversation qui s\'est passée ailleurs.',
    body: 'Votre réceptionniste n\'est pas là pour décrocher, relancer et faire des suivis à la main. Allô installe des agents vocaux IA et des automatisations qui gèrent le volume, pour que votre équipe puisse se concentrer sur ce qui compte vraiment. Opérationnel en 7 jours.',
    cta1: 'Réserver mon audit gratuit',
    cta2: 'Voir une démonstration →',
    stats: ['24h/24 · 7j/7', 'Bilingue FR/EN', 'Opérationnel en 7 jours'],
    cardLabel: 'RÉSULTAT · MOIS 1',
    cardSub: 'récupérés',
    bStats: [
      'En moyenne, 20 % des rendez-vous prévus ne se présentent pas.',
      'Chaque appel après les heures part chez un compétiteur si vous répondez pas.',
      'Allô gère les appels, les suivis et le travail répétitif. Votre équipe peut se concentrer sur ce qu\'elle fait vraiment bien. Vos employés ont mieux à faire que décrocher le téléphone 80 fois par jour.',
    ],
  },
  en: {
    label: 'DENTAL CLINICS · MED SPAS · HVAC COMPANIES',
    h1: 'Every missed call is a conversation that happened somewhere else.',
    body: 'Your receptionist wasn\'t hired to answer every call and chase every follow-up manually. Allô sets up AI voice agents and automation that handle the volume, so your team can focus on what matters. Live in 7 days.',
    cta1: 'Book my free audit',
    cta2: 'See a demo →',
    stats: ['24/7 · 365', 'Bilingual FR/EN', 'Live in 7 days'],
    cardLabel: 'RESULT · MONTH 1',
    cardSub: 'recovered',
    bStats: [
      'On average, 20% of scheduled appointments don\'t show up.',
      'Every after-hours call goes to a competitor if you don\'t answer.',
      'Allô handles the calls, the follow-ups, and the repetitive work. Your team can focus on what they\'re actually good at. They have better things to do than answer the phone 80 times a day.',
    ],
  },
};

const PAIN_COPY = {
  fr: {
    label: 'CE QUI SE PASSE EN CE MOMENT',
    h2: 'Pendant que vous lisez ça, trois choses se passent dans votre entreprise.',
    cards: [
      { icon: 'phone-x', title: "L'appel d'urgence à 8h du soir, un mercredi de février", body: "La fournaise est brisée. La famille a froid. Ils ont appelé trois entreprises HVAC. Vous étiez le dernier à rappeler. La soumission a jamais été suivie. Le contrat est allé ailleurs. Pas parce que vous êtes moins bons. Parce que vous avez pas décroché." },
      { icon: 'calendar', title: "340 patients en retard pour leur rappel annuel", body: "Vous le savez. Votre équipe le sait. Personne n'a le temps d'appeler. La liste de rappels est là dans Dentitek, semaine après semaine. C'est pas juste des chiffres. Ce sont des plans de traitement non acceptés et des revenus qui s'en vont." },
      { icon: 'ghost', title: "Sa cure de trois séances n'est pas terminée", body: "Votre meilleure cliente a complété le premier soin de sa cure au laser. Elle était contente, prête à revenir. Personne n'a fait de suivi. C'était il y a six semaines. Elle a trouvé une autre place. Pas parce qu'elle voulait partir. Parce qu'elle s'est sentie oubliée." },
    ],
    bottom: 'Ces trois situations-là se passent dans votre entreprise, cette semaine.',
  },
  en: {
    label: 'WHAT IS HAPPENING RIGHT NOW',
    h2: 'While you read this, three things are happening in your business.',
    cards: [
      { icon: 'phone-x', title: "The 8 PM emergency call on a Wednesday in February", body: "The furnace is broken. The family is cold. They called three HVAC companies. You were the last to call back. Your estimate was never followed up. The job went somewhere else. Not because you're less capable, but because you didn't pick up." },
      { icon: 'calendar', title: "340 patients overdue for their annual recall", body: "You know. Your team knows. Nobody has time to call. The recall list sits in Dentitek, week after week. These aren't data points. These are unaccepted treatment plans and abandoned revenue." },
      { icon: 'ghost', title: "Her three-session series isn't finished", body: "Your best client completed the first treatment in her laser series. She was happy, ready to come back. Nobody followed up. That was six weeks ago. She found somewhere else. Not because she wanted to leave. Because she felt forgotten." },
    ],
    bottom: 'These three things are happening in your business, this week.',
  },
};

// Minimal line icons — 1.5px stroke, rounded linecaps
const Icon = ({ name, size = 24 }) => {
  const s = { stroke: 'var(--ink)', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const icons = {
    'phone-x': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M14.5 2.5c0 0 1 .5 2.5 2s2 2.5 2 2.5" {...s}/>
        <path d="M16.5 4.5L19 2l2.5 2.5-2.5 2.5" {...s}/>
        <path d="M3 5.5A18.5 18.5 0 0 0 18.5 21l1.5-3-3.5-1.5-1.5 1.5s-3-1-5-3-3-5-3-5l1.5-1.5L7 6 5.5 2.5 3 4l.5 1" {...s}/>
        <line x1="17" y1="7" x2="21" y2="3" {...s}/>
      </svg>
    ),
    'calendar': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="3" {...s}/>
        <line x1="3" y1="9" x2="21" y2="9" {...s}/>
        <line x1="8" y1="2" x2="8" y2="6" {...s}/>
        <line x1="16" y1="2" x2="16" y2="6" {...s}/>
        <rect x="8" y="13" width="4" height="4" rx="1" strokeDasharray="2 1.5" {...s} strokeWidth={1.2}/>
      </svg>
    ),
    'ghost': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity="0.55">
        <path d="M12 3C8 3 5 6 5 10v11l2-2 2 2 2-2 2 2 2-2 2 2V10c0-4-3-7-7-7z" {...s}/>
        <circle cx="9.5" cy="11" r="1" fill="var(--ink)" stroke="none"/>
        <circle cx="14.5" cy="11" r="1" fill="var(--ink)" stroke="none"/>
      </svg>
    ),
  };
  return icons[name] || null;
};

const HeroSection = ({ lang }) => {
  const t = HERO_COPY[lang];
  useScrollReveal(lang);

  return (
    <section id="services" style={{ background: 'var(--paper)', paddingTop: 140, paddingBottom: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '58fr 42fr', gap: 80, alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div>
            <span className="label fu" data-delay="0">{t.label}</span>
            <h1 className="fu" data-delay="80" style={{ marginBottom: 24, maxWidth: 560 }}>{t.h1}</h1>
            <p className="fu" data-delay="160" style={{ color: 'var(--charcoal)', marginBottom: 36, maxWidth: 480, fontSize: 17 }}>{t.body}</p>
            <div className="fu" data-delay="240" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
              <a className="btn btn-primary" href="#audit">{t.cta1}</a>
              <a className="btn btn-ghost" href="#demo">{t.cta2}</a>
            </div>
            {/* Micro stats */}
            <div className="fu stats-row" data-delay="320" style={{ display: 'flex', gap: 0, alignItems: 'center' }}>
              {t.stats.map((s, i) => (
                <React.Fragment key={s}>
                  {i > 0 && <div className="stat-separator" style={{ width: 1, height: 32, background: 'var(--pale)', margin: '0 20px' }} />}
                  <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--charcoal)', letterSpacing: '0.01em' }}>{s}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right — just the logo symbol, large */}
          <div className="fu" data-delay="100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: 320 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <AlloWaves height={130} style={{ opacity: 0.88 }} />
            </div>
            {/* Floating result card */}
            <div className="hero-float-card" style={{
              position: 'absolute', bottom: 20, right: -10,
              background: 'var(--near-black)', borderRadius: 16,
              padding: '20px 24px', minWidth: 170,
              transform: 'rotate(-3deg)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>{t.cardLabel}</span>
              <div style={{ fontFamily: 'DM Serif Display', fontSize: 38, color: 'var(--paper)', lineHeight: 1 }}>$6,336</div>
              <div style={{ fontSize: 13, color: 'var(--stone)', marginTop: 6 }}>{t.cardSub}</div>
            </div>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div style={{ borderTop: '1px solid var(--pale)', marginTop: 80, paddingTop: 36, paddingBottom: 36 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }} className="bottom-stats">
            {t.bStats.map((s, i) => (
              <div key={i} className="fu" data-delay={i * 60} style={{ paddingLeft: i > 0 ? 40 : 0, borderLeft: i > 0 ? '1px solid var(--pale)' : 'none' }}>
                <p style={{ fontSize: 15, color: 'var(--charcoal)', fontWeight: 400, lineHeight: 1.5 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-grid > div:last-child { min-height: 200px !important; }
          .bottom-stats { grid-template-columns: 1fr !important; gap: 20px !important; }
          .bottom-stats > div { padding-left: 0 !important; border-left: none !important; border-top: 1px solid var(--pale); padding-top: 20px; }
          .bottom-stats > div:first-child { border-top: none; padding-top: 0; }
        }
        @media (max-width: 768px) {
          #services { padding-top: 100px !important; min-height: 100svh !important; }
          .hero-float-card { right: 0 !important; }
          .stats-row { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .stat-separator { display: none !important; }
        }
      `}</style>
    </section>
  );
};

const PainSection = ({ lang }) => {
  const t = PAIN_COPY[lang];
  useScrollReveal(lang);

  return (
    <section style={{ background: 'var(--near-black)' }}>
      <div className="container">
        <div className="pain-heading-group" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="label fu" style={{ color: 'var(--stone)' }}>{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ color: 'var(--paper)', maxWidth: 600, margin: '0 auto' }}>{t.h2}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="pain-cards">
          {t.cards.map((card, i) => (
            <div key={i} className="fu" data-delay={i * 80} style={{
              background: 'var(--paper)', borderRadius: 16,
              padding: '32px 28px',
              border: '1px solid var(--pale)',
            }}>
              <div style={{ marginBottom: 20 }}><Icon name={card.icon} size={26} /></div>
              <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 12, lineHeight: 1.3 }}>{card.title}</h3>
              <p style={{ fontSize: 15, color: 'var(--charcoal)', lineHeight: 1.7 }}>{card.body}</p>
            </div>
          ))}
        </div>
        <div className="fu" data-delay="240" style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(22px, 2.5vw, 32px)', color: 'var(--paper)' }}>{t.bottom}</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .pain-cards { grid-template-columns: 1fr !important; }
          .pain-heading-group { margin-bottom: 36px !important; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { HeroSection, PainSection, Icon });
