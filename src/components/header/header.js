import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import menuItems from './header.data';
import logo from 'assets/2.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <ScrollLink to="banner" smooth duration={500} offset={-80} style={{ cursor: 'pointer', flexShrink: 0 }}>
            <img src={logo} alt="SthithaKoushalam Tech" style={{ height: 44, width: 'auto' }} />
          </ScrollLink>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                key={i}
                to={path}
                spy
                smooth
                offset={-80}
                duration={500}
                style={{
                  fontSize: 14, fontWeight: 500, cursor: 'pointer',
                  color: scrolled ? '#374151' : 'rgba(255,255,255,0.75)',
                  transition: 'color 0.2s',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => e.target.style.color = scrolled ? '#2563eb' : '#ffffff'}
                onMouseLeave={e => e.target.style.color = scrolled ? '#374151' : 'rgba(255,255,255,0.75)'}
              >
                {label}
              </ScrollLink>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ScrollLink
              to="contact"
              smooth
              offset={-80}
              duration={500}
              style={{
                cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '9px 20px', borderRadius: 100,
                fontSize: 13, fontWeight: 600,
                background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
                color: '#fff',
                transition: 'all 0.2s',
                boxShadow: '0 2px 16px rgba(37,99,235,0.35)',
              }}
              className="cta-btn"
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Get In Touch
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </ScrollLink>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none', padding: 8, border: 'none', background: 'transparent',
                cursor: 'pointer', borderRadius: 8,
                color: scrolled ? '#374151' : 'rgba(255,255,255,0.85)',
              }}
              className="hamburger-btn"
              aria-label="Menu"
            >
              {mobileOpen
                ? <svg width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, zIndex: 99,
          background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          padding: '16px 24px 24px',
        }}>
          {menuItems.map(({ path, label }, i) => (
            <ScrollLink
              key={i}
              to={path}
              spy smooth offset={-80} duration={500}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', padding: '12px 16px', borderRadius: 10,
                fontSize: 15, fontWeight: 500, color: '#374151', cursor: 'pointer',
                marginBottom: 2,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#eff6ff'; e.currentTarget.style.color = '#2563eb'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}
            >
              {label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact" smooth offset={-80} duration={500}
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'block', marginTop: 12, padding: '13px 20px', borderRadius: 100,
              textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#fff', cursor: 'pointer',
              background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
            }}
          >
            Get In Touch
          </ScrollLink>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .cta-btn { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
