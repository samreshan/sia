'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TrendingUp, Briefcase, Globe, ShieldCheck, ArrowRight, Layers, Handshake, Target, BarChart4, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EquityPartnersPage() {
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
                Strategic Infrastructure Pillar
              </div>
              <h1 style={{ color: 'white', marginBottom: '2.5rem', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1' }}>
                Sunflower <br /> <span style={{ color: '#F7B42C' }}>Equity Partners.</span>
              </h1>
              <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, lineHeight: '1.4', marginBottom: '1.5rem', maxWidth: '800px' }}>
                Strategic capital and partnerships for building scalable neurodiversity infrastructure.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', marginBottom: '4rem', maxWidth: '650px' }}>
                We connect capital, institutions, and mission-aligned partners to accelerate the growth of the Sunflower ecosystem across care, technology, and social impact.
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
                   Become a Partner
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
                   Explore Opportunities
                 </button>
              </div>
            </motion.div>
            <div className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
               <div className="bezel-inner" style={{ padding: '4rem', backgroundColor: 'transparent', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px' }}>
                  <TrendingUp size={160} color="#F7B42C" strokeWidth={1} style={{ opacity: 0.15 }} />
                  <div style={{ position: 'absolute', width: '300px', height: '300px', border: '1px solid rgba(247, 180, 44, 0.1)', borderRadius: '2rem' }} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
             <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>Capital that builds systems, not just organizations</h2>
             <p style={{ fontSize: '1.3rem', color: '#323030', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                Sunflower Equity Partners exists to fund, structure, and scale the Sunflower ecosystem.
             </p>
             <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', maxWidth: '750px', margin: '0 auto' }}>
                We work with investors, institutions, and strategic partners to ensure that every pillar of the ecosystem — care, digital systems, physical tools, and social support — can grow sustainably without losing its mission. This is not traditional investment. This is ecosystem building.
             </p>
          </div>
        </div>
      </section>

      {/* 3. CORE PURPOSE */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', marginBottom: '6rem', textAlign: 'center' }}>What we do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { title: 'Capital Allocation', icon: BarChart4, desc: 'We direct capital toward high-impact areas across the Sunflower ecosystem, ensuring structured and responsible growth.' },
               { title: 'Strategic Partnerships', icon: Handshake, desc: 'We collaborate with investors, institutions, governments, and global organizations aligned with neurodiversity impact.' },
               { title: 'Ecosystem Expansion', icon: Globe, desc: 'We scale Sunflower initiatives across healthcare, education, technology, and community support systems.' }
             ].map((value, i) => (
               <div key={i} className="bezel-outer" style={{ backgroundColor: 'white' }}>
                 <div className="bezel-inner" style={{ padding: '3.5rem', height: '100%', textAlign: 'center' }}>
                    <div style={{ color: '#F7B42C', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}><value.icon size={36} /></div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>{value.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>{value.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. INVESTMENT FOCUS AREAS */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Where capital goes</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { title: 'Care Infrastructure', icon: '🌻', desc: 'Expansion of Sunflower Institute for Autism and therapy systems.' },
              { title: 'Digital Infrastructure', icon: '💻', desc: 'Scaling RxPIN into global neurodiversity care technology.' },
              { title: 'Physical Infrastructure', icon: '🧸', desc: 'Growth of Sunflower Petals product ecosystem for families and children.' },
              { title: 'Social Infrastructure', icon: '❤️', desc: 'Support and funding for Golden Sunflower Foundation programs.' }
            ].map((p, i) => (
              <div key={i} className="bezel-outer" style={{ backgroundColor: 'var(--canvas)' }}>
                 <div className="bezel-inner" style={{ padding: '2.5rem' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{p.icon}</div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{p.title}</h4>
                    <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.6' }}>{p.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FDFCFB' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '6rem', textAlign: 'center' }}>How we structure partnerships</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { step: '1', title: 'Identify', desc: 'We identify scalable opportunities within the ecosystem.' },
              { step: '2', title: 'Align', desc: 'We align capital with mission-driven growth areas.' },
              { step: '3', title: 'Invest', desc: 'We deploy structured capital into validated systems.' },
              { step: '4', title: 'Scale', desc: 'We expand impact through measurable, sustainable growth.' }
            ].map((s, i) => (
              <div key={i} style={{ position: 'relative' }}>
                 <div style={{ fontSize: '5rem', fontWeight: 900, color: '#F7B42C', opacity: 0.1, fontFamily: 'Lora', position: 'absolute', top: '-1rem', left: '-1rem' }}>0{s.step}</div>
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', position: 'relative' }}>{s.title}</h3>
                 <p style={{ color: '#666', lineHeight: '1.6', position: 'relative' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY EQUITY PARTNERS */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '2.5rem' }}>Why this structure exists</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '4rem' }}>
                Traditional funding models often separate impact from sustainability. Sunflower Equity Partners bridges that gap by creating a system where every element of success is reinvested for expansion.
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                 {[
                   { t: 'Capital enables care', s: 'Initial investment builds the centers' },
                   { t: 'Care generates insights', s: 'Clinical data informs the systems' },
                   { t: 'Insights improve systems', s: 'Intelligence is built into RxPIN' },
                   { t: 'Systems create scalable impact', s: 'The model can be replicated globally' }
                 ].map((flow, i) => (
                   <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F7B42C' }} />
                      <span style={{ fontWeight: 800, fontSize: '1rem' }}>{flow.t}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
               <div className="bezel-inner" style={{ padding: '4rem', textAlign: 'center', border: 'none', backgroundColor: 'transparent' }}>
                  <ShieldCheck size={60} color="#F7B42C" style={{ marginBottom: '2rem' }} />
                  <p style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Ensuring long-term sustainability <br /> without mission dilution.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GOVERNANCE & PRINCIPLES */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '6rem', textAlign: 'center' }}>How we protect the mission</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { title: 'Mission First', desc: 'No financial decision overrides the core purpose of improving neurodiversity support systems.' },
              { title: 'Structured Growth', desc: 'All investments are aligned with measurable ecosystem expansion.' },
              { title: 'Long-Term Thinking', desc: 'We prioritize sustainable infrastructure over short-term returns.' }
            ].map((p, i) => (
              <div key={i} className="bezel-outer" style={{ backgroundColor: 'var(--canvas)' }}>
                 <div className="bezel-inner" style={{ padding: '3.5rem' }}>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#323030' }}>{p.title}</h4>
                    <p style={{ color: '#666', lineHeight: '1.7' }}>{p.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PARTNERSHIP TYPES */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '6rem', textAlign: 'center' }}>Ways to work with us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
            {[
              { title: 'Strategic Investors', icon: Briefcase, desc: 'Long-term capital partners supporting ecosystem expansion.' },
              { title: 'Institutional Partners', icon: Landmark, desc: 'Healthcare, education, and global development organizations.' },
              { title: 'Impact Partners', icon: Target, desc: 'Organizations aligned with neurodiversity and social innovation.' }
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'start' }}>
                 <div style={{ color: '#F7B42C' }}><t.icon size={28} /></div>
                 <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 800 }}>{t.title}</h4>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>{t.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ABOUT SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '8rem', alignItems: 'center' }}>
              <div className="bezel-outer">
                 <div className="bezel-inner" style={{ padding: '5rem', backgroundColor: 'var(--canvas)' }}>
                    <h5 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#F7B42C', marginBottom: '2rem' }}>Pillar Comparison</h5>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                       {['Care Delivery: Institute', 'Digital Infrastructure: RxPIN', 'Physical Tools: Petals', 'Social Impact: Foundation'].map((p, i) => (
                         <div key={i} style={{ fontSize: '0.9rem', color: '#666', fontWeight: 600 }}>{p}</div>
                       ))}
                    </div>
                 </div>
              </div>
              <div>
                 <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>Part of the Sunflower ecosystem</h2>
                 <p style={{ fontSize: '1.25rem', color: '#323030', lineHeight: '1.8', marginBottom: '3rem' }}>
                    Sunflower Equity Partners is one of five core pillars of the Sunflower ecosystem.
                 </p>
                 <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                    It exists alongside our Care delivery systems, Digital infrastructure (RxPIN), Physical support tools (Sunflower Petals), and Social impact foundation (Golden Sunflower Foundation). Together, these systems form a unified model for neurodiversity support.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 10. CONTACT / CONNECT */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div className="bezel-outer" style={{ backgroundColor: 'white' }}>
            <div className="bezel-inner" style={{ padding: '6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
               <div>
                  <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Let’s build together</h2>
                  <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
                     If you are an investor, institution, or strategic partner interested in building long-term impact in neurodiversity care systems, we would like to connect.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#323030' }}>
                     <Mail size={24} color="#F7B42C" />
                     <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>equity@sunflower.org</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#323030', marginTop: '1.5rem' }}>
                     <MapPin size={24} color="#F7B42C" />
                     <span style={{ fontWeight: 800 }}>Kathmandu, Nepal</span>
                  </div>
               </div>
               <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <button style={{ backgroundColor: '#323030', color: 'white', padding: '1.5rem', borderRadius: '1rem', fontWeight: 800, textTransform: 'uppercase' }}>Become a Partner</button>
                  <button style={{ backgroundColor: 'white', color: '#323030', border: '1px solid #323030', padding: '1.5rem', borderRadius: '1rem', fontWeight: 800, textTransform: 'uppercase' }}>Schedule Discussion</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '4.5rem', marginBottom: '2.5rem' }}>Build systems that last</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            Sunflower Equity Partners exists to ensure that impact is not temporary — but structurally sustainable. We don’t just fund organizations. We build ecosystems.
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
              Join as Partner
            </button>
            <Link href="/">
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
                Explore Ecosystem
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const Landmark = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <polygon points="12 2 20 7 4 7 12 2" />
  </svg>
);
