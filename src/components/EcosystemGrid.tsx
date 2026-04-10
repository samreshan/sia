'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Book, Users, Activity, ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: 'SIA Clinical Services',
    desc: 'Evidence-based therapies and diagnostics for every step of the journey.',
    icon: Activity,
    size: 'large'
  },
  {
    title: 'Sunflower Petals',
    desc: 'Expert-curated sensory and play-based tools designed for real life.',
    icon: Book,
    size: 'small'
  },
  {
    title: 'The Golden Carpet',
    desc: 'Our safe, judgment-free forum for parents to connect and grow.',
    icon: Users,
    size: 'small'
  },
  {
    title: 'Sunflower Spectrum',
    desc: 'Research and advocacy for a neurodivergent-inclusive Nepal.',
    icon: Heart,
    size: 'medium'
  }
];

export const EcosystemGrid = () => {
  return (
    <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
      <div className="container">
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ 
            color: '#768E1F', 
            fontWeight: 800, 
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em',
            marginBottom: '1.5rem'
          }}>
            The Ecosystem
          </div>
          <h2 style={{ maxWidth: '700px', lineHeight: '1.1' }}>
            A holistic infrastructure <br /> 
            <span style={{ color: '#666' }}>choreographed for humans.</span>
          </h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gridAutoRows: 'minmax(200px, auto)',
          gap: '1.5rem' 
        }}>
          {pillars.map((p, i) => {
            let gridSpacing = 'span 4';
            if (p.size === 'large') gridSpacing = 'span 8';
            if (p.size === 'medium') gridSpacing = 'span 6';
            
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 1.2, 
                  ease: [0.32, 0.72, 0, 1] 
                }}
                className="bezel-outer"
                style={{ 
                  gridColumn: gridSpacing,
                  height: '100%' 
                } as any}
              >
                <div className="bezel-inner" style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgba(50, 48, 48, 0.03)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#323030',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    <p.icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <h3 style={{ fontSize: p.size === 'large' ? '2.5rem' : '1.75rem', marginBottom: '1rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6', maxWidth: '400px' }}>{p.desc}</p>
                  </div>

                  <div style={{ 
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#323030',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Deep Dive <ArrowRight size={14} />
                  </div>
                  
                  {/* Subtle Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    top: '-2rem',
                    right: '-2rem',
                    width: '150px',
                    height: '150px',
                    backgroundColor: 'rgba(247, 180, 44, 0.02)',
                    borderRadius: '50%',
                    zIndex: -1
                  }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          div {
            grid-template-columns: 1fr !important;
          }
          .bezel-outer {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};
