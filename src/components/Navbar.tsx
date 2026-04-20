'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface SubLink {
  name: string;
  href: string;
  external?: boolean;
}

interface NavLink {
  name: string;
  href: string;
  subLinks?: SubLink[];
}

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

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      subLinks: [
        { name: 'Who We Are', href: '/about' },
        { name: 'The Sunflower Dream', href: '/about/dream' }
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      subLinks: [
        { name: 'For Families', href: '/services/families' },
        { name: 'For Professionals', href: '/services/professionals' }
      ]
    },
    { 
      name: 'Autism', 
      href: '/autism/what-is-autism',
      subLinks: [
        { name: 'What is Autism?', href: '/autism/what-is-autism' },
        { name: "Know its Signs", href: '/autism/signs' }
      ]
    },
    { name: 'Golden Carpet', href: '/golden-carpet' },
    {
      name: 'Ecosystem',
      href: '#',
      subLinks: [
        { name: 'Golden Sunflower Foundation', href: 'https://goldensunflower.org/', external: true },
        { name: 'Sunflower Petals', href: 'https://sunflowerpetals.toys/', external: true },
        { name: 'RxPin', href: 'https://rxpin.com/', external: true },
        { name: 'Sunflower Spectrum', href: 'https://www.sunflowerspectrum.com/', external: true },
        { name: 'Sunflower Equity Partner', href: '#', external: true }
      ]
    },
    { 
      name: 'Resources', 
      href: '#',
      subLinks: [
        { name: 'News and Blogs', href: '/resources/news-and-blogs' },
        { name: 'Golden Carpet Key Takeaway', href: '/resources/golden-carpet-takeaways' },
        { name: 'AMA Session Insights', href: '/resources/ama-insights' }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <>
      <motion.nav 
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.32, 0.72, 0, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(24px)',
          borderBottom: isScrolled ? '1px solid rgba(50, 48, 48, 0.08)' : '1px solid rgba(50, 48, 48, 0.05)',
          boxShadow: isScrolled ? '0 4px 24px -8px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 4rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/image.png"
            alt="Sunflower Institute for Autism"
            style={{ height: '36px', width: 'auto', display: 'block' }}
          />
        </Link>
        
        {/* Desktop Links */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          fontSize: '0.8rem', 
          fontWeight: 700, 
          color: '#323030',
          alignItems: 'center'
        }} className="desktop-links">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <Link href={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.span 
                  whileHover={{ color: '#F7B42C' }}
                  style={{ transition: 'color 0.2s ease', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  {link.name}
                  {link.subLinks && (
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: hoveredLink === link.name ? '#F7B42C' : 'rgba(0,0,0,0.1)', marginTop: '2px' }} />
                  )}
                </motion.span>
              </Link>

              {/* Dropdown UI */}
              <AnimatePresence>
                {link.subLinks && hoveredLink === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'white',
                      minWidth: '240px',
                      borderRadius: '1.25rem',
                      padding: '1.25rem',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      marginTop: '0.5rem',
                      zIndex: 2000
                    }}
                  >
                    {link.subLinks.map((sub: SubLink) => (
                      <Link 
                        key={sub.name} 
                        href={sub.href} 
                        style={{ textDecoration: 'none' }}
                        {...(sub.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <motion.div
                          whileHover={{ x: 5, color: '#F7B42C', backgroundColor: 'rgba(247, 180, 44, 0.05)' }}
                          style={{
                            padding: '1rem',
                            borderRadius: '0.75rem',
                            color: '#666',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {sub.name}
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: '#1C1B1B',
                color: 'white',
                padding: '0.8rem 1.6rem',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              Get Support
              <ArrowUpRight size={16} />
            </motion.button>
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              padding: '0.75rem', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(0,0,0,0.03)',
              display: 'none',
              cursor: 'pointer',
              border: 'none'
            }} 
            className="mobile-trigger"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'white',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '6rem 4rem'
            }}
          >
             <div style={{ display: 'grid', gap: '1.5rem' }}>
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  <Link 
                    href={link.href} 
                    onClick={() => !link.subLinks && setIsMenuOpen(false)}
                    style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1C1B1B', textDecoration: 'none', display: 'block', marginBottom: link.subLinks ? '1rem' : 0 }}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div style={{ display: 'grid', gap: '1rem', paddingLeft: '2rem', borderLeft: '2px solid rgba(0,0,0,0.05)' }}>
                      {link.subLinks.map((sub: SubLink) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href} 
                          onClick={() => setIsMenuOpen(false)}
                          style={{ fontSize: '1.2rem', fontWeight: 600, color: '#666', textDecoration: 'none' }}
                          {...(sub.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
