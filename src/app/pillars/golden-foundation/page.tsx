'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Users, Globe, ShieldCheck, ArrowRight, Sun, Sparkles, TrendingUp, Landmark, Share2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GoldenFoundationPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 6rem', backgroundColor: '#323030', color: 'white' }}>
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
                backgroundColor: 'rgba(247, 180, 44, 0.15)',
                color: '#F7B42C',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem'
              }}>
                Social Infrastructure Pillar
              </div>
              <h1 style={{ color: 'white', marginBottom: '2.5rem', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1' }}>
                Golden Sunflower <br /> <span style={{ color: '#F7B42C' }}>Foundation.</span>
              </h1>
              <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '800px' }}>
                Providing structured support for individuals with autism and neurodiversity, their families, and caregivers in Nepal.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', marginBottom: '4rem', maxWidth: '650px' }}>
                A social infrastructure initiative under the Sunflower ecosystem focused on direct support, family empowerment, and long-term system building.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                 <button style={{
                   backgroundColor: '#F7B42C',
                   color: '#323030',
                   padding: '1.25rem 3.5rem',
                   borderRadius: '100px',
                   fontWeight: 800,
                   fontSize: '1rem',
                   textTransform: 'uppercase',
                   letterSpacing: '0.1em'
                 }}>
                   Donate Now
                 </button>
                 <button style={{
                   backgroundColor: 'transparent',
                   color: 'white',
                   border: '2px solid white',
                   padding: '1.25rem 3.5rem',
                   borderRadius: '100px',
                   fontWeight: 800,
                   fontSize: '1rem',
                   textTransform: 'uppercase',
                   letterSpacing: '0.1em'
                 }}>
                   Request Support
                 </button>
              </div>
            </motion.div>
            <div className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
               <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden', minHeight: '500px', border: 'none', backgroundColor: 'transparent' }}>
                  <img src="/golden-carpet.png" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #323030, transparent)' }} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>A safety net for neurodiverse individuals and families</h2>
              <div style={{ display: 'grid', gap: '2rem' }}>
                <p style={{ fontSize: '1.25rem', color: '#323030', lineHeight: '1.8' }}>
                  The Golden Sunflower Foundation exists to reduce the gap between need and access in autism and neurodiversity support.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                  We provide structured assistance where services are limited, helping individuals and families receive the care, guidance, and support they need to navigate daily life. 
                </p>
                <div style={{ padding: '2.5rem', backgroundColor: '#FDFCFB', borderLeft: '4px solid #F7B42C', borderRadius: '0 1rem 1rem 0' }}>
                   <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#323030', fontStyle: 'italic' }}>
                     "This is not just charity — it is a long-term commitment to building a resilient support system in Nepal."
                   </p>
                </div>
              </div>
            </div>
            <div className="bezel-outer" style={{ backgroundColor: 'var(--canvas)' }}>
               <div className="bezel-inner" style={{ padding: '4rem' }}>
                  <Sun size={60} color="#F7B42C" style={{ marginBottom: '2.5rem' }} />
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Social Infrastructure</h3>
                  <p style={{ color: '#666', lineHeight: '1.8' }}>
                    Building the foundation of community and care that ensures no individual is left behind due to financial or geographical barriers.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PURPOSE */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>What we focus on</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { title: 'Direct Support', icon: Heart, desc: 'Therapy, intervention, and educational support for individuals with autism and neurodiversity.' },
               { title: 'Family & Caregiver Support', icon: Users, desc: 'Training, guidance, and respite support to strengthen families and caregivers.' },
               { title: 'Ecosystem Development', icon: Globe, desc: 'Capacity building programs, awareness initiatives, and professional training to strengthen Nepal’s support system.' }
             ].map((purpose, i) => (
               <div key={i} className="bezel-outer" style={{ backgroundColor: 'white' }}>
                 <div className="bezel-inner" style={{ padding: '3.5rem', height: '100%', textAlign: 'center' }}>
                    <div style={{ color: '#F7B42C', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}><purpose.icon size={32} /></div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>{purpose.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.7' }}>{purpose.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. IMPACT SNAPSHOT */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4rem' }}>
             <div>
                <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Our impact so far</h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#F7B42C' }} />
             </div>
             <div style={{ display: 'flex', gap: '6rem', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                   <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'Lora' }}>500+</div>
                   <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>Families Supported</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                   <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'Lora' }}>12</div>
                   <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>Active Projects</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                   <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'Lora' }}>3</div>
                   <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>Priority Areas</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
            <div className="bezel-outer">
               <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden', minHeight: '400px' }}>
                  <img src="/hero.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>About the Foundation</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                The Golden Sunflower Foundation was created in response to the growing need for structured autism and neurodiversity support in Nepal. (GSF) is a core component of the Sunflower ecosystem, focusing on the social infrastructure required to make excellence-led care accessible to all.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#777', lineHeight: '1.8', marginBottom: '3.5rem' }}>
                We work to bridge the gap between limited services and real-life needs by building programs that combine care, training, and long-term system development.
              </p>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.85rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#323030',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid #F7B42C'
              }}>
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRIORITIES SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Foundation Priorities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { title: 'Direct Support', icon: Heart, desc: 'Immediate intervention and therapeutic services for neurodiverse individuals.' },
               { title: 'Family Empowerment', icon: Sparkles, desc: 'Support systems designed to strengthen caregivers and families.' },
               { title: 'Ecosystem Strengthening', icon: Landmark, desc: 'Building professionals, awareness, and infrastructure for long-term sustainability.' }
             ].map((p, i) => (
               <div key={i} style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{ color: '#F7B42C' }}><p.icon size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{p.title}</h4>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>{p.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. TEAM PREVIEW */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
             <div>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem' }}>Founding Team</h2>
                <p style={{ fontSize: '1.25rem', color: '#666', lineHeight: '1.8', marginBottom: '3.5rem' }}>
                   Golden Sunflower is guided by a multidisciplinary team of professionals from healthcare, technology, education, and social development.
                </p>
                <button style={{
                  backgroundColor: '#323030',
                  color: 'white',
                  padding: '1.25rem 3.5rem',
                  borderRadius: '100px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  View Full Team
                </button>
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ width: '100%', paddingBottom: '100%', borderRadius: '2rem', backgroundColor: '#eee' }} />
                <div style={{ width: '100%', paddingBottom: '100%', borderRadius: '2rem', backgroundColor: '#ddd' }} />
             </div>
          </div>
        </div>
      </section>

      {/* 8. DONATION BANNER */}
      <section style={{ padding: '8rem 2rem' }}>
        <div className="container">
          <div className="bezel-outer" style={{ backgroundColor: '#FDFCFB' }}>
            <div className="bezel-inner" style={{ padding: '6rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Help us build a stronger support system</h2>
              <p style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.2rem', color: '#666', lineHeight: '1.8' }}>
                Your contribution helps provide therapy, family support, and capacity-building programs for neurodiverse individuals across Nepal. Every action strengthens the ecosystem.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                 <button style={{
                   backgroundColor: '#F7B42C',
                   color: '#323030',
                   padding: '1.25rem 4rem',
                   borderRadius: '100px',
                   fontWeight: 800,
                   fontSize: '1rem',
                   textTransform: 'uppercase',
                   letterSpacing: '0.1em'
                 }}>
                   Donate Now
                 </button>
                 <button style={{
                   backgroundColor: 'transparent',
                   color: '#323030',
                   border: '2px solid #323030',
                   padding: '1.25rem 4rem',
                   borderRadius: '100px',
                   fontWeight: 800,
                   fontSize: '1rem',
                   textTransform: 'uppercase',
                   letterSpacing: '0.1em'
                 }}>
                   Request Support
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. REDIRECTION SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem', alignItems: 'center' }}>
             <div>
                <h2 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '2.5rem' }}>Explore the full Foundation</h2>
                <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '4rem' }}>
                   This page gives an overview of Golden Sunflower Foundation. To explore detailed programs, stories, team profiles, and ongoing projects, visit our full foundation platform.
                </p>
                <button style={{
                  backgroundColor: 'white',
                  color: '#323030',
                  padding: '1.5rem 4rem',
                  borderRadius: '100px',
                  fontWeight: 900,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  Visit Full Website <ArrowRight size={20} />
                </button>
             </div>
             <div style={{ display: 'flex', justifyContent: 'center' }}>
               <Share2 size={120} color="#F7B42C" opacity={0.3} />
             </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '4.5rem', marginBottom: '2.5rem' }}>Join the mission</h2>
          <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            Golden Sunflower Foundation is part of a larger ecosystem working to transform autism and neurodiversity support in Nepal. Be part of the change.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              Donate Now
            </button>
            <Link href="/">
              <button style={{
                backgroundColor: 'transparent',
                color: '#323030',
                border: '2px solid #323030',
                padding: '1.5rem 4rem',
                borderRadius: '100px',
                fontWeight: 800,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Explore Sunflower Ecosystem
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
