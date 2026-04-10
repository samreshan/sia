import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>We are ready when you are.</h1>
            <p style={{ fontSize: '1.25rem', color: '#666', lineHeight: '1.8' }}>
              Reaching out is a brave first step. We ensure every initial conversation is warm, low-pressure, and entirely focused on your child's flourishing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '6rem', alignItems: 'start' }}>
            {/* Contact Details */}
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div className="bezel-outer">
                <div className="bezel-inner" style={{ gap: '1.5rem', padding: '2.5rem' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#F7B42C' }}><MapPin size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', color: '#323030' }}>Visit Our Campus</h4>
                      <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Lazimpat, Kathmandu <br />Nepal</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#F7B42C' }}><Phone size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', color: '#323030' }}>Call Us</h4>
                      <p style={{ color: '#666', fontSize: '0.95rem' }}>+977-1-1234567</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#F7B42C' }}><Mail size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', color: '#323030' }}>Email</h4>
                      <p style={{ color: '#666', fontSize: '0.95rem' }}>info@instituteforautism.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bezel-outer" style={{ height: '300px' }}>
                <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ color: '#888', fontWeight: 600 }}>Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Intake Form */}
            <div className="bezel-outer" style={{ height: '100%' }}>
              <div className="bezel-inner" style={{ padding: '4rem', gap: '2.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>Your Name</label>
                    <input type="text" placeholder="Full Name" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', outline: 'none', backgroundColor: '#FDFCFB' }} />
                  </div>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>Email Address</label>
                    <input type="email" placeholder="example@email.com" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', outline: 'none', backgroundColor: '#FDFCFB' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '0.2rem' }}>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>Child's Age (Optional)</label>
                    <input type="text" placeholder="e.g. 5 years" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', outline: 'none', backgroundColor: '#FDFCFB' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>What brings you to us today?</label>
                  <textarea placeholder="Tell us your story or how we can help..." style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', outline: 'none', minHeight: '200px', backgroundColor: '#FDFCFB', fontFamily: 'inherit' }} />
                </div>

                <button style={{ 
                  backgroundColor: '#323030', 
                  color: 'white', 
                  padding: '1.5rem', 
                  borderRadius: '1rem', 
                  fontWeight: 800, 
                  fontSize: '0.9rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em',
                  marginTop: '1rem'
                }}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
