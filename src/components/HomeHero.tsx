'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const HomeHero = () => {
  return (
    <section style={{ 
      minHeight: '100dvh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: '6rem',
      position: 'relative',
      backgroundColor: 'var(--canvas)'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 0.8fr', 
        gap: '6rem', 
        alignItems: 'start' 
      }}>
        {/* Editorial Text Side */}
        <div style={{ paddingTop: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <div style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(50, 48, 48, 0.03)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '2rem',
              color: '#666'
            }}>
              Agency of Excellence
            </div>
            
            <h1 style={{ marginBottom: '2.5rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: '1.05' }}>
              Nepal’s Home for <br />
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#F7B42C' }}>Autism Care.</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ delay: 0.5, duration: 1, ease: [0.32, 0.72, 0, 1] }}
                  style={{ 
                    height: '45px', 
                    borderRadius: '100px', 
                    backgroundColor: '#F7B42C',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    border: '1px solid rgba(247, 180, 44, 0.2)'
                  }}
                >
                  <img 
                    src="/hero.png" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </motion.div>
              </div>
            </h1>
            
            <div style={{ 
              color: '#323030', 
              fontSize: '1.4rem', 
              fontWeight: 600, 
              marginBottom: '1.5rem',
              lineHeight: '1.4'
            }}>
              Clarity, care, and community — <br />
              <span style={{ color: '#666' }}>for individuals with autism and hidden disabilities.</span>
            </div>
            
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#666', 
              maxWidth: '580px',
              marginBottom: '4rem',
              fontWeight: 400
            }}>
              From assessments and therapy to training and community support, Sunflower brings everything together — so families and professionals can move forward with confidence.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1, ease: [0.32, 0.72, 0, 1] }}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
            >
               <Link href="/contact">
                 <button style={{
                    backgroundColor: '#323030',
                    color: '#F5F5F5',
                    padding: '1.25rem 3rem',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    boxShadow: '0 20px 40px -10px rgba(50, 48, 48, 0.2)',
                    transition: 'all 0.3s ease'
                 }} className="cta-primary">
                    Get Support
                 </button>
               </Link>
               <Link href="/services">
                 <button style={{
                    backgroundColor: 'transparent',
                    color: '#323030',
                    padding: '1.25rem 3rem',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: '2px solid rgba(50, 48, 48, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.3s ease'
                 }} className="cta-secondary">
                    Explore Services <ArrowUpRight size={18} />
                 </button>
               </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Layered Visual Side */}
        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '600px' }}>
           <motion.div
             initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
             animate={{ opacity: 1, scale: 1, rotate: -2 }}
             whileInView={{ rotate: -3 }}
             transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
             className="bezel-outer"
             style={{ position: 'absolute', top: '10%', right: '0', width: '100%', zIndex: 1 }}
           >
              <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="/hero.png" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, x: 100, rotate: 3 }}
             animate={{ opacity: 1, x: 0, rotate: 2 }}
             whileInView={{ rotate: 3, x: 20 }}
             transition={{ delay: 0.4, duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
             className="bezel-outer"
             style={{ position: 'absolute', top: '50%', right: '-5%', width: '70%', zIndex: 2 }}
           >
              <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1537367663815-620bb628cc0a?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.2, duration: 1 }}
             style={{
                position: 'absolute',
                bottom: '10%',
                left: '-15%',
                backgroundColor: '#F7B42C',
                padding: '2rem',
                borderRadius: '2.5rem',
                color: '#323030',
                zIndex: 3,
                maxWidth: '260px',
                boxShadow: '0 30px 60px -15px rgba(247, 180, 44, 0.4)',
                border: '1px solid rgba(50, 48, 48, 0.05)'
             }}
           >
              <p style={{ fontWeight: 900, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem', color: 'rgba(50, 48, 48, 0.6)' }}>ESTABLISHED 2026</p>
              <p style={{ fontFamily: 'Lora', fontSize: '1.35rem', lineHeight: '1.3', fontWeight: 600 }}>Nepal's first Center of Excellence.</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
