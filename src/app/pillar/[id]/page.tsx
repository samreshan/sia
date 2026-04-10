'use client';

import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Activity, Book, Heart, Building2, ShieldCheck, GraduationCap } from "lucide-react";

const pillarContent: Record<string, any> = {
  foundation: {
    title: 'Golden Sunflower Foundation',
    headline: 'The heart of the ecosystem.',
    desc: 'Establishing Nepal\'s first Center of Excellence. This is our non-profit core driving research, accessibility, and the overarching mission to empower individuals with autism.',
    icon: Heart,
    color: '#F7B42C'
  },
  rxpin: {
    title: 'RXPIN',
    headline: 'Precision in understanding.',
    desc: 'Our clinical and diagnostic network. Providing highly accurate, internationally standardized assessments and medical coordination to ensure every child gets the exact support they need.',
    icon: ShieldCheck,
    color: '#768E1F'
  },
  sep: {
    title: 'SEP (Sunflower Equity Partners)',
    headline: 'Building the future of care.',
    desc: 'The strategic and funding pillar dedicated to constructing and sustaining the physical infrastructure, including our state-of-the-art campus and future residential facilities.',
    icon: Building2,
    color: '#323030'
  },
  spectrum: {
    title: 'Sunflower Spectrum',
    headline: 'Shaping an inclusive Nepal.',
    desc: 'Our advocacy and awareness arm. We provide educational campaigns, workplace training, and community resources to build a society that understands and embraces neurodiversity.',
    icon: Activity,
    color: '#F7B42C'
  },
  petals: {
    title: 'Sunflower Petals',
    headline: 'Because play is the learning.',
    desc: 'Expert-curated sensory tools, toys, and Essential for Living (EFL) gear designed to bring the calm and structure of our clinic directly into your home.',
    icon: Book,
    color: '#768E1F'
  },
  iep: {
    title: 'IEP Sunflower',
    headline: 'Bridging the clinic and the classroom.',
    desc: 'Education shouldn’t be a battleground. We work directly with schools and families to design, implement, and monitor Individualized Education Programs (IEPs) that ensure your child thrives academically and socially.',
    icon: GraduationCap,
    color: '#323030'
  }
};

export default function PillarPage() {
  const { id } = useParams();
  const content = pillarContent[id as string];

  if (!content) return <div>Pillar not found</div>;

  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem', minHeight: '80vh' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div style={{ 
                color: content.color, 
                fontWeight: 800, 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <content.icon size={20} />
                {content.title}
              </div>
              <h1 style={{ marginBottom: '2rem' }}>{content.headline}</h1>
              <p style={{ fontSize: '1.5rem', color: '#666', lineHeight: '1.7', marginBottom: '3rem' }}>
                {content.desc}
              </p>
              
              <button style={{ 
                backgroundColor: '#323030', 
                color: 'white', 
                padding: '1.25rem 3rem', 
                borderRadius: '100px', 
                fontWeight: 800, 
                fontSize: '0.85rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em'
              }}>
                Get Involved with {content.title}
              </button>
            </div>
            
            <div className="bezel-outer">
              <div className="bezel-inner" style={{ height: '500px', background: '#FFFFFF' }}></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
