'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShoppingBag, Box, Layout, Sparkles, Clock, BookOpen, Heart, ArrowRight, Layers, Compass, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SunflowerPetalsPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 6rem', backgroundColor: '#FDFCFB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div style={{
                display: 'inline-block',
                padding: '0.4rem 1rem',
                backgroundColor: 'rgba(118, 142, 31, 0.1)',
                color: '#768E1F',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem'
              }}>
                Material Infrastructure Pillar
              </div>
              <h1 style={{ marginBottom: '2.5rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: '1.1' }}>
                Sunflower <br /> <span style={{ color: '#768E1F' }}>Petals.</span>
              </h1>
              <p style={{ fontSize: '1.4rem', color: '#323030', fontWeight: 600, lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '800px' }}>
                Material infrastructure for learning, development, and sensory growth.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '4rem', maxWidth: '650px' }}>
                Thoughtfully designed tools and products that support neurodiverse children through play, structure, and everyday learning.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                 <button style={{
                   backgroundColor: '#768E1F',
                   color: 'white',
                   padding: '1.25rem 3.5rem',
                   borderRadius: '100px',
                   fontWeight: 800,
                   fontSize: '1rem',
                   textTransform: 'uppercase',
                   letterSpacing: '0.1em'
                 }}>
                   Explore Products
                 </button>
                 <button style={{
                   backgroundColor: 'transparent',
                   color: '#323030',
                   border: '2px solid #323030',
                   padding: '1.25rem 3.5rem',
                   borderRadius: '100px',
                   fontWeight: 800,
                   fontSize: '1rem',
                   textTransform: 'uppercase',
                   letterSpacing: '0.1em'
                 }}>
                   Shop Now
                 </button>
              </div>
            </motion.div>
            <div className="bezel-outer" style={{ backgroundColor: 'white' }}>
               <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden', minHeight: '500px' }}>
                  <img src="/resources.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>Learning doesn’t need to feel structured to be meaningful</h2>
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              <p style={{ fontSize: '1.3rem', color: '#323030', lineHeight: '1.8' }}>
                Sunflower Petals is built on a simple idea — play is not separate from learning.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', maxWidth: '750px', margin: '0 auto' }}>
                We design tools that support sensory regulation, independence, communication, and early learning through natural engagement and guided exploration. Each product is created with intention — combining developmental understanding with real-world usability for families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PURPOSE */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', marginBottom: '6rem', textAlign: 'center' }}>What Sunflower Petals does</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { title: 'Sensory Support Tools', icon: Sparkles, desc: 'Products designed to help regulate sensory input, reduce overwhelm, and support calm focus.' },
               { title: 'Routine & Structure Aids', icon: Clock, desc: 'Visual and hands-on tools that help build predictable routines and independence in daily life.' },
               { title: 'Skill Development Tools', icon: Layout, desc: 'Play-based learning tools that support communication, cognition, and early developmental skills.' }
             ].map((purpose, i) => (
               <div key={i} className="bezel-outer" style={{ backgroundColor: 'white' }}>
                 <div className="bezel-inner" style={{ padding: '3.5rem', height: '100%' }}>
                    <div style={{ color: '#768E1F', marginBottom: '2rem' }}><purpose.icon size={32} /></div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>{purpose.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.7' }}>{purpose.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SYSTEM */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '2rem' }}>A system of connected tools</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Sunflower Petals is structured into focused product lines designed to support specific developmental needs.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
            {[
              { 
                brand: 'Cliky Claky', 
                subtitle: 'Sensory & Grounding', 
                desc: 'Sensory regulation and calming tools designed to support grounding, focus, and sensory balance through tactile engagement.',
                icon: Zap
              },
              { 
                brand: 'DayDay', 
                subtitle: 'Routine & Independence', 
                desc: 'Visual routine and structure tools that help children understand their day, manage transitions, and build personal independence.',
                icon: Clock
              },
              { 
                brand: 'NumSum', 
                subtitle: 'Cognition & Skill Building', 
                desc: 'Focused learning tools that support early cognition, communication, and the development of fine motor skills through guided play.',
                icon: Box
              }
            ].map((product, i) => (
              <div key={i} className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                 <div className="bezel-inner" style={{ padding: '4rem', height: '100%', border: 'none', backgroundColor: 'transparent' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#768E1F', marginBottom: '1.5rem' }}>
                       <product.icon size={20} />
                       <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{product.subtitle}</span>
                    </div>
                    <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>{product.brand}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', fontSize: '1.05rem' }}>{product.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FRAMEWORK SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '8rem', alignItems: 'center' }}>
             <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>Built on developmental understanding</h2>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                   Our products are guided by established learning frameworks focused on functional development and independence.
                </p>
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {[
                  { title: 'EFL', label: 'Essentials for Living', desc: 'Functional communication and daily life skills.' },
                  { title: 'ADL', label: 'Activities of Daily Living', desc: 'Core self-care and personal independence.' },
                  { title: 'IADL', label: 'Instrumental Activities', desc: 'Advanced skills like routines and planning.' }
                ].map((f, i) => (
                   <div key={i} className="bezel-outer" style={{ backgroundColor: 'white' }}>
                      <div className="bezel-inner" style={{ padding: '2.5rem', textAlign: 'center' }}>
                         <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#768E1F', marginBottom: '0.5rem' }}>{f.title}</div>
                         <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', color: '#323030', marginBottom: '1rem' }}>{f.label}</div>
                         <p style={{ color: '#999', fontSize: '0.8rem', lineHeight: '1.4' }}>{f.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. ROOT SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div className="bezel-outer" style={{ backgroundColor: '#FDFCFB' }}>
            <div className="bezel-inner" style={{ padding: '6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
               <div>
                  <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Rooted in clinical understanding, built for real life</h2>
                  <p style={{ fontSize: '1.25rem', color: '#323030', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                    Sunflower Petals is part of the Sunflower Institute for Autism ecosystem. 
                  </p>
                  <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                    This ensures every product is informed by real clinical experience, developmental expertise, and practical family needs. We combine care, science, and lived experience into usable tools.
                  </p>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '20px', backgroundColor: 'rgba(247, 180, 44, 0.1)', color: '#F7B42C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Heart size={32} />
                  </div>
                  <ArrowRight size={32} color="#eee" />
                  <div style={{ width: '80px', height: '80px', borderRadius: '20px', backgroundColor: 'rgba(118, 142, 31, 0.1)', color: '#768E1F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <ShoppingBag size={32} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PHILOSOPHY SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Designed for real families</h2>
            <p style={{ fontSize: '1.3rem', color: '#323030', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              Every child learns differently. 
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
              Our goal is not to standardize learning — but to support individuality through tools that are flexible, engaging, and meaningful in everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* 8. JOURNEY CTA SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <Link href="#" style={{ textDecoration: 'none' }}>
                <div className="bezel-outer" style={{ backgroundColor: 'var(--canvas)' }}>
                   <div className="bezel-inner" style={{ padding: '5rem', textAlign: 'center' }}>
                      <Compass size={40} color="#768E1F" style={{ marginBottom: '2rem' }} />
                      <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Journey</h3>
                      <p style={{ color: '#666', marginBottom: '2rem' }}>Discover how Sunflower Petals products are designed and developed.</p>
                      <span style={{ fontWeight: 800, color: '#768E1F', fontSize: '0.9rem', textTransform: 'uppercase' }}>Learn More <ArrowRight size={16} /></span>
                   </div>
                </div>
              </Link>
              <Link href="#" style={{ textDecoration: 'none' }}>
                <div className="bezel-outer" style={{ backgroundColor: '#FDFCFB' }}>
                   <div className="bezel-inner" style={{ padding: '5rem', textAlign: 'center' }}>
                      <ShoppingBag size={40} color="#F7B42C" style={{ marginBottom: '2rem' }} />
                      <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Products</h3>
                      <p style={{ color: '#666', marginBottom: '2rem' }}>See our full range of tools used in real homes and therapist offices.</p>
                      <span style={{ fontWeight: 800, color: '#F7B42C', fontSize: '0.9rem', textTransform: 'uppercase' }}>Shop Now <ArrowRight size={16} /></span>
                   </div>
                </div>
              </Link>
           </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '4.5rem', marginBottom: '2.5rem' }}>Let’s grow together</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            We’re here to help families find simple, thoughtful tools that support connection, learning, and independence.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
                   backgroundColor: '#768E1F',
                   color: 'white',
                   padding: '1.5rem 4rem',
                   borderRadius: '100px',
                   fontWeight: 800,
                   fontSize: '1rem',
                   textTransform: 'uppercase',
                   letterSpacing: '0.1em'
                 }}>
              Shop Now
            </button>
            <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '1.5rem 4rem',
                borderRadius: '100px',
                fontWeight: 800,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Explore Products
            </button>
            <Link href="/contact">
              <button style={{
                backgroundColor: '#F7B42C',
                color: '#323030',
                padding: '1.5rem 4rem',
                borderRadius: '100px',
                fontWeight: 800,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
