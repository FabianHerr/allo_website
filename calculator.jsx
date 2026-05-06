// calculator.jsx — ROI Calculator section
const { useState, useEffect, useRef } = React;

const SLIDER_DEFS = {
  fr: {
    A: [
      { key: 'appts', label: 'Rendez-vous par jour', min: 2, max: 50, unit: '' },
      { key: 'noshow', label: 'Taux de no-show', min: 5, max: 50, unit: '%' },
      { key: 'value', label: "Valeur moy. d'un rendez-vous", min: 50, max: 1000, unit: '$', prefix: true },
      { key: 'days', label: 'Jours ouvrables par mois', min: 15, max: 26, unit: '' },
    ],
    B: [
      { key: 'calls', label: 'Appels entrants par jour', min: 5, max: 100, unit: '' },
      { key: 'missed', label: "Taux d'appels manqués", min: 10, max: 60, unit: '%' },
      { key: 'value', label: "Valeur moy. d'un appel converti", min: 50, max: 2000, unit: '$', prefix: true },
      { key: 'days', label: 'Jours ouvrables par mois', min: 15, max: 26, unit: '' },
    ],
  },
  en: {
    A: [
      { key: 'appts', label: 'Appointments per day', min: 2, max: 50, unit: '' },
      { key: 'noshow', label: 'No-show rate', min: 5, max: 50, unit: '%' },
      { key: 'value', label: 'Avg. appointment value', min: 50, max: 1000, unit: '$', prefix: true },
      { key: 'days', label: 'Working days per month', min: 15, max: 26, unit: '' },
    ],
    B: [
      { key: 'calls', label: 'Inbound calls per day', min: 5, max: 100, unit: '' },
      { key: 'missed', label: 'Missed call rate', min: 10, max: 60, unit: '%' },
      { key: 'value', label: 'Avg. value of a converted call', min: 50, max: 2000, unit: '$', prefix: true },
      { key: 'days', label: 'Working days per month', min: 15, max: 26, unit: '' },
    ],
  },
};

const CALC_COPY = {
  fr: {
    label: 'CALCULATEUR DE REVENUS PERDUS',
    h2: 'Calculez ce que vous perdez ce mois-ci.',
    sub: 'Ajustez les paramètres selon votre entreprise. Voyez le gain net pour chaque forfait en temps réel.',
    modeA: 'Je prends des rendez-vous',
    modeB: 'Je reçois des appels entrants',
    packages: ['Le Gardien', 'Le Protecteur', "L'Amplificateur"],
    rLost: 'PERDU / MOIS',
    rRecov: 'RÉCUPÉRABLE',
    rNet: 'GAIN NET / MOIS',
    rPayback: 'RETOUR INTÉGRATION',
    months: 'mois',
    stripBefore: 'Vous laissez ',
    stripAfter: ' sur la table ce mois-ci.',
    stripCta: 'Obtenir mon audit gratuit →',
    footnote: "Estimations basées sur les moyennes du secteur. Les résultats réels varient selon l'entreprise.",
  },
  en: {
    label: 'LOST REVENUE CALCULATOR',
    h2: "Calculate what you're losing this month.",
    sub: 'Adjust the parameters for your business. See the net gain for each plan in real time.',
    modeA: 'I take appointments',
    modeB: 'I get inbound calls',
    packages: ['The Guardian', 'The Protector', 'The Amplifier'],
    rLost: 'LOST / MONTH',
    rRecov: 'RECOVERABLE',
    rNet: 'NET GAIN / MONTH',
    rPayback: 'SETUP PAYBACK',
    months: 'mo',
    stripBefore: "You're leaving ",
    stripAfter: ' on the table this month.',
    stripCta: 'Get my free audit →',
    footnote: 'Estimates based on industry averages. Actual results vary by business.',
  },
};

const PRESETS = {
  A: { appts: 15, noshow: 20, value: 200, days: 22 },
  B: { calls: 25, missed: 30, value: 300, days: 22 },
};

// Recovery rates per mode [Gardien, Protecteur, Amplificateur]
const RECOVERY_RATES = {
  A: [0.28, 0.65, 0.84],
  B: [0.50, 0.68, 0.82],
};

const PKG_PRICES = [
  { monthly: 640,  setup: 0    },
  { monthly: 990,  setup: 800  },
  { monthly: 1690, setup: 1500 },
];

