import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, Download, PlayCircle } from "lucide-react";

export default function ResourcesPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>Knowledge is a form of care.</h1>
            <p style={{ fontSize: '1.25rem', color: '#666', lineHeight: '1.8' }}>
              We believe that empowering parents and educators with evidence-based resources is the first step toward a more inclusive future.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 8rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem' }}>
            {/* Articles */}
            <div>
              <h3 style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#F7B42C' }}>
                <FileText size={20} /> Articles & Insights
              </h3>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  "Why Autism Cases Are Rising in Nepal",
                  "Understanding the Sensory-Friendly Home",
                  "The Power of Play-Based Intervention"
                ].map((t) => (
                  <div key={t} className="bezel-outer">
                    <div className="bezel-inner" style={{ padding: '1.5rem' }}>
                      <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guides */}
            <div>
              <h3 style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#768E1F' }}>
                <Download size={20} /> Downloadable Guides
              </h3>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  "Preparing for Your First Assessment",
                  "Sensory-Friendly Home Setup Guide",
                  "IEP Advocacy Toolkit"
                ].map((t) => (
                  <div key={t} className="bezel-outer">
                    <div className="bezel-inner" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t}</p>
                      <Download size={16} color="#768E1F" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Media */}
            <div>
              <h3 style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#323030' }}>
                <PlayCircle size={20} /> Media & Press
              </h3>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  "TechPana Feature: SIA’s Vision",
                  "Kathmandu Post: Breaking the Stigma",
                  "Building the Future: Documentary"
                ].map((t) => (
                  <div key={t} className="bezel-outer">
                    <div className="bezel-inner" style={{ padding: '1.5rem' }}>
                      <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
