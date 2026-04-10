import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, ClipboardCheck, MessageSquare, Lightbulb } from "lucide-react";
import Link from 'next/link';

const services = [
  {
    id: 'aba',
    title: 'ABA Therapy',
    desc: 'Comprehensive, individualized behavior analysis focusing on functional independence and communication.',
    href: '/services/aba'
  },
  {
    id: 'abat',
    title: 'ABAT Services',
    desc: 'Dedicated, certified technician-led therapeutic support providing consistent, empathy-driven care.',
    href: '/services/abat'
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic Assessments',
    desc: 'Moving from confusion to an accurate understanding of your child\'s unique internal world.',
    href: '#'
  }
];

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      
      {/* Hero */}
      <section style={{ padding: '12rem 2rem 8rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '2rem' }}>Clarity for today. <br /> A pathway for tomorrow.</h1>
          <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            Our clinical approach is rooted in international standards and delivered with local heart. Explore our range of sensory-friendly supports.
          </p>
        </div>
      </section>

      {/* Service Directory */}
      <section style={{ padding: '4rem 2rem 8rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {services.map((s) => (
              <div key={s.id} className="bezel-outer">
                <div className="bezel-inner" style={{ gap: '2rem' }}>
                  <h3 style={{ fontSize: '2rem' }}>{s.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1rem' }}>{s.desc}</p>
                  <Link href={s.href} style={{ marginTop: 'auto' }}>
                    <button style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem', 
                      fontWeight: 800, 
                      fontSize: '0.8rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      color: '#F7B42C'
                    }}>
                      Learn More <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Process */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>The Intake Process</h2>
            <p style={{ color: '#666' }}>A gentle pathway to the support your family deserves.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', position: 'relative' }}>
            {[
              { icon: MessageSquare, title: 'Initial Conversation', desc: 'A warm, low-pressure introduction to understand your story.' },
              { icon: ClipboardCheck, title: 'Comprehensive Assessment', desc: 'Evaluating your child\'s unique profile using international tools.' },
              { icon: Lightbulb, title: 'Personalized Pathway', desc: 'Crafting a roadmap tailored to your child\'s strengths and needs.' },
            ].map((step, i) => (
              <div key={i} className="bezel-outer" style={{ textAlign: 'center' }}>
                <div className="bezel-inner" style={{ gap: '1.5rem' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(247, 180, 44, 0.1)', 
                    color: '#F7B42C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <step.icon size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem' }}>{step.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>{step.desc}</p>
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
