import React from 'react';
import Reveal from 'components/reveal';

const TESTIMONIALS = [
  {
    initials: 'PH',
    name: 'Pierre Hackett',
    role: 'VP of Engineering',
    company: 'TechCorp',
    quote: 'They delivered a full-stack platform in record time. 100% satisfaction, clean code, and they actually cared about our product vision. Would hire them again without hesitation.',
    gradient: 'linear-gradient(135deg, #2563eb, #38bdf8)',
    stars: 5,
  },
  {
    initials: 'NS',
    name: 'Natalia Sanz',
    role: 'Head of Technology',
    company: 'InnovateLabs',
    quote: 'Exceptional technical depth and impeccable communication throughout. They anticipated problems before they became issues and always delivered ahead of schedule.',
    gradient: 'linear-gradient(135deg, #06b6d4, #2563eb)',
    stars: 5,
  },
  {
    initials: 'EA',
    name: 'Ece Akman',
    role: 'Senior Product Manager',
    company: 'ScaleUp',
    quote: 'A refreshingly honest team. They didn\'t just build what we asked — they challenged assumptions and helped us build a better product. True partners, not just vendors.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={16} height={16} viewBox="0 0 20 20" fill="#FBBF24"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '96px 0', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle bg accent */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(37,99,235,0.07), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 64px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(37,99,235,0.25)', background: 'rgba(37,99,235,0.06)', marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb' }}>Client Stories</span>
            </div>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 16px' }}>
              Why clients{' '}
              <span style={{ backgroundImage: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>love us</span>
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7 }}>
              Real words from real clients who experienced the SthithaKoushalam difference.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div
                style={{ background: '#fff', borderRadius: 24, padding: '32px 32px 28px', border: '1.5px solid #f1f5f9', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', transition: 'all 0.3s', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 48px rgba(37,99,235,0.14)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Giant quote mark */}
                <div style={{ position: 'absolute', top: 16, right: 24, fontSize: 80, lineHeight: 1, color: 'rgba(37,99,235,0.08)', fontFamily: 'Georgia, serif', pointerEvents: 'none', userSelect: 'none' }}>"</div>

                <Stars count={t.stars} />

                <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.7, flex: 1, marginBottom: 28, position: 'relative' }}>
                  "{t.quote}"
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 24, borderTop: '1px solid #f1f5f9' }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0, background: t.gradient }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-grid { grid-template-columns: 1fr !important; max-width: 560px; margin: 0 auto; }
        }
        @media (max-width: 700px) and (min-width: 480px) {
          .testimonial-grid { grid-template-columns: 1fr 1fr !important; max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
