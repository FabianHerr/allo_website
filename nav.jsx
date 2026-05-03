// nav.jsx — Sticky navigation with bilingual toggle + mobile overlay
const { useState, useEffect } = React;

const NAV_LINKS = {
  fr: [
    { label: 'Comment ça marche', href: '#comment' },
    { label: 'Calculateur', href: '#calculateur' },
    { label: 'Forfaits', href: '#forfaits' },
  ],
  en: [
    { label: 'How it works', href: '#comment' },
    { label: 'Calculator', href: '#calculateur' },
    { label: 'Packages', href: '#forfaits' },
  ],
};

const NAVTEXT = {
  fr: { cta: 'Réserver mon audit', lang: 'EN' },
  en: { cta: 'Book my audit', lang: 'FR' },
};

const Nav = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = NAVTEXT[lang];
  const links = NAV_LINKS[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleAnchorClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: 'var(--paper)',
    borderBottom: '1px solid var(--pale)',
    boxShadow: scrolled ? '0 2px 16px rgba(13,13,13,0.06)' : 'none',
    transition: 'box-shadow 0.3s',
  };
  const inner = {
    maxWidth: 1200, margin: '0 auto', padding: '0 40px',
    height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  };
  const linkStyle = {
    fontSize: 14, fontWeight: 400, color: 'var(--charcoal)',
    textDecoration: 'none', letterSpacing: '0.01em',
    transition: 'opacity 0.2s', cursor: 'pointer', background: 'none', border: 'none',
    fontFamily: 'DM Sans', padding: 0,
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={inner} className="nav-inner">
          {/* Logo */}
          <a href="/" style={{ textDecoration: 'none' }}>
            <WaveMarkLogo waveHeight={26} textSize={17} animate={true} />
          </a>

          {/* Center links — desktop */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="nav-links-desktop">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={linkStyle}
                onClick={link.href.startsWith('#') ? (e) => { e.preventDefault(); handleAnchorClick(link.href); } : undefined}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: 'var(--stone)', letterSpacing: '0.06em', fontFamily: 'DM Sans', minHeight: 44, minWidth: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {t.lang}
            </button>
            <a className="btn btn-primary nav-cta" href="#audit">{t.cta}</a>
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 10, minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' }}
              className="hamburger"
              aria-label="Menu"
            >
              {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)', borderRadius: 1 }} />)}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'var(--near-black)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? 'all' : 'none',
        transition: 'opacity 0.3s',
      }}>
        <button
          onClick={() => setMobileOpen(false)}
          style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--paper)', fontSize: 28, lineHeight: 1, fontFamily: 'DM Sans', minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >✕</button>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleAnchorClick(link.href); }}
              style={{ fontFamily: 'DM Serif Display', fontSize: 48, color: 'var(--paper)', textDecoration: 'none', cursor: 'pointer', opacity: 0.92, textAlign: 'center' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} style={{ background: 'none', border: '1px solid rgba(245,243,239,0.3)', borderRadius: 999, padding: '8px 20px', color: 'var(--stone)', fontSize: 13, cursor: 'pointer', fontFamily: 'DM Sans' }}>{t.lang}</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
          .nav-inner { padding: 0 20px !important; }
          .nav-cta { display: none !important; }
        }
        @media (min-width: 769px) {
          .nav-cta { min-height: 44px !important; }
        }
      `}</style>
    </>
  );
};

Object.assign(window, { Nav });
