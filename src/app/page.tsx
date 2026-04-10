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

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <HomeHero />
      <RealityCheck />
      <EcosystemGrid />
      <ServicesSnapshot />
      <FeaturedEvent />
      <ResourcesPreview />
      
      {/* Final Call to Action Section */}
      <section style={{ padding: 'var(--section-gap) 2rem', textAlign: 'center', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'white' }}>
            Every journey starts with <br /> <span style={{ color: '#F7B42C' }}>understanding.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            Whether you are looking for answers, support, or direction, we are here to help you take the next step with clarity and confidence.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <button style={{
                backgroundColor: '#F7B42C',
                color: '#323030',
                padding: '1.25rem 4rem',
                borderRadius: '100px',
                fontWeight: 800,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
              }}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
