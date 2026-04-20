'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { 
  Search, 
  MessageSquare, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  Clock,
  Heart,
  Eye,
  Ear,
  RotateCcw,
  Zap,
  HelpCircle
} from "lucide-react";
import Link from 'next/link';

export default function KnowTheSignsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main style={{ backgroundColor: "#FAFAF7" }}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 8rem', backgroundColor: '#FAFAF7', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40vw', height: '60vh', background: 'radial-gradient(circle, rgba(118,142,31,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ maxWidth: '900px' }}>
            <motion.div variants={itemVariants} style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(118, 142, 31, 0.1)',
              color: '#768E1F',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '2rem'
            }}>
              Developmental Awareness
            </motion.div>
            <motion.h1 variants={itemVariants} style={{ marginBottom: '2.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Know the <span style={{ color: '#F7B42C' }}>Signs of Autism</span>
            </motion.h1>
            <motion.p variants={itemVariants} style={{ fontSize: '1.4rem', color: '#1C1B1B', fontWeight: 600, lineHeight: '1.5', marginBottom: '2.5rem' }}>
              Early signs are often visible — but easy to miss.
            </motion.p>
            <motion.p variants={itemVariants} style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.7', marginBottom: '3rem', maxWidth: '800px' }}>
              Many parents notice small differences in their child’s behavior, communication, or development but are unsure what they mean. This page will help you identify what to look for — clearly and confidently.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY EARLY SIGNS MATTER */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Why Early <br /><span style={{ color: '#768E1F' }}>Signs Matter</span></h2>
                <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: '1.8', marginBottom: '3rem' }}>
                    Autism does not suddenly appear — it develops over time. Recognizing early signs allows you to understand your child better and take informed steps.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    {[
                        "Understand your child better",
                        "Take informed steps early",
                        "Access the right support sooner"
                    ].map(t => (
                        <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                            <CheckCircle2 size={18} style={{ color: '#768E1F' }} /> {t}
                        </div>
                    ))}
                </div>
            </motion.div>
            <div style={{ backgroundColor: 'rgba(247, 180, 44, 0.05)', padding: '4rem', borderRadius: '3rem', border: '1px solid rgba(247, 180, 44, 0.1)', textAlign: 'center' }}>
                <Sparkles size={40} style={{ color: '#F7B42C', marginBottom: '2rem' }} />
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1C1B1B', lineHeight: '1.4', margin: 0 }}>
                    "Early support does not label your child. It gives them a stronger start."
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNS BY AGE GRID */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FAFAF7' }}>
        <div className="container">
           {/* Stage 1: 12-24 Months */}
           <div style={{ marginBottom: '10rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#F7B42C', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '1.5rem' }}>Phase One</div>
                  <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Early Signs (12–24 Months)</h2>
                  <p style={{ fontSize: '1.2rem', color: '#666' }}>Differences at this stage may be subtle but important.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                 {[
                   { title: "Communication", icon: MessageSquare, points: ["Inconsistent response to name", "Limited or no babbling", "No pointing/gesturing", "Avoids eye contact"] },
                   { title: "Interaction", icon: Users, points: ["Limited interest in people", "No engagement in social games", "Rarely shares attention", "Doesn't show objects"] },
                   { title: "Behavior", icon: Sparkles, points: ["Repetitive movements", "Focus on specific objects", "Sound/Touch sensitivity", "Spinning wheels/lights"] }
                 ].map((card, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} style={{ backgroundColor: 'white', padding: '3.5rem 2.5rem', borderRadius: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                        <card.icon size={28} style={{ color: '#F7B42C', marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>{card.title}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                            {card.points.map(p => <li key={p} style={{ fontSize: '0.95rem', color: '#555', display: 'flex', gap: '0.75rem' }}><div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F7B42C', marginTop: '0.6rem' }} /> {p}</li>)}
                        </ul>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* Stage 2: Toddlers */}
           <div style={{ marginBottom: '10rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#768E1F', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '1.5rem' }}>Phase Two</div>
                  <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Toddlers (2–4 Years)</h2>
                  <p style={{ fontSize: '1.2rem', color: '#666' }}>This is when signs become more noticeable across daily routines.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                 {[
                   { title: "Communication", icon: Ear, points: ["Delayed or no speech", "Echolalia (repeating words)", "Expressing needs difficulty", "Loss of learned words"] },
                   { title: "Social", icon: Heart, points: ["Prefers to play alone", "Instruction difficulty", "No facial expressions", "Doesn't imitate actions"] },
                   { title: "Routine", icon: Clock, points: ["Resistance to change", "Lining up/Spinning toys", "Unclear meltdowns", "Routine fixation"] }
                 ].map((card, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} style={{ backgroundColor: 'white', padding: '3.5rem 2.5rem', borderRadius: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                        <card.icon size={28} style={{ color: '#768E1F', marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>{card.title}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                            {card.points.map(p => <li key={p} style={{ fontSize: '0.95rem', color: '#555', display: 'flex', gap: '0.75rem' }}><div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#768E1F', marginTop: '0.6rem' }} /> {p}</li>)}
                        </ul>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* Stage 3: Older Children */}
           <div>
              <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#768E1F', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '1.5rem' }}>Phase Three</div>
                  <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Older Children</h2>
                  <p style={{ fontSize: '1.2rem', color: '#666' }}>Sometimes signs are recognized later in more complex social environments.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                 {[
                   { title: "Conversation", icon: Users, points: ["Holding conversations", "Literal interpretation", "Emotion expression", "Social situational reading"] },
                   { title: "Socializing", icon: ArrowRight, points: ["Making/Maintaining friends", "Challenges in groups", "Different social needs", "Tone understanding"] },
                   { title: "Sensory & Interests", icon: Zap, points: ["Strong focused interests", "Adaptability challenges", "Sensory sensitivities", "Noise/Texture/Crowds"] }
                 ].map((card, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} style={{ backgroundColor: 'white', padding: '3.5rem 2.5rem', borderRadius: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                        <card.icon size={28} style={{ color: '#1C1B1B', marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>{card.title}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                            {card.points.map(p => <li key={p} style={{ fontSize: '0.95rem', color: '#555', display: 'flex', gap: '0.75rem' }}><div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#1C1B1B', marginTop: '0.6rem' }} /> {p}</li>)}
                        </ul>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 4. REGRESSION CALLOUT */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ backgroundColor: '#F0F4E8', borderRadius: '3rem', padding: '6rem 4rem', display: 'flex', gap: '4rem', alignItems: 'center', border: '1px solid rgba(118,142,31,0.1)' }}>
             <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#768E1F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <RotateCcw size={40} />
             </div>
             <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Regression <span style={{ color: '#768E1F' }}>(Important to Notice)</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                    In some children, skills that were once present may reduce or disappear. This may include Loss of speech, Reduced interaction, or Decreased eye contact.
                </p>
                <div style={{ fontWeight: 900, fontSize: '0.9rem', color: '#1C1B1B', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    If you notice regression, it is important to seek guidance immediately.
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. RISKY TO WAIT SECTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '6rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>What You Might Hear — <br /><span style={{ color: '#F7B42C' }}>And Why It’s Risky to Wait</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                    {["Boys speak late", "Every child is different", "Give it more time", "They'll outgrow it"].map(text => (
                        <div key={text} style={{ padding: '1.5rem', backgroundColor: '#FAFAF7', borderRadius: '1rem', fontStyle: 'italic', color: '#666', border: '1px solid rgba(0,0,0,0.05)' }}>
                             "{text}"
                        </div>
                    ))}
                </div>
                <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8' }}>
                    While development does vary, consistent patterns of delay or difference should not be ignored. Waiting without understanding can delay the support your child may need.
                </p>
            </motion.div>
            <div style={{ backgroundColor: 'white', padding: '4rem', borderRadius: '3rem', boxShadow: '0 30px 60px rgba(0,0,0,0.04)', border: '1px solid rgba(247,180,44,0.1)' }}>
                <HelpCircle size={40} style={{ color: '#F7B42C', marginBottom: '2rem' }} />
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>One Simple Rule</h3>
                <p style={{ fontSize: '1.2rem', color: '#1C1B1B', fontWeight: 800, lineHeight: '1.5', margin: 0 }}>
                    "If you are wondering whether you should be concerned — it is worth checking."
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHEN TO TAKE ACTION */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'rgba(247, 180, 44, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
             <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>When Should You <br />Take <span style={{ color: '#F7B42C' }}>Action?</span></h2>
             <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '4rem', lineHeight: '1.7' }}>
                You don’t need to wait for everything to match. If you notice a strong instinct that something is different, that is enough reason to take the next step.
             </p>
             <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                    "Multiple signs across communication, behavior, or interaction",
                    "Delays compared to typical developmental milestones",
                    "A strong instinct that something is different"
                ].map(t => (
                    <div key={t} style={{ backgroundColor: 'white', padding: '1.5rem 2.5rem', borderRadius: '1.25rem', fontWeight: 800, textAlign: 'left', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <AlertCircle size={20} style={{ color: '#F7B42C', flexShrink: 0 }} /> {t}
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 7. WHAT HAPPENS NEXT */}
      <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>What Happens <span style={{ color: '#768E1F' }}>Next?</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.8', marginBottom: '3rem' }}>
                    Taking action does not mean labeling your child immediately. It means understanding their unique needs.
                </p>
                <div style={{ display: 'grid', gap: '1.25rem' }}>
                    {["Getting professional observation", "Understanding your child’s needs", "Exploring early support options"].map(step => (
                        <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 800 }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(118,142,31,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#768E1F' }}><CheckCircle2 size={18} /></div>
                            {step}
                        </div>
                    ))}
                </div>
             </motion.div>
             <div style={{ padding: '4rem', backgroundColor: '#FAFAF7', borderRadius: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#768E1F', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '2rem' }}>Empathy First</div>
                <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1C1B1B', lineHeight: '1.4', marginBottom: '2rem' }}>
                    "You are not alone."
                </p>
                <p style={{ color: '#666', lineHeight: '1.8', margin: 0 }}>
                    Every parent goes through uncertainty. What matters is not having all the answers but taking the first step.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section style={{ padding: '0 2rem 8rem 2rem', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ backgroundColor: 'rgba(247, 180, 44, 0.05)', borderRadius: '4rem', padding: '8rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden', border: '1px solid rgba(247,180,44,0.1)' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 style={{ color: '#1C1B1B', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>Noticing These Signs? <br />Let’s Talk.</h2>
              <p style={{ color: '#666', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
                If you recognize any of these patterns, it’s worth having a conversation. No pressure. No assumptions. Just clarity.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <Link href="/contact">
                  <button style={{ backgroundColor: '#1C1B1B', color: 'white', padding: '1.5rem 3.5rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    Request Consultation <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="/contact">
                  <button style={{ border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'white', color: '#1C1B1B', padding: '1.5rem 3.5rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em', cursor: 'pointer' }}>
                    Talk to Our Team
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media (max-width: 968px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          h1 { font-size: 3rem !important; }
          h2 { font-size: 2.5rem !important; }
        }
      `}</style>
    </main>
  );
}
