import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from 'assets/2.png';

const COLS = [
  {
    title: 'Company',
    links: [
      { label: 'Home', to: 'banner' },
      { label: 'About Us', to: 'aboutUs' },
      { label: 'How We Work', to: 'process' },
      { label: 'Testimonials', to: 'testimonials' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', to: 'services' },
      { label: 'Mobile Apps', to: 'services' },
      { label: 'Cloud & DevOps', to: 'services' },
      { label: 'AI / ML', to: 'services' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Get In Touch', to: 'contact' },
      { label: 'Careers', to: 'contact' },
      { label: 'Partnership', to: 'contact' },
      { label: 'Support', to: 'contact' },
    ],
  },
];

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>,
  },
  {
    label: 'Twitter',
    href: '#',
    icon: <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    label: 'GitHub',
    href: '#',
    icon: <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#070711', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* CTA Banner */}
        <div style={{ margin: '64px 0', borderRadius: 28, padding: '56px 64px', background: 'linear-gradient(135deg, #1a0a1e 0%, #0d0d2b 100%)', border: '1px solid rgba(141,68,139,0.2)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }} className="cta-banner">
          <div style={{ position: 'absolute', top: '-30%', right: '10%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(141,68,139,0.3), transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h3 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 8px' }}>
              Ready to build something great?
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
              Let's talk about your next project. No commitment required.
            </p>
          </div>
          <ScrollLink
            to="contact" smooth offset={-80} duration={500}
            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 100, fontSize: 15, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #8D448B 0%, #6366f1 100%)', boxShadow: '0 0 32px rgba(141,68,139,0.4)', flexShrink: 0, transition: 'all 0.2s', position: 'relative' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start a Project
            <svg width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </ScrollLink>
        </div>

        {/* Footer content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 64, borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="footer-grid">
          {/* Brand */}
          <div>
            <ScrollLink to="banner" smooth duration={500} style={{ cursor: 'pointer', display: 'inline-block', marginBottom: 20 }}>
              <img src={logo} alt="SthithaKoushalam Tech" style={{ height: 44, width: 'auto' }} />
            </ScrollLink>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Pioneering global expansion while illuminating India's future through world-class technology.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#8D448B'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#8D448B'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {COLS.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <ScrollLink to={link.to} smooth offset={-80} duration={500} style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
                      {link.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © {new Date().getFullYear()} SthithaKoushalam Tech. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
            Made with <span style={{ color: '#8D448B', fontSize: 16 }}>♥</span> in India
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-banner { padding: 36px 32px !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
