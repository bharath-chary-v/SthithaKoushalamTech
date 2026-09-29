import React from 'react';
import Reveal from 'components/reveal';

const VENTURES = [
  {
    id: 'placements',
    name: "Sthitha's Training & Placement",
    eyebrow: 'Train · Develop · Place',
    headline: 'Bridging the gap between learning and employment.',
    text: 'Industry-focused training, honest mentorship and placement support for IT, non-IT, skilled and unskilled roles — support that continues after the offer letter arrives.',
    stats: [
      { value: '6', label: 'Years' },
      { value: '400+', label: 'Students placed' },
      { value: '25+', label: 'Hiring partners' },
    ],
    points: ['IT & Non-IT training tracks', 'Interview & job-readiness prep', 'Placements with Accenture, IBM, Wipro, Deloitte & more'],
    href: 'https://placements.sthithakoushalam.tech/',
    cta: 'Explore Placements',
    theme: {
      bg: '#ece5d3',
      ink: '#17140f',
      muted: 'rgba(23,20,15,0.62)',
      accent: '#b3812c',
      line: 'rgba(23,20,15,0.12)',
      glow: 'radial-gradient(circle at 85% 0%, rgba(179,129,44,0.22), transparent 55%)',
      font: 'Georgia, "Times New Roman", serif',
      button: { background: '#17140f', color: '#ece5d3' },
    },
  },
  {
    id: 'speaks',
    name: "Sthitha's Speaks",
    eyebrow: 'Talks · Seminars · Trainings',
    headline: 'One talk can change the direction of a life.',
    text: 'Speeches and seminars by Jeevan for schools, colleges, teachers, parents and corporate teams — on exam fear, careers, gratitude, time management, habits and more.',
    stats: [
      { value: '150+', label: 'Sessions' },
      { value: '2', label: 'States — TS & AP' },
      { value: '4', label: 'Audience types' },
    ],
    points: ['Student seminars & career guidance', 'Teacher–parent engagement sessions', 'Corporate employee trainings'],
    href: 'https://speaks.sthithakoushalam.tech/',
    cta: 'Explore Speaks',
    theme: {
      bg: '#0c0a09',
      ink: '#f5efe6',
      muted: 'rgba(245,239,230,0.62)',
      accent: '#ffb23e',
      line: 'rgba(245,239,230,0.12)',
      glow: 'radial-gradient(ellipse at 50% -10%, rgba(255,178,62,0.28), transparent 60%)',
      font: 'inherit',
      button: { background: '#ffb23e', color: '#0c0a09' },
    },
  },
];

function VentureCard({ v }) {
  const t = v.theme;
  return (
    <a
      href={v.href}
      target="_blank"
      rel="noopener noreferrer"
      className="venture-card"
      style={{
        position: 'relative', display: 'flex', flexDirection: 'column', height: '100%',
        borderRadius: 28, overflow: 'hidden', padding: '40px 40px 36px',
        background: t.bg, color: t.ink, textDecoration: 'none',
        border: `1px solid ${t.line}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: t.glow, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.accent }}>
          {v.eyebrow}
        </span>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: t.muted, margin: '18px 0 6px' }}>{v.name}</h3>
        <p style={{ fontFamily: t.font, fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', margin: 0 }}>
          {v.headline}
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: t.muted, margin: '18px 0 0' }}>{v.text}</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, margin: '28px 0', padding: '20px 0', borderTop: `1px solid ${t.line}`, borderBottom: `1px solid ${t.line}` }}>
          {v.stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: t.ink, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: t.muted, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {v.points.map((p) => (
            <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: t.ink }}>
              <svg width={16} height={16} fill="none" viewBox="0 0 24 24" stroke={t.accent} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {p}
            </li>
          ))}
        </ul>

        <span style={{ marginTop: 'auto', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 100, fontSize: 14, fontWeight: 700, ...t.button }}>
          {v.cta}
          <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function Ventures() {
  return (
    <section id="ventures" style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(37,99,235,0.25)', background: 'rgba(37,99,235,0.06)', marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb' }}>Our Ventures</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 16px' }}>
              One umbrella,{' '}
              <span style={{ backgroundImage: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>infinite growth</span>
            </h2>
            <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.7 }}>
              Beyond technology, the Sthitha&apos;s family builds careers and shapes mindsets — through training &amp; placement, and through talks that reach students across Telangana and Andhra Pradesh.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ventures-grid">
          {VENTURES.map((v, i) => (
            <Reveal key={v.id} delay={0.1 * i} style={{ height: '100%' }}>
              <VentureCard v={v} />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .venture-card:hover { transform: translateY(-6px); box-shadow: 0 30px 70px -30px rgba(10,10,20,0.45); }
        @media (max-width: 900px) {
          .ventures-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .venture-card { padding: 30px 24px 28px !important; }
        }
      `}</style>
    </section>
  );
}
