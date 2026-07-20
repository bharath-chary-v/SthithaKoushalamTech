import React from 'react';

export default function CircuitPanel() {
  const nodes = [
    [60, 80], [180, 50], [300, 90], [340, 200], [260, 260],
    [140, 280], [40, 220], [200, 170], [110, 150], [280, 150],
  ];
  const edges = [
    [0, 8], [8, 1], [1, 9], [9, 2], [9, 3], [3, 4], [4, 5], [5, 6], [6, 0], [8, 5], [9, 7], [7, 4], [7, 8],
  ];

  return (
    <svg viewBox="0 0 380 340" width="100%" height="100%" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="cp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b1730" />
          <stop offset="100%" stopColor="#050b18" />
        </linearGradient>
        <linearGradient id="cp-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      <rect width="380" height="340" fill="url(#cp-bg)" />

      {/* faint grid */}
      <g opacity="0.06" stroke="#ffffff">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 34} x2="380" y2={i * 34} strokeWidth="1" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 34} y1="0" x2={i * 34} y2="340" strokeWidth="1" />
        ))}
      </g>

      {/* circuit edges */}
      <g stroke="url(#cp-line)" strokeWidth="1.6" strokeOpacity="0.65">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>

      {/* nodes */}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 8 ? 7 : 4}
          fill={i % 3 === 0 ? '#38bdf8' : '#06b6d4'}
          style={{ animation: `pulse-glow ${3 + (i % 4)}s ease-in-out infinite ${i * 0.2}s` }}
        />
      ))}

      {/* orbit ring around the hub node, echoing the gear mark */}
      <g style={{ transformOrigin: '200px 170px', animation: 'spin-slow 30s linear infinite' }} opacity="0.7">
        <circle cx="200" cy="170" r="34" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 6" fill="none" />
      </g>
    </svg>
  );
}
