'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Cpu, ShoppingBag, TrendingUp, Sun, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    title: 'SIA Clinical',
    subtitle: 'Clinical Research',
    desc: 'Assessments, therapy, training, and direct support for individuals, families, and organisations.',
    icon: Heart,
    href: '/services'
  },
  {
    title: 'RXPIN',
    subtitle: 'Digital Intelligence',
    desc: 'Digital tools and platforms designed to improve care delivery, tracking, and accessibility.',
    icon: Cpu,
    href: '/pillars/rxpin'
  },
  {
    title: 'Petals',
    subtitle: 'Therapeutic Trade',
    desc: 'Practical physical resources — including sensory tools, learning materials, and support kits.',
    icon: ShoppingBag,
    href: '/pillars/sunflower-petals'
  },
  {
    title: 'Strategic Capital',
    subtitle: 'Equity Partners',
    desc: 'Structured funding and partnerships that ensure sustainability and expansion.',
    icon: TrendingUp,
    href: '/pillars/equity-partners'
  },
  {
    title: 'Golden Foundation',
    subtitle: 'Social Infrastructure',
    desc: 'Programs that ensure support reaches families who may not have the financial means to access care.',
    icon: Sun,
    href: '/pillars/golden-foundation'
  }
];

export const EcosystemGrid = () => {
  return (
    <section style={{ padding: 'var(--section-gap) 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1fr', 
          gap: 'clamp(2rem, 5vw, 6rem)', 
          alignItems: 'end' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="section-label">The Ecosystem</div>
            <h2 className="section-title">
              Built for <br />
              <span>Long-term Impact.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '550px' }}>
              Unlike traditional fragmented models, Sunflower operates as a connected ecosystem where clinical excellence generates insight, leading to better resources for all.
            </p>
          </motion.div>
        </div>
        
        <div className="bento-grid">
          {pillars.map((p, i) => {
            const isFirstRow = i < 2;
            return (
              <Link 
                href={p.href} 
                key={p.title} 
                className={`bento-item ${isFirstRow ? 'bento-wide' : 'bento-narrow'}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="bezel-outer"
                  style={{ height: '100%' }}
                >
                  <div className="bezel-inner" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', height: '100%' }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '12px', 
                      backgroundColor: 'var(--brand-gold-muted)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--brand-gold)'
                    }}>
                      <p.icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    <div>
                      <div style={{ 
                        fontSize: '0.65rem', 
                        fontWeight: 800, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.2em', 
                        color: 'var(--brand-gold)', 
                        marginBottom: '1rem' 
                      }}>
                        {p.subtitle}
                      </div>
                      <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 500 }}>{p.title}</h3>
                      <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{p.desc}</p>
                    </div>

                    <div style={{ 
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.7rem',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: 'var(--text)'
                    }}>
                      Explore Module <ArrowRight size={14} style={{ color: 'var(--brand-gold)' }} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};


