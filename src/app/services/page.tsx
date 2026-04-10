'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Users, BookOpen, ClipboardCheck, Sparkles, HeartHandshake, GraduationCap, MapPin, Calendar, Ticket } from "lucide-react";
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 6rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.4rem 1rem',
            backgroundColor: 'rgba(247, 180, 44, 0.1)',
            color: '#F7B42C',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '1.5rem'
          }}>
            Our Services
          </div>
          <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Support designed <br /> <span style={{ color: '#F7B42C' }}>around real life.</span></h1>
          <p style={{ fontSize: '1.4rem', color: '#323030', fontWeight: 600, maxWidth: '700px', margin: '0 auto 1.5rem', lineHeight: '1.4' }}>
            Structured assessments, therapy, training, and guidance for individuals with autism and hidden disabilities.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            We provide practical, evidence-informed support for families and professionals — focused on clarity, consistency, and meaningful outcomes.
          </p>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section style={{ padding: '4rem 2rem 8rem', backgroundColor: '#FDFCFB' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>How our services work</h2>
             <p style={{ fontSize: '1.25rem', color: '#323030', lineHeight: '1.8', marginBottom: '2rem' }}>
               Every individual is different. Every family has different needs. 
             </p>
             <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
               Our services are designed to provide clear direction, structured support, and practical strategies that work in real life — not just in theory. We focus on understanding the individual first, then building the right support system around them.
             </p>
          </div>
        </div>
      </section>

      {/* 3. FOR FAMILIES */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.6fr 1.4fr', gap: '6rem' }}>
            <div>
              <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgba(247, 180, 44, 0.1)', 
                    color: '#F7B42C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2.5rem'
                  }}>
                <Users size={28} />
              </div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>For Families</h2>
              <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                We support families from the first question to long-term care planning — with clarity at every step.
              </p>
              <div style={{ fontStyle: 'italic', color: '#999', fontSize: '1rem' }}>
                "Our goal is to help families feel supported, informed, and confident in every stage of the journey."
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { 
                  title: 'Assessments', 
                  icon: ClipboardCheck,
                  desc: 'Structured evaluations to understand strengths, challenges, and support needs. We focus on clear insights that guide meaningful next steps — not just reports.'
                },
                { 
                  title: 'Therapy & Intervention', 
                  icon: Sparkles,
                  desc: 'Personalised therapy programs focused on communication, behaviour, emotional development, and daily living skills. Each plan is designed around real-life improvement.'
                },
                { 
                  title: 'Parent & Family Support', 
                  icon: HeartHandshake,
                  desc: 'Guidance and practical strategies to help families navigate daily challenges with confidence. We work closely with caregivers to ensure consistency.'
                }
              ].map((service, i) => (
                <div key={i} className="bezel-outer" style={{ backgroundColor: 'var(--canvas)' }}>
                  <div className="bezel-inner" style={{ padding: '3rem', height: '100%' }}>
                    <div style={{ color: '#F7B42C', marginBottom: '1.5rem' }}><service.icon size={24} /></div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{service.title}</h3>
                    <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{service.desc}</p>
                  </div>
                </div>
              ))}
              
              {/* Family External CTA */}
              <a href="https://abatherapynepal.com/therapy" target="_blank" className="bezel-outer" style={{ backgroundColor: '#FDFCFB', textDecoration: 'none' }}>
                <div className="bezel-inner" style={{ padding: '3rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '2px dashed rgba(247, 180, 44, 0.3)', background: 'transparent' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#323030' }}>Explore Clinical Services</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: '#F7B42C', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                    Visit ABA Therapy Nepal <ArrowRight size={18} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOR PROFESSIONALS */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { 
                  title: 'Training Programs', 
                  icon: GraduationCap,
                  desc: 'Structured training for teachers, therapists, and support staff. Focused on practical tools, real scenarios, and applied understanding.'
                },
                { 
                  title: 'Inclusion Support', 
                  icon: Sparkles,
                  desc: 'We help schools and workplaces design systems that support neurodiversity in meaningful ways. Not just awareness — but real implementation.'
                },
                { 
                  title: 'Workshops & Awareness', 
                  icon: Users,
                  desc: 'Interactive sessions designed to build understanding, reduce stigma, and improve real-world practice for organisations.'
                }
              ].map((service, i) => (
                <div key={i} className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'white' }}>
                  <div className="bezel-inner" style={{ padding: '3rem', height: '100%', border: 'none', backgroundColor: 'transparent' }}>
                    <div style={{ color: '#768E1F', marginBottom: '1.5rem' }}><service.icon size={24} /></div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'white' }}>{service.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>{service.desc}</p>
                  </div>
                </div>
              ))}

              {/* Professional External CTA */}
              <a href="https://abatherapynepal.com/" target="_blank" className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.08)', textDecoration: 'none' }}>
                <div className="bezel-inner" style={{ padding: '3rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '2px dashed rgba(255, 255, 255, 0.1)', background: 'transparent' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Explore Professional Systems</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: '#768E1F', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                    Visit Corporate Portal <ArrowRight size={18} />
                  </div>
                </div>
              </a>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgba(118, 142, 31, 0.2)', 
                    color: '#768E1F',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2.5rem'
                  }}>
                <BookOpen size={28} />
              </div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>For Professionals</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                We work with educators, therapists, and organisations to build practical, inclusive, and effective environments.
              </p>
              <div style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.3)', fontSize: '1rem' }}>
                "We help professionals move from awareness to action — with tools that actually work in practice."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Our approach</h2>
            <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              We don’t believe in one-size-fits-all solutions. Every service is built on three principles:
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { title: 'Understand First', desc: 'We begin by understanding the individual, not labeling them.' },
               { title: 'Structure the Support', desc: 'We design clear, structured plans that guide families and professionals step by step.' },
               { title: 'Focus on Real Life', desc: 'Everything we do is designed to improve daily life — not just produce reports or theory.' }
             ].map((p, i) => (
               <div key={i} className="bezel-outer" style={{ backgroundColor: 'white' }}>
                 <div className="bezel-inner" style={{ padding: '3rem', textAlign: 'center' }}>
                    <div style={{ marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 900, color: '#F7B42C', opacity: 0.3 }}>0{i+1}</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>{p.desc}</p>
                 </div>
               </div>
             ))}
          </div>
          <p style={{ marginTop: '5rem', textAlign: 'center', fontWeight: 800, color: '#323030', fontSize: '1.2rem' }}>
             Clarity is the foundation of effective care.
          </p>
        </div>
      </section>

      {/* 6. GOLDEN CARPET CTA BANNER */}
      <section style={{ padding: '2rem 2rem 6rem' }}>
        <div className="container">
          <div className="bezel-outer" style={{ backgroundColor: '#FDFCFB' }}>
            <div className="bezel-inner" style={{ padding: '5rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'center' }}>
               <div>
                  <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Not sure where to start?</h2>
                  <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
                    Join Golden Carpet — our monthly community forum where families and professionals come together to share, learn, and find clarity. 
                    <strong> A safe space. No judgment. Just understanding.</strong>
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#323030', fontWeight: 700 }}>
                      <Calendar size={20} color="#F7B42C" />
                      <span>Every 1st Sunday</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#323030', fontWeight: 700 }}>
                      <Ticket size={20} color="#F7B42C" />
                      <span>Free for all</span>
                    </div>
                  </div>
                  
                  <Link href="/events/golden-carpet">
                    <button style={{
                      backgroundColor: '#F7B42C',
                      color: '#323030',
                      padding: '1.25rem 3rem',
                      borderRadius: '100px',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      Join Golden Carpet
                    </button>
                  </Link>
               </div>
               <div className="bezel-outer">
                 <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden', minHeight: '350px' }}>
                    <img src="/golden-carpet.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '2.5rem' }}>Take the first step toward clarity</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            Whether you are a parent, caregiver, educator, or organisation — we are here to support you with structured, practical, and meaningful care.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
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
                Get Support
              </button>
            </Link>
            <Link href="/contact">
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '1.25rem 4rem',
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
      <style jsx>{`
        @media (max-width: 968px) {
          .container > div {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .container > div > div {
            text-align: center !important;
          }
          button {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
