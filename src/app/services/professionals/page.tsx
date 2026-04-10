'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldenCarpetBanner } from "@/components/GoldenCarpetBanner";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Presentation, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const proServices = [
  {
    title: "Knowledge Architecture",
    desc: "Advanced training and certification for practitioners, designed by global clinical experts.",
    icon: GraduationCap,
    color: "#768E1F"
  },
  {
    title: "Eco-System Design",
    desc: "Frameworks for schools and organizations to implement neuro-affirming standards of practice.",
    icon: ShieldCheck,
    color: "#768E1F"
  },
  {
    title: "Advocacy & Standards",
    desc: "Consultancy and community workshops that reset the standard for inclusion in Nepal.",
    icon: Presentation,
    color: "#768E1F"
  }
];

export default function ProfessionalsPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      
      <header style={{ padding: '12rem 2rem 6rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{
            display: 'inline-block',
            padding: '0.4rem 1rem',
            backgroundColor: 'rgba(118, 142, 31, 0.1)',
            color: '#768E1F',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '1.5rem'
          }}>
            For Professionals
          </div>
          <h1 style={{ marginBottom: '1.5rem' }}>Empowering Practitioners</h1>
          <p style={{ fontSize: '1.3rem', color: '#666', maxWidth: '750px', margin: '0 auto', lineHeight: '1.8' }}>
            We provide the tools and training necessary for professionals to build a more inclusive Nepal, rooted in clinical excellence and neuro-affirming practices.
          </p>
        </div>
      </header>

      <section style={{ padding: '0 2rem 8rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {proServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="bezel-outer"
            >
              <div className="bezel-inner" style={{ padding: '3.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '15px', 
                  backgroundColor: `${service.color}15`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: service.color,
                  marginBottom: '2.5rem'
                }}>
                  <service.icon size={28} />
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{service.title}</h3>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '2.5rem' }}>{service.desc}</p>
                
                <Link href="/contact">
                  <button style={{
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#323030',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    Inquire Now <ArrowUpRight size={16} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <GoldenCarpetBanner />

      <Footer />
      <style jsx>{`
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
