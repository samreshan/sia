import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function ABAPage() {
  return (
    <main style={{ backgroundColor: "#FFFFFF" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '4rem', alignItems: 'start', marginBottom: '8rem' }}>
            <div>
              <div style={{ 
                color: 'var(--text-muted)', 
                fontWeight: 700, 
                fontSize: '0.75rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.3em', 
                marginBottom: '2rem' 
              }}>
                Developmental Support
              </div>
              <h1 style={{ marginBottom: '2rem', lineHeight: '1.05' }}>Precision and <br /> Compassion.</h1>
            </div>
            
            <p style={{ fontSize: '1.35rem', color: 'var(--text)', lineHeight: '1.7', fontWeight: 400 }}>
              SIA clinical methodology rejects rigid, compliance-based systems. Our BCBA-supervised ABA therapy is evidence-based, play-focused, and centered on the long-term functional independence of the individual.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            border: '1px solid var(--border)',
            marginBottom: '8rem' 
          }}>
            {[
              { title: 'Personalized Clinical Maps', desc: 'Every milestone is mapped to the individual’s unique neuro-cognitive profile.' },
              { title: 'Functional Language Focus', desc: 'Prioritizing communication and social agency over mere instructional compliance.' },
              { title: 'Sanctuary Environments', desc: 'A standardized, sensory-clean environment where development can occur without distress.' },
            ].map((benefit, i) => (
              <div key={benefit.title} className="grid-cell" style={{ borderTop: 'none', borderLeft: i === 0 ? 'none' : '1px solid var(--border)', borderRight: 'none', borderBottom: 'none' }}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 500 }}>{benefit.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ border: '1px solid #000', padding: '6rem', textAlign: 'center', backgroundColor: '#000', color: '#FFF' }}>
            <h2 style={{ fontSize: '3rem', color: '#FFF', marginBottom: '2rem' }}>Clinical Inquiry.</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
              Our intake process is built on clinical rigor and familial empathy. Start your journey with a professional consultation.
            </p>
            <button className="btn-primary" style={{ backgroundColor: '#FFF', color: '#000', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
               Request Intake Assessment <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

