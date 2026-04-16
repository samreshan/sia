'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { HomeHero } from "@/components/HomeHero";
import { RealityCheck } from "@/components/RealityCheck";
import { EcosystemGrid } from "@/components/EcosystemGrid";
import { ServicesSnapshot } from "@/components/ServicesSnapshot";
import { FeaturedEvent } from "@/components/FeaturedEvent";
import { ResourcesPreview } from "@/components/ResourcesPreview";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar theme="dark" />
      <HomeHero />
      <RealityCheck />
      <div className="section-accent">
        <EcosystemGrid />
      </div>
      <ServicesSnapshot />
      <div className="section-accent">
        <ResourcesPreview />
      </div>
      <FeaturedEvent />
      
      {/* Final Call to Action Section */}
      <section style={{ padding: 'var(--section-gap) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              padding: 'clamp(4rem, 10vw, 8rem)', 
              textAlign: 'center', 
              backgroundColor: 'var(--text)', 
              color: 'white',
              borderRadius: 'var(--radius-lg)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Subtle Glow Overlay */}
            <div style={{ 
              position: 'absolute', 
              top: '0', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              width: '100%', 
              height: '100%', 
              background: 'radial-gradient(circle at 50% 0%, rgba(235, 195, 81, 0.1) 0%, transparent 70%)',
              zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ marginBottom: '2.5rem', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'white', letterSpacing: '-0.04em' }}>
                Every journey starts with <br /> <span style={{ color: 'rgba(255,255,255,0.4)' }}>clinical understanding.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', marginBottom: '5rem', maxWidth: '750px', margin: '0 auto 5rem', lineHeight: '1.8' }}>
                Whether you are seeking answers, professional support, or institutional direction, we provide the structured path needed to move forward with confidence.
              </p>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact">
                  <button className="btn-primary gold" style={{ padding: '1.25rem 3.5rem' }}>
                    Initiate Consultation <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
