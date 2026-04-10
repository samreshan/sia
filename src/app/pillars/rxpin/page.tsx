'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cpu, LayoutDashboard, LineChart, BrainCircuit, ShieldCheck, Mail, MapPin, Phone, ArrowRight, Activity, Zap, Layers, Beaker } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RxPINPage() {
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
                Digital Infrastructure Pillar
              </div>
              <h1 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', lineHeight: '1', fontWeight: 900 }}>
                RxPIN<span style={{ color: '#F7B42C' }}>.</span>
              </h1>
              <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, lineHeight: '1.4', marginBottom: '1.5rem', maxWidth: '800px' }}>
                Digital Infrastructure for Autism and <br />Neurodiversity Care
              </p>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', marginBottom: '4rem', maxWidth: '650px' }}>
                A unified platform that helps therapy centers and professionals manage documentation, therapy tracking, workflows, and client progress — all in one system.
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
                   Join Private Beta
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
                   Request Demo
                 </button>
              </div>
            </motion.div>
            <div className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
               <div className="bezel-inner" style={{ padding: '4rem', backgroundColor: 'transparent', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px' }}>
                  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Cpu size={120} color="#F7B42C" strokeWidth={1} style={{ opacity: 0.2 }} />
                     <div style={{ position: 'absolute', width: '250px', height: '250px', border: '1px dashed rgba(247, 180, 44, 0.3)', borderRadius: '50%', animation: 'spin 20s linear infinite' }} />
                     <div style={{ position: 'absolute', width: '180px', height: '180px', border: '2px solid rgba(247, 180, 44, 0.1)', borderRadius: '50%' }} />
                     <Activity size={40} color="#F7B42C" style={{ position: 'absolute', top: '20%', right: '20%' }} />
                     <ShieldCheck size={32} color="#F7B42C" style={{ position: 'absolute', bottom: '20%', left: '25%' }} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
             <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>Transform therapy management through digital clarity</h2>
             <p style={{ fontSize: '1.3rem', color: '#323030', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                RxPIN is designed to digitize and streamline autism and neurodiversity support systems.
             </p>
             <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.9', maxWidth: '750px', margin: '0 auto' }}>
                We help therapy centers, clinics, and organizations move from fragmented documentation and manual processes to a structured, intelligent, and connected system. The goal is simple: better organization → better care → better outcomes.
             </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUE PROPOSITION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', marginBottom: '6rem', textAlign: 'center' }}>A complete digital system</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { title: 'Centralized Management', icon: LayoutDashboard, desc: 'Manage clients, staff, schedules, and operations in one secure platform.' },
               { title: 'Therapy Tracking System', icon: LineChart, desc: 'Track progress, interventions, and treatment plans with structured digital documentation.' },
               { title: 'AI-Assisted Insights', icon: BrainCircuit, desc: 'Use intelligent systems to support decision-making, progress monitoring, and personalized care planning.' }
             ].map((value, i) => (
               <div key={i} className="bezel-outer" style={{ backgroundColor: 'white' }}>
                 <div className="bezel-inner" style={{ padding: '3.5rem', height: '100%', textAlign: 'center' }}>
                    <div style={{ color: '#F7B42C', marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}><value.icon size={36} /></div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>{value.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>{value.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Built for real-world therapy</h2>
          </div>
          
          <div style={{ display: 'grid', gap: '8rem' }}>
             {[
               { 
                 id: 'ORGANIZATIONAL', 
                 title: 'Streamline center operations', 
                 type: 'Organizational Management',
                 desc: 'Tools designed to manage daily workflows, staffing, scheduling, and administrative processes in one place.',
                 points: ['Staff coordination and communication', 'Integrated planning and scheduling', 'Billing and workflow management', 'Centralized client and organizational data'],
                 icon: Layers
               },
               { 
                 id: 'THERAPEUTIC', 
                 title: 'Digital progress management', 
                 type: 'Therapeutic Management',
                 desc: 'Support therapists with structured tools for documentation, treatment planning, and outcome tracking.',
                 points: ['Progress tracking and analytics', 'Personalized treatment planning', 'Outcome measurement and reporting', 'Structured therapy documentation'],
                 icon: Beaker
               },
               { 
                 id: 'INTELLIGENCE', 
                 title: 'AI-assisted care insights', 
                 type: 'Therapeutic Intelligence',
                 desc: 'Enhance therapy decisions with data-driven insights designed to support personalized care pathways.',
                 points: ['AI-based therapy recommendations', 'Real-time progress monitoring', 'Clinical decision support tools'],
                 icon: BrainCircuit
               }
             ].map((feature, i) => (
               <div key={feature.id} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1.2fr 0.8fr' : '0.8fr 1.2fr', gap: '8rem', alignItems: 'center' }}>
                 <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#F7B42C', marginBottom: '1.5rem' }}>
                       <feature.icon size={20} />
                       <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{feature.type}</span>
                    </div>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{feature.title}</h3>
                    <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>{feature.desc}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                       {feature.points.map((p, j) => (
                         <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem', fontWeight: 600, color: '#323030' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F7B42C' }} /> {p}
                         </div>
                       ))}
                    </div>
                 </div>
                 <div style={{ order: i % 2 === 0 ? 2 : 1 }} className="bezel-outer" style={{ backgroundColor: 'var(--canvas)' }}>
                    <div className="bezel-inner" style={{ padding: '5rem', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <feature.icon size={80} color="#F7B42C" opacity={0.1} />
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. VISION & MISSION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FDFCFB' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>Built for the future of care</h2>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div className="bezel-outer">
                 <div className="bezel-inner" style={{ padding: '4rem', height: '100%', backgroundColor: 'white' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#323030' }}>Our Vision</h3>
                    <p style={{ color: '#666', lineHeight: '1.8' }}>
                       To digitize therapeutic centers by enabling structured documentation, intelligent workflows, and scalable care systems for neurodiversity support.
                    </p>
                 </div>
              </div>
              <div className="bezel-outer">
                 <div className="bezel-inner" style={{ padding: '4rem', height: '100%', backgroundColor: 'white' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#323030' }}>Our Mission</h3>
                    <p style={{ color: '#666', lineHeight: '1.8' }}>
                       To build an intelligent co-therapist system powered by AI that supports professionals in delivering better outcomes for individuals with autism and neurodiversity.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. ABOUT THE COMPANY */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem', alignItems: 'center' }}>
              <div>
                 <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>About RxPIN Spectrum Pathways</h2>
                 <p style={{ fontSize: '1.25rem', color: '#323030', lineHeight: '1.8', marginBottom: '3rem' }}>
                    RxPIN Spectrum Pathways Private Limited is a Nepal-based digital health infrastructure company focused on transforming autism and neurodiversity care through technology.
                 </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    {[
                      { label: 'Founded', val: 'October 2021' },
                      { label: 'Formal Operations', val: '2024' },
                      { label: 'Location', val: 'Lalitpur, Nepal' },
                      { label: 'Registration', val: 'OCR Registered' }
                    ].map((item, i) => (
                      <div key={i}>
                         <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: '#999', marginBottom: '0.5rem' }}>{item.label}</div>
                         <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#323030' }}>{item.val}</div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bezel-outer" style={{ backgroundColor: 'white' }}>
                 <div className="bezel-inner" style={{ padding: '4rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '5rem', fontWeight: 900, color: '#F7B42C', opacity: 0.1, fontFamily: 'Lora' }}>NP</div>
                    <div style={{ fontWeight: 800, color: '#323030', marginTop: '1rem' }}>Nepal-Based Initiative</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. WHY RXPIN SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
            <div className="bezel-outer" style={{ backgroundColor: '#FDFCFB' }}>
               <div className="bezel-inner" style={{ padding: '5rem' }}>
                  <ShieldCheck size={48} color="#F7B42C" style={{ marginBottom: '2.5rem' }} />
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Unified Backbone</h3>
                  <p style={{ color: '#666', lineHeight: '1.8' }}>
                     Ending the era of fragmented systems, manual tracking, and inconsistent documentation.
                  </p>
               </div>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>Why RxPIN matters</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
                Therapy centers often face fragmented systems, manual tracking, and inconsistent documentation. RxPIN solves this by creating a unified digital backbone that improves:
              </p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                 {['Operational Efficiency', 'Clinical Consistency', 'Data-Driven Decision-Making', 'Scalability of Care Systems'].map((item, i) => (
                   <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem 2rem', backgroundColor: 'var(--canvas)', borderRadius: '1rem' }}>
                      <Zap size={18} color="#F7B42C" />
                      <span style={{ fontWeight: 800, color: '#323030' }}>{item}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT / CONNECT */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
             <h2 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '2rem' }}>Let’s build better systems together</h2>
             <p style={{ maxWidth: '750px', margin: '0 auto', color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem' }}>
                Whether you are a therapy center, organization, or professional, RxPIN helps you move toward structured, scalable, and intelligent care delivery.
             </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
             <div className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <div className="bezel-inner" style={{ padding: '4rem', height: '100%', border: 'none', backgroundColor: 'transparent' }}>
                   <h3 style={{ color: 'white', marginBottom: '2.5rem' }}>Email Support</h3>
                   <div style={{ display: 'grid', gap: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                         <Mail size={24} color="#F7B42C" />
                         <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem' }}>ASD Queries</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>autism@rxpin.com</div>
                         </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                         <Mail size={24} color="#F7B42C" />
                         <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem' }}>Software Inquiries</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>contact@rxpin.com</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <div className="bezel-inner" style={{ padding: '4rem', height: '100%', border: 'none', backgroundColor: 'transparent' }}>
                   <h3 style={{ color: 'white', marginBottom: '2.5rem' }}>Global & Local Reach</h3>
                   <div style={{ display: 'grid', gap: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                         <MapPin size={24} color="#F7B42C" />
                         <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem' }}>Lalitpur Base</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>Pulchowk, Lalitpur, Nepal</div>
                         </div>
                      </div>
                      <div style={{ display: 'flex', gap: '3rem' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Phone size={20} color="#F7B42C" />
                            <div>
                               <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>NP</div>
                               <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>+977 9703-723-665</div>
                            </div>
                         </div>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Phone size={20} color="#F7B42C" />
                            <div>
                               <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>Global</div>
                               <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>+1 517-580-5977</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '4rem' }}>
             <button style={{ backgroundColor: '#F7B42C', color: '#323030', padding: '1.25rem 3.5rem', borderRadius: '100px', fontWeight: 800 }}>Request Demo</button>
             <button style={{ backgroundColor: 'white', color: '#323030', padding: '1.25rem 3.5rem', borderRadius: '100px', fontWeight: 800 }}>Join Private Beta</button>
             <Link href="/contact"><button style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', padding: '1.25rem 3.5rem', borderRadius: '100px', fontWeight: 800 }}>Contact Us</button></Link>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '4.5rem', marginBottom: '2.5rem' }}>Manual to intelligent systems</h2>
          <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            RxPIN is not just software — it is infrastructure for the future of autism and neurodiversity support.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
                   backgroundColor: '#323030',
                   color: 'white',
                   padding: '1.5rem 4rem',
                   borderRadius: '100px',
                   fontWeight: 800,
                   fontSize: '1rem',
                   textTransform: 'uppercase',
                   letterSpacing: '0.1em'
                 }}>
              Get Started
            </button>
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
                Join Beta
            </button>
            <Link href="/">
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
                Explore Ecosystem
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 968px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
          .bezel-inner {
            padding: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}
