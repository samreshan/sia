'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  // Determine colors based on scroll state AND theme
  const isInitialDarkPage = theme === 'dark' && !isScrolled;
  const navTextColor = isInitialDarkPage ? '#FFF' : 'var(--text)';
  const logoInvert = isInitialDarkPage;

  return (
    <>
      <nav 
        className={isScrolled ? 'glass-surface' : ''}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: isScrolled ? '70px' : '90px',
          display: 'flex',
          alignItems: 'center',
          transition: 'var(--transition-fluid)',
          borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          backgroundColor: isScrolled ? 'rgba(252, 250, 247, 0.8)' : 'transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link href="/">
            <Logo light={logoInvert} />
          </Link>
          
          {/* Desktop Links */}
          <div style={{ 
            display: 'flex', 
            gap: '3rem', 
            fontSize: '0.75rem', 
            fontWeight: 700, 
            color: navTextColor,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            alignItems: 'center',
            transition: 'color 0.4s ease'
          }} className="desktop-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ opacity: 0.8 }} className="nav-hover">
                <span style={{ transition: 'opacity 0.3s ease' }}>{link.name}</span>
              </Link>
            ))}
            <Link href="/contact">
              <button 
                className={`btn-primary ${isInitialDarkPage ? 'gold' : ''}`}
                style={{
                  padding: '0.75rem 1.8rem',
                  fontSize: '0.7rem',
                }}
              >
                Inquire <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              color: navTextColor,
              display: 'none'
            }} 
            className="mobile-trigger"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--canvas)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 'clamp(2rem, 10vw, 6rem)'
            }}
          >
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    style={{ 
                      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
                      fontFamily: 'Lora', 
                      fontWeight: 500, 
                      color: 'var(--text)',
                      lineHeight: '1.2'
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 968px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-trigger {
            display: flex !important;
          }
        }
        .nav-hover:hover span {
          opacity: 1 !important;
          color: var(--brand-gold);
        }
      `}</style>
    </>
  );
};


