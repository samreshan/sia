'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const HomeHero = () => {
  return (
    <section style={{ 
      height: '100dvh', 
      minHeight: '800px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#000'
    }}>
      {/* Background Video */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0,
        opacity: 0.7
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'grayscale(20%) brightness(0.7)'
          }}
        >
          <source src="https://player.vimeo.com/external/370331493.hd.mp4?s=33d5966aeb01ef45be8a3bf2a3d077b949987819&profile_id=175" type="video/mp4" />
        </video>
        {/* Warm Cinematic Overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at 20% 40%, rgba(235, 195, 81, 0.15) 0%, transparent 60%), linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)' 
        }} />
      </div>

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '1000px' }}
        >
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5em',
            marginBottom: '2.5rem',
            color: 'var(--brand-gold)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--brand-gold)', opacity: 0.4 }} />
            Sunflower Institute for Autism
          </div>
          
          <h1 style={{ 
            marginBottom: '3rem', 
            fontSize: 'clamp(3.5rem, 11vw, 9rem)', 
            lineHeight: '0.85', 
            color: '#FFFFFF',
            fontWeight: 500,
            letterSpacing: '-0.04em'
          }}>
            Compassion <br />
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Meets Science.</span>
          </h1>
          
          <div style={{ 
            color: 'rgba(252, 250, 247, 0.85)', 
            fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)', 
            fontWeight: 400, 
            marginBottom: '5rem',
            lineHeight: '1.5',
            maxWidth: '700px',
            fontFamily: 'Inter, sans-serif'
          }}>
            Establishing Nepal's first Center of Excellence for Autism. 
            A structural commitment to evidence-based care and clinical warmth.
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <Link href="/contact">
              <button className="btn-primary gold">
                Join our Mission <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/services">
              <button className="btn-outline" style={{ borderColor: 'rgba(252, 250, 247, 0.3)', color: '#FFFFFF' }}>
                View Services
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          style={{ 
            position: 'absolute', 
            bottom: '4rem', 
            left: 'clamp(1.5rem, 5vw, 6rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            color: 'rgba(252, 250, 247, 0.5)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(235, 195, 81, 0.5), transparent)' }} />
          </div>
          Explore Ecosystem
        </motion.div>
      </div>
    </section>
  );
};


