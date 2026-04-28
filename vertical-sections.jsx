// vertical-sections.jsx — Shared section shells for vertical landing pages
const { useState } = React;

const VerticalHeroSection = ({ lang, data }) => {
  const t = data[lang];
  return (
    <section id="services" style={{ background: 'var(--paper)', paddingTop: 140, paddingBottom: 0, minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        <span className="label fu">{t.label}</span>
        <h1 className="fu" data-delay="80" style={{ marginBottom: 24, maxWidth: 760 }}>{t.h1}</h1>
        <p className="fu" data-delay="160" style={{ color: 'var(--charcoal)', marginBottom: 36, maxWidth: 560, fontSize: 17 }}>{t.body}</p>
        <div className="fu" data-delay="240" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
          <a className="btn btn-primary" href="#audit">{t.cta1}</a>
          <a className="btn btn-ghost" href="/">{t.cta2}</a>
        </div>
        <div style={{ borderTop: '1px solid var(--pale)', paddingTop: 36, paddingBottom: 36 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }} className="v-hero-stats">
            {t.stats.map((s, i) => (
              <div key={i} className="fu" data-delay={i * 60} style={{ paddingLeft: i > 0 ? 40 : 0, borderLeft: i > 0 ? '1px solid var(--pale)' : 'none' }}>
                <p style={{ fontSize: 15, color: 'var(--charcoal)', fontWeight: 400, lineHeight: 1.55 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .v-hero-stats { grid-template-columns: 1fr !important; gap: 20px !important; }
          .v-hero-stats > div { padding-left: 0 !important; border-left: none !important; border-top: 1px solid var(--pale); padding-top: 20px; }
          .v-hero-stats > div:first-child { border-top: none; padding-top: 0; }
        }
      `}</style>
    </section>
  );
};

const DayInLifeSection = ({ lang, data }) => {
  const t = data[lang];
  return (
    <section style={{ background: 'var(--near-black)' }}>
      <div className="container">
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <span className="label fu" style={{ color: 'var(--stone)' }}>{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ color: 'var(--paper)', marginBottom: 36 }}>{t.h2}</h2>
          <p className="fu" data-delay="120" style={{ color: 'rgba(245,243,239,0.72)', fontSize: 17, lineHeight: 1.9 }}>{t.narrative}</p>
        </div>
      </div>
    </section>
  );
};

const CostSection = ({ lang, data }) => {
  const t = data[lang];
  return (
    <section style={{ background: 'var(--paper)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="label fu">{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ maxWidth: 600, margin: '0 auto' }}>{t.h2}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="cost-cards">
          {t.cards.map((card, i) => (
            <div key={i} className="fu" data-delay={i * 80} style={{
              border: '1px solid var(--pale)', borderRadius: 16, padding: '32px 28px',
            }}>
              <div style={{ fontFamily: 'DM Serif Display', fontSize: 38, color: 'var(--loss)', lineHeight: 1, marginBottom: 20 }}>{card.cost}</div>
              <h3 style={{ fontSize: 17, fontWeight: 500, marginBottom: 12, lineHeight: 1.35 }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--charcoal)', lineHeight: 1.72, marginBottom: 16 }}>{card.what}</p>
              <p style={{ fontSize: 13, color: 'var(--stone)', lineHeight: 1.65, fontStyle: 'italic' }}>{card.keeps}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .cost-cards { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

const AutomationsSection = ({ lang, data }) => {
  const t = data[lang];
  return (
    <section style={{ background: 'var(--near-black)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="label fu" style={{ color: 'var(--stone)' }}>{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ color: 'var(--paper)', maxWidth: 560, margin: '0 auto' }}>{t.h2}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }} className="auto-grid">
          {t.items.map((item, i) => (
            <div key={i} className="fu" data-delay={i * 50} style={{
              background: 'rgba(245,243,239,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14, padding: '24px 24px',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 10 }}>{item.name}</div>
              <p style={{ fontSize: 14, color: 'rgba(245,243,239,0.68)', lineHeight: 1.72 }}>{item.outcome}</p>
            </div>
          ))}
        </div>
        <div className="fu" data-delay="460" style={{ textAlign: 'center' }}>
          <a href="#audit" className="btn btn-paper">{t.cta}</a>
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .auto-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

const SoftwareSection = ({ lang, data }) => {
  const t = data[lang];
  return (
    <section style={{ background: 'var(--paper)', paddingTop: 72, paddingBottom: 72 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="label fu">{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ maxWidth: 560, margin: '0 auto 16px' }}>{t.h2}</h2>
          <p className="fu" data-delay="120" style={{ color: 'var(--charcoal)', maxWidth: 520, margin: '0 auto', fontSize: 15 }}>{t.note}</p>
        </div>
        <div className="fu" data-delay="160" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 40, alignItems: 'center', marginBottom: t.caveat ? 36 : 0 }}>
          {t.sw.map(s => (
            <span key={s} style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)', opacity: 0.3, letterSpacing: '0.03em' }}>{s}</span>
          ))}
        </div>
        {t.caveat && (
          <div className="fu" data-delay="220" style={{ maxWidth: 580, margin: '0 auto', background: 'var(--pale)', borderRadius: 12, padding: '18px 24px' }}>
            <p style={{ fontSize: 13, color: 'var(--charcoal)', lineHeight: 1.7 }}>{t.caveat}</p>
          </div>
        )}
      </div>
    </section>
  );
};

const CaseStudySection = ({ lang, data }) => {
  const t = data[lang];
  return (
    <section style={{ background: 'var(--near-black)' }}>
      <div className="container">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <span className="label fu" style={{ color: 'var(--stone)' }}>{t.label}</span>
          <div className="fu" data-delay="60" style={{
            marginTop: 32, background: 'rgba(245,243,239,0.04)',
            border: '1px solid rgba(255,255,255,0.08)', borderLeft: '3px solid rgba(154,154,154,0.45)',
            borderRadius: '0 16px 16px 0', padding: '40px 44px',
          }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 28 }}>{t.badge}</div>
            <div style={{ display: 'flex', gap: 48, marginBottom: 32, flexWrap: 'wrap' }} className="v-case-metrics">
              {t.metrics.map((m, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'DM Serif Display', fontSize: 38, color: 'var(--paper)', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: 'var(--stone)', marginTop: 6 }}>{m.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 16, color: 'rgba(245,243,239,0.78)', lineHeight: 1.82, marginBottom: 28 }}>{t.story}</p>
            <p style={{ fontSize: 15, fontFamily: 'DM Serif Display', color: 'rgba(245,243,239,0.9)', fontStyle: 'italic', lineHeight: 1.5 }}>{t.quote}</p>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 480px) { .v-case-metrics { gap: 24px !important; } }`}</style>
    </section>
  );
};

// VerticalApp — assembles a full vertical landing page from a data object
const VerticalApp = ({ data }) => {
  const [lang, setLang] = useState('fr');
  useScrollReveal(lang);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div style={{ paddingTop: 68 }}>
        <Nav lang={lang} setLang={setLang} />
        <VerticalHeroSection lang={lang} data={data.hero} />
        <DayInLifeSection lang={lang} data={data.dayInLife} />
        <CostSection lang={lang} data={data.cost} />
        <AutomationsSection lang={lang} data={data.automations} />
        <SoftwareSection lang={lang} data={data.software} />
        <CaseStudySection lang={lang} data={data.caseStudy} />
        <CTASection lang={lang} ctaData={data.cta} />
        <FooterSection lang={lang} setLang={setLang} />
      </div>
    </LangContext.Provider>
  );
};

Object.assign(window, { VerticalHeroSection, DayInLifeSection, CostSection, AutomationsSection, SoftwareSection, CaseStudySection, VerticalApp });
