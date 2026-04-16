'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const FeaturedEvent = () => {
  return (
    <section style={{ padding: 'var(--section-gap) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bezel-outer"
          style={{ overflow: 'hidden' }}
        >
          <div className="bezel-inner" style={{ 
            padding: 0, 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            overflow: 'hidden' 
          }}>
            <div style={{ 
              padding: 'clamp(3rem, 10vw, 6rem)', 
              backgroundColor: 'var(--text)', 
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle Warm Glow in Corner */}
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                background: 'radial-gradient(circle at 0% 0%, rgba(235, 195, 81, 0.1) 0%, transparent 50%)',
                zIndex: 0
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-header">
                  <div className="section-label">Monthly Engagement</div>
                  <h2 className="section-title" style={{ color: 'white' }}>
                    The Golden <br />
                    <span>Carpet Forum.</span>
                  </h2>
                </div>
                
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '4.5rem', maxWidth: '450px' }}>
                  Our monthly clinical forum for parents, professionals, and advocates. A sanctuary built for authentic connection and evidence-based guidance. 
                </p>
                
                <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '5rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <Calendar size={20} strokeWidth={1.5} style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <span>First Sunday of every English month</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <MapPin size={20} strokeWidth={1.5} style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <span>Kathmandu HQ / Virtual Access Available</span>
                  </div>
                </div>

                <Link href="/events/golden-carpet">
                  <button className="btn-primary gold" style={{ width: '100%', justifyContent: 'center' }}>
                     Reserve Your Seat <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
            
            <div style={{ position: 'relative', minHeight: '500px', backgroundColor: '#F9F9F9' }}>
              <img 
                src="https://images.unsplash.com/photo-1517245318728-6388489d8ff7?auto=format&fit=crop&q=80&w=1000" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) sepia(10%) contrast(1.1)' }} 
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to right, rgba(26, 26, 26, 0.8) 0%, transparent 100%)' 
              }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


