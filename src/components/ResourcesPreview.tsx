'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingBag, BarChart3, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const ResourcesPreview = () => {
  const resources = [
    {
      title: 'Articles & Guides',
      desc: 'Clear, structured content that explains important topics in simple, practical ways.',
      icon: FileText,
      tag: 'Sunflower Spectrum',
      href: '/resources'
    },
    {
      title: 'Tools & Products',
      desc: 'Carefully selected materials and tools that support development and daily life.',
      icon: ShoppingBag,
      tag: 'Sunflower Petals',
      href: '/resources'
    },
    {
      title: 'Event Insights',
      desc: 'Key learnings and takeaways from community sessions and workshops.',
      icon: BarChart3,
      tag: 'Community',
      href: '/resources'
    }
  ];

  return (
    <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
          <div>
            <div style={{ 
              color: '#768E1F', 
              fontWeight: 800, 
              fontSize: '0.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em',
              marginBottom: '1.5rem'
            }}>
              Insights & Tools
            </div>
            <h2 style={{ maxWidth: '600px', marginBottom: '1.5rem' }}>Support beyond <br /> <span style={{ color: '#666' }}>sessions.</span></h2>
            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '600px', marginBottom: '1.5rem' }}>
              Support does not end with a session. Our resources are designed to provide practical, easy-to-understand support for both families and professionals.
            </p>
            <p style={{ fontSize: '1rem', color: '#777', fontStyle: 'italic', fontWeight: 600 }}>
              Built from real experiences. Designed for real life.
            </p>
          </div>
          
          <Link href="/resources">
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#323030',
              fontWeight: 800,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid #F7B42C'
            }}>
              Explore Resources <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {resources.map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="bezel-outer"
            >
              <div className="bezel-inner" style={{ padding: '3rem' }}>
                <div style={{ 
                  color: 'rgba(50, 48, 48, 0.4)',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '2rem'
                }}>
                  {res.tag}
                </div>
                
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(50, 48, 48, 0.03)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  color: '#323030'
                }}>
                  <res.icon size={24} />
                </div>
                
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{res.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2.5rem' }}>{res.desc}</p>
                
                <Link href={res.href} style={{ marginTop: 'auto', fontWeight: 800, fontSize: '0.85rem', color: '#323030', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore <ArrowUpRight size={14} />
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
