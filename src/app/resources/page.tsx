'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, ShoppingBag, BarChart3, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 6rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '1.5rem' }}>Ecosystem Resources</h1>
          <p style={{ fontSize: '1.3rem', color: '#666', maxWidth: '750px', margin: '0 auto', lineHeight: '1.8' }}>
            We bridge knowledge and care across our entire ecosystem. Explore insights from Sunflower Spectrum and tools from Sunflower Petals.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 2rem 8rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {/* Articles & Guides */}
          <div className="bezel-outer" style={{ gridRow: 'span 2' }}>
            <div className="bezel-inner" style={{ padding: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#F7B42C', marginBottom: '2rem' }}>
                <FileText size={32} />
                <h2 style={{ fontSize: '2rem' }}>Articles & Guides</h2>
              </div>
              <p style={{ color: '#555', marginBottom: '3rem', fontSize: '1.1rem' }}>Expert insights on navigating the autism journey in Nepal, published on Sunflower Spectrum.</p>
              
              <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
                {[
                  "Understanding Autism in Nepal",
                  "Sensory Friendly Home Guide",
                  "Tech & Autism Integration",
                  "Support Systems for Parents"
                ].map((item) => (
                  <div key={item} style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '1.5rem', fontWeight: 700, fontSize: '0.95rem', display: 'flex', justifyContent: 'space-between' }}>
                    {item} <ArrowUpRight size={16} color="#F7B42C" />
                  </div>
                ))}
              </div>

              <Link href="https://spectrum.instituteforautism.org" target="_blank">
                <button style={{
                  backgroundColor: '#323030',
                  color: 'white',
                  padding: '1rem 2.5rem',
                  borderRadius: '100px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  width: '100%',
                  justifyContent: 'center'
                }}>
                  Visit Sunflower Spectrum <ExternalLink size={16} />
                </button>
              </Link>
            </div>
          </div>

          {/* Products Section */}
          <div className="bezel-outer" style={{ gridColumn: 'span 2' }}>
            <div className="bezel-inner" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#768E1F', marginBottom: '2rem' }}>
                  <ShoppingBag size={32} />
                  <h2 style={{ fontSize: '2rem' }}>Sunflower Petals</h2>
                </div>
                <p style={{ color: '#555', marginBottom: '3rem', fontSize: '1.1rem' }}>
                  A curated collection of sensory and play-based tools designed to support clinical outcomes at home.
                </p>
                <Link href="https://petals.instituteforautism.org" target="_blank">
                  <button style={{
                    backgroundColor: '#768E1F',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    borderRadius: '100px',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    Shop Collection <ExternalLink size={16} />
                  </button>
                </Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                 <div style={{ aspectRatio: '1', borderRadius: '1.5rem', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div style={{ aspectRatio: '1', borderRadius: '1.5rem', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=400" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
              </div>
            </div>
          </div>

          {/* Ecosystem Insights Section */}
          <div className="bezel-outer" style={{ gridColumn: 'span 2' }}>
            <div className="bezel-inner" style={{ padding: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#323030', marginBottom: '2rem' }}>
                <BarChart3 size={32} />
                <h2 style={{ fontSize: '2rem' }}>Ecosystem Insights</h2>
              </div>
              <p style={{ color: '#555', marginBottom: '3rem', fontSize: '1.1rem' }}>
                How we turn clinical care into innovation. Explore outcome reports and digital workflows powered by our tech system, <strong>RXPIN</strong>.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {[
                  { t: "RXPIN Workflow Report", d: "How our digital care systems are standardizing tracking for families." },
                  { t: "March Golden Carpet Summary", d: "Insights on parent wellbeing and shared resilience." }
                ].map((item) => (
                  <div key={item.t} style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.t}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>{item.d}</p>
                    <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#323030' }}>Read Insight →</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr !important;
          }
          .bezel-outer {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .bezel-inner {
            grid-template-columns: 1fr !important;
            padding: 3rem !important;
          }
        }
      `}</style>
    </main>
  );
}
