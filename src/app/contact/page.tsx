'use client';

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  MessageCircle,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [personType, setPersonType] = useState('Parent/Caregiver Consultation');

  return (
    <main style={{ backgroundColor: "#FAFAF7", color: "#1C1B1B" }}>
      <Navbar />
      
      {/* 1. ATMOSPHERIC HERO SECTION */}
      <section style={{ padding: '14rem 2rem 8rem', backgroundColor: '#1C1B1B', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15 }}>
           <img src="/images/gc7.jpg" alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40vw', height: '60vh', background: 'radial-gradient(circle, rgba(247,180,44,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{ maxWidth: '900px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#F7B42C' }} />
              <span style={{ color: '#F7B42C', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Connect with SIA</span>
            </div>
            <h1 style={{ color: 'white', marginBottom: '2.5rem', fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', lineHeight: '1', letterSpacing: '-0.03em' }}>
              Guidance as <br /> <span style={{ color: '#F7B42C' }}>Clear as Gold.</span>
            </h1>
            <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', lineHeight: '1.5', fontWeight: 500 }}>
              Whether you're seeking your first assessment, professional training, or community support, we are here to light the way forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DUAL ENGAGEMENT SECTION */}
      <section style={{ padding: '6rem 2rem 10rem', marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="engagement-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '4rem', alignItems: 'start' }}>
            
            {/* Left: Contact Details & Cards */}
            <div style={{ display: 'grid', gap: '2rem' }}>
              
              {/* Quick Contact Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                style={{ backgroundColor: 'white', borderRadius: '2.5rem', padding: '3.5rem', boxShadow: '0 30px 60px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}
              >
                <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', letterSpacing: '-0.02em', fontWeight: 800 }}>Direct Contact</h3>
                <div style={{ display: 'grid', gap: '2rem' }}>
                   <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '15px', backgroundColor: 'rgba(118,142,31,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#768E1F', flexShrink: 0 }}>
                         <Phone size={22} />
                      </div>
                      <div>
                         <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Call us directly</div>
                         <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>+977 1 XXXXXXX</div>
                      </div>
                   </div>
                   <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '15px', backgroundColor: 'rgba(247,180,44,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F7B42C', flexShrink: 0 }}>
                         <Mail size={22} />
                      </div>
                      <div>
                         <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Send an email</div>
                         <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>info@sunflowerautism.org</div>
                      </div>
                   </div>
                   <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '15px', backgroundColor: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1C1B1B', flexShrink: 0 }}>
                         <MapPin size={22} />
                      </div>
                      <div>
                         <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Our Center</div>
                         <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>Lazimpat, Kathmandu</div>
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <div style={{ backgroundColor: 'white', borderRadius: '2.5rem', padding: '3.5rem', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Clock size={20} style={{ color: '#F7B42C' }} />
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Center Hours</h4>
                 </div>
                 <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.75rem' }}>
                       <span style={{ fontWeight: 600, color: '#666' }}>Sunday – Thursday</span>
                       <span style={{ fontWeight: 800 }}>9:00 AM – 5:00 PM</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.75rem' }}>
                       <span style={{ fontWeight: 600, color: '#666' }}>Friday</span>
                       <span style={{ fontWeight: 800 }}>9:00 AM – 2:00 PM</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                       <span style={{ fontWeight: 600, color: '#666' }}>Saturday</span>
                       <span style={{ color: '#F7B42C', fontWeight: 800 }}>Closed</span>
                    </div>
                 </div>
              </div>

              {/* Social Join */}
              <div style={{ padding: '0 1rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                 <a href="https://www.linkedin.com/company/sunflower-institute-for-autism" target="_blank" rel="noopener noreferrer" style={{ color: '#999' }}>
                    <motion.div whileHover={{ y: -3, color: '#F7B42C' }}><Linkedin size={24} /></motion.div>
                 </a>
                 <a href="https://www.facebook.com/profile.php?id=61586835449737#" target="_blank" rel="noopener noreferrer" style={{ color: '#999' }}>
                    <motion.div whileHover={{ y: -3, color: '#F7B42C' }}><Facebook size={24} /></motion.div>
                 </a>
                 <a href="https://www.tiktok.com/@sunflowerautisminstitute" target="_blank" rel="noopener noreferrer" style={{ color: '#999' }}>
                    <motion.div whileHover={{ y: -3, color: '#F7B42C' }}><TikTokIcon size={24} /></motion.div>
                 </a>
              </div>
            </div>

            {/* Right: Message Form */}
            <div style={{ backgroundColor: 'white', borderRadius: '3rem', padding: '5rem', boxShadow: '0 40px 100px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
               <div style={{ marginBottom: '3.5rem' }}>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Send a message</h2>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>We typically respond within 1–2 working days to all structured inquiries.</p>
               </div>

               <form style={{ display: 'grid', gap: '2rem' }}>
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#999' }}>Full Name *</label>
                      <input type="text" placeholder="Your name" style={{ padding: '1.25rem 1.5rem', borderRadius: '1.25rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FAFAF9', fontSize: '1rem' }} />
                    </div>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#999' }}>Email Address *</label>
                      <input type="email" placeholder="email@example.com" style={{ padding: '1.25rem 1.5rem', borderRadius: '1.25rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FAFAF9', fontSize: '1rem' }} />
                    </div>
                  </div>

                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#999' }}>Phone Number</label>
                      <input type="text" placeholder="+977" style={{ padding: '1.25rem 1.5rem', borderRadius: '1.25rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FAFAF9', fontSize: '1rem' }} />
                    </div>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#999' }}>Support Interest</label>
                      <select 
                        value={personType} 
                        onChange={(e) => setPersonType(e.target.value)}
                        style={{ padding: '1.25rem 1.5rem', borderRadius: '1.25rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FAFAF9', fontSize: '1rem', cursor: 'pointer' }}
                      >
                        <option>Parent/Caregiver Consultation</option>
                        <option>ABA Therapy Enrollment</option>
                        <option>ABAT Professional Training</option>
                        <option>School/Inclusive Collaboration</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#999' }}>Your Message</label>
                    <textarea placeholder="How can we help you?" style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid #eee', outline: 'none', backgroundColor: '#FAFAF9', minHeight: '180px', fontFamily: 'inherit', fontSize: '1.05rem', resize: 'vertical' }} />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.01, backgroundColor: '#1C1B1B' }}
                    whileTap={{ scale: 0.99 }}
                    style={{
                      backgroundColor: '#323030',
                      color: 'white',
                      padding: '1.5rem',
                      borderRadius: '1.5rem',
                      fontWeight: 900,
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: '1rem',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    Send Expression of Interest <Send size={18} />
                  </motion.button>
               </form>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LOCATION MODULE */}
      <section style={{ padding: '4rem 2rem 10rem' }}>
        <div className="container">
           <div className="location-card" style={{ backgroundColor: 'white', borderRadius: '4rem', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 0.8fr', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 50px 100px rgba(0,0,0,0.02)' }}>
              
              {/* Virtual Map Placeholder */}
              <div style={{ position: 'relative', height: '100%', minHeight: '500px', backgroundColor: '#EAEAEA', overflow: 'hidden' }}>
                  <img src="/images/sunflower-center.png" alt="Center Location" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1)' }} />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(28,27,27,0.3)', backdropFilter: 'blur(1px)' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                     <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#F7B42C', color: '#1C1B1B', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 20px 40px rgba(247,180,44,0.3)' }}>
                        <MapPin size={32} />
                     </div>
                     <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800 }}>Lazimpat Center</h3>
                  </div>
              </div>

              {/* Location Details */}
              <div style={{ padding: '6rem' }} className="location-content">
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ width: '40px', height: '2px', backgroundColor: '#768E1F' }} />
                    <span style={{ color: '#768E1F', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Visit Us</span>
                 </div>
                 <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', letterSpacing: '-0.02em', fontWeight: 800 }}>Locate our center <br /> in Kathmandu.</h2>
                 <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '3rem' }}>
                    Our primary campus is located in a peaceful, accessible corner of Lazimpat, designed to be a safe haven for children and families.
                 </p>
                 
                 <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                       <MapPin size={24} style={{ color: '#F7B42C' }} />
                       <div>
                          <p style={{ margin: 0, fontWeight: 800, fontSize: '1.1rem' }}>Sunflower Campus</p>
                          <p style={{ margin: 0, color: '#999' }}>Lazimpat, Kathmandu, Nepal</p>
                       </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                       <MessageCircle size={24} style={{ color: '#768E1F' }} />
                       <div>
                          <p style={{ margin: 0, fontWeight: 800, fontSize: '1.1rem' }}>Meeting Policy</p>
                          <p style={{ margin: 0, color: '#999' }}>Consultations are by appointment only to ensure privacy and dedicated focus.</p>
                       </div>
                    </div>
                 </div>

                 <motion.button 
                   whileHover={{ x: 5 }}
                   style={{ background: 'none', border: 'none', color: '#F7B42C', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
                 >
                    Get Map Directions <ArrowRight size={18} />
                 </motion.button>
              </div>

           </div>
        </div>
      </section>

      {/* 4. EXPECTATION PILLARS */}
      <section style={{ padding: '0 2rem 10rem' }}>
        <div className="container">
          <div className="pillar-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { title: 'Privacy Guaranteed', desc: 'All communications are managed with clinical confidentiality.', icon: ShieldCheck },
              { title: 'Expert Guidance', desc: 'Queries are reviewed by qualified therapists and specialists.', icon: Sparkles },
              { title: 'Compassionate Care', desc: 'We understand the emotional journey of every family.', icon: Heart },
              { title: 'Direct Access', desc: 'No complex loops — speak directly with those who can help.', icon: ExternalLink }
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '2.5rem', padding: '3.5rem', textAlign: 'center', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#FAFAF9', color: '#F7B42C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                     <p.icon size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', fontWeight: 800 }}>{p.title}</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media (max-width: 1024px) {
          .engagement-grid, .location-card, .pillar-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .location-content {
            padding: 3rem !important;
          }
        }
      `}</style>
    </main>
  );
}

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TikTokIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);
