'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Users, Plus, CheckCircle2, BookOpen, UserCheck, GraduationCap, School } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FAFAF7",
          padding: "12rem 2rem 8rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft olive bloom — left */}
        <div style={{
          position: "absolute", top: "-10%", left: "-5%", width: "55vw", height: "80vh", borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(118,142,31,0.18) 0%, rgba(118,142,31,0.06) 50%, transparent 75%)",
          pointerEvents: "none",
        }} />
        {/* Warm golden bloom — right */}
        <div style={{
          position: "absolute", top: "-5%", right: "-10%", width: "55vw", height: "80vh", borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(247,180,44,0.2) 0%, rgba(247,180,44,0.07) 50%, transparent 75%)",
          pointerEvents: "none",
        }} />
        {/* Bottom gradient fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
          background: "linear-gradient(to bottom, transparent, rgba(245,245,242,0.6))",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>About Us</span>
              </div>

              <h1 style={{
                fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: "1.05", letterSpacing: "-0.03em",
                marginBottom: "2rem", color: "#1C1B1B",
              }}>
                Sunflower Institute <br />
                <span style={{ color: "#F7B42C" }}>for Autism</span>
              </h1>

              <p style={{ fontSize: "1.5rem", color: "#1C1B1B", lineHeight: "1.5", maxWidth: "700px", marginBottom: "2rem", fontWeight: 700 }}>
                An Autism Excellence Centre in Nepal
              </p>

              <p style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.8", maxWidth: "720px" }}>
                Providing structured, evidence-informed support for individuals with autism, while guiding families, training professionals, and strengthening the overall standard of care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              style={{ position: "relative" }}
            >
              {/* Elegant offset border backing */}
              <div style={{ position: "absolute", top: "-5%", right: "-5%", width: "100%", height: "100%", borderRadius: "2rem", border: "2px solid rgba(247,180,44,0.3)" }} />
              
              <div style={{ borderRadius: "2rem", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.12)", position: "relative", zIndex: 1 }}>
                <img src="/images/about/about 3.jpg" alt="Sunflower Excellence Centre" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. POSITIONING ────────────────────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "white" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>01</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start" }}>
            {/* Left — Headline & Content */}
            <div>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.15", letterSpacing: "-0.03em", marginBottom: "2.5rem", color: "#1C1B1B" }}>
                A Centre Built for <span style={{ color: "#F7B42C" }}>Structured Autism Support</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "#444", lineHeight: "1.8", marginBottom: "2rem" }}>
                Sunflower Institute for Autism is being developed as an Autism Excellence Centre — focused on delivering structured, consistent, and high-quality support for individuals with autism and neurodiversity.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#666", lineHeight: "1.8", marginBottom: "2.5rem" }}>
                We bring together therapy, guidance, and capacity building into a single environment designed to improve outcomes and create clarity for families.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#888", lineHeight: "1.8" }}>
                Our focus is not just access to services, but the <strong style={{ color: "#1C1B1B" }}>quality, structure, and continuity</strong> of support.
              </p>
            </div>

            {/* Right — Image and Bold statement */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
              <div style={{
                backgroundColor: "#1C1B1B", borderRadius: "2rem", padding: "5rem 4rem",
                position: "relative", overflow: "hidden", minHeight: "450px", display: "flex", alignItems: "flex-end",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}>
                <img src="/images/about/about.jpg" alt="Sunflower Institute Support" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,27,27,0.95) 0%, rgba(28,27,27,0.4) 55%, transparent 100%)" }} />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ color: "#F7B42C", fontSize: "5rem", fontFamily: "Georgia, serif", lineHeight: 0.5, marginBottom: "2rem", opacity: 0.8 }}>"</div>
                  <p style={{ color: "white", fontSize: "1.6rem", fontWeight: 800, lineHeight: "1.4", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                    This is where structured autism support begins.
                  </p>
                  <div style={{ width: "60px", height: "3px", backgroundColor: "#F7B42C" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. VISION & MISSION ─────────────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "#FAFAF7", position: "relative", overflow: "hidden" }}>
        
        {/* Soft bloom in background */}
        <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "50vw", height: "60vh", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>02</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "stretch" }}>
            
            {/* Vision — The "Soul" card */}
            <div style={{ 
              backgroundColor: "#1C1B1B", 
              borderRadius: "2rem", 
              padding: "5rem 4rem", 
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Subtle gold glow */}
              <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "100%", height: "100%", background: "radial-gradient(circle at top left, rgba(247,180,44,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", color: "#F7B42C", marginBottom: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Vision</h2>
                <p style={{ fontSize: "1.45rem", lineHeight: "1.6", fontWeight: 700, marginBottom: "2rem", color: "white" }}>
                  To build a Nepal where every individual with autism and neurodiversity has access to structured support, meaningful learning opportunities, and a society that understands and includes them with dignity.
                </p>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C", marginBottom: "2rem" }} />
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "rgba(255,255,255,0.7)" }}>
                  We envision a future where families are not left searching for answers, where support systems are accessible and reliable, and where individuals on the spectrum are empowered to reach their fullest potential—on their own terms.
                </p>
              </div>
            </div>

            {/* Mission — The "Execution" card */}
            <div style={{ 
              backgroundColor: "white", 
              borderRadius: "2rem", 
              padding: "5rem 4rem", 
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.04)"
            }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", color: "#1C1B1B", marginBottom: "2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Mission</h2>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.7", color: "#444", fontWeight: 600, marginBottom: "3rem" }}>
                To provide structured, consistent, and evidence-informed support for individuals with autism and neurodiversity, while empowering families and strengthening the ecosystem around them.
              </p>

              <div style={{ display: "grid", gap: "1.25rem" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#768E1F", marginBottom: "0.5rem" }}>Executed through:</p>
                {[
                  "Delivering clinical and intervention services tailored to individual developmental needs",
                  "Supporting parents and caregivers with practical tools, training, and guidance",
                  "Creating predictable, structured environments that reduce anxiety and improve learning",
                  "Building long-term pathways for independence, communication, and daily life skills",
                  "Strengthening local capacity through training, awareness, and system development"
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                    <div style={{ 
                      width: "24px", height: "24px", borderRadius: "50%", 
                      backgroundColor: "rgba(118,142,31,0.1)", color: "#768E1F", 
                      display: "flex", alignItems: "center", justifyContent: "center", 
                      fontSize: "0.7rem", fontWeight: 900, flexShrink: 0, marginTop: "0.2rem"
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.5", margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. WHAT MAKES US DIFFERENT ───────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "50vw", height: "60vh", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>03</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "8rem", alignItems: "start" }}>
            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.15", letterSpacing: "-0.03em", marginBottom: "2.5rem" }}>
                What Defines an <span style={{ color: "#F7B42C" }}>Excellence Centre</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "#444", lineHeight: "1.8", marginBottom: "2rem" }}>
                An excellence centre is not defined by services alone — but by how those services are designed, delivered, and connected.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#888", lineHeight: "1.8", marginBottom: "3rem" }}>
                At Sunflower Institute for Autism, we focus on:
              </p>
              <div style={{ borderRadius: "2rem", overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}>
                 <img src="/images/about/about2.jpg" alt="Excellence Centre" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>

            {/* Right — Differentiators */}
            <div>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  "Structured developmental pathways, not random interventions",
                  "Consistency across sessions, home, and school environments",
                  "Parent involvement as a core part of progress",
                  "Practical, outcome-focused support",
                  "Continuous improvement in methods and delivery"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{
                      display: "flex", alignItems: "center", gap: "1.25rem", padding: "1.5rem 2rem",
                      backgroundColor: "white", borderRadius: "1rem", border: "1px solid rgba(0,0,0,0.05)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                    }}
                  >
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(118,142,31,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#768E1F", flexShrink: 0,
                    }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ fontSize: "1.05rem", color: "#444", fontWeight: 600 }}>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div style={{
                marginTop: "3rem", padding: "2rem", borderLeft: "4px solid #768E1F",
                backgroundColor: "rgba(118,142,31,0.05)", borderRadius: "0 1rem 1rem 0",
              }}>
                <p style={{ margin: 0, fontWeight: 800, fontSize: "1.15rem", color: "#1C1B1B", lineHeight: "1.6" }}>
                  The difference is not what we offer — <br />
                  <span style={{ color: "#768E1F" }}>it is how we deliver it.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CORE SERVICES ─────────────────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "white" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>03</span>
          </div>

          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.15", letterSpacing: "-0.03em", marginBottom: "6rem" }}>
            Core Areas of <span style={{ color: "#F7B42C" }}>Support</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2.5rem" }}>
            {[
              {
                icon: BookOpen,
                title: "Therapy & Developmental Support",
                desc: "Structured interventions focused on communication, behavior, and developmental progress.",
              },
              {
                icon: UserCheck,
                title: "Parent & Caregiver Guidance",
                desc: "Practical tools and ongoing support to help families manage everyday challenges with confidence.",
              },
              {
                icon: School,
                title: "School & Shadow Support",
                desc: "Bridging the gap between therapy and education through guided school integration.",
              },
              {
                icon: GraduationCap,
                title: "Professional Training",
                desc: "Building capacity by training individuals working in autism and developmental support.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: "3.5rem", backgroundColor: "#FAFAF7", borderRadius: "2rem",
                  border: "1px solid rgba(0,0,0,0.04)", display: "flex", gap: "2rem", alignItems: "start",
                  cursor: "default",
                }}
              >
                <div style={{
                  width: "60px", height: "60px", borderRadius: "1rem",
                  backgroundColor: "rgba(247,180,44,0.08)", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#F7B42C", flexShrink: 0,
                }}>
                  <service.icon size={28} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1C1B1B", marginBottom: "1rem", letterSpacing: "-0.01em" }}>{service.title}</h4>
                  <p style={{ color: "#666", lineHeight: "1.7", fontSize: "1rem" }}>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: "5rem", textAlign: "center" }}>
            <p style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1C1B1B" }}>
              Every service is designed to connect, <span style={{ color: "#F7B42C" }}>not operate in isolation.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. WHY THIS MATTERS ──────────────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "#1C1B1B", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-30%", left: "-15%", width: "60%", height: "150%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.12) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-30%", right: "-15%", width: "60%", height: "150%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.08) 0%, transparent 55%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>05</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.15", letterSpacing: "-0.03em", color: "white", marginBottom: "2.5rem" }}>
                Raising the Standard of <span style={{ color: "#F7B42C" }}>Autism Support</span> in Nepal
              </h2>
              <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.8", marginBottom: "2rem" }}>
                Autism support in Nepal is still developing, with significant gaps in structure, accessibility, and consistency.
              </p>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.8" }}>
                This directly impacts the progress of individuals and increases the burden on families.
              </p>
            </div>

            <div>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  "Delayed access to services",
                  "Inconsistent support approaches",
                  "Lack of long-term developmental planning",
                  "Limited guidance for daily life challenges"
                ].map((challenge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{
                      display: "flex", alignItems: "center", gap: "1.25rem", padding: "1.5rem 2rem",
                      backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "1rem",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(247,180,44,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#F7B42C", flexShrink: 0,
                    }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{challenge}</span>
                  </motion.div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* ── 6. OUR APPROACH ──────────────────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "white" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>06</span>
          </div>

          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.15", letterSpacing: "-0.03em", marginBottom: "2rem" }}>
            How We <span style={{ color: "#F7B42C" }}>Work</span>
          </h2>
          <p style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.8", maxWidth: "700px", marginBottom: "6rem" }}>
            Our approach is built on four core principles:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { num: "01", title: "Structured", desc: "Clear developmental pathways, defined goals, and consistent routines." },
              { num: "02", title: "Consistent", desc: "Alignment across support sessions, home practices, and school environments." },
              { num: "03", title: "Practical", desc: "Support that works in real-life situations, not just controlled settings." },
              { num: "04", title: "Family-Centered", desc: "Parents and caregivers are actively involved in the process." },
            ].map((principle, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: "3rem", backgroundColor: "#FAFAF7", borderRadius: "2rem",
                  border: "1px solid rgba(0,0,0,0.04)", textAlign: "center",
                }}
              >
                <span style={{ fontSize: "3rem", fontWeight: 900, color: "rgba(247,180,44,0.15)", lineHeight: 1, display: "block", marginBottom: "2rem" }}>{principle.num}</span>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1C1B1B", marginBottom: "1rem" }}>{principle.title}</h4>
                <p style={{ color: "#777", lineHeight: "1.7", fontSize: "0.95rem" }}>{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHO WE SERVE ──────────────────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "#FAFAF7", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50vw", height: "60vh", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>07</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "8rem", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.15", letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                Who We <span style={{ color: "#F7B42C" }}>Work With</span>
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.8", marginBottom: "3rem" }}>
                Our goal is to strengthen the entire support system around the individual.
              </p>
              <div style={{ borderRadius: "2rem", overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}>
                 <img src="/images/about/about 4.jpg" alt="Who We Work With" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[
                { title: "Children with autism and neurodiversity", icon: "🌻" },
                { title: "Parents and caregivers", icon: "👨‍👩‍👧" },
                { title: "Schools and educators", icon: "🏫" },
                { title: "Professionals in developmental support", icon: "🎓" },
              ].map((audience, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: "2.5rem 2rem", backgroundColor: "white", borderRadius: "1.5rem",
                    border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "1.25rem" }}>{audience.icon}</div>
                  <p style={{ fontSize: "1rem", fontWeight: 700, color: "#1C1B1B", lineHeight: "1.5" }}>{audience.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. LEADERSHIP ────────────────────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "white", position: "relative", overflow: "hidden" }}>
        
        {/* Soft bloom in background */}
        <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "50vw", height: "60vh", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>08</span>
          </div>

          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.15", letterSpacing: "-0.03em", marginBottom: "6rem", color: "#1C1B1B" }}>
            <span style={{ color: "#1C1B1B" }}>Leadership</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "5rem" }}>
            {[
              {
                name: "Dhruba Adhikari",
                role: "Co-Founder",
                image: "/founders/dhurba.webp",
                bio: "Entrepreneur and autism advocate focused on building structured systems for autism support in Nepal.",
              },
              {
                name: "Stuti Neupane",
                role: "Co-Founder",
                image: "/founders/suti.webp",
                bio: "Management professional working closely with families and program development in neurodiversity support.",
              }
            ].map((leader, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: "white", borderRadius: "2rem", display: "flex", alignItems: "center",
                  padding: "3rem", boxShadow: "0 25px 50px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.05)"
                }}
              >
                <div style={{ width: "180px", height: "180px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}>
                  <img src={leader.image} alt={leader.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ paddingLeft: "3rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#F7B42C", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
                    {leader.role}
                  </div>
                  <h3 style={{ fontSize: "2rem", color: "#1C1B1B", margin: "0 0 1.25rem", fontWeight: 800, letterSpacing: "-0.02em" }}>{leader.name}</h3>
                  <p style={{ color: "#555", lineHeight: "1.7", fontSize: "1.05rem", margin: 0 }}>
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1C1B1B", letterSpacing: "-0.01em" }}>
              Led by experience. <span style={{ color: "#F7B42C" }}>Built for long-term impact.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. CLOSING STATEMENT ───────────────────────────────────────── */}
      <section style={{ padding: "8rem 2rem", backgroundColor: "#FAFAF7", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "50vw", height: "60vh", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.15", letterSpacing: "-0.03em", marginBottom: "2.5rem" }}>
            A Long-Term <span style={{ color: "#F7B42C" }}>Commitment</span>
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: "1.8", marginBottom: "2rem" }}>
            Sunflower Institute for Autism is committed to improving the quality, structure, and accessibility of autism support in Nepal.
          </p>
          <p style={{ fontSize: "1.1rem", color: "#888", lineHeight: "1.8" }}>
            This is not a short-term initiative — it is a long-term effort to build reliable systems that families can depend on.
          </p>
        </div>
      </section>

      {/* ── 9. CTA ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem 8rem 2rem", backgroundColor: "#FAFAF7", position: "relative" }}>
        <div className="container" style={{ position: "relative" }}>
          <div style={{ backgroundColor: "#1C1B1B", borderRadius: "3rem", padding: "6rem 4rem", position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            {/* Subtle inner glows */}
            <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-50%", right: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />

            {/* Left */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ color: "white", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "1.5rem", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                Start With the <br /><span style={{ color: "#F7B42C" }}>Right Support</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: "1.7", marginBottom: "3rem", maxWidth: "400px" }}>
                If you are looking for structured, consistent, and reliable autism support, we are here to help.
              </p>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "rgba(247,180,44,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F7B42C" }}>
                    <Plus size={18} />
                  </div>
                  <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>Support</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "rgba(118,142,31,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#768E1F" }}>
                    <Users size={18} />
                  </div>
                  <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>Community</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", zIndex: 1 }}>
              <Link href="/services" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} transition={{ duration: 0.2 }} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <div style={{ color: "#768E1F", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>For Families</div>
                    <div style={{ color: "white", fontSize: "1.3rem", fontWeight: 800 }}>Request Support</div>
                  </div>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#1C1B1B", flexShrink: 0 }}>
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </Link>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} transition={{ duration: 0.2 }} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <div style={{ color: "#F7B42C", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>General Inquiries</div>
                    <div style={{ color: "white", fontSize: "1.3rem", fontWeight: 800 }}>Contact Us</div>
                  </div>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#1C1B1B", flexShrink: 0 }}>
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* ── 09. FREQUENTLY ASKED QUESTIONS ──────────────────────────────── */}
      <section style={{ padding: "8rem 2rem", backgroundColor: "white" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "6rem", alignItems: "start" }}>
          {/* Left Column */}
          <div style={{ position: "sticky", top: "120px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>09</span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "#1C1B1B", marginBottom: "1.5rem", lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "Georgia, serif" }}>
              Frequently <br/><span style={{ color: "#F7B42C" }}>Asked Questions</span>
            </h2>
            <p style={{ color: "#666", fontSize: "1.15rem", lineHeight: "1.7", marginBottom: "3rem", maxWidth: "90%" }}>
              Everything you need to know about autism support, our services, and how to get started.
            </p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", backgroundColor: "#1C1B1B", color: "white", padding: "1rem 2rem", borderRadius: "2rem", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
              STILL HAVE QUESTIONS? <ArrowRight size={18} color="white" />
            </Link>
          </div>

          {/* Right Column: Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              {
                q: "What is autism?",
                a: <><p style={{ marginBottom: "1rem" }}>Autism is a complex developmental condition that involves persistent challenges in social interaction, speech and nonverbal communication, and restricted/repetitive behaviors.</p><p>We focus on understanding these unique traits and supporting holistic development.</p></>
              },
              {
                q: "When should I seek support?",
                a: <><p style={{ marginBottom: "1rem" }}>If you notice persistent challenges in communication, social interaction, or behavior that affect your child's daily life, it is recommended to seek professional guidance.</p><p>Early support is vital for long-term improvement.</p></>
              },
              {
                q: "What services do you provide?",
                a: <><p style={{ marginBottom: "1rem" }}>We offer a range of support services, including:</p><ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}><li>Developmental and behavioral support</li><li>Parent and caregiver guidance</li><li>School and shadow support</li><li>Professional training</li></ul><p>Each service is designed to work together, ensuring continuity and practical impact.</p></>
              },
              {
                q: "How can I get started?",
                a: <><p style={{ marginBottom: "1rem" }}>You can start by submitting a request for support through our website.</p><p>We will schedule an initial consultation to understand your family’s needs and determine the best developmental pathway for consistent progress.</p></>
              },
              {
                q: "Do you provide financial support?",
                a: <><p style={{ marginBottom: "1rem" }}>While we are building an ecosystem to minimize financial burdens long-term, we currently operate as a self-sustaining service model.</p><p>We offer guidance on the most effective ways to allocate resources for the best long-term outcomes.</p></>
              }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  style={{ 
                    backgroundColor: "#FAFAF7", 
                    borderRadius: "1.5rem", 
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid rgba(0,0,0,0.03)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
                  }}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2.5rem 3rem" }}>
                    <h4 style={{ color: "#1C1B1B", fontSize: "1.2rem", fontWeight: 800, margin: 0, paddingRight: "2rem", lineHeight: "1.4" }}>{faq.q}</h4>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(118,142,31,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#768E1F", flexShrink: 0, transition: "transform 0.3s ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                      <Plus size={20} />
                    </div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.3 }}
                        style={{ padding: "0 3rem 2.5rem", color: "#555", fontSize: "1.05rem", lineHeight: "1.8" }}
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 968px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </main>
  );
}
