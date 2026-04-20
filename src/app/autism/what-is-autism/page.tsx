'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { 
  Heart, 
  Brain, 
  MessageCircle, 
  Users, 
  Sparkles, 
  Search, 
  MapPin, 
  Lightbulb, 
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Ear
} from "lucide-react";
import Link from 'next/link';

export default function WhatIsAutismPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main style={{ backgroundColor: "#FAFAF7" }}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 8rem', backgroundColor: '#FAFAF7', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '60vh', background: 'radial-gradient(circle, rgba(247,180,44,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ maxWidth: '900px' }}>
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
              Education & Understanding
            </motion.div>
            <motion.h1 variants={itemVariants} style={{ marginBottom: '2.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              What is <span style={{ color: '#F7B42C' }}>Autism?</span>
            </motion.h1>
            <motion.p variants={itemVariants} style={{ fontSize: '1.4rem', color: '#1C1B1B', fontWeight: 600, lineHeight: '1.5', marginBottom: '2.5rem' }}>
              Autism is a natural variation in how a person experiences and interacts with the world.
            </motion.p>
            <motion.p variants={itemVariants} style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.7', marginBottom: '3rem', maxWidth: '800px' }}>
              It affects how individuals communicate, process information, build relationships, and respond to their surroundings. Autism is not an illness, and it is not something that needs to be “fixed.” It is a lifelong neurodevelopmental condition — one that brings both challenges and unique strengths.
            </motion.p>
            <motion.div variants={itemVariants} style={{ padding: '2rem', backgroundColor: 'white', borderLeft: '4px solid #F7B42C', borderRadius: '0.5rem 2rem 2rem 0.5rem' }}>
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem', color: '#1C1B1B' }}>
                    "At the Sunflower Institute for Autism, we understand autism as a different way of learning, feeling, and engaging with the world, not a limitation of potential."
                </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. UNDERSTANDING AUTISM SIMPLY */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', bottom: '15%', left: '-10%', width: '100%', height: '100%', border: '2px solid rgba(118,142,31,0.2)', borderRadius: '3rem', zIndex: 0 }} />
                    <div className="bezel-outer" style={{ position: 'relative', zIndex: 1, backgroundColor: '#FAFAF7', padding: '4rem', borderRadius: '3rem', textAlign: 'center' }}>
                        <Users size={48} style={{ color: '#768E1F', marginBottom: '2rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Spectrum of Diversity</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>
                            Every autistic individual is different. Some communicate verbally, others through gestures or devices. Some live independently, while others need significant support.
                        </p>
                    </div>
                </div>
             </motion.div>
             <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Understanding Autism <span style={{ color: '#768E1F' }}>Simply</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                    This is why autism is often referred to as a <span style={{ fontWeight: 800 }}>spectrum</span> — because it includes a wide range of abilities, needs, and experiences.
                </p>
                <div style={{ padding: '1.5rem 2rem', backgroundColor: '#F0F4E8', borderRadius: '1.25rem', display: 'inline-block', fontWeight: 800, color: '#768E1F' }}>
                    There is no single way autism looks.
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KEY AREAS AFFECTED */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FAFAF7' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>How Autism Affects Individuals</h2>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>Autism typically influences three key areas of development:</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { 
                 title: "Communication", 
                 icon: MessageCircle, 
                 points: ["Delayed speech patterns", "Difficulty expressing needs", "Limited eye contact", "Non-verbal preferences"] 
               },
               { 
                 title: "Social Interaction", 
                 icon: Heart, 
                 points: ["Understanding social cues", "Interest in peer interaction", "Preference for routine", "Different ways of bonding"] 
               },
               { 
                 title: "Behavior & Sensory", 
                 icon: Ear, 
                 points: ["Repetitive movements", "Attachment to routines", "Sensory sensitivities", "Deep interest focus"] 
               }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 style={{ backgroundColor: 'white', padding: '3rem 2.5rem', borderRadius: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}
               >
                 <item.icon size={32} style={{ color: '#F7B42C', marginBottom: '2rem' }} />
                 <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>{item.title}</h4>
                 <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                    {item.points.map(p => (
                        <li key={p} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', color: '#555' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F7B42C', marginTop: '0.6rem' }} /> {p}
                        </li>
                    ))}
                 </ul>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. INDIVIDUALITY NARRATIVE */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'rgba(247, 180, 44, 0.05)', color: '#1C1B1B' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Autism is <span style={{ color: '#F7B42C' }}>Not One Thing</span></h2>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.7', color: '#555', marginBottom: '3rem' }}>
                Two children with autism can have completely different behaviors, abilities, and needs. What works for one may not work for another.
            </p>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F7B42C' }}>
                Every child is understood as an individual — not a category.
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CAUSES & SIGNS GRID */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {/* Causes Card */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ padding: '4rem', backgroundColor: '#FAFAF7', borderRadius: '3rem' }}>
               <Brain size={40} style={{ color: '#768E1F', marginBottom: '2.5rem' }} />
               <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>What Causes Autism?</h2>
               <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '2rem' }}>
                 Autism is not caused by parenting or environment. Research shows it is influenced by a combination of:
               </p>
               <div style={{ display: 'grid', gap: '1rem' }}>
                  {["Genetic factors", "Brain development differences", "Neurobiological variations"].map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700, color: '#768E1F' }}>
                        <CheckCircle2 size={18} /> {f}
                    </div>
                  ))}
               </div>
               <p style={{ marginTop: '2.5rem', color: '#666', fontSize: '0.9rem' }}>
                 It is something a child is born with, even if signs appear later.
               </p>
            </motion.div>

            {/* Signs Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ padding: '4rem', backgroundColor: '#F0F4E8', borderRadius: '3rem' }}>
               <Search size={40} style={{ color: '#768E1F', marginBottom: '2.5rem' }} />
               <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>When is it Noticeable?</h2>
               <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '2rem' }}>
                 Early signs can appear as early as 12–24 months. Common observations may include:
               </p>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {["Delayed speech", "Reduced response to name", "Limited eye contact", "Repetitive behaviors"].map(s => (
                    <div key={s} style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '1rem', fontSize: '0.9rem', fontWeight: 800, textAlign: 'center' }}>
                        {s}
                    </div>
                  ))}
               </div>
               <p style={{ marginTop: '2.5rem', color: '#768E1F', fontWeight: 700 }}>
                 Early identification allows for early support, which significantly improves functioning.
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. STRENGTHS SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FAFAF7' }}>
        <div className="container">
           <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Strengths in <span style={{ color: '#F7B42C' }}>Autism</span></h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '5rem' }}>Autism is not defined only by challenges. Many individuals show unique capabilities:</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
                 {[
                   { label: "Deep Focus", icon: Zap },
                   { label: "Detail Oriented", icon: Search },
                   { label: "Creativity", icon: Sparkles },
                   { label: "Direct Honesty", icon: ShieldCheck },
                   { label: "Memory", icon: Lightbulb }
                 ].map((s, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        style={{ padding: '2rem 1rem', backgroundColor: 'white', borderRadius: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
                    >
                        <s.icon size={24} style={{ color: '#F7B42C', marginBottom: '1.5rem' }} />
                        <div style={{ fontSize: '0.9rem', fontWeight: 900 }}>{s.label}</div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 7. WHY SUPPORT MATTERS */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.1' }}>Why Support <span style={{ color: '#768E1F' }}>Matters</span></h2>
                <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: '1.8', marginBottom: '3rem' }}>
                    Autism does not need to be “cured” — but individuals may need structured support to navigate the world more comfortably.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    {["Communication", "Daily Living", "Emotional Regulation", "Independence"].map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 700 }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#768E1F' }} />
                            {item}
                        </div>
                    ))}
                </div>
             </motion.div>
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ padding: '4rem', backgroundColor: '#FAFAF7', borderRadius: '3rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1C1B1B', lineHeight: '1.4', margin: 0 }}>
                    "The goal is not to change who they are — but to help them function, grow, and live with confidence."
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 8. REALITY IN NEPAL */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ backgroundColor: 'rgba(118,142,31,0.05)', borderRadius: '4rem', padding: '6rem 5rem', color: '#1C1B1B', border: '1px solid rgba(118,142,31,0.1)' }}>
             <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '6rem', alignItems: 'center' }}>
                <div>
                    <MapPin size={48} style={{ color: '#768E1F', marginBottom: '2rem' }} />
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>The Reality in <span style={{ color: '#768E1F' }}>Nepal</span></h2>
                    <p style={{ color: '#666', lineHeight: '1.7' }}>
                        Awareness is increasing, but access to structured support is still a significant challenge for many families.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {[
                        { t: "Diagnosis", d: "Delayed screening due to limited resources." },
                        { t: "Therapy", d: "Highly limited options for evidence-based care." },
                        { t: "Social", d: "Stigma and misunderstanding in community." },
                        { t: "Bridge", d: "SIA exists to close these professional gaps." }
                    ].map((item, i) => (
                        <div key={i} style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                            <div style={{ fontWeight: 800, color: '#768E1F', marginBottom: '0.5rem' }}>{item.t}</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>{item.d}</div>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 9. OUR APPROACH */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <Sparkles size={40} style={{ color: '#F7B42C', marginBottom: '2rem' }} />
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Our <span style={{ color: '#F7B42C' }}>Approach</span></h2>
                    <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: '1.8', marginBottom: '3rem' }}>
                        We approach autism with clarity, structure, and deep respect for individuality. We work with the entire support system.
                    </p>
                    <div style={{ display: 'grid', gap: '1.25rem' }}>
                        {[
                            "Building communication and connection",
                            "Supporting families alongside the child",
                            "Creating predictable learning environments",
                            "Developing independence step by step"
                        ].map(t => (
                            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#FAFAF7', padding: '1.25rem 2rem', borderRadius: '1rem', fontWeight: 800 }}>
                                <CheckCircle2 size={18} style={{ color: '#F7B42C' }} /> {t}
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative' }}>
                    {/* Visual card for approach */}
                    <div className="bezel-outer" style={{ backgroundColor: '#FAFAF7', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '3rem', padding: '5rem 4rem', textAlign: 'center', color: '#1C1B1B' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Moving Forward</h3>
                        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
                            If you are exploring autism for your child or a loved one, you are not alone. Understanding is the first step. Support is the next.
                        </p>
                        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                            <p style={{ fontStyle: 'italic', color: '#F7B42C', fontWeight: 800, margin: 0 }}>
                                At SIA, we are here to guide you through both.
                            </p>
                        </div>
                    </div>
                </motion.div>
           </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section style={{ padding: '0 2rem 8rem 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ backgroundColor: '#FAFAF7', borderRadius: '4rem', padding: '8rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '140%', height: '200%', background: 'radial-gradient(circle, rgba(118,142,31,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 style={{ color: '#1C1B1B', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>Concerned About Your <br />Child’s Development?</h2>
              <p style={{ color: '#666', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
                Understanding early signs can make a meaningful difference.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <Link href="/autism/signs">
                  <button style={{ backgroundColor: '#1C1B1B', color: 'white', padding: '1.5rem 3.5rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    Know the Signs <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="/contact">
                  <button style={{ border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'white', color: '#1C1B1B', padding: '1.5rem 3.5rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em', cursor: 'pointer' }}>
                    Talk to Our Team
                  </button>
                </Link>
              </div>
            </motion.div>
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
