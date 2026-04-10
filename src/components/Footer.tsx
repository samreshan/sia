'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#323030', 
      padding: '8rem 2rem 4rem', 
      color: '#F5F5F5'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', 
        gap: '6rem' 
      }}>
        {/* Brand & Vision */}
        <div>
          <h2 style={{ fontFamily: 'Lora', color: '#F7B42C', marginBottom: '2rem', fontSize: '2rem' }}>SIA</h2>
          <p style={{ color: 'rgba(245, 245, 245, 0.6)', lineHeight: '1.8', fontSize: '1rem', maxWidth: '300px' }}>
            Establishing Nepal's first Center of Excellence for Autism Care. A choreographed sanctuary for human flourishing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#F7B42C', marginBottom: '2rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1.25rem', fontSize: '1rem' }}>
            <li><Link href="/about" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>Story</Link></li>
            <li><Link href="/ecosystem" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>Ecosystem</Link></li>
            <li><Link href="/get-involved" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>Donate</Link></li>
            <li><Link href="/get-involved" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: '#F7B42C', marginBottom: '2rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Contact</h4>
          <p style={{ fontSize: '1rem', color: 'rgba(245, 245, 245, 0.8)', lineHeight: '2' }}>
            Kathmandu, Nepal <br />
            info@instituteforautism.org <br />
            +977-1-1234567
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ color: '#F7B42C', marginBottom: '2rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Resources</h4>
          <p style={{ fontSize: '0.9rem', color: 'rgba(245, 245, 245, 0.6)', marginBottom: '2rem' }}>Receive gentle updates and research insights.</p>
          <div style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
            <input 
              type="email" 
              placeholder="Your email" 
              style={{ 
                padding: '1.25rem 1.5rem', 
                borderRadius: '100px', 
                border: '1px solid rgba(245, 245, 245, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                width: '100%',
                fontSize: '0.9rem',
                color: 'white'
              }} 
            />
            <button style={{ 
              backgroundColor: '#F7B42C', 
              color: '#323030', 
              padding: '1rem 2rem', 
              borderRadius: '100px',
              fontWeight: 800,
              fontSize: '0.8rem',
              position: 'absolute',
              right: '4px',
              top: '4px',
              bottom: '4px'
            }}>
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ 
        marginTop: '8rem', 
        paddingTop: '3rem', 
        borderTop: '1px solid rgba(245, 245, 245, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        color: 'rgba(245, 245, 245, 0.3)'
      }}>
        <p>© 2026 Sunflower Institute for Autism. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
