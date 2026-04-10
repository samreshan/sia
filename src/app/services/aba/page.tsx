import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ABAPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '6rem' }}>
            <div style={{ color: '#F7B42C', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Core Clinical Support</div>
            <h1 style={{ marginBottom: '2rem' }}>Purposeful, unhurried growth.</h1>
            <p style={{ fontSize: '1.5rem', color: '#666', lineHeight: '1.8' }}>
              We don’t believe in rigid systems. Your child doesn’t learn like a system. Our BCBA-supervised ABA therapy is deeply compassionate, play-based, and focused entirely on functional independence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '8rem' }}>
            {[
              { title: 'Personalized Learning Plans', desc: 'Every milestone is mapped to your child’s unique internal world and strengths.' },
              { title: 'Focus on Communication', desc: 'Prioritizing functional language and social connection over mere compliance.' },
              { title: 'Sensory-Friendly Environment', desc: 'A choreographed sanctuary where sensory needs are anticipated and supported.' },
            ].map((benefit) => (
              <div key={benefit.title} className="bezel-outer">
                <div className="bezel-inner">
                  <h3 style={{ marginBottom: '1.5rem', color: '#323030' }}>{benefit.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bezel-outer">
            <div className="bezel-inner" style={{ padding: '4rem', textAlign: 'center', gap: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem' }}>Ready to discuss a pathway?</h2>
              <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Join us for a warm, low-pressure conversation to see how our BCBA-led services can support your child's journey.
              </p>
              <button style={{ 
                backgroundColor: '#323030', 
                color: 'white', 
                padding: '1.25rem 3.5rem', 
                borderRadius: '100px', 
                fontWeight: 800, 
                fontSize: '0.9rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                alignSelf: 'center'
              }}>
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
