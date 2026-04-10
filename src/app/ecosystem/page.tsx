import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Activity, BookOpen, MessageCircle, Shield } from "lucide-react";

const services = [
  {
    id: 'clinical',
    title: 'Diagnostic Assessments',
    subtitle: 'Moving from confusion to clarity.',
    desc: 'Comprehensive, evidence-based assessments led by international standards to understand your child\'s unique profile.',
    icon: Shield
  },
  {
    id: 'aba',
    title: '1-on-1 ABA Therapy',
    subtitle: 'Purposeful, play-based, unhurried growth.',
    desc: 'Individualized therapy sessions focusing on building functional independence, communication, and joy.',
    icon: Activity
  },
  {
    id: 'respite',
    title: 'Residential & Respite Care',
    subtitle: 'A Future Vision.',
    desc: 'Planning for safe, nurturing living environments that provide long-term support for families and individuals.',
    icon: MessageCircle
  }
];

export default function EcosystemPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '6rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Clarity for today. <br /> A pathway for tomorrow.</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8' }}>
              Our clinical approach is highly individualized, focusing entirely on building functional independence and joy. We don't believe in rigid systems—we believe in children.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '4rem' }}>
            {services.map((s, i) => (
              <div key={s.id} style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '4rem',
                alignItems: 'center',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'
              } as any}>
                <div className="bezel-outer">
                  <div className="bezel-inner" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
                    <div style={{ color: '#F7B42C' }}><s.icon size={48} strokeWidth={1} /></div>
                    <h3 style={{ color: '#768E1F', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.id}</h3>
                    <h2 style={{ fontSize: '2rem' }}>{s.title}</h2>
                    <p style={{ fontWeight: 600, color: '#F7B42C' }}>{s.subtitle}</p>
                    <p style={{ color: '#555', lineHeight: '1.7' }}>{s.desc}</p>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                   <div style={{ fontSize: '5rem', fontFamily: 'Lora', color: 'rgba(118, 142, 31, 0.03)', marginBottom: '-2.5rem' }}>0{i+1}</div>
                   <h2 style={{ marginBottom: '1.5rem' }}>The Approach</h2>
                   <p style={{ color: '#666', lineHeight: '1.8' }}>
                     Every therapy plan is crafted specifically for your child. We utilize play-based interventions to ensure learning is a joy, not a chore.
                   </p>
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
