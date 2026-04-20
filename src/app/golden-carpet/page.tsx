'use client';

import React, { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Users, 
  MessageCircle, 
  Sparkles, 
  ArrowRight, 
  Play,
  Heart,
  CheckCircle2,
  Share2,
  Mic2,
  Layers,
  Star,
  Quote,
  Rewind,
  FastForward,
  RotateCcw,
  Volume2,
  VolumeX,
  Plus
} from "lucide-react";
import Link from 'next/link';

export default function GoldenCarpetPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const testimonialVideoRef = useRef<HTMLVideoElement>(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main style={{ backgroundColor: "#030504", color: "white" }}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 8rem', backgroundColor: '#030504', position: 'relative', overflow: 'hidden' }}>
        {/* Cinematic Gold Glows */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60vw', height: '100vh', background: 'radial-gradient(circle, rgba(225,158,21,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '50vw', height: '80vh', background: 'radial-gradient(circle, rgba(225,158,21,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '6rem', alignItems: 'center' }}>
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div variants={itemVariants} style={{ 
                fontFamily: "var(--font-serif), Georgia, serif", 
                color: "#e19e15", 
                fontSize: "1.5rem", 
                fontWeight: 600, 
                marginBottom: '2rem',
                letterSpacing: '0.02em'
              }}>
                Golden Carpet
              </motion.div>
              <motion.h1 variants={itemVariants} style={{ 
                marginBottom: '2.5rem', 
                fontSize: 'clamp(3rem, 7vw, 5.5rem)', 
                lineHeight: '1.05', 
                letterSpacing: '-0.03em',
                color: 'white'
              }}>
                Where Every <br />Voice Finds its <br /><span style={{ color: '#e19e15' }}>Moment</span>
              </motion.h1>
              <motion.p variants={itemVariants} style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500, lineHeight: '1.5', marginBottom: '2.5rem' }}>
                Not everyone gets their moment to be seen, heard, and understood. Golden Carpet exists to change that.
              </motion.p>
              <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem' }}>
                 <Link href="/events/register">
                    <button style={{ backgroundColor: "#e19e15", color: "#030504", padding: "1.2rem 3rem", borderRadius: "100px", fontWeight: 900, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", border: "none", cursor: 'pointer' }}>
                        Join Next Session
                    </button>
                 </Link>
              </motion.div>
            </motion.div>

            {/* Interactive Video Embed */}
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
               animate={{ opacity: 1, scale: 1 }}
               style={{ position: 'relative', cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'absolute', top: '5%', right: '-5%', width: '100%', height: '100%', border: '1px solid #e19e15', borderRadius: '3.5rem', zIndex: 0 }} />
              <div className="bezel-outer" style={{ 
                position: 'relative', 
                zIndex: 1, 
                borderRadius: '3rem', 
                overflow: 'hidden',
                backgroundColor: '#000',
                boxShadow: isVideoHovered ? '0 30px 60px rgba(225,158,21,0.2)' : '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'all 0.4s ease',
                width: '100%',
                maxWidth: '400px'
              }}>
                <video 
                  ref={videoRef}
                  src="/golden carpet/goldencapret introduction.mp4" 
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
                  <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '0.6rem 1.2rem', borderRadius: '100px', color: 'white', fontSize: '0.7rem', fontWeight: 800, display: 'flex', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {isVideoHovered ? <Volume2 size={14} style={{ color: '#e19e15' }} /> : <VolumeX size={14} />}
                    {isVideoHovered ? 'Audio On' : 'Hover to Unmute'}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS GOLDEN CARPET? */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#030504' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                 <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem', color: 'white' }}>What is <span style={{ color: '#e19e15' }}>Golden Carpet?</span></h2>
                 <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '3rem' }}>
                    Golden Carpet is a recurring platform that brings together parents, professionals, educators, and advocates in the autism space. This is not a formal seminar — this is a space where real voices are heard and valued.
                 </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '4rem' }}>
                    {["Open conversations", "Shared experiences", "Practical learning", "Real visibility"].map(t => (
                        <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700, color: '#e19e15' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e19e15' }} /> {t}
                        </div>
                    ))}
                 </div>
                 <div style={{ padding: '3rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(225,158,21,0.1)', borderRadius: '3rem' }}>
                    <MessageCircle size={32} style={{ color: '#e19e15', marginBottom: '1.5rem' }} />
                    <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', lineHeight: '1.4', margin: 0, fontStyle: 'italic' }}>
                        "The journey is never solitary when shared in the right circle."
                    </p>
                 </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative' }}>
                 <div style={{ position: 'absolute', inset: '-1rem', border: '1px solid rgba(225,158,21,0.2)', borderRadius: '3.5rem', zIndex: 0 }} />
                 <img src="/images/gc8.jpg" alt="Community gathering" style={{ width: '100%', borderRadius: '2.5rem', position: 'relative', zIndex: 1, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }} />
              </motion.div>
           </div>
        </div>
      </section>

      {/* 3. WHY IT EXISTS (Cinematic Grid) */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'rgba(225,158,21,0.02)' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>Why Golden Carpet <span style={{ color: '#e19e15' }}>Exists</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)' }}>Because important moments shouldn't go unnoticed.</p>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ backgroundColor: '#111', padding: '5.5rem', borderRadius: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05 }}>
                    <img src="/images/gc6.jpg" alt="Background pattern" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <h3 style={{ fontSize: '2rem', marginBottom: '3rem', color: '#e19e15', position: 'relative' }}>The Gap We Bridge</h3>
                 <div style={{ display: 'grid', gap: '2rem', position: 'relative' }}>
                    {[
                        { t: "Isolation", d: "Parents struggle quietly and professionals work in isolation." },
                        { t: "Silence", d: "Deeply important stories often remain untold." },
                        { t: "Complexity", d: "Urgent questions remain unanswered for years." }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'start' }}>
                            <div style={{ color: '#e19e15', fontSize: '0.8rem', fontWeight: 900 }}>0{i+1}</div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>{item.t}</h4>
                                <p style={{ color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.d}</p>
                            </div>
                        </div>
                    ))}
                 </div>
              </div>
              <div style={{ display: 'grid', gap: '2rem' }}>
                 <div style={{ position: 'relative', borderRadius: '3.5rem', overflow: 'hidden', height: '300px' }}>
                    <img src="/images/gc6.jpg" alt="Speak freely" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(225,158,21,0.9)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem', color: 'white' }}>
                       <h4 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem' }}>Speak Freely</h4>
                       <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>Parents can speak without hesitation and share knowledge openly.</p>
                    </div>
                 </div>
                 <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '3.5rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <img src="/images/gc4.jpg" alt="Insight" style={{ width: '100px', height: '100px', borderRadius: '1.5rem', objectFit: 'cover' }} />
                    <div>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: '#e19e15' }}>Visible & Real</h4>
                        <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>It brings everything into one place — visible, connected, and real.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. WHAT HAPPENS (Horizontal Flow) */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#030504' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
              <h2 style={{ fontSize: '3.5rem', color: 'white' }}>What Happens <br />at <span style={{ color: '#e19e15' }}>Golden Carpet</span></h2>
              <p style={{ maxWidth: '400px', color: 'rgba(255,255,255,0.5)', textAlign: 'right', fontSize: '1.1rem' }}>Meaningful sessions designed to be engaging and interactive for every participant.</p>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {[
                  { title: "Open Conversations", icon: Share2, desc: "Parents and caregivers share real experiences, challenges, and learnings.", img: "/images/gc9.jpg" },
                  { title: "Expert Insights", icon: Mic2, desc: "Therapists and professionals break down practical approaches and strategies.", img: "/images/gc4.jpg" },
                  { title: "Interactive Discussions", icon: Users, desc: "Participants ask questions, exchange ideas, and learn from each other.", img: "/images/gc7.jpg" },
                  { title: "Showcase & Launches", icon: Sparkles, desc: "New initiatives, tools, or products are introduced to the community.", img: "/images/goldencarpet.jpg" }
              ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                      <img src={item.img} alt={item.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '1.5rem', marginBottom: '2rem' }} />
                      <item.icon size={24} style={{ color: '#e19e15', marginBottom: '1.5rem' }} />
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', lineHeight: '1.3', color: 'white' }}>{item.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                  </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. THE EXPERIENCE (Magazine Style) */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#030504' }}>
        <div className="container">
           <div style={{ backgroundColor: '#111', borderRadius: '4rem', padding: '8rem 6rem', position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem', alignItems: 'center' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1 }}>
                 <img src="/images/gc5.jpg" alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                 <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem', color: 'white' }}>The <span style={{ color: '#e19e15' }}>Experience</span></h2>
                 <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 800, marginBottom: '3rem', lineHeight: '1.4' }}>
                     Golden Carpet is designed to feel: <br />
                     <span style={{ color: '#e19e15' }}>Safe, not intimidating.</span>
                 </p>
                 <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
                     {["Open, not structured rigidly", "Real, not overly formal", "Participation, not just listening"].map(p => (
                         <div key={p} style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                             <CheckCircle2 size={18} style={{ color: '#e19e15' }} /> {p}
                         </div>
                     ))}
                 </div>
                 <p style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: '1.4', margin: 0, fontStyle: 'italic', color: 'white' }}>
                    You just need to <span style={{ color: '#e19e15' }}>show up.</span>
                 </p>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative', zIndex: 1 }}>
                 <img src="/images/gc9.jpg" alt="Experience" style={{ width: '100%', borderRadius: '3rem', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }} />
                 <div style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: '#e19e15', color: '#030504', padding: '0.8rem 1.5rem', borderRadius: '1rem', fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Live Connection
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 6. WHO IS IT FOR & WHAT MAKES IT DIFFERENT */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#030504' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ padding: '5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '3.5rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
                    <img src="/images/gc7.jpg" alt="BG" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div style={{ position: 'relative', zIndex: 1 }}>
                    <Users size={32} style={{ color: '#e19e15', marginBottom: '2.5rem' }} />
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', color: 'white' }}>Who is it For?</h3>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {["Parents and caregivers", "Individuals exploring support", "Therapists and professionals", "Educators and institutions"].map(u => (
                            <div key={u} style={{ fontSize: '1.15rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>
                                <ArrowRight size={18} style={{ color: '#e19e15', marginRight: '1rem' }} /> {u}
                            </div>
                        ))}
                    </div>
                 </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ padding: '5rem', backgroundColor: 'rgba(225,158,21,0.06)', borderRadius: '3.5rem', border: '1px solid rgba(225,158,21,0.1)', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
                    <img src="/images/gc3.jpg" alt="BG" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div style={{ position: 'relative', zIndex: 1 }}>
                    <Layers size={32} style={{ color: '#e19e15', marginBottom: '2.5rem' }} />
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', color: 'white' }}>What Makes It Different?</h3>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', marginBottom: '3rem' }}>
                        Most platforms focus only on awareness or services. Golden Carpet brings together **Real People, Real Experiences, and Real Solutions** in a continuously growing community platform.
                    </p>
                    <div style={{ padding: '1.5rem 2.5rem', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '1.5rem', display: 'inline-block', fontWeight: 900, color: '#e19e15', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
                        A Movement, Not Just an Event.
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 8. GLIMPSES (HOMEPAGE GALLERY CLONE) */}
      <section style={{ padding: "var(--section-gap) 2rem", backgroundColor: "#030504" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "white" }}>Glimpses of <span style={{ color: '#e19e15' }}>Golden Carpet</span></h2>
            <p style={{ maxWidth: "480px", color: "rgba(255,255,255,0.5)", lineHeight: "1.8", textAlign: "right" }}>
               Moments of conversation, connection, and shared understanding from our past sessions.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "320px 260px 300px",
            gap: "1.5rem",
          }}>
            {[
              { src: "/images/goldencarpet.jpg", label: "Golden Carpet — Group Session", col: "1", row: "1" },
              { src: "/images/gc6.jpg", label: "Team at the Venue", col: "2", row: "1" },
              { src: "/images/gc9.jpg", label: "Community Circle", col: "3", row: "1" },
            ].map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} style={{ gridColumn: img.col, gridRow: img.row, borderRadius: "2rem", overflow: "hidden", position: "relative", backgroundColor: "#111" }}>
                <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                  <span style={{ display: "inline-block", padding: "0.4rem 1rem", backgroundColor: "#e19e15", color: "#030504", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.02 }} style={{ gridColumn: "1 / 3", gridRow: "2", borderRadius: "2rem", overflow: "hidden", position: "relative", backgroundColor: "#111" }}>
              <img src="/images/gc7.jpg" alt="Golden Carpet audience" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                <span style={{ display: "inline-block", padding: "0.4rem 1rem", backgroundColor: "#e19e15", color: "#030504", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 900, textTransform: "uppercase" }}>
                  Community Gathering
                </span>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} style={{ gridColumn: "3", gridRow: "2", borderRadius: "2rem", overflow: "hidden", position: "relative", backgroundColor: "#111" }}>
              <img src="/images/gc5.jpg" alt="Panel discussion" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                <span style={{ display: "inline-block", padding: "0.4rem 1rem", backgroundColor: "#e19e15", color: "#030504", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 900, textTransform: "uppercase" }}>
                  Panel Discussion
                </span>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} style={{ gridColumn: "1", gridRow: "3", borderRadius: "2rem", overflow: "hidden", position: "relative", backgroundColor: "#111" }}>
              <img src="/images/gc3.jpg" alt="Child speaking" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                <span style={{ display: "inline-block", padding: "0.4rem 1rem", backgroundColor: "#e19e15", color: "#030504", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 900, textTransform: "uppercase" }}>
                  Voices Heard
                </span>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} style={{ gridColumn: "2 / 4", gridRow: "3", borderRadius: "2rem", overflow: "hidden", position: "relative", backgroundColor: "#111" }}>
              <img src="/images/gc4.jpg" alt="Speaker at event" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                <span style={{ display: "inline-block", padding: "0.4rem 1rem", backgroundColor: "#e19e15", color: "#030504", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 900, textTransform: "uppercase" }}>
                  Expert Insight Sessions
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (HOMEPAGE LAYOUT - DARK THEME) */}
      <section style={{ padding: "var(--section-gap) 2rem", backgroundColor: "#030504", position: "relative" }}>
         <div className="container" style={{ position: "relative", zIndex: 1 }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "8rem" }}>
              {/* Left: Quote & Context */}
              <div>
                <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "white", marginBottom: "2.5rem", lineHeight: "1.2", letterSpacing: "-0.03em" }}>
                  Voices of the <span style={{ color: "#e19e15" }}>Community</span>
                </h2>
                <div style={{ position: "relative", paddingLeft: "3rem" }}>
                  <span style={{ position: "absolute", top: "-10px", left: 0, fontSize: "6rem", color: "rgba(225,158,21,0.3)", fontFamily: "Georgia, serif", lineHeight: 1 }}>“</span>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.4rem", lineHeight: "1.8", fontStyle: "italic", marginBottom: "1.5rem" }}>
                    Understanding autism begins with listening. Listening to parents, professionals, and most importantly, to the unique voices and experiences of autistic individuals.
                  </p>
                  <div style={{ fontSize: "1rem", fontWeight: 900, color: "#e19e15", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    — Dr. Ayasha Shrestha
                  </div>
                </div>
              </div>

              {/* Right: Interactive Video Testimonial */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <motion.div 
                  onMouseEnter={() => {
                    setIsTestimonialHovered(true);
                    if (testimonialVideoRef.current) {
                      testimonialVideoRef.current.muted = false;
                      testimonialVideoRef.current.play().catch(() => {});
                    }
                  }}
                  onMouseLeave={() => {
                    setIsTestimonialHovered(false);
                    if (testimonialVideoRef.current) testimonialVideoRef.current.muted = true;
                  }}
                  style={{ 
                    borderRadius: "2rem", overflow: "hidden", position: "relative", backgroundColor: "#030504", 
                    border: "1px solid rgba(225,158,21,0.2)",
                    width: '100%',
                    maxWidth: '500px',
                    boxShadow: isTestimonialHovered ? "0 30px 60px rgba(225,158,21,0.2)" : "0 20px 40px rgba(0,0,0,0.5)",
                    transition: 'all 0.4s ease',
                    cursor: 'pointer'
                  }}
                >
                  <video 
                    ref={testimonialVideoRef}
                    src="/images/experience.mp4" 
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }} 
                  />

                  {/* Audio & Playback Controls Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.8rem',
                    width: '100%',
                    pointerEvents: 'none',
                    opacity: isTestimonialHovered ? 1 : 0.6,
                    transition: 'opacity 0.3s ease',
                    zIndex: 10
                  }}>
                    {/* Playback Buttons */}
                    <div style={{ 
                      display: 'flex', 
                      gap: '1rem', 
                      pointerEvents: 'auto',
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.5rem 1rem',
                      borderRadius: '100px',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <motion.button onClick={(e) => { e.stopPropagation(); if (testimonialVideoRef.current) testimonialVideoRef.current.currentTime -= 10; }} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><Rewind size={18} /></motion.button>
                      <motion.button onClick={(e) => { e.stopPropagation(); if (testimonialVideoRef.current) testimonialVideoRef.current.currentTime = 0; }} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><RotateCcw size={18} /></motion.button>
                      <motion.button onClick={(e) => { e.stopPropagation(); if (testimonialVideoRef.current) testimonialVideoRef.current.currentTime += 10; }} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><FastForward size={18} /></motion.button>
                    </div>

                    {/* Status Pill */}
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '0.5rem 1rem', borderRadius: '100px', color: 'white', fontSize: '0.65rem', fontWeight: 800, display: 'flex', gap: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {isTestimonialHovered ? <Volume2 size={12} style={{ color: '#e19e15' }} /> : <VolumeX size={12} />}
                      {isTestimonialHovered ? 'Audio On' : 'Hover to Unmute'}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div style={{ columnWidth: "400px", columnGap: "2rem" }}>
                {[
                    { name: "Khilendra Gurung", role: "Parent", text: "The event was very helpful. We learned a lot from other parents’ experiences, the more we hear, the more we understand." },
                    { name: "Santosh Raut Kshetri", role: "Parent", text: "It was a very good and meaningful event that offered valuable insights and opportunities to connect." },
                    { name: "Neeru Yadav", role: "Parent", text: "I stayed for a long time, enjoying the conversations and discussions, which gave me a clearer understanding of many things." },
                    { name: "Anju Gharti Sherpa", role: "Parent", text: "It was highly informative and gave me a clear understanding of many practical aspects. Valuable guidance for real-life." },
                    { name: "Kriti Karn", role: "Specialist", text: "This type of event is incredibly important for parents. Many families don’t have easy access to services." },
                    { name: "Amina Basnet Timsina", role: "Community Member", text: "Programs like Golden Carpet beautifully reflect their vision of building a strong, compassionate community." }
                ].map((t, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} style={{ breakInside: "avoid", marginBottom: "2rem", backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "2rem", padding: "3rem", display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: "3rem", color: "rgba(225,158,21,0.2)", lineHeight: 0.5, marginBottom: "1.5rem", fontFamily: "serif" }}>“</div>
                    <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.8", fontSize: "1rem", marginBottom: "2.5rem" }}>{t.text}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "auto" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(225,158,21,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#e19e15", fontWeight: 900, fontSize: "1rem" }}>{t.name[0]}</div>
                        <div>
                            <h4 style={{ color: "white", fontSize: "1rem", marginBottom: "0.1rem" }}>{t.name}</h4>
                            <div style={{ color: "#e19e15", fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 800 }}>{t.role}</div>
                        </div>
                    </div>
                </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* 10. FINAL CTA (HOMEPAGE BANNER LAYOUT) */}
      <section style={{ padding: "4rem 2rem 8rem 2rem", backgroundColor: "#030504", position: "relative" }}>
        <div className="container" style={{ position: "relative" }}>
          
          <div style={{ backgroundColor: "#111", borderRadius: "3.5rem", padding: "6rem 4rem", position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", border: '1px solid rgba(225,158,21,0.1)' }}>
            
            {/* Cinematic gold glows inside the card */}
            <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(225,158,21,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-50%", right: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(225,158,21,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />

            {/* Left side text */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ color: "white", fontSize: "clamp(2.5rem, 4vw, 4rem)", marginBottom: "1.5rem", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                Be Part of the <br /><span style={{ color: "#e19e15" }}>Conversation</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: "1.7", marginBottom: "3rem", maxWidth: "450px" }}>
                Golden Carpet is a continuously growing community platform open to everyone who wants to learn, share, or connect.
              </p>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "rgba(225,158,21,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#e19e15" }}>
                    <Plus size={18} />
                  </div>
                  <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>Support</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "rgba(225,158,21,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#e19e15" }}>
                    <Users size={18} />
                  </div>
                  <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>Community</span>
                </div>
              </div>
            </div>

            {/* Right side interaction cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", zIndex: 1 }}>
              <Link href="/events/register" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} transition={{ duration: 0.2 }} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <div style={{ color: "#e19e15", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>For Families & Individuals</div>
                    <div style={{ color: "white", fontSize: "1.3rem", fontWeight: 800 }}>Register for Session</div>
                  </div>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#030504", flexShrink: 0 }}>
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </Link>
              
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} transition={{ duration: 0.2 }} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <div style={{ color: "#e19e15", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>For Partners & Collaborators</div>
                    <div style={{ color: "white", fontSize: "1.3rem", fontWeight: 800 }}>Partner with Golden Carpet</div>
                  </div>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#030504", flexShrink: 0 }}>
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </Link>
            </div>
            
          </div>

          <div style={{ textAlign: 'center', marginTop: '8rem', maxWidth: '700px', margin: '8rem auto 0' }}>
             <p style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: '1.5', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
                "Golden Carpet is about creating space — for voices, for learning, for connection. Because support does not grow in isolation. It grows when people come together."
             </p>
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
        }
      `}</style>
    </main>
  );
}
