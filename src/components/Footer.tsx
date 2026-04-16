'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'rgba(252, 250, 247, 0.4)', 
      backdropFilter: 'blur(20px)',
      padding: 'clamp(6rem, 12vw, 12rem) 0 5rem', 
      color: 'var(--text)',
      borderTop: '1px solid var(--border)'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '6rem' 
      }}>
        {/* Brand & Vision */}
        <div style={{ gridColumn: 'span 2' }}>
          <Logo />
          <div style={{ 
            color: 'var(--brand-gold)', 
            fontSize: '0.65rem', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            letterSpacing: '0.4em', 
            marginTop: '2.5rem',
            marginBottom: '1.5rem' 
          }}>
            Institutional Excellence / Nepal
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', maxWidth: '450px' }}>
            Establishing a high-standard clinical ecosystem for autism care through research, advocacy, and standardized methodologies across the Himalayas.
          </p>
        </div>

        {/* Global Access */}
        <div>
          <h4 style={{ color: 'var(--text)', marginBottom: '2.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 800 }}>Exploration</h4>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1.25rem', fontSize: '0.9rem' }}>
            <li><Link href="/about" style={{ color: 'var(--text-muted)' }}>Institutional Story</Link></li>
            <li><Link href="/services" style={{ color: 'var(--text-muted)' }}>Service Directory</Link></li>
            <li><Link href="/events" style={{ color: 'var(--text-muted)' }}>Public Engagements</Link></li>
            <li><Link href="/resources" style={{ color: 'var(--text-muted)' }}>Academic Resources</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ color: 'var(--text)', marginBottom: '2.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 800 }}>Support</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '2.2' }}>
            Kathmandu HQ <br />
            <span style={{ color: 'var(--brand-gold)' }}>info@instituteforautism.org</span> <br />
            +977-1-1234567
          </p>
        </div>

        {/* Correspondence */}
        <div style={{ gridColumn: 'span 2' }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '2.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 800 }}>Correspondence</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '400px' }}>
            Subscribe to our clinical digest for institutional updates and research highlights.
          </p>
          <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--border-strong)', maxWidth: '400px' }}>
            <input 
              type="email" 
              placeholder="Official email address" 
              style={{ 
                padding: '1.5rem 0', 
                border: 'none',
                backgroundColor: 'transparent',
                width: '100%',
                fontSize: '0.95rem',
                color: 'var(--text)',
                outline: 'none'
              }} 
            />
            <button style={{ 
              backgroundColor: 'transparent', 
              color: 'var(--brand-gold)', 
              padding: '1rem 0 1rem 1rem', 
              fontWeight: 900,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em'
            }}>
              Connect
            </button>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ 
        marginTop: 'clamp(5rem, 10vw, 10rem)', 
        paddingTop: '3rem', 
        borderTop: '1px solid var(--border)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'space-between',
        fontSize: '0.7rem',
        color: 'var(--text-muted)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em'
      }}>
        <p>© 2026 Sunflower Institute for Autism. Nepali Reg no. 1294102 / Clinically Certified.</p>
        <div style={{ display: 'flex', gap: '3rem' }}>
          <span className="nav-hover">Privacy Ethics</span>
          <span className="nav-hover">Governance</span>
        </div>
      </div>
    </footer>
  );
};


