import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Handshake, Heart, MessageSquare } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
            <div style={{ color: '#F7B42C', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Join the Movement</div>
            <h1 style={{ marginBottom: '2rem' }}>Let's help every sunflower bloom.</h1>
            <p style={{ fontSize: '1.25rem', color: '#666', lineHeight: '1.8' }}>
              Establishing Nepal's first Center of Excellence requires a village. Your presence, partnership, and support give families the strength to thrive.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '8rem' }}>
            <div className="bezel-outer">
              <div className="bezel-inner" style={{ textAlign: 'center', gap: '1.5rem' }}>
                <div style={{ color: '#F7B42C', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}><Heart size={44} strokeWidth={1.5} /></div>
                <h3 style={{ fontSize: '1.75rem' }}>Donate</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>Fund evidence-based therapy, educational tools, and the construction of our physical sanctuary.</p>
                <button style={{ backgroundColor: '#F7B42C', color: '#323030', padding: '1rem 2.5rem', borderRadius: '100px', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Support Now</button>
              </div>
            </div>
            <div className="bezel-outer">
              <div className="bezel-inner" style={{ textAlign: 'center', gap: '1.5rem' }}>
                <div style={{ color: '#F7B42C', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}><Handshake size={44} strokeWidth={1.5} /></div>
                <h3 style={{ fontSize: '1.75rem' }}>Partner</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>Corporate sponsorships, institutional partnerships, and collaborative research opportunities.</p>
                <button style={{ backgroundColor: '#323030', color: 'white', padding: '1rem 2.5rem', borderRadius: '100px', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Get in Touch</button>
              </div>
            </div>
            <div className="bezel-outer">
              <div className="bezel-inner" style={{ textAlign: 'center', gap: '1.5rem' }}>
                <div style={{ color: '#F7B42C', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}><MessageSquare size={44} strokeWidth={1.5} /></div>
                <h3 style={{ fontSize: '1.75rem' }}>Volunteer</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>Offer your time, expertise, or platform to help us advocate for a neurodivergent-inclusive Nepal.</p>
                <button style={{ border: '2px solid #323030', color: '#323030', padding: '1rem 2.5rem', borderRadius: '100px', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Join Us</button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bezel-outer" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="bezel-inner" style={{ padding: '4rem', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>We are ready when you are.</h2>
                <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto' }}>Whether you have a question or are ready to collaborate, our doors are open.</p>
              </div>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <input type="text" placeholder="Your Name" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', backgroundColor: '#FFFFFF', fontSize: '1rem' }} />
                  <input type="email" placeholder="Your Email" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', backgroundColor: '#FFFFFF', fontSize: '1rem' }} />
                </div>
                <textarea placeholder="Tell us your story or how we can help..." style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', backgroundColor: '#FFFFFF', minHeight: '160px', fontSize: '1rem', fontFamily: 'inherit' }} />
                <button style={{ backgroundColor: '#F7B42C', color: '#323030', padding: '1.25rem', borderRadius: '1rem', fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
