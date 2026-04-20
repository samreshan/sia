'use client';

import React, { useRef, useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Users, Sparkles, ClipboardCheck, HeartHandshake, CheckCircle2, MessageSquare, MapPin, Calendar, Clock, Laptop, ArrowUpRight, Rewind, FastForward, RotateCcw, Plus } from "lucide-react";
import Link from 'next/link';

export default function FamiliesPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay blocked:", err));
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 8rem', backgroundColor: 'var(--canvas)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40vw', height: '60vh', background: 'radial-gradient(circle, rgba(247,180,44,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ maxWidth: '800px' }}>
            <motion.div variants={itemVariants} style={{
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
              Families & Parents
            </motion.div>
            <motion.h1 variants={itemVariants} style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              Support for Your Child at <span style={{ color: '#F7B42C' }}>Home and School</span>
            </motion.h1>
            <motion.p variants={itemVariants} style={{ fontSize: '1.4rem', color: '#1C1B1B', fontWeight: 600, lineHeight: '1.5', marginBottom: '2.5rem' }}>
              We provide structured intervention and school support systems designed to help children build communication, behavior, and daily life skills with consistency across environments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. ABA THERAPY SERVICE SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '8rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ color: '#F7B42C', marginBottom: '2rem' }}><Sparkles size={40} /></div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, lineHeight: '1.1' }}>ABA Therapy Service</h2>
              <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: '1.7', marginBottom: '3rem' }}>
                A structured intervention program focused on developing communication, behavior regulation, learning readiness, and independence.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#F7B42C', marginBottom: '1.5rem' }}>What We Focus On</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
                    {["Functional communication", "Behavior support", "Attention & task engagement", "Learning readiness", "Daily life skill development"].map(item => (
                      <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.95rem', color: '#333' }}>
                        <CheckCircle2 size={18} style={{ color: '#F7B42C', flexShrink: 0 }} /> {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="https://abatherapynepal.com/therapy" target="_blank" style={{ textDecoration: 'none' }}>
                    <motion.button 
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(247,180,44,0.05)' }}
                      style={{ 
                        border: '1px solid #F7B42C', 
                        color: '#F7B42C', 
                        padding: '1rem 2rem', 
                        borderRadius: '100px', 
                        backgroundColor: 'transparent',
                        fontSize: '0.8rem',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}
                    >
                      Explore Service
                      <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#F7B42C', marginBottom: '1.5rem' }}>How It Works</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                    {["Individualized therapy plan", "One-on-one sessions", "Continuous tracking", "Parent involvement"].map(item => (
                      <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.95rem', color: '#444' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F7B42C' }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              onMouseEnter={() => {
                setIsVideoHovered(true);
                if (videoRef.current) {
                  videoRef.current.muted = false;
                  videoRef.current.play().catch(() => {});
                }
              }}
              onMouseLeave={() => {
                setIsVideoHovered(false);
                if (videoRef.current) videoRef.current.muted = true;
              }}
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '100%', height: '100%', border: '2px solid #F7B42C', borderRadius: '3rem', zIndex: 0 }} />
              <div className="bezel-outer" style={{ 
                position: 'relative', 
                zIndex: 1, 
                borderRadius: '3rem', 
                overflow: 'hidden',
                boxShadow: isVideoHovered ? '0 30px 60px rgba(247,180,44,0.2)' : '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease'
              }}>
                <video 
                  ref={videoRef}
                  src="/abatherapy.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2.5rem' }} 
                />
                
                {/* Audio & Playback Controls Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  width: '100%',
                  pointerEvents: 'none',
                  opacity: isVideoHovered ? 1 : 0.6,
                  transition: 'opacity 0.3s ease',
                  zIndex: 10
                }}>
                  {/* Playback Buttons */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '1.25rem', 
                    pointerEvents: 'auto',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '100px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <motion.button 
                      whileHover={{ scale: 1.1, color: '#F7B42C' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (videoRef.current) videoRef.current.currentTime -= 10;
                      }}
                      style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                      title="Back 10s"
                    >
                      <Rewind size={20} />
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.1, color: '#F7B42C' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (videoRef.current) videoRef.current.currentTime = 0;
                      }}
                      style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                      title="Reset"
                    >
                      <RotateCcw size={20} />
                    </motion.button>

                    <motion.button 
                      whileHover={{ scale: 1.1, color: '#F7B42C' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (videoRef.current) videoRef.current.currentTime += 10;
                      }}
                      style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                      title="Forward 10s"
                    >
                      <FastForward size={20} />
                    </motion.button>
                  </div>

                  {/* Status Pill */}
                  <div style={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '100px',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    {isVideoHovered ? (
                      <><span>Audio On</span><div style={{ display: 'flex', gap: '2px' }}>{[1,2,3].map(i => <motion.div key={i} animate={{ height: [4, 10, 4] }} transition={{ repeat: Infinity, duration: 0.5, delay: i*0.1 }} style={{ width: '2px', backgroundColor: '#F7B42C' }} />)}</div></>
                    ) : (
                      <span>Hover to Unmute</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SHADOW TEACHER SERVICE SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FAFAF7' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '8rem', alignItems: 'center' }}>
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative' }}>
               <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '100%', height: '100%', border: '2px solid #768E1F', borderRadius: '3rem', zIndex: 0 }} />
               <div className="bezel-outer" style={{ position: 'relative', zIndex: 1, borderRadius: '3rem', overflow: 'hidden', backgroundColor: '#1C1B1B' }}>
                  <div style={{ padding: '4rem', color: 'white', textAlign: 'center' }}>
                    <Users size={48} style={{ color: '#768E1F', marginBottom: '2rem' }} />
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>Integrated School Support</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>Our Shadow Teachers act as the Bridge between therapy goals and classroom reality.</p>
                  </div>
               </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ color: '#768E1F', marginBottom: '2rem' }}><Users size={40} /></div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, lineHeight: '1.1' }}>Shadow Teacher Service</h2>
              <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: '1.7', marginBottom: '3rem' }}>
                In-school structured support to help children participate, understand, and adapt within classroom environments.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#768E1F', marginBottom: '1.5rem' }}>What We Focus On</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                    {["Classroom participation", "Routine transitions", "Teacher/Peer communication", "In-school behavior", "Engagement assistance"].map(item => (
                      <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.95rem', color: '#333' }}>
                        <CheckCircle2 size={18} style={{ color: '#768E1F', flexShrink: 0 }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#768E1F', marginBottom: '1.5rem' }}>How It Works</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                    {["Dedicated shadow support", "Educator coordination", "Observation & reporting", "Adaptation plan"].map(item => (
                      <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.95rem', color: '#444' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#768E1F' }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 5. ROLE OF PARENTS */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.1' }}>Parents are the <span style={{ color: '#F7B42C' }}>Heart of the System</span></h2>
              <p style={{ fontSize: '1.3rem', color: '#1C1B1B', fontWeight: 600, marginBottom: '3rem', lineHeight: '1.6' }}>
                Parents are not external observers. They are part of the system.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                {[
                  "Understand therapy goals clearly",
                  "Apply structured strategies at home",
                  "Maintain consistency in routines",
                  "Support communication development",
                  "Reduce uncertainty in daily situations"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(247,180,44,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F7B42C', flexShrink: 0 }}>
                      <CheckCircle2 size={14} />
                    </div>
                    <span style={{ fontSize: '1rem', color: '#555', lineHeight: '1.4' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: '#FAFAF7', padding: '4rem', borderRadius: '3rem', textAlign: 'center' }}>
              <HeartHandshake size={48} style={{ color: '#F7B42C', marginBottom: '2rem' }} />
              <p style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: '1.4', color: '#1C1B1B', margin: 0 }}>
                "When home support is aligned, progress becomes more stable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GETTING STARTED — ROADMAP */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Soft decorative blooms */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '30vw', height: '30vh', background: 'radial-gradient(circle, rgba(118,142,31,0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
        
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#768E1F', marginBottom: '1.5rem' }}>
              The Road to Progress
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Getting <span style={{ color: '#F7B42C' }}>Started</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              We've refined our onboarding into a clear, four-step journey designed for clarity and confidence.
            </motion.p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Connecting Line (Desktop) */}
            <div style={{ position: 'absolute', top: '50px', left: '10%', right: '10%', height: '2px', borderTop: '2px dashed rgba(118,142,31,0.2)', zIndex: 0 }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4rem', position: 'relative', zIndex: 1 }}>
              {[
                { step: "01", title: "Consultation", desc: "Understanding your child’s current bridge between home and therapy.", icon: MessageSquare, color: '#768E1F' },
                { step: "02", title: "Assessment", desc: "Structured observation and developmental mapping of potential.", icon: ClipboardCheck, color: '#F7B42C' },
                { step: "03", title: "Plan Design", desc: "A tailored intervention roadmap uniquely for your family.", icon: MapPin, color: '#F7B42C' },
                { step: "04", title: "Begin Support", desc: "Coordinated ABA and Shadow support initiates.", icon: CheckCircle2, color: '#768E1F' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    backgroundColor: 'white', 
                    border: `1px solid ${item.color}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                      {item.step}
                    </div>
                    <item.icon size={32} style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: '#1C1B1B' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DESIGNED FOR REAL LIFE */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
               <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '120%', height: '140%', background: 'radial-gradient(circle, rgba(247,180,44,0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
               <div className="bezel-outer" style={{ backgroundColor: 'white', position: 'relative', zIndex: 1 }}>
                  <div className="bezel-inner" style={{ padding: '4rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Designed for <span style={{ color: '#F7B42C' }}>Real Life</span></h3>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                      {[
                        { icon: Users, label: "Daily Home Routines" },
                        { icon: Laptop, label: "Real Classroom Environments" },
                        { icon: MessageSquare, label: "Practical Communication" },
                        { icon: ArrowRight, label: "Long-term Growth" }
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--canvas)', borderRadius: '1.25rem' }}>
                          <item.icon size={20} style={{ color: '#F7B42C' }} />
                          <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Transition from Theory to Action</h2>
              <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                This is not a theoretical model. Every strategy we design is built to be applied in the messy, vibrant reality of a child's daily environment—whether that's the kitchen table at breakfast or a busy classroom at school.
              </p>
              <div style={{ padding: '2.5rem', backgroundColor: '#FAFAF7', borderRadius: '2rem', borderLeft: '4px solid #1C1B1B' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Our Commitment</h4>
                <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                  We prioritize practical progress over clinical abstracts. Success is measured by how well your child navigates their own world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA — DUAL LAYOUT */}
      <section style={{ padding: '4rem 2rem 8rem 2rem', backgroundColor: '#FAFAF7', position: 'relative' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ backgroundColor: '#1C1B1B', borderRadius: '4rem', padding: '8rem 4rem', position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            
            {/* Glows */}
            <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-50%", right: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />

            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: '1.1' }}>Begin your <br /><span style={{ color: '#F7B42C' }}>Roadmap</span> With Us</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', maxWidth: '450px', marginBottom: '3rem', lineHeight: '1.6' }}>
                Every child benefits from clarity and consistent guidance. Our team is ready to help you navigate the next steps.
              </p>
              
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(247,180,44,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F7B42C' }}>
                    <Plus size={20} />
                  </div>
                  <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Assessment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(118,142,31,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#768E1F' }}>
                    <Users size={20} />
                  </div>
                  <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Team Talk</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column — Buttons */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2rem', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <div style={{ color: '#F7B42C', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '0.5rem' }}>Family Support</div>
                    <div style={{ color: 'white', fontSize: '1.4rem', fontWeight: 800 }}>Request Assessment</div>
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1C1B1B' }}>
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </Link>

              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2rem', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <div style={{ color: '#768E1F', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '0.5rem' }}>Direct Line</div>
                    <div style={{ color: 'white', fontSize: '1.4rem', fontWeight: 800 }}>Talk to Our Team</div>
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1C1B1B' }}>
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media (max-width: 968px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          h1 { font-size: 3rem !important; }
          h2 { font-size: 2.5rem !important; }
        }
      `}</style>
    </main>
  );
}
