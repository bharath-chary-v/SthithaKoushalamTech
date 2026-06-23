import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We deep-dive into your business goals, target audience, and technical requirements to build a crystal-clear project roadmap.',
    icon: <svg width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Our designers craft pixel-perfect wireframes, prototypes, and UI systems that are both beautiful and conversion-focused.',
    icon: <svg width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Agile sprints, clean code, rigorous testing. We ship features fast without compromising quality or scalability.',
    icon: <svg width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
  },
  {
    num: '04',
    title: 'Launch & Scale',
    desc: 'Seamless deployment, performance monitoring, and continuous improvement to keep your product ahead of the curve.',
    icon: <svg width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
  },
];

export default function HowWeWork() {
  return (
    <section id="process" style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 72px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(141,68,139,0.25)', background: 'rgba(141,68,139,0.06)', marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8D448B' }}>Our Process</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 16px' }}>
            How we{' '}
            <span style={{ background: 'linear-gradient(135deg, #8D448B 0%, #6366f1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>deliver</span>
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7 }}>
            A proven four-step process designed to turn your vision into a live, scalable product.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }} className="steps-grid">
          <div style={{ position: 'absolute', top: 52, left: '12.5%', right: '12.5%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(141,68,139,0.3) 15%, rgba(141,68,139,0.3) 85%, transparent)' }} className="connector-line" />

          {STEPS.map((step, i) => (
            <div key={i} style={{ position: 'relative', padding: '0 20px', textAlign: 'center' }} className="step-item">
              <div
                style={{ width: 104, height: 104, borderRadius: '50%', margin: '0 auto 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '2px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#8D448B'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(141,68,139,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'; }}
              >
                <div style={{ color: '#8D448B', marginBottom: 4 }}>{step.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#8D448B', letterSpacing: '0.08em' }}>{step.num}</div>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a14', marginBottom: 10, letterSpacing: '-0.02em' }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
          .connector-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .step-item { padding: 0 !important; }
        }
      `}</style>
    </section>
  );
}
