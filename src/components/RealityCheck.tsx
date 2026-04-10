'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
              We know the exhaustion. <br />
              <span style={{ color: '#F7B42C' }}>We know the quiet victories.</span>
            </h2>
            
            <p style={{ 
              fontSize: '1.5rem', 
              fontStyle: 'italic', 
              color: '#666', 
              fontFamily: 'Lora',
              lineHeight: '1.8'
            }}>
              "The diagnostic journey for autism in Nepal has been marked by long waits, fragmented care, and unaddressed questions. SIA is the answer we needed—a single point of excellence where families are seen, heard, and held."
            </p>
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
