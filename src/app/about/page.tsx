import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem', minHeight: '80vh' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '6rem' }}>
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
                Our Vision
              </div>
            <h1 style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>Excellence led. <br /> Human centered.</h1>
            <p style={{ fontSize: '1.3rem', color: '#444', lineHeight: '1.8', fontStyle: 'italic' }}>
              "We are building the sanctuary we wished existed in Nepal. A place where international standards of autism care meet deep, unhurried empathy."
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div className="bezel-outer">
              <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Founder Team" 
                  style={{ width: '100%', display: 'block' }} 
                />
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Meet the people walking this journey with you.</h2>
              <p style={{ color: '#323030', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '2rem' }}>
                Highlighting Co-Founders <strong>Dhruba Adhikari</strong> & <strong>Stuti Neupane</strong>. Their shared vision was born from a simple realization: Nepal needed a place where families feel supported and every child gets care that fits them.
              </p>
              <div style={{ padding: '2rem', borderLeft: '4px solid #F7B42C', backgroundColor: 'rgba(247, 180, 44, 0.05)' }}>
                <p style={{ fontStyle: 'italic', color: '#768E1F', fontWeight: 500 }}>
                  "We imagined a world where care is unhurried and every milestone is celebrated together—and decided to build it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '3rem' }}>Our Philosophy</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="bezel-outer">
              <div className="bezel-inner">
                <h3 style={{ marginBottom: '1rem', color: '#F7B42C' }}>No "Fixing"</h3>
                <p style={{ fontSize: '0.95rem', color: '#555' }}>We reject the idea of fixing individuals. Our goal is independence, confidence, and flourishing.</p>
              </div>
            </div>
            <div className="bezel-outer">
              <div className="bezel-inner">
                <h3 style={{ marginBottom: '1rem', color: '#F7B42C' }}>Unhurried Growth</h3>
                <p style={{ fontSize: '0.95rem', color: '#555' }}>Growth happens at its own pace. We provide the time and safety required for true progress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
