'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const ServicesSnapshot = () => {
  const categories = [
    {
      title: 'For Families',
      subtitle: 'Guidance and support designed for your family’s unique journey.',
      icon: Users,
      items: ['Diagnostic Assessments', 'Evidence-based Therapy', 'Parent Training'],
      href: '/services/families'
    },
    {
      title: 'For Professionals',
      subtitle: 'Building a standardized, inclusive infrastructure for Nepal.',
      icon: BookOpen,
      items: ['Professional Training', 'Institutional Support', 'Clinical Consulting'],
      href: '/services/professionals'
    }
  ];

  return (
    <section style={{ padding: 'var(--section-gap) 0' }}>
      <div className="container">
        <div className="section-header" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem', 
          alignItems: 'end' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="section-label">Core Focus</div>
            <h2 className="section-title">
              Solutions for <br />
              <span>Every Stakeholder.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '550px' }}>
              Our clinical protocols are built on clarity and rigor. We offer specialized pathways for families seeking direct care and professionals seeking institutional support.
            </p>
          </motion.div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '3rem' 
        }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bezel-outer"
            >
              <div className="bezel-inner" style={{ padding: '4rem' }}>
                <div style={{ 
                  color: 'var(--brand-gold)', 
                  marginBottom: '3rem',
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--brand-gold-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <cat.icon size={32} strokeWidth={1.5} />
                </div>

                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>{cat.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3.5rem', lineHeight: '1.6' }}>{cat.subtitle}</p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '5rem', display: 'grid', gap: '1.5rem' }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1.25rem',
                      fontSize: '1rem',
                      color: 'var(--text)',
                      fontWeight: 500
                    }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--brand-gold)' }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={cat.href}>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                     Initiate Pathway <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


