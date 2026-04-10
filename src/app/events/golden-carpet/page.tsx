'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from 'next/link';

export default function GoldenCarpetPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      
      {/* Hero Header */}
      <section style={{ padding: '12rem 2rem 8rem', textAlign: 'center', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', color: '#F7B42C', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', fontSize: '0.8rem' }}>
              <Star size={16} fill="#F7B42C" /> Flagship Community Initiative
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'white', marginBottom: '2rem' }}>The Golden Carpet</h1>
            <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
              “A room full of people who just know.” A safe, judgment-free sanctuary where stories are shared and community is built.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Purpose */}
      <section style={{ padding: 'var(--section-gap) 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>Why it matters.</h2>
              <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '3rem' }}>
                Autism parenting often feels like a series of translations—translating the world for your child, and your child for the world. The Golden Carpet is the place where translation is no longer necessary. 
              </p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  "No judgment, only shared experience.",
                  "Connecting with local experts in a low-pressure setting.",
                  "Building lifelong support networks with other families.",
                  "A celebrated space for neurodivergent joy."
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>
                    <CheckCircle2 size={24} color="#768E1F" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bezel-outer">
               <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden' }}>
                 <img src="/golden-carpet.png" style={{ width: '100%', display: 'block' }} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Preview */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Moments of Connection</h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Glimpses into our community gatherings.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', gridAutoRows: '300px' }}>
            <div className="bezel-outer" style={{ gridRow: 'span 2' }}>
              <div className="bezel-inner" style={{ padding: 0 }}>
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="bezel-outer">
              <div className="bezel-inner" style={{ padding: 0 }}>
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="bezel-outer" style={{ gridRow: 'span 2' }}>
              <div className="bezel-inner" style={{ padding: 0 }}>
                <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="bezel-outer">
              <div className="bezel-inner" style={{ padding: 0 }}>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: 'var(--section-gap) 2rem', textAlign: 'center' }}>
        <div className="container">
          <div className="bezel-outer" style={{ backgroundColor: '#F7B42C' }}>
            <div className="bezel-inner" style={{ backgroundColor: '#F7B42C', padding: '6rem' }}>
              <h2 style={{ fontSize: '3.5rem', color: '#323030', marginBottom: '2rem' }}>Join the next session.</h2>
              <p style={{ fontSize: '1.25rem', color: 'rgba(50, 48, 48, 0.7)', marginBottom: '4rem', maxWidth: '500px', margin: '0 auto 4rem' }}>
                We are ready when you are. Register for our upcoming session this April in Kathmandu.
              </p>
              <Link href="/contact">
                <button style={{
                  backgroundColor: '#323030',
                  color: 'white',
                  padding: '1.25rem 4rem',
                  borderRadius: '100px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  margin: '0 auto'
                }}>
                  Register Now <ArrowRight size={18} />
                </button>
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
          }
          .container > div:last-child {
            grid-auto-rows: minmax(200px, auto) !important;
          }
        }
      `}</style>
    </main>
  );
}
