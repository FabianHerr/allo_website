// bilingual.jsx — Bilingual section + CTA/Form + Footer
const { useState, useRef, useEffect } = React;

const BILI_COPY = {
  fr: {
    label: 'BILINGUE PAR NATURE',
    h2: 'Vos agents parlent les deux langues. Sans accent, sans hésitation.',
    sub: 'Deux agents distincts, élevés dans chaque langue. Pas une traduction. Une présence naturelle pour chaque client.',
    oqlfLabel: 'LOI 96 · CONFORMITÉ OQLF',
    oqlf: "Allô vous protège des plaintes à l'OQLF avec un service bilingue impeccable, français et anglais, 24h/24, 7j/7. Aucun client perdu à cause d'une barrière linguistique. Jamais.",
    listen: 'Essayez vous-même →',
    frLabel: 'FR', enLabel: 'EN',
    agentFR: 'Agent Allô — Studio Lumière',
    agentEN: 'Allô Agent — Studio Lumière',
    frConvo: [
      { from: 'agent', text: 'Bonjour, ici l\'agent Allô pour le Studio Lumière. J\'appelle pour confirmer votre rendez-vous de demain à 14h pour votre soin au laser.', time: '14:02' },
      { from: 'patient', text: 'Bonjour. En fait, je voulais le reporter si c\'est possible.', time: '14:02' },
      { from: 'agent', text: 'Bien sûr. Je vous propose le jeudi 24 à 10h30 ou le vendredi 25 à 15h00. Laquelle vous convient ?', time: '14:03' },
      { from: 'patient', text: 'Le vendredi, ce serait mieux pour moi.', time: '14:03' },
      { from: 'agent', text: 'Noté. Vous recevrez une confirmation par texto dans quelques instants. Bonne journée.', time: '14:03' },
    ],
    enConvo: [
      { from: 'agent', text: 'Good afternoon, this is the Allô agent for Studio Lumière. I\'m calling to confirm your appointment tomorrow at 2 PM for your laser treatment.', time: '2:02 PM' },
      { from: 'patient', text: 'Hi, I actually need to reschedule if that\'s possible.', time: '2:02 PM' },
      { from: 'agent', text: 'Of course. I have Thursday April 24th at 10:30 AM or Friday the 25th at 3:00 PM. Which works best?', time: '2:03 PM' },
      { from: 'patient', text: 'Friday works better for me.', time: '2:03 PM' },
      { from: 'agent', text: 'Perfect, all set. Text confirmation coming shortly. Have a great day.', time: '2:03 PM' },
    ],
  },
  en: {
    label: 'BILINGUAL BY NATURE',
    h2: 'Your agents speak both languages. Without accent, without hesitation.',
    sub: 'Two distinct agents, raised in each language. Not a translation. A natural presence for every client.',
    oqlfLabel: 'BILL 96 · OQLF COMPLIANCE',
    oqlf: 'Allô protects your business from OQLF complaints with guaranteed bilingual service, French and English, 24/7. Never lose a client to a language barrier.',
    listen: 'Try it yourself →',
    frLabel: 'FR', enLabel: 'EN',
    agentFR: 'Agent Allô — Studio Lumière',
    agentEN: 'Allô Agent — Studio Lumière',
    frConvo: [
      { from: 'agent', text: 'Bonjour, ici l\'agent Allô pour le Studio Lumière. J\'appelle pour confirmer votre rendez-vous de demain à 14h pour votre soin au laser.', time: '14:02' },
      { from: 'patient', text: 'Bonjour. En fait, je voulais le reporter si c\'est possible.', time: '14:02' },
      { from: 'agent', text: 'Bien sûr. Je vous propose le jeudi 24 à 10h30 ou le vendredi 25 à 15h00. Laquelle vous convient ?', time: '14:03' },
      { from: 'patient', text: 'Le vendredi, ce serait mieux pour moi.', time: '14:03' },
      { from: 'agent', text: 'Noté. Vous recevrez une confirmation par texto dans quelques instants. Bonne journée.', time: '14:03' },
    ],
    enConvo: [
      { from: 'agent', text: 'Good afternoon, this is the Allô agent for Studio Lumière. I\'m calling to confirm your appointment tomorrow at 2 PM for your laser treatment.', time: '2:02 PM' },
      { from: 'patient', text: 'Hi, I actually need to reschedule if that\'s possible.', time: '2:02 PM' },
      { from: 'agent', text: 'Of course. I have Thursday April 24th at 10:30 AM or Friday the 25th at 3:00 PM. Which works best?', time: '2:03 PM' },
      { from: 'patient', text: 'Friday works better for me.', time: '2:03 PM' },
      { from: 'agent', text: 'Perfect, all set. Text confirmation coming shortly. Have a great day.', time: '2:03 PM' },
    ],
  },
};

