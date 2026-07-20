import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Reveal from 'components/reveal';
import OrbitGlobe from 'components/illustrations/orbit-globe';

const STATS = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '10+', label: 'Expert Engineers' },
  { number: '3+', label: 'Years of Excellence' },
];

export default function Banner() {
  return (
    <section id="banner" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', background: 'var(--ink)' }}>

      {/* Aurora blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.28) 0%, transparent 65%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '20%', width: 400, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.16) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      </div>

      {/* Orbit illustration, right side on desktop */}
      <div className="hero-orbit" style={{ position: 'absolute', top: '50%', right: '-6%', transform: 'translateY(-50%)', opacity: 0.9, pointerEvents: 'none' }}>
        <OrbitGlobe size={560} />
      </div>

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1100, margin: '0 auto', padding: '140px 24px 80px', width: '100%', textAlign: 'center' }}>

        {/* Badge */}
        <Reveal>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 100, border: '1px solid rgba(56,189,248,0.3)', background: 'rgba(37,99,235,0.14)', marginBottom: 32 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#38BDF8', display: 'inline-block', boxShadow: '0 0 8px #38BDF8' }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7dd3fc' }}>
              India's Next-Gen Tech Startup
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.08}>
          <h1 style={{ fontSize: 'clamp(44px, 8vw, 88px)', fontWeight: 900, lineHeight: 1.03, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px' }}>
            We Build the<br />
            <span style={{ backgroundImage: 'linear-gradient(135deg, #38BDF8 0%, #2563EB 50%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Future of India
            </span>
          </h1>
        </Reveal>

        {/* Sub */}
        <Reveal delay={0.16}>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto 40px' }}>
            A startup on a mission to pioneer global expansion while illuminating India's potential — through world-class digital products and relentless engineering.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.24}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72 }}>
            <ScrollLink to="services" smooth offset={-80} duration={500} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 100, fontWeight: 700, fontSize: 15, color: '#fff', background: 'var(--gradient-brand)', boxShadow: '0 0 40px rgba(37,99,235,0.4)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 50px rgba(37,99,235,0.55)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(37,99,235,0.4)'; }}>
              Explore Our Services
              <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </ScrollLink>
            <ScrollLink to="contact" smooth offset={-80} duration={500} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 100, fontWeight: 600, fontSize: 15, color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
              Talk to Us
            </ScrollLink>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.32}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, maxWidth: 720, margin: '0 auto', borderRadius: 20, overflow: 'hidden', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }} className="stats-grid">
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: '24px 12px', textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 900, backgroundImage: 'linear-gradient(135deg, #38BDF8, #2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 6 }}>{s.number}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
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
        @media (max-width: 1100px) {
          .hero-orbit { display: none; }
        }
      `}</style>
    </section>
  );
}
