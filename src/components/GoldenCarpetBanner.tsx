'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export const GoldenCarpetBanner = () => {
  return (
    <div className="container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bezel-outer"
        style={{ backgroundColor: '#F7B42C' }}
      >
        <div className="bezel-inner" style={{ 
          backgroundColor: '#F7B42C', 
          color: '#323030', 
          padding: '3rem 4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(50, 48, 48, 0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Star size={24} fill="#323030" stroke="#323030" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Experience our Golden Carpet initiative</h3>
              <p style={{ fontWeight: 600, color: 'rgba(50, 48, 48, 0.7)' }}>A room full of people who just know. Join our parent community forum.</p>
            </div>
          </div>

          <Link href="/events/golden-carpet">
            <button style={{
              backgroundColor: '#323030',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '100px',
              fontWeight: 800,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              View Initiative <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </motion.div>
      <style jsx>{`
        @media (max-width: 768px) {
          .bezel-inner {
            padding: 2rem !important;
            text-align: center;
            justify-content: center !important;
          }
          .bezel-inner > div {
            flex-direction: column;
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};
