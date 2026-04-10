import React from "react";
import { Navbar } from "@/components/Navbar";
import { HomeHero } from "@/components/HomeHero";
import { RealityCheck } from "@/components/RealityCheck";
import { EcosystemGrid } from "@/components/EcosystemGrid";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <HomeHero />
      <RealityCheck />
      <EcosystemGrid />
      <JourneyTimeline />
      
      {/* Final Call to Action Section */}
      <section style={{ padding: 'var(--section-gap) 2rem', textAlign: 'center', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Let’s help every <br /> <span style={{ color: '#F7B42C' }}>sunflower bloom.</span></h2>
          <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            Whether you are a parent seeking clarity or a partner building the future, your presence makes the ecosystem stronger.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#323030',
              color: 'white',
              padding: '1.25rem 3.5rem',
              borderRadius: '100px',
              fontWeight: 800,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
            }}>
              Partner With Us
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#323030',
              border: '2px solid #323030',
              padding: '1.25rem 3.5rem',
              borderRadius: '100px',
              fontWeight: 800,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Donate Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
