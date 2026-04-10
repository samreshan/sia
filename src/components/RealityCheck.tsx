'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const RealityCheck = () => {
  return (
    <section style={{ 
      padding: 'var(--section-gap) 2rem', 
      backgroundColor: 'var(--canvas)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.2', marginBottom: '3rem' }}>
              Where families <br />
              <span style={{ color: '#F7B42C' }}>find clarity.</span>
            </h2>
            
            <p style={{ 
              fontSize: '1.4rem', 
              color: '#323030', 
              fontFamily: 'Lora',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Autism can often feel overwhelming — too much information, too many opinions, and not enough clear direction. At Sunflower, we focus on what matters most: understanding each individual, supporting families, and creating practical, structured pathways forward.
            </p>

            <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 600, marginBottom: '4rem' }}>
              No judgment. No confusion. Just clarity, care, and a community that understands.
            </p>

            <Link href="/about">
              <button style={{
                backgroundColor: '#323030',
                color: 'white',
                padding: '1.25rem 3rem',
                borderRadius: '100px',
                fontWeight: 800,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Learn More About Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Background Element */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          fontFamily: 'Lora',
          fontSize: '25rem',
          color: '#323030',
          fontWeight: 900,
          userSelect: 'none',
          pointerEvents: 'none',
          transform: 'translateY(-50%)'
        }}
      >
        “
      </motion.div>
    </section>
  );
};
