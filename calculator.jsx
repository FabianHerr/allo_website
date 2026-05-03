// calculator.jsx — ROI Calculator section
const { useState, useEffect, useRef } = React;

const SLIDER_DEFS = {
  fr: {
    default: [
      { key: 'appts', label: 'Rendez-vous par jour', min: 5, max: 60, unit: '' },
      { key: 'noshow', label: 'Taux de no-show', min: 5, max: 40, unit: '%' },
      { key: 'value', label: 'Valeur moy. du rendez-vous', min: 80, max: 700, unit: '$', prefix: true },
      { key: 'days', label: 'Jours ouvrables par mois', min: 15, max: 26, unit: '' },
    ],
    hvac: [
      { key: 'appts', label: 'Appels prospects par jour', min: 2, max: 20, unit: '' },
      { key: 'conv', label: 'Taux de conversion des appels', min: 10, max: 70, unit: '%' },
      { key: 'value', label: "Valeur moy. d'un contrat", min: 200, max: 5000, unit: '$', prefix: true },
      { key: 'days', label: 'Jours ouvrables par mois', min: 15, max: 26, unit: '' },
    ],
    other: [
      { key: 'appts', label: 'Demandes par jour', min: 2, max: 25, unit: '' },
      { key: 'noshow', label: 'Prospects sans suivi', min: 15, max: 70, unit: '%' },
      { key: 'value', label: 'Valeur moy. d\'un projet', min: 200, max: 5000, unit: '$', prefix: true },
      { key: 'days', label: 'Jours ouvrables par mois', min: 15, max: 26, unit: '' },
    ],
  },
  en: {
    default: [
      { key: 'appts', label: 'Appointments per day', min: 5, max: 60, unit: '' },
      { key: 'noshow', label: 'No-show rate', min: 5, max: 40, unit: '%' },
      { key: 'value', label: 'Avg. appointment value', min: 80, max: 700, unit: '$', prefix: true },
      { key: 'days', label: 'Working days per month', min: 15, max: 26, unit: '' },
    ],
    hvac: [
      { key: 'appts', label: 'Prospect calls per day', min: 2, max: 20, unit: '' },
      { key: 'conv', label: 'Call conversion rate', min: 10, max: 70, unit: '%' },
      { key: 'value', label: 'Avg. contract value', min: 200, max: 5000, unit: '$', prefix: true },
      { key: 'days', label: 'Working days per month', min: 15, max: 26, unit: '' },
    ],
    other: [
      { key: 'appts', label: 'Inquiries per day', min: 2, max: 25, unit: '' },
      { key: 'noshow', label: 'Leads without follow-up', min: 15, max: 70, unit: '%' },
      { key: 'value', label: 'Avg. project value', min: 200, max: 5000, unit: '$', prefix: true },
      { key: 'days', label: 'Working days per month', min: 15, max: 26, unit: '' },
    ],
  },
};

const CALC_COPY = {
  fr: {
    label: 'CALCULATEUR DE REVENUS PERDUS',
    h2: 'Calculez ce que vous perdez ce mois-ci.',
    sub: 'Ajustez les paramètres selon votre entreprise. Le résultat se met à jour en temps réel.',
    verticals: ['Dentaire', 'Med Spa', 'HVAC', 'Autres entreprises'],
    rLost: 'PERDU / MOIS',
    rRecov: 'RÉCUPÉRABLE AVEC ALLÔ',
    rRoi: 'ROI DE VOTRE FORFAIT',
    stripBefore: 'Vous laissez ',
    stripAfter: ' sur la table ce mois-ci.',
    stripCta: 'Obtenir mon audit gratuit →',
    footnote: "Estimations basées sur les moyennes du secteur. Les résultats réels varient selon l'entreprise.",
    seeMore: "Voir l'audit complet →",
  },
  en: {
    label: 'LOST REVENUE CALCULATOR',
    h2: "Calculate what you're losing this month.",
    sub: 'Adjust the parameters for your business. Results update in real time.',
    verticals: ['Dental', 'Med Spa', 'HVAC', 'Other businesses'],
    rLost: 'LOST / MONTH',
    rRecov: 'RECOVERABLE WITH ALLÔ',
    rRoi: 'YOUR PLAN ROI',
    stripBefore: "You're leaving ",
    stripAfter: ' on the table this month.',
    stripCta: 'Get my free audit →',
    footnote: 'Estimates based on industry averages. Actual results vary by business.',
    seeMore: 'See full audit →',
  },
};

const PRESETS = {
  0: { appts: 18, noshow: 20, value: 200,  days: 22 }, // Dental
  1: { appts: 10, noshow: 28, value: 350,  days: 22 }, // Med Spa
  2: { appts: 6,  conv: 40,   value: 800,  days: 22 }, // HVAC
  3: { appts: 5,  noshow: 35, value: 1200, days: 22 }, // Other
};

