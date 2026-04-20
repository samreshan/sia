'use client';

import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Award, 
  Briefcase, 
  Users, 
  ArrowRight, 
  Calendar, 
  ChevronDown, 
  ChevronUp,
  Clock,
  ShieldCheck,
  Zap,
  HelpCircle,
  PlayCircle
} from "lucide-react";
import Link from 'next/link';

const amaInsights = [
  {
    id: "abat-training-2026",
    title: "ABAT Training & Certification",
    session: "Special Session",
    date: "April 2026",
    topic: "Applied Behavior Analysis Technician (ABAT)",
    summary: "A comprehensive deep dive into the ABAT/RBT career path, certification requirements, and the localized training model designed for the contextual needs of Nepal.",
    pillars: [
      {
        title: "Certification & Career Path",
        icon: <Award size={20} />,
        details: [
          "ABA is primarily applied to autism (70-80% of cases).",
          "Certification is mandatory for practicing as an Autism Therapist.",
          "Career levels: RBT (Entry-level), BCaBA, and BCBA.",
          "RBTs must work under the supervision of BCBA/BCaBA certified professionals."
        ]
      },
      {
        title: "RBT Course Architecture",
        icon: <BookOpen size={20} />,
        details: [
          "Course totals approximately 55 hours of Job-Ready training.",
          "Includes 40+ hours of Theory/Contact hours.",
          "Self-paced learning structure allowing candidates to join anytime.",
          "Live Q&A sessions provided on a need-basis to clear confusion."
        ]
      },
      {
        title: "Practical Training & Placement",
        icon: <Briefcase size={20} />,
        details: [
          "Real-case scenario experience at the therapy center (2-3 hours/day).",
          "Direct access to Sunflower Campus for implementation practice.",
          "Internship opportunities and job placements for successful candidates.",
          "Supervision provided by a pool of BCBAs using a hybrid online/in-person model."
        ]
      },
      {
        title: "The Nepal Model (Productivity)",
        icon: <Zap size={20} />,
        details: [
          "Shift from 40-hour weekly models to focused productive hours.",
          "Recommended duration: 1-2 hours a day, 5 days a week.",
          "Focus on high-impact therapy within the child's natural environment.",
          "Supervision-only enrollment pathways are being evaluated with official providers."
        ]
      }
    ]
  }
];

export default function AmaInsightsPage() {
  const [expandedAma, setExpandedAma] = useState<string | null>("abat-training-2026");

  return (
    <main style={{ backgroundColor: "#071726", color: "white", minHeight: "100vh" }}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 6rem', backgroundColor: '#071726', position: 'relative', overflow: 'hidden' }}>
        {/* Deep Slate Glows */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '60vw', height: '100vh', background: 'radial-gradient(circle, rgba(247,180,44,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '40vw', height: '80vh', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#F7B42C' }} />
              <span style={{ color: '#F7B42C', fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em' }}>Special Resource</span>
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: "1.1", marginBottom: "2.5rem", letterSpacing: "-0.03em", color: 'white' }}>
              AMA Session <br /><span style={{ color: "#F7B42C" }}>Insights</span>
            </h1>
            <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", maxWidth: "700px", lineHeight: "1.6" }}>
              Direct answers and strategic insights from our expert-led "Ask Me Anything" sessions. Bridging the gap between specialized knowledge and community implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INSIGHTS LISTING */}
      <section style={{ padding: "4rem 2rem 10rem" }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {amaInsights.map((ama) => (
              <motion.div 
                key={ama.id}
                layout
                style={{ 
                  backgroundColor: "#0A1F33", 
                  borderRadius: "3.5rem", 
                  border: "1px solid rgba(255,255,255,0.05)",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.2)"
                }}
              >
                {/* Expandable Header */}
                <div 
                  onClick={() => setExpandedAma(expandedAma === ama.id ? null : ama.id)}
                  style={{ 
                    padding: "4rem", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    cursor: "pointer",
                    backgroundColor: expandedAma === ama.id ? "rgba(247,180,44,0.03)" : "transparent"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "3.5rem" }}>
                    <div style={{ textAlign: "center", minWidth: "140px" }}>
                       <div style={{ color: "#F7B42C", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>{ama.session}</div>
                       <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "white" }}>{ama.date}</div>
                    </div>
                    <div style={{ maxWidth: '600px' }}>
                       <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Target: {ama.topic}</div>
                       <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "white", lineHeight: '1.2' }}>{ama.title}</h3>
                    </div>
                  </div>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {expandedAma === ama.id ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                  </div>
                </div>

                {/* Content Detail */}
                <AnimatePresence>
                  {expandedAma === ama.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ padding: "0 4rem 5rem 4rem" }}
                    >
                      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.05)", marginBottom: "4rem" }} />
                      
                      <div style={{ marginBottom: '5rem', maxWidth: '800px' }}>
                        <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontWeight: 500 }}>
                          {ama.summary}
                        </p>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem" }}>
                        {ama.pillars.map((pillar, i) => (
                           <div key={i} style={{ padding: '3rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '2.5rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                              <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', color: 'rgba(247,180,44,0.03)', transform: 'rotate(-15deg)' }}>
                                 {React.cloneElement(pillar.icon as React.ReactElement, { size: 120 } as any)}
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', position: 'relative' }}>
                                 <div style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: 'rgba(247,180,44,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F7B42C' }}>
                                    {pillar.icon}
                                 </div>
                                 <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white' }}>{pillar.title}</h4>
                              </div>
                              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1.25rem', position: 'relative' }}>
                                 {pillar.details.map((detail, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                       <ShieldCheck size={18} style={{ color: '#F7B42C', flexShrink: 0, marginTop: '0.2rem' }} />
                                       {detail}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                      </div>

                      <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'rgba(247,180,44,0.05)', borderRadius: '2.5rem', border: '1px solid rgba(247,180,44,0.1)', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
                         <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#F7B42C', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#071726', flexShrink: 0 }}>
                            <HelpCircle size={32} />
                         </div>
                         <div style={{ flexGrow: 1 }}>
                            <h5 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Session Inquiry Spotlight</h5>
                            <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                              "Can participants who completed RBT training elsewhere enroll only in the supervision component?" — <span style={{ color: '#F7B42C', fontWeight: 700 }}>Decision pending</span> official provider authorization.
                            </p>
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section style={{ padding: "0 2rem 10rem" }}>
        <div className="container">
          <div style={{ backgroundColor: "#0A1F33", borderRadius: "5rem", padding: "8rem 4rem", textAlign: "center", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'radial-gradient(ellipse at center, rgba(247,180,44,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "2rem", color: "white", lineHeight: '1.2' }}>Ready to start your <br /><span style={{ color: "#F7B42C" }}>ABAT Journey?</span></h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem", marginBottom: "4rem", maxWidth: "700px", margin: "0 auto 4rem" }}>
                Explore the full curriculum, certification tiers, and training schedule designed to build the next generation of autism specialists in Nepal.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: 'wrap' }}>
                <a href="https://abatherapynepal.com/curriculum" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{ backgroundColor: "#F7B42C", color: "#071726", padding: "1.2rem 3.5rem", borderRadius: "100px", fontWeight: 900, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.2em", border: "none", cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    View Full Curriculum <ArrowRight size={18} />
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
