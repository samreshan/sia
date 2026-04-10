'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Heart, Cpu, ShoppingBag, TrendingUp, Sun, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 6rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div style={{
                display: 'inline-block',
                padding: '0.4rem 1rem',
                backgroundColor: 'rgba(247, 180, 44, 0.1)',
                color: '#F7B42C',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem'
              }}>
                About Sunflower
              </div>
              <h1 style={{ marginBottom: '2.5rem', lineHeight: '1.1', fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                Building a better standard <br /> 
                <span style={{ color: '#F7B42C' }}>for autism care in Nepal.</span>
              </h1>
              <p style={{ fontSize: '1.4rem', color: '#444', lineHeight: '1.6', maxWidth: '800px' }}>
                Sunflower Institute for Autism brings clarity, structure, and long-term support for individuals with autism and hidden disabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section style={{ padding: 'var(--section-gap) 2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
            <div className="bezel-outer">
               <div className="bezel-inner" style={{ padding: 0, overflow: 'hidden' }}>
                 <img src="/hero.png" style={{ width: '100%', display: 'block' }} />
               </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '2rem', fontSize: '3rem' }}>Who we are</h2>
              <div style={{ display: 'grid', gap: '2rem' }}>
                <p style={{ fontSize: '1.2rem', color: '#323030', lineHeight: '1.8' }}>
                  Sunflower Institute for Autism is a standards-led system designed to support individuals, families, and professionals through every stage of the autism journey.
                </p>
                <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8' }}>
                  We bring together assessments, therapy, training, and community support into one connected approach — built to be clear, consistent, and grounded in real-life needs.
                </p>
                <div style={{ padding: '2rem', backgroundColor: 'rgba(247, 180, 44, 0.05)', borderRadius: '2rem', border: '1px solid rgba(247, 180, 44, 0.1)' }}>
                   <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#323030' }}>
                     Our goal is simple: to help individuals live more independent, confident, and dignified lives.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FDFCFB' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Our approach</h2>
            <p style={{ fontSize: '1.3rem', color: '#444', lineHeight: '1.9', marginBottom: '4rem' }}>
              Autism care is often fragmented — with different services, different advice, and no clear direction. We take a structured approach.
            </p>
            
            <div className="bezel-outer" style={{ backgroundColor: '#323030', color: 'white' }}>
              <div className="bezel-inner" style={{ padding: '4rem', backgroundColor: 'transparent', border: 'none' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#F7B42C', marginBottom: '1.5rem' }}>
                  The One Question
                </p>
                <h3 style={{ fontSize: '2.2rem', color: 'white', lineHeight: '1.3', fontStyle: 'italic' }}>
                  "Does this improve real life for individuals and families — and can it scale to help more people?"
                </h3>
              </div>
            </div>
            
            <p style={{ marginTop: '4rem', fontSize: '1.1rem', color: '#777' }}>
              This allows us to build systems that are not only effective today, but sustainable for the future.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE ECOSYSTEM */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <div style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'white' }}>A connected system designed to last</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', maxWidth: '800px', lineHeight: '1.8' }}>
              Sunflower operates as a connected system where different areas work together to improve care, develop better tools, and expand access. Instead of isolated services, we focus on building a system that learns, adapts, and improves over time.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { id: '01', title: 'Sunflower Institute', role: 'Clinical Infrastructure', desc: 'Therapy, assessments, training, and direct support for individuals, families, and organisations.', icon: Heart, href: '/services' },
              { id: '02', title: 'RXPIN', role: 'Digital Infrastructure', desc: 'Digital tools and platforms designed to improve care delivery, tracking, and accessibility.', icon: Cpu, href: '/pillars/rxpin' },
              { id: '03', title: 'Sunflower Petals', role: 'Material Infrastructure', desc: 'Physical resources that support learning, development, and everyday life.', icon: ShoppingBag, href: '/pillars/sunflower-petals' },
              { id: '04', title: 'Equity Partners', role: 'Strategic Infrastructure', desc: 'Structured funding and partnerships that ensure long-term sustainability and expansion.', icon: TrendingUp, href: '/pillars/equity-partners' },
              { id: '05', title: 'Golden Foundation', role: 'Social Infrastructure', desc: 'Programs that ensure support reaches individuals and families regardless of financial limitations.', icon: Sun, href: '/pillars/golden-foundation' }
            ].map(pillar => (
              <Link key={pillar.id} href={pillar.href} style={{ textDecoration: 'none' }}>
                <div className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.05)', height: '100%', cursor: 'pointer' }}>
                  <div className="bezel-inner" style={{ padding: '3rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'transparent', border: 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '1rem', color: '#F7B42C' }}>
                        <pillar.icon size={24} />
                      </div>
                      <span style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(247, 180, 44, 0.1)' }}>{pillar.id}</span>
                    </div>
                    <div>
                       <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>{pillar.title}</h3>
                       <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginBottom: '1rem' }}>{pillar.role}</p>
                       <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: '4rem', fontStyle: 'italic', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
            Each part strengthens the other — creating a system that continues to improve with time.
          </p>
        </div>
      </section>

      {/* 5. HOW WE WORK */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', marginBottom: '5rem', textAlign: 'center' }}>How we work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {[
              { step: '1', title: 'First Contact', desc: 'Families, schools, or organisations reach out. This is where understanding begins.' },
              { step: '2', title: 'Identify Needs', desc: 'We focus on understanding the real challenges — not just surface-level concerns.' },
              { step: '3', title: 'Assessment & Planning', desc: 'Structured evaluations lead to clear, personalised support plans.' },
              { step: '4', title: 'Deliver Support', desc: 'Therapy, training, and programs are delivered in practical and structured ways.' },
              { step: '5', title: 'Observe & Improve', desc: 'We track progress and continuously refine our approach.' },
              { step: '6', title: 'Build for Scale', desc: 'Insights from real experiences help improve systems, tools, and future services.' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'start' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: 900, 
                  color: 'rgba(247, 180, 44, 0.4)', 
                  lineHeight: 1,
                  fontFamily: 'Lora'
                }}>
                  {item.step}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#323030' }}>{item.title}</h4>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR COMMITMENT */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '2rem' }}>Our commitment</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem' }}>
              We are committed to building a system that is clear, consistent, and respectful — while remaining sustainable for the long term.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Clear', desc: 'Structured, easy-to-understand care without unnecessary complexity.' },
              { title: 'Consistent', desc: 'Reliable processes and standards that families and professionals can trust.' },
              { title: 'Respectful', desc: 'Every individual and every family is treated with dignity, without judgment.' },
              { title: 'Sustainable', desc: 'A long-term model designed to grow, adapt, and continue serving future generations.' }
            ].map((c, i) => (
              <div key={i} className="bezel-outer" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                 <div className="bezel-inner" style={{ padding: '3rem', border: 'none', backgroundColor: 'transparent' }}>
                    <h4 style={{ color: '#F7B42C', fontSize: '1.5rem', marginBottom: '1.5rem' }}>{c.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>{c.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE TEAM */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>The people behind Sunflower</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666', fontSize: '1.2rem' }}>
              Sunflower is built by people committed to creating clarity, structure, and long-term impact in autism care.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
             {[
               { name: 'Dhruba Adhikari', role: 'Co-Founder', bio: 'Focused on building systems that bring structure, sustainability, and long-term impact to autism care in Nepal.' },
               { name: 'Stuti Neupane', role: 'Co-Founder', bio: 'Focused on delivering structured, compassionate care and building meaningful support systems for individuals and families.' }
             ].map((member, i) => (
               <div key={i} className="bezel-outer">
                 <div className="bezel-inner" style={{ padding: '4rem', display: 'flex', gap: '3rem', alignItems: 'center' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#eee', flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                      <p style={{ color: '#F7B42C', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '1.5rem' }}>{member.role}</p>
                      <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1.05rem' }}>{member.bio}</p>
                    </div>
                 </div>
               </div>
             ))}
          </div>
          <p style={{ marginTop: '5rem', fontStyle: 'italic', textAlign: 'center', color: '#999', fontSize: '1.1rem' }}>
             Together, the team is building a system designed to support not just today’s needs — but the future of autism care in Nepal.
          </p>
        </div>
      </section>

      {/* 8. SOCIAL IMPACT */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FDFCFB', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem' }}>Making care accessible</h2>
              <p style={{ fontSize: '1.25rem', color: '#323030', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                Not every family has the financial ability to access care — but everyone deserves support.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
                A portion of the institute’s earnings is directed toward programs that provide assistance to families who cannot afford therapy and services. This ensures that growth is always connected to impact.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                 <div style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid #eee', borderRadius: '2rem', flex: 1 }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>10%</div>
                    <div style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>Directed to Access</div>
                 </div>
                 <ArrowUpRight size={40} color="#F7B42C" />
                 <div style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid #eee', borderRadius: '2rem', flex: 1 }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>100%</div>
                    <div style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>Impact Connected</div>
                 </div>
              </div>
            </div>
            <div className="bezel-outer" style={{ backgroundColor: '#323030' }}>
               <div className="bezel-inner" style={{ padding: '4rem', border: 'none', backgroundColor: 'transparent', textAlign: 'center' }}>
                  <Sun size={60} color="#F7B42C" style={{ marginBottom: '2rem' }} />
                  <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1.5rem' }}>The Soul of SIA</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                    Ensuring that financial status never dictates an individual's right to dignity and clinical care.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLOSING SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#323030', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem' }}>One direction. One standard.</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.3rem', lineHeight: '2', color: 'rgba(255,255,255,0.7)' }}>
             Sunflower is built on a simple belief: <br />
             <span style={{ color: '#F7B42C', fontWeight: 700 }}>Care should lead to better understanding.</span> <br />
             Understanding should lead to better solutions. <br />
             And success should create access for more people.
          </div>
          <p style={{ marginBottom: '4rem', color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem' }}>
            This is how we create lasting impact — while staying focused on what matters most.
          </p>
          <Link href="/contact">
            <button style={{
              backgroundColor: '#F7B42C',
              color: '#323030',
              padding: '1.5rem 4rem',
              borderRadius: '100px',
              fontWeight: 800,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media (max-width: 968px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
