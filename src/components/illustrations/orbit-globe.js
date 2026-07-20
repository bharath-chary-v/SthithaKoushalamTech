import React from 'react';

export default function OrbitGlobe({ size = 440 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 440 440" fill="none" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="og-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <radialGradient id="og-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="220" cy="220" r="170" fill="url(#og-glow)" />

      {/* Orbit rings */}
      <g style={{ transformOrigin: '220px 220px', animation: 'spin-slow 40s linear infinite' }}>
        <circle cx="220" cy="220" r="190" stroke="#2563eb" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 8" />
        <circle cx="393" cy="220" r="5" fill="#38bdf8" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
      </g>
      <g style={{ transformOrigin: '220px 220px', animation: 'spin-slow-reverse 55s linear infinite' }}>
        <circle cx="220" cy="220" r="150" stroke="#06b6d4" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="1 6" />
        <circle cx="70" cy="220" r="4" fill="#06b6d4" style={{ animation: 'pulse-glow 4s ease-in-out infinite 0.5s' }} />
      </g>
      <g style={{ transformOrigin: '220px 220px', animation: 'spin-slow 32s linear infinite' }}>
        <circle cx="220" cy="220" r="115" stroke="#94a3b8" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="220" cy="105" r="3.5" fill="#94a3b8" style={{ animation: 'pulse-glow 3.5s ease-in-out infinite 1s' }} />
      </g>

      {/* Gear ring around core, echoing the brand mark */}
      <g style={{ transformOrigin: '220px 220px', animation: 'spin-slow 70s linear infinite' }} opacity="0.8">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const r1 = 78, r2 = 90;
          const x1 = (220 + r1 * Math.cos(angle)).toFixed(2);
          const y1 = (220 + r1 * Math.sin(angle)).toFixed(2);
          const x2 = (220 + r2 * Math.cos(angle)).toFixed(2);
          const y2 = (220 + r2 * Math.sin(angle)).toFixed(2);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />;
        })}
        <circle cx="220" cy="220" r="78" stroke="#2563eb" strokeWidth="2" strokeOpacity="0.6" />
      </g>

      {/* Core globe */}
      <circle cx="220" cy="220" r="62" fill="url(#og-core)" />
      <g opacity="0.55" stroke="#e0f2fe" strokeWidth="1.4" fill="none">
        <ellipse cx="220" cy="220" rx="62" ry="24" />
        <ellipse cx="220" cy="220" rx="62" ry="45" />
        <line x1="158" y1="220" x2="282" y2="220" />
        <line x1="220" y1="158" x2="220" y2="282" />
      </g>
    </svg>
  );
}