const CalculatorSection = ({ lang }) => {
  const t = CALC_COPY[lang];
  const [mode, setMode] = useState('A');
  const [vals, setVals] = useState(PRESETS.A);
  const [calcStarted, setCalcStarted] = useState(false);
  const sectionRef = useRef(null);

  useScrollReveal(lang);

  useEffect(() => {
    setVals(PRESETS[mode]);
  }, [mode]);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCalcStarted(true); }, { threshold: 0.3 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const sliders = SLIDER_DEFS[lang][mode];

  const lostPerMonth = mode === 'A'
    ? Math.round((vals.appts || 15) * ((vals.noshow || 20) / 100) * (vals.value || 200) * (vals.days || 22))
    : Math.round((vals.calls || 25) * ((vals.missed || 30) / 100) * (vals.value || 300) * (vals.days || 22));

  const rates = RECOVERY_RATES[mode];
  const pkgResults = PKG_PRICES.map((pkg, i) => {
    const recoverable = Math.round(lostPerMonth * rates[i]);
    const net = recoverable - pkg.monthly;
    const payback = pkg.setup === 0 ? null : (net <= 0 ? null : Math.ceil(pkg.setup / net));
    return { recoverable, net, payback };
  });

  const lostVal = useCountUp(lostPerMonth, 1400, calcStarted);

  const updateVal = (key, v) => setVals(prev => ({ ...prev, [key]: Number(v) }));

  return (
    <section id="calculateur" style={{ background: 'var(--paper)' }} ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="label fu">{t.label}</span>
          <h2 className="fu" data-delay="60" style={{ maxWidth: 560, margin: '0 auto 16px' }}>{t.h2}</h2>
          <p className="fu" data-delay="120" style={{ color: 'var(--charcoal)', maxWidth: 480, margin: '0 auto', fontSize: 16 }}>{t.sub}</p>
        </div>

        {/* Mode toggle */}
        <div className="fu" data-delay="140" style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48, flexWrap: 'wrap' }}>
          {['A', 'B'].map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              style={{
                padding: '9px 22px', borderRadius: 999, cursor: 'pointer',
                fontSize: 14, fontWeight: 500, fontFamily: 'DM Sans',
                background: mode === m ? 'var(--ink)' : 'transparent',
                color: mode === m ? 'var(--paper)' : 'var(--stone)',
                border: `1px solid ${mode === m ? 'var(--ink)' : 'var(--pale)'}`,
                transition: 'all 0.2s',
              }}
            >{m === 'A' ? t.modeA : t.modeB}</button>
          ))}
        </div>

        {/* Sliders 2×2 */}
        <div className="calc-grid fu" data-delay="200" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
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

        {/* Lost header */}
        <div className="fu" data-delay="220" style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 10 }}>{t.rLost}</div>
          <div style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(42px, 6vw, 64px)', color: 'var(--loss)', lineHeight: 1 }}>${lostVal.toLocaleString()}</div>
        </div>

        {/* Package results — 3 columns */}
        <div className="results-row fu" data-delay="240" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--pale)', borderRadius: 16, overflow: 'hidden', marginBottom: 20,
        }}>
          {t.packages.map((pkgName, i) => {
            const r = pkgResults[i];
            const netStr = r.net >= 0 ? `+$${r.net.toLocaleString()}` : `-$${Math.abs(r.net).toLocaleString()}`;
            const paybackStr = r.payback === null ? '—' : `${r.payback} ${t.months}`;
            return (
              <div key={i} style={{
                padding: '24px 20px',
                borderLeft: i > 0 ? '1px solid var(--pale)' : 'none',
                background: 'var(--paper)',
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 18, paddingBottom: 12, borderBottom: '1px solid var(--pale)' }}>{pkgName}</div>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 4 }}>{t.rRecov}</div>
                  <div style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(18px, 2.2vw, 26px)', color: 'var(--ink)', lineHeight: 1 }}>${r.recoverable.toLocaleString()}</div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 4 }}>{t.rNet}</div>
                  <div style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(18px, 2.2vw, 26px)', color: r.net >= 0 ? 'var(--ink)' : 'var(--loss)', lineHeight: 1 }}>{netStr}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 4 }}>{t.rPayback}</div>
                  <div style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(18px, 2.2vw, 26px)', color: 'var(--ink)', lineHeight: 1 }}>{paybackStr}</div>
                </div>
              </div>
            );
          })}
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

        <p style={{ fontSize: 11, color: 'var(--stone)' }}>{t.footnote}</p>
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
