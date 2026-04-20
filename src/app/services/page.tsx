'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Users, BookOpen, ClipboardCheck, Sparkles, HeartHandshake, GraduationCap, MapPin, Calendar, Ticket, Plus } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 8rem', backgroundColor: 'var(--canvas)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40vw', height: '60vh', background: 'radial-gradient(circle, rgba(247,180,44,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            padding: '0.4rem 1.2rem',
            backgroundColor: 'rgba(247, 180, 44, 0.1)',
            color: '#F7B42C',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '2rem'
          }}>
            Choose Your Path
          </div>
          <h1 style={{ marginBottom: '2.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            Services for <span style={{ color: '#F7B42C' }}>Autism & <br />Neurodiversity</span> Support
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#1C1B1B', fontWeight: 600, maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.5' }}>
            Structured programs designed for two groups—families seeking support and professionals building capacity.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            Choose your path below to explore services tailored specifically for your role.
          </p>
        </div>
      </section>

      {/* 2. FOR FAMILIES */}
      <section id="parents" style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '8rem', alignItems: 'start' }}>
            <div>
              <div style={{
                width: '64px', height: '64px', borderRadius: '20px',
                backgroundColor: 'rgba(247, 180, 44, 0.1)', color: '#F7B42C',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem'
              }}>
                <Users size={28} />
              </div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: '1.2' }}>Support for Your Child at Home and School</h2>
              <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.8', marginBottom: '3rem' }}>
                We provide structured intervention and school support systems designed to help children build communication, behavior, and daily life skills with consistency across environments.
              </p>
              
              <div style={{ backgroundColor: '#FAFAF7', padding: '2.5rem', borderRadius: '2rem', borderLeft: '4px solid #F7B42C', marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#1C1B1B' }}>Outcome Focus</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem', fontSize: '1rem', color: '#555' }}>
                  {[
                    "Better communication and engagement",
                    "Improved daily functioning",
                    "Structured learning environment support",
                    "Consistency between home and school"
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F7B42C' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/services/families">
                <button style={{
                  backgroundColor: '#1C1B1B', color: 'white', padding: '1.25rem 3rem', borderRadius: '100px',
                  fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em',
                  display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', border: 'none'
                }}>
                  Explore Parent Services <ArrowRight size={18} />
                </button>
              </Link>
            </div>

            <div>
              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 900, marginBottom: '2.5rem', color: '#F7B42C', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Core Services</h4>
                <div style={{ display: 'grid', gap: '2rem' }}>
                  {[
                    { 
                      title: 'ABA Therapy Service', 
                      desc: 'Structured developmental support focused on communication, behavior, learning, and independence.', 
                      icon: Sparkles 
                    },
                    { 
                      title: 'Shadow Teacher Service', 
                      desc: 'In-school support to help children participate, understand routines, and integrate into classroom learning.', 
                      icon: Users 
                    }
                  ].map((service, i) => (
                    <div key={i} className="bezel-outer" style={{ backgroundColor: 'var(--canvas)' }}>
                      <div className="bezel-inner" style={{ padding: '3rem', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ color: '#F7B42C', marginBottom: '1.5rem' }}><service.icon size={28} /></div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800, color: '#1C1B1B' }}>{service.title}</h4>
                        <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* 3. FOR PROFESSIONALS */}
      <section id="professionals" style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#1C1B1B', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 0.7fr)', gap: '6rem', alignItems: 'start' }}>
            {/* Left Column: Services Grid */}
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 900, marginBottom: '2.5rem', color: '#F7B42C', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Core Services</h3>
                <div style={{ display: 'grid', gap: '2rem' }}>
                  {[
                    { 
                      title: 'ABAT Training Program', 
                      desc: 'Structured training to develop Applied Behavior Analysis Technician-level skills for real-world implementation.', 
                      icon: GraduationCap 
                    },
                    { 
                      title: 'Shadow Teacher Opportunities & Training', 
                      desc: 'Preparation programs for new practitioners and placement opportunities for existing Shadow Teachers to work within our structured support frameworks.', 
                      icon: Users 
                    }
                  ].map((service, i) => (
                    <div key={i} className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                      <div className="bezel-inner" style={{ padding: '3.5rem 3rem', border: 'none', height: '100%', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', justifyContent: 'center' }}>
                        <div style={{ color: '#768E1F', marginBottom: '1.5rem' }}><service.icon size={28} /></div>
                        <h4 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 800, color: 'white' }}>{service.title}</h4>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: '1.7', margin: 0 }}>{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar Info */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <div style={{ 
                    width: '56px', height: '56px', borderRadius: '18px', 
                    backgroundColor: 'rgba(118, 142, 31, 0.2)', color: '#768E1F',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'
                  }}>
                <BookOpen size={24} />
              </div>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', lineHeight: '1.2', color: 'white' }}>Training & Capacity Building in Autism Support</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '3rem' }}>
                We build trained professionals who can deliver structured support in schools, therapy centers, and home-based environments using consistent and practical frameworks.
              </p>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '2rem', borderRight: '4px solid #768E1F', marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#768E1F' }}>Outcome Focus</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.2rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>
                   {[
                     "Practical skill development",
                     "Real-world implementation training",
                     "Structured intervention knowledge",
                     "Career pathway in autism support"
                   ].map((item, i) => (
                     <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                       <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#768E1F' }} />
                       {item}
                     </li>
                   ))}
                </ul>
              </div>

              <Link href="/contact">
                <button style={{
                  backgroundColor: '#768E1F', color: 'white', width: '100%', padding: '1.25rem', borderRadius: '100px',
                  fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', cursor: 'pointer', border: 'none'
                }}>
                  Explore Professional Training <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY — CONNECTED SYSTEMS */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', lineHeight: '1.3' }}>
              Support works best when expectations, environments, and methods are <span style={{ color: '#F7B42C' }}>aligned.</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '5rem' }}>
              <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Families</h4>
                <p style={{ color: '#666', lineHeight: '1.7', margin: 0 }}>
                  Families often need clarity, structure, and practical tools that can be applied in daily life environments.
                </p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Professionals</h4>
                <p style={{ color: '#666', lineHeight: '1.7', margin: 0 }}>
                  Professionals work more effectively with consistent training, shared frameworks, and hands-on application.
                </p>
              </div>
            </div>

            <p style={{ fontSize: '1.2rem', color: '#1C1B1B', lineHeight: '1.9', textAlign: 'center', marginBottom: '5rem' }}>
              When both sides are working within clear systems, support becomes more consistent, progress becomes easier to track, and outcomes become more meaningful over time. This is what allows care, learning, and development to stay connected across home, school, and therapy environments.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {[
                { title: 'Structured Intervention', desc: 'Evidence-informed models tailored to success.' },
                { title: 'Individualized Planning', desc: 'No one-size-fits-all. Every path is unique.' },
                { title: 'Continuous Tracking', desc: 'Measurable progress through data and insights.' }
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#F7B42C', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>Pillar 0{i + 1}</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '6rem', textAlign: 'center', padding: '4rem', backgroundColor: '#1C1B1B', borderRadius: '3rem', color: 'white' }}>
              <p style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: '1.4', margin: 0 }}>
                We don’t treat services as isolated sessions. <br />
                <span style={{ color: '#F7B42C' }}>We treat them as connected systems of support.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION — DASHBOARD LAYOUT */}
      <section style={{ padding: "4rem 2rem 8rem 2rem", backgroundColor: "#FAFAF7", position: "relative" }}>
        <div className="container" style={{ position: "relative" }}>
          
          <div style={{ backgroundColor: "#1C1B1B", borderRadius: "3rem", padding: "6rem 4rem", position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            
            {/* Subtle glow inside the dark card */}
            <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-50%", right: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />

            {/* Left side text */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ color: "white", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "1.5rem", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                Start with the <br /><span style={{ color: "#F7B42C" }}>Right Path</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: "1.7", marginBottom: "3rem", maxWidth: "450px" }}>
                Whether you are a parent or a professional, your journey starts here. Choose your role to explore dedicated support systems.
              </p>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "rgba(247,180,44,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F7B42C" }}>
                    <Plus size={18} />
                  </div>
                  <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>Support</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "rgba(118,142,31,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#768E1F" }}>
                    <Users size={18} />
                  </div>
                  <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>Community</span>
                </div>
              </div>
            </div>

            {/* Right side interaction cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", zIndex: 1 }}>
              <Link href="/services/families" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} transition={{ duration: 0.2 }} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <div style={{ color: "#F7B42C", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>For Parents</div>
                    <div style={{ color: "white", fontSize: "1.3rem", fontWeight: 800 }}>I am a Parent / Caregiver</div>
                  </div>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#1C1B1B", flexShrink: 0 }}>
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </Link>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} transition={{ duration: 0.2 }} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <div style={{ color: "#768E1F", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>For Professionals</div>
                    <div style={{ color: "white", fontSize: "1.3rem", fontWeight: 800 }}>I am a Professional</div>
                  </div>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#1C1B1B", flexShrink: 0 }}>
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
