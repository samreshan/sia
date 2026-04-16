'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export const RealityCheck = () => {
  return (
    <section style={{ 
      padding: 'var(--section-gap) 0', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'clamp(4rem, 8vw, 10rem)', 
          alignItems: 'start' 
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-header">
              <div className="section-label">Human Context</div>
              <h2 className="section-title">
                Clarity <br />
                <span>Amidst Complexity.</span>
              </h2>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: '1.5rem' }}
          >
            <p style={{ 
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', 
              color: 'var(--text)', 
              lineHeight: '1.6',
              marginBottom: '3rem',
              fontWeight: 400
            }}>
              Autism can often feel overwhelming — too much information, too many opinions, and not enough clear direction. At Sunflower, we focus on what matters most: understanding each individual, supporting families, and creating practical, structured pathways forward.
            </p>
            
            <p style={{ 
              fontSize: '1.05rem', 
              color: 'var(--text-muted)', 
              lineHeight: '1.8',
              marginBottom: '5rem',
              maxWidth: '650px'
            }}>
              We believe in a world where families feel supported, children feel understood, and the path to independence is built on clinical rigor and deep human empathy. Our methodology combines international standards with local cultural sensitivity.
            </p>

            <Link href="/about">
              <button className="btn-outline">
                The SIA Methodology
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Accent */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        right: '-10%', 
        width: '40%', 
        height: '40%', 
        background: 'radial-gradient(circle, var(--brand-gold-muted) 0%, transparent 70%)',
        zIndex: -1,
        opacity: 0.4
      }} />
    </section>
  );
};


