'use client';

import React, { useRef, useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Users, Sparkles, ClipboardCheck, CheckCircle2, MessageSquare, MapPin, Laptop, Rewind, FastForward, RotateCcw, Plus, BookOpen, GraduationCap, School } from "lucide-react";
import Link from 'next/link';

export default function ProfessionalsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay blocked:", err));
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '60vh', background: 'radial-gradient(circle, rgba(118,142,31,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ maxWidth: '900px' }}>
            <motion.div variants={itemVariants} style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(118, 142, 31, 0.1)',
              color: '#768E1F',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '2rem'
            }}>
              Professional Training & Capacity Building
            </motion.div>
            <motion.h1 variants={itemVariants} style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              Training & Capacity Building in <span style={{ color: '#768E1F' }}>Autism Support</span>
            </motion.h1>
            <motion.p variants={itemVariants} style={{ fontSize: '1.4rem', color: '#1C1B1B', fontWeight: 600, lineHeight: '1.5', marginBottom: '1.5rem', maxWidth: '800px' }}>
              Structured programs designed to develop skilled professionals for autism intervention, school support, and developmental care.
            </motion.p>
            <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '3rem', maxWidth: '700px' }}>
              We focus on practical implementation, real-world application, and consistent frameworks used across therapy and education settings.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem' }}>
                <Link href="/contact">
                  <button style={{ backgroundColor: '#1C1B1B', color: 'white', padding: '1.2rem 3rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: 'none', cursor: 'pointer' }}>
                    Apply for Training
                  </button>
                </Link>
                <Link href="/contact">
                  <button style={{ backgroundColor: 'white', color: '#1C1B1B', padding: '1.2rem 3rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                    Talk to Our Team
                  </button>
                </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* 3. ABAT TRAINING — WITH VIDEO */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FAFAF7' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '8rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ color: '#768E1F', marginBottom: '2rem' }}><BookOpen size={40} /></div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, lineHeight: '1.1' }}>ABAT Training Program</h2>
              <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: '1.7', marginBottom: '3rem' }}>
                A structured training program designed to build Applied Behavior Analysis Technician-level competencies for real-world intervention work.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#768E1F', marginBottom: '1.5rem' }}>What You Learn</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
                    {["Behavior & learning foundations", "Structured intervention", "Communication strategies", "Behavior support", "Session planning"].map(item => (
                      <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.95rem', color: '#333' }}>
                        <CheckCircle2 size={18} style={{ color: '#768E1F', flexShrink: 0 }} /> {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="https://abatherapynepal.com/" target="_blank" style={{ textDecoration: 'none' }}>
                    <motion.button 
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(118,142,31,0.05)' }}
                      style={{ 
                        border: '1px solid #768E1F', 
                        color: '#768E1F', 
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
                      Explore Training
                      <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#768E1F', marginBottom: '1.5rem' }}>The Approach</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                    {["Practical hands-on learning", "Case-based application", "Supervised implementation", "Real session exposure"].map(item => (
                      <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.95rem', color: '#444' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#768E1F' }} /> {item}
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
              <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '100%', height: '100%', border: '2px solid #768E1F', borderRadius: '3rem', zIndex: 0 }} />
              <div className="bezel-outer" style={{ 
                position: 'relative', 
                zIndex: 1, 
                borderRadius: '3rem', 
                overflow: 'hidden',
                boxShadow: isVideoHovered ? '0 30px 60px rgba(118,142,31,0.2)' : '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease'
              }}>
                <video 
                  ref={videoRef}
                  src="/abat training.mp4" 
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
                    <motion.button onClick={(e) => { e.stopPropagation(); if (videoRef.current) videoRef.current.currentTime -= 10; }} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><Rewind size={20} /></motion.button>
                    <motion.button onClick={(e) => { e.stopPropagation(); if (videoRef.current) videoRef.current.currentTime = 0; }} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><RotateCcw size={20} /></motion.button>
                    <motion.button onClick={(e) => { e.stopPropagation(); if (videoRef.current) videoRef.current.currentTime += 10; }} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><FastForward size={20} /></motion.button>
                  </div>

                  {/* Status Pill */}
                  <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '0.6rem 1.2rem', borderRadius: '100px', color: 'white', fontSize: '0.7rem', fontWeight: 800, display: 'flex', gap: '0.5rem' }}>
                    {isVideoHovered ? <><span>Audio On</span><div style={{ display: 'flex', gap: '2px' }}>{[1,2,3].map(i => <motion.div key={i} animate={{ height: [4, 10, 4] }} transition={{ repeat: Infinity, duration: 0.5, delay: i*0.1 }} style={{ width: '2px', backgroundColor: '#768E1F' }} />)}</div></> : <span>Hover to Unmute</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SHADOW TEACHER TRAINING SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '8rem', alignItems: 'center' }}>
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative' }}>
               <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '100%', height: '100%', border: '2px solid #F7B42C', borderRadius: '3rem', zIndex: 0 }} />
               <div className="bezel-outer" style={{ position: 'relative', zIndex: 1, borderRadius: '3rem', overflow: 'hidden', backgroundColor: '#1C1B1B' }}>
                  <div style={{ padding: '5rem 4rem', color: 'white', textAlign: 'center' }}>
                    <GraduationCap size={48} style={{ color: '#F7B42C', marginBottom: '2rem' }} />
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>Professional School Preparation</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', margin: 0 }}>Equipping individuals to navigate the classroom as structured support professionals.</p>
                  </div>
               </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ color: '#F7B42C', marginBottom: '2rem' }}><School size={40} /></div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, lineHeight: '1.1' }}>Shadow Teacher Training</h2>
              <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: '1.7', marginBottom: '3rem' }}>
                A professional preparation program for individuals working within school environments to support children with autism and neurodiversity.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#F7B42C', marginBottom: '1.5rem' }}>What You Learn</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                    {["Classroom behavior strategies", "Engagement techniques", "School communication", "Routine support", "Teacher coordination"].map(item => (
                      <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.95rem', color: '#333' }}>
                        <CheckCircle2 size={18} style={{ color: '#F7B42C', flexShrink: 0 }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#F7B42C', marginBottom: '1.5rem' }}>The Approach</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                    {["Classroom simulation", "Observation methods", "Guided application", "Continuous supervision"].map(item => (
                      <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.95rem', color: '#444' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F7B42C' }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ECOSYSTEM NARRATIVE */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', lineHeight: '1.2' }}>Building a Skilled <br /><span style={{ color: '#768E1F' }}>Support Ecosystem</span></h2>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.8' }}>
                        Autism support depends on more than services. It depends on people who can deliver structured, consistent, and informed support in real environments—homes, schools, and therapy centers.
                    </p>
                    <p style={{ fontSize: '1.2rem', color: '#1C1B1B', fontWeight: 700, lineHeight: '1.8' }}>
                        Our professional programs are designed to develop that capability. We focus on practical skills, not just theoretical learning.
                    </p>
                </div>
            </motion.div>
            <div style={{ backgroundColor: '#FAFAF7', padding: '4rem', borderRadius: '3rem', borderLeft: '4px solid #768E1F' }}>
                <Users size={48} style={{ color: '#768E1F', marginBottom: '2rem' }} />
                <p style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: '1.4', color: '#1C1B1B', margin: 0 }}>
                    "Our goal is to build professionals who can work reliably in real environments."
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW OUR TRAINING WORKS — ROADMAP */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FAFAF7', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#768E1F', marginBottom: '1.5rem' }}>
              The Training Model
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              How Our <span style={{ color: '#768E1F' }}>Training Works</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Our model is built on three core principles to ensure baseline competency and real-world readiness.
            </motion.p>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50px', left: '15%', right: '15%', height: '2px', borderTop: '2px dashed rgba(118,142,31,0.2)', zIndex: 0 }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6rem', position: 'relative', zIndex: 1 }}>
              {[
                { title: "Structured Learning", desc: "Clear modules, defined frameworks, and step-by-step progression.", icon: BookOpen },
                { title: "Practical Application", desc: "Real-world scenarios and direct implementation experience.", icon: Laptop },
                { title: "Supervised Development", desc: "Continuous feedback and guided improvement during training.", icon: ClipboardCheck }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: 'center' }}>
                  <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'white', border: `1px solid rgba(118,142,31,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <item.icon size={32} style={{ color: '#768E1F' }} strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO THIS IS FOR */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.1' }}>Who This <span style={{ color: '#768E1F' }}>Is For</span></h2>
              <p style={{ fontSize: '1.3rem', color: '#1C1B1B', fontWeight: 600, marginBottom: '3rem', lineHeight: '1.6' }}>
                No prior experience is required—only commitment to structured learning.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {[
                  "Individuals seeking a career in support",
                  "Educators and school support staff",
                  "Caregivers wanting professional skills",
                  "Psychology and education students",
                  "Anyone interested in structured work"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(118,142,31,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#768E1F', flexShrink: 0 }}><CheckCircle2 size={14} /></div>
                    <span style={{ fontSize: '1.05rem', color: '#444' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: '#FAFAF7', padding: '4rem', borderRadius: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#768E1F', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Where You'll Work</div>
              <div style={{ display: 'grid', gap: '1rem', textAlign: 'left' }}>
                {["Autism therapy centers", "Inclusive/Mainstream schools", "Home intervention programs", "Developmental services"].map(item => (
                  <div key={item} style={{ padding: '1rem 1.5rem', backgroundColor: 'white', borderRadius: '1rem', fontSize: '0.95rem', fontWeight: 800 }}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA — DUAL LAYOUT */}
      <section style={{ padding: '4rem 2rem 8rem 2rem', backgroundColor: '#FAFAF7', position: 'relative' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ backgroundColor: '#1C1B1B', borderRadius: '4rem', padding: '8rem 4rem', position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            
            <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-50%", right: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: '1.1' }}>Build your <br /><span style={{ color: '#768E1F' }}>Impact Portfolio</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', maxWidth: '450px', marginBottom: '3rem', lineHeight: '1.6' }}>
                Join structured training programs designed to prepare you for real-world impact in autism support.
              </p>
              
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(118,142,31,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#768E1F' }}><Plus size={20} /></div>
                  <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>ABAT Training</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(247,180,44,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F7B42C' }}><Users size={20} /></div>
                  <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>School Support</span>
                </div>
              </div>
            </motion.div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2rem', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <div style={{ color: '#768E1F', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '0.5rem' }}>Certification Pathway</div>
                    <div style={{ color: 'white', fontSize: '1.4rem', fontWeight: 800 }}>Apply for Training</div>
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1C1B1B' }}><ArrowRight size={24} /></div>
                </motion.div>
              </Link>

              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2rem', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <div style={{ color: '#F7B42C', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '0.5rem' }}>Direct Line</div>
                    <div style={{ color: 'white', fontSize: '1.4rem', fontWeight: 800 }}>Talk to Our Team</div>
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1C1B1B' }}><ArrowRight size={24} /></div>
                </motion.div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media (max-width: 968px) {
          .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
          h1 { font-size: 3rem !important; }
          h2 { font-size: 2.5rem !important; }
        }
      `}</style>
    </main>
  );
}
