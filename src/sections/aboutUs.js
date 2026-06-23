import React from 'react';
import boostImg from 'assets/boost-1-1.png';

const VALUES = [
  { title: 'Equality First', desc: 'Age, gender, community — none of it defines opportunity here. Everyone gets a fair shot.' },
  { title: 'Hard Work Recognized', desc: 'Every contribution counts. Your effort will always be seen and rewarded.' },
  { title: 'Corporate Governance', desc: 'Transparency, accountability, and ethics are non-negotiable at every level.' },
  { title: 'Work-Life Balance', desc: 'Sustainable success comes from people who are fulfilled both at work and at home.' },
];

const NUMBERS = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Expert Engineers' },
  { value: '3+', label: 'Years Growing' },
];

export default function AboutUs() {
  return (
    <section id="aboutUs" style={{ padding: '96px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Big stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, borderRadius: 24, overflow: 'hidden', background: '#f1f5f9', marginBottom: 80 }} className="numbers-grid">
          {NUMBERS.map((n, i) => (
            <div key={i} style={{ background: '#fff', padding: '36px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', background: 'linear-gradient(135deg, #8D448B 0%, #6366f1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{n.value}</div>
              <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500, marginTop: 8 }}>{n.label}</div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">

          {/* Left: image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -20, borderRadius: 40, background: 'linear-gradient(135deg, rgba(141,68,139,0.12), rgba(99,102,241,0.08))', filter: 'blur(20px)' }} />
            <div style={{ position: 'relative', borderRadius: 32, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.12)' }}>
              <img src={boostImg} alt="About SthithaKoushalam Tech" style={{ width: '100%', height: 'auto', display: 'block' }} />
              {/* Mission badge */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px 28px', background: 'linear-gradient(to top, rgba(10,10,20,0.9), transparent)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 100, background: 'rgba(141,68,139,0.6)', marginBottom: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C084FC' }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#e9d5ff', letterSpacing: '0.06em' }}>OUR MISSION</span>
                </div>
                <p style={{ fontSize: 17, fontWeight: 600, color: '#fff', lineHeight: 1.4, margin: 0 }}>
                  Enlightening India through global-grade technology
                </p>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(141,68,139,0.25)', background: 'rgba(141,68,139,0.06)', marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8D448B' }}>Who We Are</span>
            </div>

            <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 20px' }}>
              Building tomorrow's{' '}
              <span style={{ background: 'linear-gradient(135deg, #8D448B 0%, #6366f1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>India</span>
            </h2>

            <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.75, marginBottom: 36 }}>
              We are a startup on a mission to pioneer global expansion while illuminating India's future. We believe technology is the great equalizer — and we're here to make it accessible, impactful, and transformative for every business that dares to think big.
            </p>

            {/* Values */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {VALUES.map((v, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 20px', borderRadius: 16, background: '#f8fafc', border: '1px solid #f1f5f9', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(141,68,139,0.2)'; e.currentTarget.style.background = '#fdf4fd'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.background = '#f8fafc'; }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg, #8D448B, #6366f1)', marginTop: 2 }}>
                    <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 3 }}>{v.title}</div>
                    <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.55 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .numbers-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .numbers-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
