import React from 'react';
import Reveal from 'components/reveal';

const TECH = [
  { name: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.1)' },
  { name: 'Next.js', color: '#000', bg: 'rgba(0,0,0,0.06)' },
  { name: 'Node.js', color: '#339933', bg: 'rgba(51,153,51,0.1)' },
  { name: 'Python', color: '#3776AB', bg: 'rgba(55,118,171,0.1)' },
  { name: 'React Native', color: '#61DAFB', bg: 'rgba(97,218,251,0.08)' },
  { name: 'Flutter', color: '#02569B', bg: 'rgba(2,86,155,0.1)' },
  { name: 'AWS', color: '#FF9900', bg: 'rgba(255,153,0,0.1)' },
  { name: 'GCP', color: '#4285F4', bg: 'rgba(66,133,244,0.1)' },
  { name: 'Firebase', color: '#FFCA28', bg: 'rgba(255,202,40,0.1)' },
  { name: 'PostgreSQL', color: '#336791', bg: 'rgba(51,103,145,0.1)' },
  { name: 'MongoDB', color: '#47A248', bg: 'rgba(71,162,72,0.1)' },
  { name: 'Redis', color: '#DC382D', bg: 'rgba(220,56,45,0.1)' },
  { name: 'Docker', color: '#2496ED', bg: 'rgba(36,150,237,0.1)' },
  { name: 'Kubernetes', color: '#326CE5', bg: 'rgba(50,108,229,0.1)' },
  { name: 'TensorFlow', color: '#FF6F00', bg: 'rgba(255,111,0,0.1)' },
  { name: 'TypeScript', color: '#3178C6', bg: 'rgba(49,120,198,0.1)' },
];

function Chip({ t }) {
  return (
    <div
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, border: '1.5px solid #f1f5f9', background: t.bg, cursor: 'default', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 16px ${t.bg}`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
      <span style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>{t.name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="techstack" style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 12 }}>
              Built with industry-leading technologies
            </p>
            <div style={{ width: 40, height: 2, background: 'var(--gradient-brand)', margin: '0 auto' }} />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="marquee-mask" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="marquee-track" style={{ display: 'flex', gap: 10, width: 'max-content' }}>
            {[...TECH, ...TECH].map((t, i) => <Chip key={i} t={t} />)}
          </div>
        </div>
      </Reveal>

      <style>{`
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
        }
        .marquee-track {
          animation: marquee-x 34s linear infinite;
        }
        .marquee-mask:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
