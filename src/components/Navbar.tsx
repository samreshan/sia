'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
        style={{
          position: 'fixed',
          top: isScrolled ? '1rem' : '1.5rem',
          left: '50%',
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(20px)',
          padding: '0.5rem 1rem 0.5rem 2rem',
          borderRadius: '100px',
          border: '1px solid rgba(50, 48, 48, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          width: 'max-content',
          x: '-50%',
          boxShadow: isScrolled ? '0 20px 40px -15px rgba(0,0,0,0.1)' : '0 10px 20px -10px rgba(0,0,0,0.05)',
          transition: 'all 0.6s cubic-bezier(0.32, 0.72, 0, 1)'
        } as any}
      >
        <Link href="/" style={{ 
          fontWeight: 700, 
          fontFamily: 'Lora', 
          color: '#323030', 
          fontSize: '1.4rem',
          letterSpacing: '-0.04em'
        }}>
          SIA
        </Link>
        
        {/* Desktop Links */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          fontSize: '0.85rem', 
          fontWeight: 600, 
          color: '#666',
          alignItems: 'center'
        }} className="desktop-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ position: 'relative' }} className="nav-hover">
              <motion.span whileHover={{ color: '#F7B42C' }}>{link.name}</motion.span>
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#F7B42C',
                color: '#323030',
                padding: '0.75rem 1.5rem',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Get Support
              <div style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(50,48,48,0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <ArrowUpRight size={14} />
              </div>
            </motion.button>
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              padding: '0.75rem', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(0,0,0,0.03)',
              display: 'none'
            }} 
            className="mobile-trigger"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 50% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 50% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 50% 0%)' }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(245, 245, 245, 0.98)',
              backdropFilter: 'blur(30px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '4rem'
            }}
          >
            <div style={{ display: 'grid', gap: '2rem' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.8 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    style={{ fontSize: '4rem', fontFamily: 'Lora', fontWeight: 600, color: '#323030' }}
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
      `}</style>
    </>
  );
};
