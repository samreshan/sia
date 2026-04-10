import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Users, MapPin } from "lucide-react";

export default function EventsPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      <section style={{ padding: '12rem 2rem 8rem' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '6rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>A room full of people <br /> who just know.</h1>
            <p style={{ fontSize: '1.25rem', color: '#666', lineHeight: '1.8' }}>
              We orchestrate spaces where families, educators, and professionals can connect, learn, and grow without the pressure of judgment.
            </p>
          </div>

          <div className="bezel-outer" style={{ marginBottom: '8rem' }}>
            <div className="bezel-inner" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#F7B42C', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Core Event Series</div>
                <h2 style={{ marginBottom: '2rem', fontSize: '3rem' }}>The Golden Carpet</h2>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                  Our free, monthly forum for parents. This isn't a lecture—it's a shared conversation. No judgment, just lived experiences and collective wisdom.
                </p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '0.9rem' }}>
                    <Calendar size={18} color="#F7B42C" /> First Saturday Monthly
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '0.9rem' }}>
                    <MapPin size={18} color="#F7B42C" /> SIA Campus, Lazimpat
                  </div>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  aspectRatio: '1', 
                  borderRadius: '100%', 
                  background: 'rgba(247, 180, 44, 0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: '2rem'
                }}>
                  <Users size={120} strokeWidth={1} color="#F7B42C" />
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '3rem' }}>Upcoming Calendar</h2>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {[
                { title: 'Parent Support Group', date: 'April 15, 2026', type: 'Community' },
                { title: 'ABAT Training Intake Q&A', date: 'April 22, 2026', type: 'Professional' },
                { title: 'Educator IEP Workshop', date: 'May 05, 2026', type: 'Workshops' }
              ].map((e) => (
                <div key={e.title} className="bezel-outer">
                  <div className="bezel-inner" style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '2rem 3rem'
                  }}>
                    <div>
                      <div style={{ color: '#768E1F', fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{e.type}</div>
                      <h3 style={{ fontSize: '1.5rem' }}>{e.title}</h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>{e.date}</p>
                      <p style={{ color: '#F7B42C', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', marginTop: '0.5rem' }}>Register →</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
