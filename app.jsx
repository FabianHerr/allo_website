// app.jsx — Root App component with language state and Tweaks support
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "fr",
  "showTweaks": false
}/*EDITMODE-END*/;

const App = () => {
  const [lang, setLangState] = useState(TWEAK_DEFAULTS.lang);
  const [tweaksVisible, setTweaksVisible] = useState(false);

  const setLang = (l) => {
    setLangState(l);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { lang: l } }, '*');
  };

  // Tweaks protocol
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  // Global scroll reveal — re-runs on lang change so new elements animate in
  useScrollReveal(lang);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div style={{ paddingTop: 68 }}>
        <Nav lang={lang} setLang={setLang} />
        <HeroSection lang={lang} />
        <PainSection lang={lang} />
        <CalculatorSection lang={lang} />
        <HowItWorksSection lang={lang} />
        <PackagesSection lang={lang} />
        <BilingualSection lang={lang} />
        <CTASection lang={lang} />
        <FooterSection lang={lang} setLang={setLang} />
      </div>

      {/* Tweaks panel */}
      {tweaksVisible && (
        <div style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 9000,
          background: 'var(--paper)', border: '1px solid var(--pale)',
          borderRadius: 16, padding: '20px 24px', minWidth: 220,
          boxShadow: '0 4px 24px rgba(13,13,13,0.12)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 16 }}>Tweaks</div>

          {/* Language toggle */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: 'var(--stone)', marginBottom: 8 }}>Langue / Language</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['fr', 'en'].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  flex: 1, padding: '7px 0', borderRadius: 999, cursor: 'pointer',
                  fontSize: 13, fontWeight: 500, fontFamily: 'DM Sans',
                  background: lang === l ? 'var(--ink)' : 'transparent',
                  color: lang === l ? 'var(--paper)' : 'var(--charcoal)',
                  border: `1px solid ${lang === l ? 'var(--ink)' : 'var(--pale)'}`,
                  transition: 'all 0.2s',
                }}>{l.toUpperCase()}</button>
              ))}
            </div>
          </div>

          {/* Scroll to section */}
          <div>
            <div style={{ fontSize: 12, color: 'var(--stone)', marginBottom: 8 }}>Navigation rapide</div>
            {['#services', '#calculateur', '#comment', '#forfaits', '#audit'].map(id => (
              <button key={id} onClick={() => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} style={{
                display: 'block', width: '100%', textAlign: 'left', padding: '5px 0',
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 13, color: 'var(--charcoal)', fontFamily: 'DM Sans',
                transition: 'opacity 0.15s',
              }} onMouseEnter={e=>e.target.style.opacity=0.5} onMouseLeave={e=>e.target.style.opacity=1}>
                {id.replace('#', '')} →
              </button>
            ))}
          </div>
        </div>
      )}
    </LangContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
