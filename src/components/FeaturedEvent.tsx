'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const FeaturedEvent = () => {
  return (
    <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)', overflow: 'hidden' }}>
      <div className="container">
        <div className="bezel-outer" style={{ backgroundColor: '#323030' }}>
          <div className="bezel-inner" style={{ 
            backgroundColor: '#323030', 
            color: 'white', 
            padding: 0, 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.2fr',
            overflow: 'hidden'
          }}>
            <div style={{ padding: '4.5rem 5rem' }}>
              <div style={{ 
                color: '#F7B42C', 
                fontWeight: 800, 
                fontSize: '0.75rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em',
                marginBottom: '1.5rem'
              }}>
                Featured Event
              </div>
              
              <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: '1.05' }}>
                Start with <br /> <span style={{ color: '#F7B42C' }}>community.</span>
              </h2>
              
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '400px' }}>
                Golden Carpet is a monthly open forum where parents, professionals, and advocates come together to share experiences, ask questions, and learn from one another.
              </p>
              
              <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                  <Calendar size={16} color="#F7B42C" />
                  <span>First Sunday of every English month</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                  <MapPin size={16} color="#F7B42C" />
                  <span> Kathmandu (Free for all)</span>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: '#F7B42C', fontWeight: 600, marginBottom: '2.5rem', fontStyle: 'italic' }}>
                Sometimes, the most important step is simply not being alone.
              </p>
              
              <Link href="/events/golden-carpet">
                <button style={{
                  backgroundColor: '#F7B42C',
                  color: '#323030',
                  padding: '1rem 2.5rem',
                  borderRadius: '100px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  Join the Next Session <ArrowRight size={18} />
                </button>
              </Link>
            </div>
            
            <div style={{ position: 'relative', minHeight: '400px' }}>
              <img 
                src="/golden-carpet.png" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to right, #323030 0%, transparent 20%)' 
              }} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .bezel-inner {
            grid-template-columns: 1fr !important;
          }
          .bezel-inner > div:first-child {
            padding: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};
