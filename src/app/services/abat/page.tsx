import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ABATPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '6rem' }}>
            <div style={{ color: '#F7B42C', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Implementation Support</div>
            <h1 style={{ marginBottom: '2rem' }}>Consistent, dedicated care.</h1>
            <p style={{ fontSize: '1.5rem', color: '#666', lineHeight: '1.8' }}>
              Our certified Applied Behavior Analysis Technicians (ABATs) are the empathetic professionals executing your child's personalized plan day by day. They bring the expertise of the clinic into warm, joyful, 1-on-1 interactions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Supervised by Experts', desc: 'All ABAT activities are strictly supervised by senior clinicians and BCBAs to ensure excellence.' },
              { title: 'Trauma-Informed Care', desc: 'Prioritizing emotional safety and physical comfort in every interaction.' },
              { title: 'Relationship-First Approach', desc: 'Building deep trust and rapport before introducing therapeutic challenges.' },
            ].map((benefit) => (
              <div key={benefit.title} className="bezel-outer">
                <div className="bezel-inner">
                  <h3 style={{ marginBottom: '1.5rem', color: '#323030' }}>{benefit.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
