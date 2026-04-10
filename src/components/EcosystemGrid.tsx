'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Cpu, ShoppingBag, TrendingUp, Sun, ArrowRight } from 'lucide-react';

import Link from 'next/link';

const pillars = [
  {
    title: 'Sunflower Institute',
    subtitle: 'Clinical Infrastructure',
    desc: 'Assessments, therapy, training, and direct support for individuals, families, and organisations.',
    icon: Heart,
    size: 'large',
    href: '/services'
  },
  {
    title: 'RXPIN',
    subtitle: 'Digital Intelligence',
    desc: 'Digital tools and platforms designed to improve care delivery, tracking, and accessibility.',
    icon: Cpu,
    size: 'large',
    href: '/pillars/rxpin'
  },
  {
    title: 'Sunflower Petals',
    subtitle: 'Therapeutic Trade',
    desc: 'Practical physical resources — including sensory tools, learning materials, and support kits.',
    icon: ShoppingBag,
    size: 'small',
    href: '/pillars/sunflower-petals'
  },
  {
    title: 'Equity Partners',
    subtitle: 'Strategic Capital',
    desc: 'Structured funding and partnerships that ensure sustainability and expansion.',
    icon: TrendingUp,
    size: 'small',
    href: '/pillars/equity-partners'
  },
  {
    title: 'Golden Foundation',
    subtitle: 'Social Infrastructure',
    desc: 'Programs that ensure support reaches families who may not have the financial means to access care.',
    icon: Sun,
    size: 'small',
    href: '/pillars/golden-foundation'
  }
];

export const EcosystemGrid = () => {
  return (
    <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
      <div className="container">
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ 
            color: '#768E1F', 
            fontWeight: 800, 
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em',
            marginBottom: '1.5rem'
          }}>
            The Ecosystem
          </div>
          <h2 style={{ maxWidth: '800px', lineHeight: '1.1', marginBottom: '2.5rem' }}>
            More than care — <br /> 
            <span style={{ color: '#666' }}>a complete ecosystem.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: '1.8', maxWidth: '750px', marginBottom: '2rem' }}>
            Most systems focus on one part of the journey. We built something different. Sunflower operates as a connected ecosystem — where real-life care generates insight, insight leads to better tools and systems, and success is reinvested to support more families.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#777', fontStyle: 'italic' }}>
            Each part strengthens the other — creating a system that is consistent, scalable, and built to last.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gridAutoRows: 'minmax(200px, auto)',
          gap: '1.5rem' 
        }}>
          {pillars.map((p, i) => {
            let gridSpacing = p.size === 'large' ? 'span 6' : 'span 4';
            
            return (
              <Link href={p.href} key={p.title} style={{ gridColumn: gridSpacing, textDecoration: 'none' }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: i * 0.1, 
                    duration: 1.2, 
                    ease: [0.32, 0.72, 0, 1] 
                  }}
                  className="bezel-outer"
                  style={{ 
                    height: '100%',
                    cursor: 'pointer'
                  } as any}
                >
                  <div className="bezel-inner" style={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '2rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      width: '64px', 
                      height: '64px', 
                      borderRadius: '20px', 
                      backgroundColor: 'rgba(50, 48, 48, 0.03)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#323030',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                      <p.icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    <div>
                      <div style={{ 
                        fontSize: '0.65rem', 
                        fontWeight: 900, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.15em', 
                        color: '#F7B42C', 
                        marginBottom: '0.5rem' 
                      }}>
                        {p.subtitle}
                      </div>
                      <h3 style={{ fontSize: p.size === 'large' ? '2.5rem' : '1.75rem', marginBottom: '1rem' }}>{p.title}</h3>
                      <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6', maxWidth: '400px' }}>{p.desc}</p>
                    </div>

                    <div style={{ 
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: '#323030',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      Learn More <ArrowRight size={14} />
                    </div>
                    
                    {/* Subtle Background Pattern */}
                    <div style={{
                      position: 'absolute',
                      top: '-2rem',
                      right: '-2rem',
                      width: '150px',
                      height: '150px',
                      backgroundColor: 'rgba(247, 180, 44, 0.02)',
                      borderRadius: '50%',
                      zIndex: -1
                    }} />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          div {
            grid-template-columns: 1fr !important;
          }
          .bezel-outer {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};
