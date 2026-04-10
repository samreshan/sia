'use client';

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, Users, Landmark, MapPin, Send, ShieldCheck, Heart, UserCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [personType, setPersonType] = useState('Parent');

  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 6rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
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
              Contact Us
            </div>
            <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>Get in touch <br /> <span style={{ color: '#F7B42C' }}>with Sunflower.</span></h1>
            <p style={{ fontSize: '1.3rem', color: '#323030', fontWeight: 600, maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.4' }}>
              We’re here to answer your questions, guide you forward, and help you access the right support.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '650px', margin: '0 auto', lineHeight: '1.8' }}>
              Whether you are a parent, caregiver, educator, or organisation — we’re here to listen and help you take the next step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section style={{ padding: '4rem 2rem 8rem', backgroundColor: '#FDFCFB' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>How we can help</h2>
            <p style={{ fontSize: '1.25rem', color: '#323030', lineHeight: '1.8', marginBottom: '2rem' }}>
              Reaching out can feel like a big step — but you don’t need to have everything figured out before contacting us.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
              We support you in understanding your needs and guiding you toward the right services or information.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CONTACT OPTIONS SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '5rem', textAlign: 'center' }}>Choose how you’d like to connect</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { 
                 title: 'General Enquiries', 
                 icon: Mail, 
                 desc: 'For questions about services, programs, or getting started.',
                 details: [
                   { label: 'Email', value: 'info@sunflowerautism.org', icon: Mail },
                   { label: 'Phone', value: '+977-XXXXXXXXXX', icon: Phone }
                 ]
               },
               { 
                 title: 'Families & Support', 
                 icon: Heart, 
                 desc: 'For parents and caregivers seeking guidance or assessment.',
                 extra: 'We will respond with next steps and support options based on your situation.'
               },
               { 
                 title: 'Institutional Enquiries', 
                 icon: Landmark, 
                 desc: 'For schools, organisations, and professionals interested in training or collaboration.',
                 extra: 'We provide structured partnerships and training programs.'
               }
             ].map((option, i) => (
               <div key={i} className="bezel-outer" style={{ backgroundColor: 'var(--canvas)' }}>
                  <div className="bezel-inner" style={{ padding: '3rem', height: '100%' }}>
                     <div style={{ color: '#F7B42C', marginBottom: '2rem' }}><option.icon size={28} /></div>
                     <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>{option.title}</h3>
                     <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '2.5rem', fontSize: '1rem' }}>{option.desc}</p>
                     
                     {option.details && (
                       <div style={{ display: 'grid', gap: '1rem' }}>
                         {option.details.map((d, j) => (
                           <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                             <d.icon size={16} color="#999" />
                             <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#323030' }}>{d.value}</span>
                           </div>
                         ))}
                       </div>
                     )}
                     
                     {option.extra && (
                       <p style={{ fontSize: '0.9rem', color: '#999', fontStyle: 'italic', marginTop: 'auto' }}>
                         {option.extra}
                       </p>
                     )}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT FORM SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '8rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Send us a message</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
                Fill out the form and our team will get back to you with the guidance you need. We typicaly respond within 1–2 working days.
              </p>
              
              <div className="bezel-outer" style={{ backgroundColor: 'white' }}>
                 <div className="bezel-inner" style={{ padding: '3rem' }}>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Visit us</h4>
                    <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2rem' }}>
                       If you prefer in-person support or consultation, you are welcome to visit our centre.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', color: '#323030' }}>
                       <MapPin size={24} color="#F7B42C" style={{ flexShrink: 0 }} />
                       <span style={{ fontWeight: 800 }}>Kathmandu, Nepal <br /> <span style={{ color: '#999', fontSize: '0.8rem', fontWeight: 600 }}>(Exact location revealed upon appointment)</span></span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="bezel-outer" style={{ backgroundColor: 'white' }}>
              <form className="bezel-inner" style={{ padding: '4rem', gap: '2.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Full Name</label>
                    <input type="text" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FDFCFB' }} />
                  </div>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Email Address</label>
                    <input type="email" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FDFCFB' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                   <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Phone Number (Optional)</label>
                    <input type="text" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FDFCFB' }} />
                  </div>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>I am a:</label>
                    <select 
                      value={personType} 
                      onChange={(e) => setPersonType(e.target.value)}
                      style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FDFCFB' }}>
                      <option>Parent</option>
                      <option>Caregiver</option>
                      <option>Professional</option>
                      <option>Organisation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Message</label>
                  <textarea style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FDFCFB', minHeight: '180px', fontFamily: 'inherit' }} />
                </div>

                <button style={{
                  backgroundColor: '#323030',
                  color: 'white',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem'
                }}>
                  Submit Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUPPORT PRINCIPLE SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>What you can expect from us</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { title: 'Clear Guidance', desc: 'We respond with structured, understandable next steps.', icon: Sparkles },
              { title: 'Respectful Communication', desc: 'Every enquiry is treated with dignity and care.', icon: Heart },
              { title: 'No Pressure', desc: 'We do not push services — we help you understand options.', icon: UserCircle2 },
              { title: 'Confidentiality', desc: 'All communications are handled with privacy and care.', icon: ShieldCheck }
            ].map((p, i) => (
              <div key={i} className="bezel-outer" style={{ backgroundColor: 'var(--canvas)' }}>
                 <div className="bezel-inner" style={{ padding: '3rem', textAlign: 'center', alignItems: 'center' }}>
                    <div style={{ color: '#F7B42C', marginBottom: '1.5rem' }}><p.icon size={32} /></div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>{p.title}</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>{p.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '2.5rem' }}>You don’t have to figure it out alone</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            Whether you are just starting to explore support or ready to begin services, we’re here to guide you with clarity and care.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              Send a Message
            </button>
            <Link href="/services">
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
                Explore Services
              </button>
            </Link>
            <Link href="/events">
              <button style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                padding: '1.25rem 4rem',
                borderRadius: '100px',
                fontWeight: 800,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Join Golden Carpet
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
          }
          form {
            padding: 2rem !important;
          }
          form > div {
             grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

const Sparkles = (props: any) => (
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
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);
