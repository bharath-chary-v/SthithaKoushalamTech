import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const STATS = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '10+', label: 'Expert Engineers' },
  { number: '3+', label: 'Years of Excellence' },
];

export default function Banner() {
  return (
    <section id="banner" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', background: '#070711' }}>

      {/* Aurora blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(141,68,139,0.4) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 65%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '20%', width: 400, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 65%)', filter: 'blur(70px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '30%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      </div>

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1100, margin: '0 auto', padding: '140px 24px 80px', width: '100%', textAlign: 'center' }}>

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 100, border: '1px solid rgba(192,132,252,0.3)', background: 'rgba(141,68,139,0.12)', marginBottom: 32 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C084FC', display: 'inline-block', boxShadow: '0 0 8px #C084FC' }} />
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C084FC' }}>
            India's Next-Gen Tech Startup
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: 'clamp(44px, 8vw, 88px)', fontWeight: 900, lineHeight: 1.03, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px' }}>
          We Build the<br />
          <span style={{ background: 'linear-gradient(135deg, #C084FC 0%, #818CF8 45%, #38BDF8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Future of India
          </span>
        </h1>

        {/* Sub */}
        <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto 40px' }}>
          A startup on a mission to pioneer global expansion while illuminating India's potential — through world-class digital products and relentless engineering.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72 }}>
          <ScrollLink to="services" smooth offset={-80} duration={500} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 100, fontWeight: 700, fontSize: 15, color: '#fff', background: 'linear-gradient(135deg, #8D448B 0%, #6366f1 100%)', boxShadow: '0 0 40px rgba(141,68,139,0.35)', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 50px rgba(141,68,139,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(141,68,139,0.35)'; }}>
            Explore Our Services
            <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </ScrollLink>
          <ScrollLink to="contact" smooth offset={-80} duration={500} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 100, fontWeight: 600, fontSize: 15, color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
            Talk to Us
          </ScrollLink>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, maxWidth: 720, margin: '0 auto', borderRadius: 20, overflow: 'hidden', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }} className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: '24px 12px', textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 900, background: 'linear-gradient(135deg, #C084FC, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 6 }}>{s.number}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.35 }}>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)' }} />
        <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.8)" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
