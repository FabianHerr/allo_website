// shared.jsx — WaveMark, LangContext, hooks, color tokens
const { createContext, useContext, useState, useEffect, useRef } = React;

const LangContext = createContext();
const useLang = () => useContext(LangContext);

const C = {
  ink: '#0D0D0D', paper: '#FFFFFF', charcoal: '#3D3D3D',
  stone: '#9A9A9A', nearBlack: '#1A1A1A', pale: '#E8E6E0', loss: '#3D1A1A',
};

const LOGO_WAVES = 'uploads/allo_logo_transparent.png';
const LOGO_LETTERS = 'uploads/allo_logo_letters_transparent.png';

// AlloWaves — the two-wave symbol from the logo PNG (transparent background)
const AlloWaves = ({ height = 32, dark = false, style = {} }) => (
  <img
    src={LOGO_WAVES}
    alt=""
    style={{
      height,
      width: 'auto',
      display: 'block',
      flexShrink: 0,
      filter: dark ? 'invert(1) brightness(2)' : 'none',
      ...style,
    }}
  />
);

// WaveMarkLogo — wave symbol + "Allô" wordmark from the real logo PNGs
const WaveMarkLogo = ({ waveHeight = 28, textSize = 18, animate = false, dark = false, style = {} }) => {
  const [offsetY, setOffsetY] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const startAnim = () => {
    if (rafRef.current) return;
    startRef.current = null;
    const tick = (t) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = (t - startRef.current) / 1000;
      setOffsetY(Math.sin(elapsed * Math.PI * 2) * 2.5);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };
  const stopAnim = () => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    setOffsetY(0);
  };

  // letters image is 2000x1090; text fills ~55% of height — scale to match textSize
  const letterHeight = Math.round(textSize / 0.55);

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: animate ? 'pointer' : 'default', ...style }}
      onMouseEnter={animate ? startAnim : undefined}
      onMouseLeave={animate ? stopAnim : undefined}
    >
      <div style={{ transform: `translateY(${offsetY}px)`, transition: offsetY === 0 ? 'transform 0.4s ease' : 'none' }}>
        <AlloWaves height={waveHeight} dark={dark} />
      </div>
      <img
        src={LOGO_LETTERS}
        alt="Allô"
        style={{
          height: letterHeight,
          width: 'auto',
          display: 'block',
          filter: dark ? 'invert(1) brightness(2)' : 'none',
        }}
      />
    </div>
  );
};

// Dual-wave mark — closely mirrors the logo's organic rounded waves
const WaveMark = ({ size = 40, color = C.ink, hoverAnimate = false, playOnce = false, style = {} }) => {
  const [offset, setOffset] = useState(0);
  const [playing, setPlaying] = useState(playOnce);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const startAnim = () => {
    if (rafRef.current) return;
    startRef.current = null;
    const tick = (t) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = (t - startRef.current) / 1000;
      setOffset(Math.sin(elapsed * Math.PI * 2) * 3);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const stopAnim = () => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    setOffset(0);
  };

  useEffect(() => {
    if (playOnce) {
      startAnim();
      const t = setTimeout(() => stopAnim(), 1800);
      return () => { clearTimeout(t); stopAnim(); };
    }
  }, [playOnce]);

  const h = size * 0.7;
  return (
    <svg
      width={size} height={h} viewBox="0 0 60 42" fill="none"
      style={{ display: 'block', cursor: hoverAnimate ? 'pointer' : 'default', ...style }}
      onMouseEnter={hoverAnimate ? startAnim : undefined}
      onMouseLeave={hoverAnimate ? stopAnim : undefined}
    >
      <path
        d="M5 13 C11 4, 19 22, 30 13 C41 4, 49 22, 55 13"
        stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: `translateY(${offset * 0.7}px)`, transition: 'none' }}
      />
      <path
        d="M5 29 C11 20, 19 38, 30 29 C41 20, 49 38, 55 29"
        stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: `translateY(${-offset * 0.7}px)`, transition: 'none' }}
      />
    </svg>
  );
};

// Scroll reveal — attach to a container, marks .fu children as .vis on entry
const useScrollReveal = (dep) => {
  useEffect(() => {
    const els = document.querySelectorAll('.fu:not(.vis)');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay || '0');
          setTimeout(() => el.classList.add('vis'), delay);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [dep]);
};

// Count-up hook
const useCountUp = (target, duration = 1400, started = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started || !target) return;
    setValue(0);
    let startT = null;
    let raf;
    const tick = (t) => {
      if (!startT) startT = t;
      const p = Math.min((t - startT) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, started]);
  return value;
};

// Format currency
const fmt = (n) => '$' + n.toLocaleString('en-CA', { maximumFractionDigits: 0 });

// Section divider wave (decorative, very subtle)
const WaveDivider = ({ dark = false }) => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '0', lineHeight: 0 }}>
    <WaveMark size={28} color={dark ? 'rgba(245,243,239,0.15)' : 'rgba(13,13,13,0.12)'} />
  </div>
);

Object.assign(window, { LangContext, useLang, C, AlloWaves, WaveMark, WaveDivider, WaveMarkLogo, useScrollReveal, useCountUp, fmt });
