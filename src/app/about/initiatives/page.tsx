'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Activity, Book, Users, Heart, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const initiatives = [
  {
    title: "SIA Clinical Services",
    desc: "Our core clinical arm providing evidence-based therapies, diagnostic assessments, and personalized care pathways. We focus on functional independence and the joy of learning.",
    icon: Activity,
    color: "#F7B42C",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200",
    cta: "Visit Clinical Portal",
    link: "/services"
  },
  {
    title: "Sunflower Petals",
    desc: "A dedicated shop for sensory tools, play-based equipment, and educational resources curated by experts to support development at home and in the classroom.",
    icon: Book,
    color: "#768E1F",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=1200",
    cta: "Shop Petals Collection",
    link: "https://petals.instituteforautism.org"
  },
  {
    title: "The Golden Carpet",
    desc: "A safe, judgment-free forum and community space for parents and caregivers to connect, share stories, and find mutual support on the autism journey.",
    icon: Users,
    color: "#323030",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200",
    cta: "Join the Forum",
    link: "/events/golden-carpet"
  },
  {
    title: "Sunflower Spectrum",
    desc: "Our advocacy and research platform dedicated to building a more inclusive Nepal through education, policy influence, and public awareness.",
    icon: Heart,
    color: "#F7B42C",
    image: "https://images.unsplash.com/photo-1594495894542-a4a1200e9e13?auto=format&fit=crop&q=80&w=1200",
    cta: "Read Insights",
    link: "/resources"
  }
];

export default function InitiativesPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <header style={{ padding: '12rem 2rem 6rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '1.5rem' }}>Our Ecosystem</h1>
          <p style={{ fontSize: '1.3rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            A choreographed network of specialized initiatives supporting autism care in Nepal.
          </p>
        </div>
      </header>

      <section style={{ padding: '0 2rem 8rem' }}>
        <div className="container" style={{ display: 'grid', gap: '4rem' }}>
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="bezel-outer"
            >
              <div className="bezel-inner" style={{ 
                padding: 0, 
                display: 'grid', 
                gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                overflow: 'hidden'
              }}>
                {i % 2 === 0 ? (
                  <>
                    <div style={{ padding: '4rem' }}>
                      <div style={{ 
                        width: '50px', 
                        height: '50px', 
                        borderRadius: '12px', 
                        backgroundColor: `${item.color}15`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: item.color,
                        marginBottom: '2rem'
                      }}>
                        <item.icon size={26} />
                      </div>
                      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.title}</h2>
                      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '3rem' }}>{item.desc}</p>
                      <Link href={item.link}>
                        <button style={{
                          backgroundColor: '#323030',
                          color: 'white',
                          padding: '1rem 2.5rem',
                          borderRadius: '100px',
                          fontWeight: 800,
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}>
                          {item.cta} <ArrowUpRight size={16} />
                        </button>
                      </Link>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ position: 'relative' }}>
                      <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '4rem' }}>
                      <div style={{ 
                        width: '50px', 
                        height: '50px', 
                        borderRadius: '12px', 
                        backgroundColor: `${item.color}15`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: item.color,
                        marginBottom: '2rem'
                      }}>
                        <item.icon size={26} />
                      </div>
                      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.title}</h2>
                      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '3rem' }}>{item.desc}</p>
                      <Link href={item.link}>
                        <button style={{
                          backgroundColor: '#323030',
                          color: 'white',
                          padding: '1rem 2.5rem',
                          borderRadius: '100px',
                          fontWeight: 800,
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}>
                          {item.cta} <ArrowUpRight size={16} />
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media (max-width: 968px) {
          .bezel-inner {
            grid-template-columns: 1fr !important;
          }
          .bezel-inner > div {
            padding: 3rem !important;
          }
        }
      `}</style>
    </main>
  );
}
