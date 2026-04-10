'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ServiceSummary = () => {
  return (
    <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FFFFFF' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        <div>
          <div style={{ 
            color: '#768E1F', 
            fontWeight: 800, 
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em',
            marginBottom: '1.5rem'
          }}>
            Clinical Excellence
          </div>
          <h2 style={{ marginBottom: '2.5rem' }}>Excellence-led, <br /> sensory-friendly care.</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
            Our internationally supervised programs focus on building independence and joy without ever compromising the unhurried attention your child deserves.
          </p>
          
          <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
            {['ABA Therapy', 'ABAT Support', 'Diagnostic Assessments'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600, color: '#323030' }}>
                <CheckCircle2 size={20} color="#768E1F" />
                {item}
              </div>
            ))}
          </div>

          <Link href="/services">
            <button style={{ 
              backgroundColor: '#323030', 
              color: 'white', 
              padding: '1.25rem 3rem', 
              borderRadius: '100px', 
              fontWeight: 800, 
              fontSize: '0.85rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              Explore Clinical Services
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        <div className="bezel-outer">
          <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1598124146163-36819847286d?auto=format&fit=crop&q=80&w=1200" 
              alt="Sensory Friendly Environment" 
              style={{ width: '100%', display: 'block' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