const CalculatorSection = ({ lang }) => {
  const t = CALC_COPY[lang];
  const [vertical, setVertical] = useState(0);
  const [vals, setVals] = useState(PRESETS[0]);
  const [calcStarted, setCalcStarted] = useState(false);
  const sectionRef = useRef(null);

  useScrollReveal(lang);

  useEffect(() => {
    setVals(PRESETS[vertical]);
  }, [vertical]);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCalcStarted(true); }, { threshold: 0.3 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const sliderKey = vertical === 2 ? 'hvac' : vertical === 3 ? 'other' : 'default';
  const sliders = SLIDER_DEFS[lang][sliderKey];

  // HVAC: lost = calls × (1 - conv%) × value × days
  // All others: lost = appts × noshow% × value × days
  const lostPerMonth = vertical === 2
    ? Math.round(vals.appts * (1 - (vals.conv || 40) / 100) * vals.value * vals.days)
    : Math.round(vals.appts * ((vals.noshow || 20) / 100) * vals.value * vals.days);

  const recoverable = Math.round(lostPerMonth * 0.72);
  const planPrice = 997;
  const roi = Math.round((recoverable / planPrice) * 100);

  const lostVal = useCountUp(lostPerMonth, 1400, calcStarted);
  const recovVal = useCountUp(recoverable, 1400, calcStarted);
  const roiVal = useCountUp(roi, 1400, calcStarted);

  const updateVal = (key, v) => setVals(prev => ({ ...prev, [key]: Number(v) }));

  return (
    <section id="calculateur" style={{ background: 'var(--paper)' }} ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="label fu">{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ maxWidth: 560, margin: '0 auto 16px' }}>{t.h2}</h2>
          <p className="fu" data-delay="120" style={{ color: 'var(--charcoal)', maxWidth: 480, margin: '0 auto', fontSize: 16 }}>{t.sub}</p>
        </div>

        {/* Vertical presets */}
        <div className="fu" data-delay="160" style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48, flexWrap: 'wrap' }}>
          {t.verticals.map((v, i) => (
            <button
              key={i}
              onClick={() => setVertical(i)}
              style={{
                padding: '9px 22px', borderRadius: 999, cursor: 'pointer',
                fontSize: 14, fontWeight: 500, fontFamily: 'DM Sans',
                background: vertical === i ? 'var(--ink)' : 'transparent',
                color: vertical === i ? 'var(--paper)' : 'var(--stone)',
                border: `1px solid ${vertical === i ? 'var(--ink)' : 'var(--pale)'}`,
                transition: 'all 0.2s',
              }}
            >{v}</button>
          ))}
        </div>

        {/* Sliders 2x2 */}
        <div className="calc-grid fu" data-delay="200" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
          {sliders.map((sl) => {
            const v = vals[sl.key] ?? sl.min;
            const displayVal = sl.prefix ? `$${v.toLocaleString()}` : `${v}${sl.unit}`;
            return (
              <div key={sl.key} style={{
                background: 'var(--paper)', border: '1px solid var(--pale)',
                borderRadius: 16, padding: '24px 24px 20px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)' }}>{sl.label}</span>
                  <span style={{ fontFamily: 'DM Serif Display', fontSize: 28, color: 'var(--ink)', lineHeight: 1 }}>{displayVal}</span>
                </div>
                <input
                  type="range" min={sl.min} max={sl.max} value={v}
                  onChange={e => updateVal(sl.key, e.target.value)}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                  <span style={{ fontSize: 10, color: 'var(--stone)' }}>{sl.prefix ? `$${sl.min.toLocaleString()}` : `${sl.min}${sl.unit}`}</span>
                  <span style={{ fontSize: 10, color: 'var(--stone)' }}>{sl.prefix ? `$${sl.max.toLocaleString()}` : `${sl.max}${sl.unit}`}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results row */}
        <div className="results-row fu" data-delay="240" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--pale)', borderRadius: 16, overflow: 'hidden', marginBottom: 20,
        }}>
          {[
            { label: t.rLost, value: `$${lostVal.toLocaleString()}`, accent: true },
            { label: t.rRecov, value: `$${recovVal.toLocaleString()}` },
            { label: t.rRoi, value: `${roiVal}%` },
          ].map((r, i) => (
            <div key={i} style={{
              padding: '28px 24px',
              borderLeft: i > 0 ? '1px solid var(--pale)' : 'none',
              background: 'var(--paper)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 12 }}>{r.label}</div>
              <div style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(28px, 3vw, 42px)', color: r.accent ? 'var(--loss)' : 'var(--ink)', lineHeight: 1 }}>{r.value}</div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="fu calc-cta-strip" data-delay="280" style={{
          background: 'var(--near-black)', borderRadius: 16,
          padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 20, flexWrap: 'wrap', marginBottom: 20,
        }}>
          <p style={{ color: 'var(--paper)', fontSize: 16, fontWeight: 400, flex: 1, minWidth: 0 }}>
            {t.stripBefore}
            <strong style={{ fontFamily: 'DM Serif Display', fontSize: 20 }}>${lostPerMonth.toLocaleString()}</strong>
            {t.stripAfter}
          </p>
          <a href="#audit" className="btn btn-paper" style={{ flexShrink: 0 }}>{t.stripCta}</a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 11, color: 'var(--stone)' }}>{t.footnote}</p>
          <a href="#" style={{ fontSize: 13, color: 'var(--charcoal)', textDecoration: 'underline', textDecorationColor: 'var(--pale)' }}>{t.seeMore}</a>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .calc-grid { grid-template-columns: 1fr !important; }
          .results-row { grid-template-columns: 1fr !important; }
          .results-row > div { border-left: none !important; border-top: 1px solid var(--pale); }
          .results-row > div:first-child { border-top: none; }
          .calc-cta-strip { padding: 20px !important; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { CalculatorSection });
