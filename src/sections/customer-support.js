import React from 'react';
import Reveal from 'components/reveal';

const SERVICES = [
  {
    svg: <svg width={28} height={28} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>,
    gradient: 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)',
    light: 'rgba(37,99,235,0.08)',
    title: 'Web Development',
    text: 'High-performance websites and full-stack web apps using React, Next.js, and Node.js that scale to millions.',
    tags: ['React', 'Next.js', 'Node.js'],
    featured: true,
  },
  {
    svg: <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" /></svg>,
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    light: 'rgba(6,182,212,0.08)',
    title: 'Mobile Applications',
    text: 'Cross-platform iOS & Android apps with seamless UX using React Native and Flutter.',
    tags: ['React Native', 'Flutter'],
  },
  {
    svg: <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    light: 'rgba(14,165,233,0.08)',
    title: 'Cloud & DevOps',
    text: 'Scalable cloud architecture, CI/CD pipelines, and infrastructure-as-code on AWS, GCP & Azure.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    svg: <svg width={28} height={28} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
    gradient: 'linear-gradient(135deg, #0891b2 0%, #38bdf8 100%)',
    light: 'rgba(8,145,178,0.08)',
    title: 'AI & Machine Learning',
    text: 'Custom ML models, data pipelines, and intelligent automation that turn data into competitive advantages.',
    tags: ['Python', 'TensorFlow', 'LLMs'],
    featured: true,
  },
  {
    svg: <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>,
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
    light: 'rgba(29,78,216,0.08)',
    title: 'IT Consulting',
    text: 'Strategic technology advisory for digital transformation, architecture reviews, and tech stack decisions.',
    tags: ['Strategy', 'Architecture'],
  },
  {
    svg: <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
    gradient: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
    light: 'rgba(2,132,199,0.08)',
    title: '24/7 Support',
    text: 'Dedicated support and maintenance ensuring your systems run smoothly around the clock.',
    tags: ['SLA', 'Monitoring', 'Support'],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '96px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(37,99,235,0.25)', background: 'rgba(37,99,235,0.06)', marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb' }}>What We Build</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 16px' }}>
              Services built for{' '}
              <span style={{ backgroundImage: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>scale</span>
            </h2>
            <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.7 }}>
              From concept to deployment — end-to-end technology solutions that help businesses grow, innovate, and lead.
            </p>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: 16 }} className="bento-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={0.06 * i} className={s.featured ? 'service-card--featured' : undefined} style={{ gridColumn: s.featured ? 'span 2' : 'span 1' }}>
              <div
                className="service-card"
                style={{
                  background: '#fff',
                  border: '1.5px solid #f1f5f9',
                  borderRadius: 24,
                  padding: s.featured ? '36px 40px' : '32px 36px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  cursor: 'default',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(37,99,235,0.12)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#f1f5f9';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Background glow on featured */}
                {s.featured && (
                  <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: s.light, filter: 'blur(40px)', pointerEvents: 'none' }} />
                )}

                {/* Icon */}
                <div style={{ width: s.featured ? 56 : 48, height: s.featured ? 56 : 48, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', background: s.gradient, color: '#fff', marginBottom: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
                  {s.svg}
                </div>

                <h3 style={{ fontSize: s.featured ? 22 : 18, fontWeight: 700, color: '#0a0a14', marginBottom: 10, letterSpacing: '-0.02em' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, marginBottom: 20 }}>{s.text}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 100, background: s.light, color: '#475569', letterSpacing: '0.02em' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .service-card--featured { grid-column: span 1 !important; }
        }
        @media (max-width: 600px) {
          .bento-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
