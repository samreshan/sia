'use client';

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { year: '2026', title: 'Foundation Established', desc: 'Establishing the core vision and legal framework in Kathmandu.', rotation: -2 },
  { year: '2027', title: 'Global Alliance', desc: 'Building the global alliance of supporters and technical partners.', rotation: 1 },
  { year: '2028', title: 'Construction Complete', desc: 'Our state-of-the-art Center of Excellence takes physical shape.', rotation: -1 },
  { year: '2029', title: 'Center of Excellence Live', desc: 'Nepal\'s first holistic autism care sanctuary opens its doors.', rotation: 2 }
];

export const JourneyTimeline = () => {
  return (
    <section style={{ 
      padding: 'var(--section-gap) 2rem', 
      backgroundColor: '#768E1F',
      color: '#F5F5F5',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <div style={{ 
              color: '#F7B42C', 
              fontWeight: 800, 
              fontSize: '0.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em',
              marginBottom: '1.5rem'
            }}>
              The Roadmap
            </div>
            <h2 style={{ color: '#F5F5F5', marginBottom: '2rem' }}>From vision <br /> to physical reality.</h2>
            <p style={{ color: 'rgba(245, 245, 245, 0.7)', fontSize: '1.1rem', maxWidth: '400px', lineHeight: '1.7' }}>
              We are moving from a shared dream to a state-of-the-art infrastructure. Every milestone is a commitment to the families of Nepal.
            </p>
          </div>

          <div style={{ position: 'relative', height: '600px', width: '100%' }}>
            {events.map((e, i) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, x: 100, rotate: e.rotation }}
                whileInView={{ opacity: 1, x: 0, rotate: e.rotation }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.2, 
                  duration: 1.2, 
                  ease: [0.32, 0.72, 0, 1] 
                }}
                style={{ 
                  position: 'absolute',
                  top: `${i * 120}px`,
                  left: `${i * 30}px`,
                  width: '90%',
                  zIndex: i,
                  transformOrigin: 'bottom left'
                }}
              >
                <div style={{
                  backgroundColor: '#F5F5F5',
                  padding: '2.5rem',
                  borderRadius: '2rem',
                  boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(50, 48, 48, 0.05)',
                  color: '#323030',
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'start'
                }}>
                  <div style={{ 
                    fontFamily: 'JetBrains Mono', 
                    fontSize: '1.25rem', 
                    fontWeight: 800, 
                    color: '#F7B42C',
                    paddingTop: '0.5rem'
                  }}>
                    {e.year}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{e.title}</h3>
                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>{e.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          div {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .container > div > div:last-child {
            position: relative !important;
            height: auto !important;
            display: grid !important;
            gap: 2rem !important;
            margin-top: 4rem !important;
          }
          .container > div > div:last-child > div {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
