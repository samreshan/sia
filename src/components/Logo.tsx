import React from 'react';

export const Logo = ({ light = false, size = 32 }: { light?: boolean; size?: number }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        style={{ flexShrink: 0 }}
      >
        {/* Abstract Sunflower Petals */}
        <path 
          d="M20 5C20 5 21.5 12 25 15C28.5 18 35 20 35 20C35 20 28.5 22 25 25C21.5 28 20 35 20 35C20 35 18.5 28 15 25C11.5 22 5 20 5 20C5 20 11.5 18 15 15C18.5 12 20 5 20 5Z" 
          fill={light ? "var(--brand-gold)" : "#EBC351"} 
          stroke={light ? "white" : "black"} 
          strokeWidth="0.5"
        />
        {/* Core */}
        <circle cx="20" cy="20" r="4" fill={light ? "white" : "black"} />
      </svg>
      <span style={{ 
        fontFamily: 'Lora, serif', 
        fontSize: '1.25rem', 
        fontWeight: 600, 
        letterSpacing: '-0.04em',
        color: light ? 'white' : 'var(--text)'
      }}>
        SIA.
      </span>
    </div>
  );
};
