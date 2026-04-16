'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingBag, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ResourcesPreview = () => {
  const resources = [
    {
      title: 'Clinical Guides',
      desc: 'Clear, structured content that explains important topics in simple, practical ways.',
      icon: FileText,
      tag: 'Spectrum Lab',
      href: '/resources'
    },
    {
      title: 'Tools & Assets',
      desc: 'Carefully selected materials and tools that support development and daily life.',
      icon: ShoppingBag,
      tag: 'Petals Collection',
      href: '/resources'
    },
    {
      title: 'Research Insights',
      desc: 'Key learnings and takeaways from community sessions and workshops.',
      icon: BarChart3,
      tag: 'SIA Insights',
      href: '/resources'
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
            <div className="section-label">Knowledge Base</div>
            <h2 className="section-title">
              Support Beyond <br />
              <span>the Clinical Room.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '550px' }}>
              Our commitment to care goes beyond the clinic. We provide evidence-based, practical toolkits designed for long-term sustainability at home.
            </p>
          </motion.div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '3rem'
        }}>
          {resources.map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bezel-outer"
            >
              <div className="bezel-inner" style={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '3rem',
                border: 'none',
                backgroundColor: 'var(--surface)'
              }}>
                <div style={{ 
                  color: 'var(--brand-gold)',
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  {res.tag}
                  <div style={{ padding: '0.5rem', backgroundColor: 'var(--brand-gold-muted)', borderRadius: '8px' }}>
                    <res.icon size={20} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', fontWeight: 500 }}>{res.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>{res.desc}</p>
                </div>
                
                <Link href={res.href} style={{ marginTop: 'auto' }}>
                  <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                     Access Module <ArrowRight size={14} style={{ color: 'var(--brand-gold)', marginLeft: '0.5rem' }} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '8rem', textAlign: 'center' }}>
          <Link href="/resources">
             <span style={{ 
               fontSize: '0.75rem', 
               fontWeight: 800, 
               textTransform: 'uppercase', 
               letterSpacing: '0.4em',
               borderBottom: '2px solid var(--brand-gold)',
               paddingBottom: '0.75rem',
               cursor: 'pointer',
               color: 'var(--text)'
             }}>
               Explore Full Library
             </span>
          </Link>
        </div>
      </div>
    </section>
  );
};


