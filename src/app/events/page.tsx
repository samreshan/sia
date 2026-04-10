'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Users, MapPin, ArrowRight, Video, Camera, Ticket, Sparkles, GraduationCap, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EventsPage() {
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
              Events & Community
            </div>
            <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Events that build <br /> <span style={{ color: '#F7B42C' }}>connection and clarity.</span></h1>
            <p style={{ fontSize: '1.3rem', color: '#323030', fontWeight: 600, maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.4' }}>
              Community sessions, workshops, and awareness programs designed to support individuals, families, and professionals.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '650px', margin: '0 auto', lineHeight: '1.8' }}>
              Our events create safe spaces for learning, sharing, and understanding autism in a practical and meaningful way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section style={{ padding: '4rem 2rem 8rem', backgroundColor: '#FDFCFB' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why we run events</h2>
            <p style={{ fontSize: '1.25rem', color: '#323030', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              Autism care is not only clinical — it is also human. Our events are designed to bring people together, reduce isolation, and create shared understanding.
            </p>
            <div style={{ padding: '2.5rem', backgroundColor: 'white', borderRadius: '2rem', border: '1px solid #eee' }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '1.2rem', color: '#323030' }}>
                Every event is built with one goal: to move from confusion to clarity through connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED EVENT — GOLDEN CARPET */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div className="bezel-outer" style={{ backgroundColor: '#323030' }}>
            <div className="bezel-inner" style={{ 
              padding: 0, 
              display: 'grid', 
              gridTemplateColumns: '1.1fr 0.9fr', 
              overflow: 'hidden',
              backgroundColor: '#323030',
              color: 'white'
            }}>
              <div style={{ padding: '5rem' }}>
                <div style={{ 
                  color: '#F7B42C', 
                  fontWeight: 800, 
                  fontSize: '0.8rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em',
                  marginBottom: '2rem'
                }}>
                  Flagship Forum
                </div>
                <h2 style={{ fontSize: '4.5rem', color: 'white', marginBottom: '2rem', lineHeight: '1.1' }}>
                  Golden <br /> <span style={{ color: '#F7B42C' }}>Carpet.</span>
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '3.5rem' }}>
                  Golden Carpet is our flagship monthly community forum for autism awareness, support, and shared learning. It is a safe and open space where parents, caregivers, and professionals come together as people navigating similar challenges.
                </p>
                
                <h4 style={{ color: '#F7B42C', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>What happens at Golden Carpet</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '4rem', display: 'grid', gap: '1rem' }}>
                   {[
                     "Open discussions on real-life challenges",
                     "Sharing experiences from families and professionals",
                     "Practical guidance and insights",
                     "Community support and connection"
                   ].map((item, i) => (
                     <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                        <Ticket size={16} color="#F7B42C" /> {item}
                     </li>
                   ))}
                </ul>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem', padding: '2rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                    <Calendar size={20} color="#F7B42C" /> <span>First Sunday monthly</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                    <Ticket size={20} color="#F7B42C" /> <span>Free for all</span>
                  </div>
                </div>

                <div style={{ marginBottom: '3rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem' }}>
                  "Sometimes the most important step is realizing you are not alone."
                </div>

                <Link href="/contact">
                  <button style={{
                    backgroundColor: '#F7B42C',
                    color: '#323030',
                    padding: '1.25rem 3.5rem',
                    borderRadius: '100px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    Join Golden Carpet <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
              <div style={{ position: 'relative' }}>
                <img src="/golden-carpet.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #323030, transparent 40%)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OTHER EVENTS */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Other programs and sessions</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Alongside Golden Carpet, we run focused sessions and programs designed to support learning, awareness, and skill development.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { title: 'Workshops', icon: Sparkles, desc: 'Practical sessions for parents, caregivers, and professionals focused on real-life strategies and support tools.' },
               { title: 'Training Sessions', icon: GraduationCap, desc: 'Structured learning programs for educators, therapists, and organisations working in autism and inclusion.' },
               { title: 'Awareness Programs', icon: megaphoneIcon, desc: 'Community outreach sessions designed to improve understanding of autism and reduce stigma.' }
             ].map((e, i) => (
                <div key={i} className="bezel-outer" style={{ backgroundColor: 'white' }}>
                   <div className="bezel-inner" style={{ padding: '3rem', minHeight: '350px' }}>
                      <div style={{ color: '#F7B42C', marginBottom: '2rem' }}>
                        {e.icon === megaphoneIcon ? <Users size={28} /> : <e.icon size={28} />}
                      </div>
                      <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>{e.title}</h3>
                      <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1rem' }}>{e.desc}</p>
                   </div>
                </div>
             ))}
          </div>
          <p style={{ marginTop: '5rem', textAlign: 'center', fontStyle: 'italic', color: '#999', fontSize: '1.1rem' }}>
            Each event is designed to bring knowledge into real-world practice.
          </p>
        </div>
      </section>

      {/* 5. WHO THESE EVENTS ARE FOR */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
             <div className="bezel-outer">
                <div className="bezel-inner" style={{ padding: '4rem', backgroundColor: '#FDFCFB' }}>
                   <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Who can attend</h2>
                   <div style={{ display: 'grid', gap: '1.5rem' }}>
                      {[
                        "Parents and caregivers",
                        "Individuals with autism",
                        "Educators and therapists",
                        "Schools and organisations",
                        "Anyone interested in learning"
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                           <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F7B42C' }} />
                           <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#323030' }}>{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             <div>
                <p style={{ fontSize: '1.5rem', color: '#444', lineHeight: '1.7', marginBottom: '2.5rem', fontWeight: 600 }}>
                  You don’t need prior knowledge — just curiosity and openness to learn.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                  Our events are inclusive spaces where every voice is valued and every question is an opportunity for collective clarity.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 6. IMPACT SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '2rem' }}>Why these events matter</h2>
            <p style={{ maxWidth: '750px', margin: '0 auto', color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem' }}>
              Many families face confusion, isolation, and lack of clear guidance. Our events help bridge that gap.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { title: 'Shared Understanding', icon: Users },
              { title: 'Practical Guidance', icon: Ticket },
              { title: 'Reduced Isolation', icon: Heart },
              { title: 'Community Support', icon: Sparkles }
            ].map((p, i) => (
              <div key={i} className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                 <div className="bezel-inner" style={{ padding: '2.5rem', border: 'none', backgroundColor: 'transparent', textAlign: 'center', alignItems: 'center' }}>
                    <div style={{ color: '#F7B42C', marginBottom: '1.5rem' }}><p.icon size={32} /></div>
                    <h4 style={{ color: 'white', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.title}</h4>
                 </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '5rem', textAlign: 'center', fontWeight: 800, color: '#F7B42C', fontSize: '1.5rem', letterSpacing: '0.05em' }}>
             Change begins with conversation.
          </p>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Join the community</h2>
          <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            Whether you are a parent, professional, or supporter — our events are here to help you connect, learn, and grow.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <button style={{
                backgroundColor: '#323030',
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
            <Link href="/contact">
              <button style={{
                backgroundColor: 'transparent',
                color: '#323030',
                border: '2px solid #323030',
                padding: '1.25rem 4rem',
                borderRadius: '100px',
                fontWeight: 800,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Upcoming Events
              </button>
            </Link>
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
          }
          .bezel-outer[style*="backgroundColor: #323030"] .bezel-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

const megaphoneIcon = "megaphone";