const CTA_COPY = {
  fr: {
    h2: 'On va regarder votre entreprise ensemble.',
    sub: '15 minutes. Pas de pitch, pas de pression — juste un regard honnête sur ce qui vous échappe.',
    fields: { name: 'Votre nom', clinic: 'Nom de votre entreprise', phone: 'Téléphone', software: 'Logiciel de réservation', time: 'Disponibilité préférée' },
    softwareOpts: ['Dentitek', 'Jane App', 'Mangomint', 'Mindbody', 'Jobber', 'Housecall Pro', 'Google Calendar', 'Autre'],
    timeOpts: ['Matin (9h–12h)', 'Midi (12h–14h)', 'Après-midi (14h–17h)'],
    submit: 'Réserver mon audit gratuit',
    trust1: 'Basé à Montréal · Québec · Canada',
    trust2: 'Vos informations restent confidentielles et ne sont jamais partagées.',
    thanks: 'Merci. On vous contacte dans les 24 heures.',
  },
  en: {
    h2: "We'll look at your business together.",
    sub: "15 minutes. No pitch, no pressure — just an honest look at what's slipping through the cracks.",
    fields: { name: 'Your name', clinic: 'Your business name', phone: 'Phone', software: 'Booking software', time: 'Preferred availability' },
    softwareOpts: ['Dentitek', 'Jane App', 'Mangomint', 'Mindbody', 'Jobber', 'Housecall Pro', 'Google Calendar', 'Other'],
    timeOpts: ['Morning (9AM–12PM)', 'Midday (12PM–2PM)', 'Afternoon (2PM–5PM)'],
    submit: 'Book my free audit',
    trust1: 'Based in Montreal · Quebec · Canada',
    trust2: 'Your information stays confidential and is never shared.',
    thanks: "Thank you. We'll reach out within 24 hours.",
  },
};

const FOOTER_COPY = {
  fr: {
    tagline: 'Automatisation pour les entreprises de service · Montréal',
    navLinks: ['Services', 'Comment ça marche', 'Calculateur'],
    verticals: ['Cliniques dentaires', 'Med Spas', 'Entreprises HVAC'],
    contact: ['Montréal, QC'],
    legal: ['Politique de confidentialité', "Conditions d'utilisation"],
    copyright: '© 2025 Allô · Montréal, QC',
  },
  en: {
    tagline: 'Automation for service businesses · Montreal',
    navLinks: ['Services', 'How it works', 'Calculator'],
    verticals: ['Dental Clinics', 'Med Spas', 'HVAC Companies'],
    contact: ['Montreal, QC'],
    legal: ['Privacy Policy', 'Terms of Use'],
    copyright: '© 2025 Allô · Montreal, QC',
  },
};

const Bubble = ({ msg }) => {
  const isAgent = msg.from === 'agent';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isAgent ? 'flex-start' : 'flex-end', gap: 4 }}>
      <div style={{
        maxWidth: '80%', padding: '10px 14px', borderRadius: isAgent ? '4px 14px 14px 14px' : '14px 4px 14px 14px',
        background: isAgent ? 'var(--paper)' : '#2A2A2A',
        fontSize: 13, lineHeight: 1.55,
        color: isAgent ? 'var(--charcoal)' : 'rgba(245,243,239,0.85)',
      }}>{msg.text}</div>
      <span style={{ fontSize: 10, color: 'var(--stone)' }}>{msg.time}</span>
    </div>
  );
};

const PhoneCard = ({ label, agentName, convo }) => (
  <div style={{ background: '#222222', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 20, overflow: 'hidden', flex: '1 1 300px' }}>
    {/* Header */}
    <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ background: 'rgba(245,243,239,0.12)', borderRadius: 999, padding: '3px 10px', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--paper)' }}>{label}</span>
      <span style={{ fontSize: 12, color: 'var(--stone)' }}>{agentName}</span>
    </div>
    {/* Messages */}
    <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {convo.map((msg, i) => <Bubble key={i} msg={msg} />)}
    </div>
  </div>
);

