'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#1C1B1B', 
      padding: '8rem 2rem 4rem', 
      color: '#FAFAF7'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', 
        gap: '6rem' 
      }}>
        {/* Brand & Vision */}
        <div>
          <Link href="/">
            <img
              src="/images/image.png"
              alt="Sunflower Institute for Autism Logo"
              style={{ height: '45px', width: 'auto', display: 'block', marginBottom: '1.5rem', filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.5))" }}
            />
          </Link>
          <div style={{ color: '#F7B42C', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Care Creates Insights</div>
          <p style={{ color: 'rgba(250, 250, 247, 0.65)', lineHeight: '1.8', fontSize: '1rem', maxWidth: '320px' }}>
            Empowering autistic individuals and families through world-class care, transformative education, and an unyielding commitment to community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#F7B42C', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1.25rem', fontSize: '1rem', padding: 0 }}>
            <li><Link href="/" style={{ color: 'rgba(250, 250, 247, 0.8)', textDecoration: 'none' }}>Home</Link></li>
            <li><Link href="/about" style={{ color: 'rgba(250, 250, 247, 0.8)', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link href="/about/dream" style={{ color: 'rgba(250, 250, 247, 0.8)', textDecoration: 'none' }}>The Sunflower Dream</Link></li>
            <li><Link href="/services" style={{ color: 'rgba(250, 250, 247, 0.8)', textDecoration: 'none' }}>Services</Link></li>
            <li><Link href="/events" style={{ color: 'rgba(250, 250, 247, 0.8)', textDecoration: 'none' }}>Events</Link></li>
            <li><Link href="/resources" style={{ color: 'rgba(250, 250, 247, 0.8)', textDecoration: 'none' }}>Resources</Link></li>
            <li><Link href="/contact" style={{ color: 'rgba(250, 250, 247, 0.8)', textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: '#F7B42C', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Contact</h4>
          <p style={{ fontSize: '1rem', color: 'rgba(250, 250, 247, 0.8)', lineHeight: '2' }}>
            Kathmandu, Nepal <br />
            info@sunflowerautism.org <br />
            +977-1-1234567
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2rem', color: 'rgba(250, 250, 247, 0.4)' }}>
             <a href="https://www.facebook.com/profile.php?id=61586835449737#" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <Facebook size={20} />
             </a>
             <a href="https://www.linkedin.com/company/sunflower-institute-for-autism" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <Linkedin size={20} />
             </a>
             <a href="https://www.tiktok.com/@sunflowerautisminstitute" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <TikTokIcon size={20} />
             </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ color: '#F7B42C', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Resources</h4>
          <p style={{ fontSize: '0.95rem', color: 'rgba(250, 250, 247, 0.65)', marginBottom: '2rem', lineHeight: '1.6' }}>
            Receive the latest updates, exclusive resources, and insights directly from our experts.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              style={{ 
                padding: '1.25rem 1.5rem', 
                borderRadius: '100px', 
                border: '1px solid rgba(250, 250, 247, 0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                width: '100%',
                fontSize: '0.9rem',
                color: 'white',
                outline: 'none'
              }} 
            />
            <button style={{ 
              backgroundColor: '#F7B42C', 
              color: '#1C1B1B', 
              padding: '0 2rem', 
              borderRadius: '100px',
              fontWeight: 900,
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
              position: 'absolute',
              right: '4px',
              top: '4px',
              bottom: '4px',
              border: 'none',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}>
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ 
        marginTop: '8rem', 
        paddingTop: '3rem', 
        borderTop: '1px solid rgba(250, 250, 247, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        color: 'rgba(250, 250, 247, 0.4)'
      }}>
        <p>© 2026 Sunflower Institute for Autism. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span style={{ cursor: "pointer" }}>Privacy Policy</span>
          <span style={{ cursor: "pointer" }}>Terms of Service</span>
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

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TikTokIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);
