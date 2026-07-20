import React, { useState } from 'react';

const INFO = [
  {
    label: 'Email',
    value: 'hello@sthithakoushalamtech.com',
    icon: <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
  },
  {
    label: 'Phone',
    value: '+91 98765 43210',
    icon: <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
  },
  {
    label: 'Location',
    value: 'Hyderabad, Telangana, India',
    icon: <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  },
];

const inputStyle = {
  width: '100%', padding: '12px 16px', borderRadius: 12, fontSize: 14,
  background: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(255,255,255,0.1)',
  color: '#fff', outline: 'none', transition: 'border-color 0.2s',
  fontFamily: 'inherit',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => { setStatus('sent'); setForm({ name: '', email: '', subject: '', message: '' }); }, 1400);
  };

  return (
    <section id="contact" style={{ padding: '96px 0', background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>

      {/* Aurora */}
      <div style={{ position: 'absolute', top: 0, right: '10%', width: 500, height: 400, background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '5%', width: 350, height: 300, background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(56,189,248,0.3)', background: 'rgba(37,99,235,0.14)', marginBottom: 24 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#38bdf8' }}>Get In Touch</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 20px' }}>
              Let's build something{' '}
              <span style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                great
              </span>
            </h2>

            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48 }}>
              Have a project in mind? Looking for a tech partner? We'd love to hear from you. Our team responds within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {INFO.map((info, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'rgba(37,99,235,0.2)', color: '#38bdf8' }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{info.label}</div>
                    <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 24, marginTop: 48, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {['Fast Response', 'NDA Ready', 'Agile Teams'].map(badge => (
                <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="#38bdf8" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: '40px', backdropFilter: 'blur(20px)' }}>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #2563eb, #06b6d4)', margin: '0 auto 20px', boxShadow: '0 0 32px rgba(37,99,235,0.4)' }}>
                  <svg width={28} height={28} fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>We'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus(null)} style={{ fontSize: 13, color: '#38bdf8', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 28 }}>Send us a message</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="form-row">
                  {[
                    { name: 'name', label: 'Your Name', placeholder: 'John Smith', type: 'text' },
                    { name: 'email', label: 'Email Address', placeholder: 'john@company.com', type: 'email' },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{field.label}</label>
                      <input type={field.type} name={field.name} value={form[field.name]} onChange={handleChange} required placeholder={field.placeholder} style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#2563eb'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="Project Inquiry / Partnership / Other" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#2563eb'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project, goals, and timeline..." style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#2563eb'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <button type="submit" disabled={status === 'sending'} style={{ width: '100%', padding: '14px', borderRadius: 12, border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)', transition: 'all 0.2s', opacity: status === 'sending' ? 0.7 : 1, fontFamily: 'inherit', boxShadow: '0 4px 24px rgba(37,99,235,0.3)' }}
                  onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