const BilingualSection = ({ lang }) => {
  const t = BILI_COPY[lang];
  useScrollReveal(lang);
  return (
    <section style={{ background: 'var(--near-black)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="label fu" style={{ color: 'var(--stone)' }}>{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ color: 'var(--paper)', maxWidth: 560, margin: '0 auto 12px' }}>{t.h2}</h2>
          <p className="fu" data-delay="100" style={{ color: 'rgba(245,243,239,0.55)', maxWidth: 480, margin: '0 auto 20px', fontSize: 16 }}>{t.sub}</p>
          <a className="fu" data-delay="140" href="#" style={{ fontSize: 14, color: 'var(--stone)', textDecoration: 'none', borderBottom: '1px solid rgba(154,154,154,0.35)', paddingBottom: 2, display: 'inline-block' }}>{t.listen}</a>
        </div>

        {/* Bill 96 / OQLF compliance callout */}
        <div className="fu" data-delay="170" style={{
          background: 'rgba(245,243,239,0.05)',
          border: '1px solid rgba(245,243,239,0.1)',
          borderLeft: '3px solid rgba(154,154,154,0.45)',
          borderRadius: '0 12px 12px 0',
          padding: '20px 28px',
          maxWidth: 680,
          margin: '0 auto 48px',
        }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>{t.oqlfLabel}</span>
          <p style={{ fontSize: 14, color: 'rgba(245,243,239,0.75)', lineHeight: 1.75, margin: 0 }}>{t.oqlf}</p>
        </div>

        <div className="fu phone-cards" data-delay="200" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <PhoneCard label={t.frLabel} agentName={t.agentFR} convo={t.frConvo} />
          <PhoneCard label={t.enLabel} agentName={t.agentEN} convo={t.enConvo} />
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .phone-cards { flex-direction: column !important; }
          .phone-cards > div { flex: 1 1 100% !important; }
        }
      `}</style>
    </section>
  );
};

const CAL_HEADING = {
  fr: { h2: 'Prendre un rendez-vous', sub: '30 minutes. Pas de pitch, pas de pression.' },
  en: { h2: 'Book a Call', sub: '30 minutes. No pitch, no pressure.' },
};

const CTASection = ({ lang }) => {
  const t = CAL_HEADING[lang];
  useScrollReveal(lang);

  useEffect(() => {
    if (typeof Cal === 'undefined') return;
    const el = document.getElementById('cal-booking');
    if (el) el.innerHTML = '';
    const calLink = lang === 'fr' ? 'fabianherrera/appel-decouverte-allo' : 'fabianherrera/discoverycall';
    Cal('inline', { elementOrSelector: '#cal-booking', calLink });
    Cal('ui', {
      theme: 'light',
      styles: { branding: { brandColor: '#0D0D0D' } },
      hideEventTypeDetails: false,
    });
  }, [lang]);

  return (
    <section id="audit" style={{ background: 'var(--paper)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="fu" style={{ maxWidth: 640, margin: '0 auto 12px' }}>{t.h2}</h2>
          <p className="fu" data-delay="60" style={{ color: 'var(--stone)', fontSize: 15, letterSpacing: '0.02em' }}>{t.sub}</p>
        </div>
        <div id="cal-booking" style={{ width: '100%', minHeight: 600 }} />
      </div>
    </section>
  );
};

const FooterSection = ({ lang, setLang }) => {
  const t = FOOTER_COPY[lang];
  const linkStyle = { fontSize: 14, color: 'var(--charcoal)', textDecoration: 'none', transition: 'opacity 0.2s', display: 'block', marginBottom: 10 };
  return (
    <footer style={{ background: 'var(--paper)', borderTop: '1px solid var(--pale)' }}>
      <div className="container" style={{ paddingTop: 72, paddingBottom: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }} className="footer-grid">
          {/* Col 1: logo + tagline */}
          <div>
            <div style={{ marginBottom: 14 }}>
              <WaveMarkLogo waveHeight={24} textSize={16} animate={true} />
            </div>
            <p style={{ fontSize: 14, color: 'var(--stone)', lineHeight: 1.6, maxWidth: 220 }}>{t.tagline}</p>
          </div>
          {/* Col 2: Nav */}
          <div>
            <span className="label" style={{ marginBottom: 18 }}>Navigation</span>
            {t.navLinks.map(l => <a key={l} href="#" style={linkStyle} onMouseEnter={e=>e.target.style.opacity=0.5} onMouseLeave={e=>e.target.style.opacity=1}>{l}</a>)}
          </div>
          {/* Col 3: Verticals */}
          <div>
            <span className="label" style={{ marginBottom: 18 }}>Secteurs</span>
            {t.verticals.map(v => <a key={v} href="#" style={linkStyle} onMouseEnter={e=>e.target.style.opacity=0.5} onMouseLeave={e=>e.target.style.opacity=1}>{v}</a>)}
          </div>
          {/* Col 4: Contact */}
          <div>
            <span className="label" style={{ marginBottom: 18 }}>Contact</span>
            {t.contact.map(c => <span key={c} style={{ ...linkStyle, color: 'var(--stone)' }}>{c}</span>)}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--pale)', padding: '20px 0 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 11, color: 'var(--stone)', letterSpacing: '0.04em' }}>{t.copyright}</span>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {t.legal.map(l => <a key={l} href="#" style={{ fontSize: 11, color: 'var(--stone)', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={e=>e.target.style.opacity=0.5} onMouseLeave={e=>e.target.style.opacity=1}>{l}</a>)}
            <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} style={{ background: 'none', border: '1px solid var(--pale)', borderRadius: 999, padding: '4px 12px', fontSize: 11, color: 'var(--stone)', cursor: 'pointer', fontFamily: 'DM Sans' }}>
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>

        {/* Bottom logo mark */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 24, opacity: 0.18 }}>
          <WaveMarkLogo waveHeight={20} textSize={13} />
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; } }`}</style>
    </footer>
  );
};

Object.assign(window, { BilingualSection, CTASection, FooterSection });
