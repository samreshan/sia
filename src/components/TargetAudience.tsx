'use client';

import React from 'react';
import { motion } from 'framer-motion';

const audiences = [
  {
    title: 'For Parents',
    desc: 'Finding clarity, community, and a roadmap.',
    color: '#F7B42C'
  },
  {
    title: 'For Children',
    desc: 'Unhurried, play-based growth tailored to their unique minds.',
    color: '#768E1F'
  },
  {
    title: 'For Professionals',
    desc: 'Training, IEP support, and collaborative care.',
    color: '#323030'
  }
];

export const TargetAudience = () => {
  return (
    <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>You don’t have to figure this out alone.</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
            We built this space for the entire family unit and the community that surrounds them.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="bezel-outer"
            >
              <div className="bezel-inner" style={{ textAlign: 'center', gap: '1.5rem' }}>
                <div style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: a.color, 
                  margin: '0 auto' 
                }} />
                <h3 style={{ fontSize: '1.75rem' }}>{a.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.7' }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
