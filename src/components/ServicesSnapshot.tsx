'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const ServicesSnapshot = () => {
  const categories = [
    {
      title: 'For Families',
      subtitle: 'Guidance and support designed for your family’s unique journey.',
      icon: Users,
      items: ['Assessments', 'Therapy & Intervention', 'Parent & Family Support'],
      href: '/services/families',
      color: '#F7B42C'
    },
    {
      title: 'For Professionals',
      subtitle: 'Building a standardized, inclusive infrastructure for Nepal.',
      icon: BookOpen,
      items: ['Training Programs', 'Inclusion Support', 'Workshops & Awareness'],
      href: '/services/professionals',
      color: '#768E1F'
    }
  ];

  return (
    <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Support for every stage of the journey</h2>
          <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto 2rem' }}>
            Every individual and every family has different needs. Our services are designed to meet you where you are — and guide you forward with clarity and structure.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#777', fontStyle: 'italic' }}>
            Whether you are starting your journey or building on experience, we provide the structure and support to move forward.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1.2 }}
              className="bezel-outer"
            >
              <div className="bezel-inner" style={{ padding: '4rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '15px', 
                  backgroundColor: `${cat.color}15`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: cat.color,
                  marginBottom: '2.5rem'
                }}>
                  <cat.icon size={32} />
                </div>

                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cat.title}</h3>
                <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2.5rem' }}>{cat.subtitle}</p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', display: 'grid', gap: '1rem' }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      fontSize: '1rem',
                      color: '#333',
                      fontWeight: 600
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: cat.color }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={cat.href}>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#323030',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '1rem 2rem',
                    borderRadius: '100px',
                    border: '1px solid #323030',
                    transition: 'all 0.3s ease'
                  }}>
                    View All Services <ArrowUpRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 968px) {
          .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
