import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const articles = [
  { title: "Sunflower Institute Featured in TechPana", date: "April 2026", category: "Press" },
  { title: "Nepal Needs a Constructive Nationwide System for Autism", date: "March 2026", category: "Advocacy" },
  { title: "Why Are Autism Cases Rising in Nepal?", date: "February 2026", category: "Insights" }
];

export default function NewsPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem' }}>
        <div className="container">
          <div style={{ marginBottom: '6rem' }}>
            <div style={{ color: '#F7B42C', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Archives</div>
            <h1 style={{ marginBottom: '0' }}>News & Insights</h1>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {articles.map((a, i) => (
              <div key={i} className="bezel-outer" style={{ cursor: 'pointer' }}>
                <div className="bezel-inner" style={{ transition: 'transform 0.6s cubic-bezier(0.32, 0.72, 0, 1)' }}>
                  <div style={{ color: '#F7B42C', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>{a.category}</div>
                  <h3 style={{ marginBottom: '2rem', lineHeight: '1.3', fontSize: '1.75rem' }}>{a.title}</h3>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#888', fontSize: '0.85rem' }}>{a.date}</span>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(50,48,48,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#323030' }}>→</div>
                  </div>
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
