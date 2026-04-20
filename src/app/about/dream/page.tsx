'use client';

import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { 
  ArrowRight, 
  Users, 
  Plus, 
  Layers, 
  Activity, 
  Package, 
  Heart, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Target, 
  Globe, 
  Search 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SunflowerDreamPage() {
  return (
    <div style={{ backgroundColor: "#FAFAF7", color: "#1C1B1B", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      {/* ── 1. HERO — VISIONARY ────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1C1B1B",
          padding: "12rem 2rem 8rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Deep Midnight Background Video */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.35) grayscale(0.2)", // Much darker and moodier
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* Deep Charcoal Vignette */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, transparent 0%, rgba(28, 27, 27, 0.95) 100%)",
          }} />
        </div>

        {/* Floating Visionary Blooms (Subtle inner glow) */}
        <div style={{
          position: "absolute", top: "15%", left: "5%", width: "50vw", height: "50vh", borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(118,142,31,0.1) 0%, transparent 60%)",
          filter: "blur(100px)", pointerEvents: "none", zIndex: 1
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.32, 0.72, 0, 1] }}
            style={{ 
              textAlign: "center",
              backdropFilter: "blur(30px) saturate(180%)",
              padding: "6rem 4rem",
              borderRadius: "4rem",
              backgroundColor: "rgba(10, 10, 10, 0.4)", // Darker glass
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)"
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "1.5rem", marginBottom: "3.5rem" }}>
              <div style={{ width: "40px", height: "1px", backgroundColor: "#F7B42C" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5em", color: "#F7B42C" }}>The Future of Support</span>
              <div style={{ width: "40px", height: "1px", backgroundColor: "#F7B42C" }} />
            </div>

            <h1 style={{
              fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: "0.9", letterSpacing: "-0.04em",
              marginBottom: "3.5rem", color: "white", fontWeight: 800
            }}>
              The <br />
              <span style={{ color: "#F7B42C" }}>Sunflower Dream</span>
            </h1>

            <p style={{ 
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "rgba(255,255,255,0.9)", lineHeight: "1.4", 
              maxWidth: "800px", margin: "0 auto 3.5rem", fontWeight: 600, letterSpacing: "0.01em" 
            }}>
              A long-term vision to build Nepal’s most complete and structured support system for autism and neurodiversity.
            </p>

            <div style={{ height: "1px", width: "120px", background: "rgba(247,180,44,0.3)", margin: "0 auto 3.5rem" }} />

            <p style={{ 
              fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.8", 
              maxWidth: "650px", margin: "0 auto", fontWeight: 500
            }}>
              This is not a single center. This is an ecosystem designed to solve gaps that families face every single day.
            </p>
          </motion.div>
        </div>

        {/* Minimal Scroll Dot */}
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 3, repeat: Infinity }}
          style={{ position: "absolute", bottom: "4rem", left: "50%", transform: "translateX(-50%)", zIndex: 2, textAlign: "center" }}
        >
          <div style={{ width: "1px", height: "40px", background: "#F7B42C", margin: "0 auto 1rem" }} />
          <span style={{ fontSize: "0.65rem", fontWeight: 900, color: "#F7B42C", textTransform: "uppercase", letterSpacing: "0.3em" }}>Discover</span>
        </motion.div>
      </section>

      {/* ── 2. WHAT IS THE DREAM ────────────────────────────────────────── */}
      <section style={{ padding: "12rem 2rem", backgroundColor: "white", position: "relative" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ marginBottom: "6rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>01. The Concept</span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: 800 }}>
              What is the <span style={{ color: "#F7B42C" }}>Sunflower Dream?</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start" }}>
            
            <div style={{ position: "relative" }}>
              {/* Artistic representation of a Sunflower / Growth */}
              <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%", background: "radial-gradient(circle at center, rgba(247,180,44,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />
              <img 
                src="/images/about/about 3.jpg" 
                alt="Sunflower Excellence Centre" 
                style={{ position: "relative", zIndex: 1, width: "100%", borderRadius: "3rem", boxShadow: "0 40px 80px rgba(0,0,0,0.12)" }} 
              />
              
              <div style={{ 
                marginTop: "3rem", backgroundColor: "#FAFAF7", padding: "2.5rem", 
                borderRadius: "2rem", borderLeft: "4px solid #F7B42C",
                position: "relative", zIndex: 1 
              }}>
                <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1C1B1B", margin: 0, lineHeight: "1.4" }}>
                  The goal is simple: <span style={{ color: "#F7B42C" }}>To ensure that no family has to struggle alone to find the support their child needs.</span>
                </p>
              </div>
            </div>

            <div style={{ paddingTop: "2rem" }}>
              <p style={{ fontSize: "1.2rem", color: "#1C1B1B", lineHeight: "1.8", marginBottom: "1.5rem", fontWeight: 600 }}>
                The Sunflower Dream is a comprehensive, multi-layered initiative focused on building the infrastructure required to support individuals with autism and neurodiversity in Nepal.
              </p>
              <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.8", marginBottom: "2rem" }}>
                It was shaped by real experiences—of navigating diagnosis, searching for support, facing uncertainty, and building solutions where none existed.
              </p>
              <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.8", marginBottom: "0rem" }}>
                Today, it stands as a structured effort to bring together services, tools, community, and long-term systems into one unified approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY IT EXISTS (GAPS) ──────────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "#FAFAF7", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "50vw", height: "60vh", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>02. Why it Exists</span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: 800, marginBottom: "2rem" }}>
              Solving <span style={{ color: "#F7B42C" }}>Systemic Challenges</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
              These gaps are not isolated problems. They are systemic. The Sunflower Dream exists to address these challenges at scale.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {[
              { title: "Service Access", text: "Limited access to structured therapy and intervention." },
              { title: "Expertise Gap", text: "Critical lack of trained professionals in neurodiversity." },
              { title: "Wait Times", text: "Long waiting periods for diagnosis and services." },
              { title: "Support Density", text: "Minimal support systems for parents and caregivers." },
              { title: "Financial Burden", text: "High financial burden on individual families." },
              { title: "Care Continuity", text: "No centralized system to track progress or plan long-term care." }
            ].map((gap, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                style={{ backgroundColor: "white", padding: "3rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 15px 35px rgba(0,0,0,0.02)" }}
              >
                <div style={{ color: "#F7B42C", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "1rem" }}>{gap.title}</div>
                <p style={{ fontSize: "1.1rem", color: "#1C1B1B", fontWeight: 700, lineHeight: "1.5", margin: 0 }}>{gap.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE ARE BUILDING (ECOSYSTEM) ─────────────────────────── */}
      <section style={{ 
        padding: "12rem 2rem", 
        backgroundColor: "#FAFAF7", 
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Soft blooms — same as homepage */}
        <div style={{
          position: "absolute", top: "-5%", left: "-8%", width: "50vw", height: "80%", borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(118,142,31,0.14) 0%, rgba(118,142,31,0.04) 55%, transparent 75%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "10%", right: "-8%", width: "50vw", height: "80%", borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(247,180,44,0.16) 0%, rgba(247,180,44,0.05) 55%, transparent 75%)",
          pointerEvents: "none",
        }} />
        
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "8rem", alignItems: "center" }}>
            
            {/* Left Column: Title, Quote & CTA */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>03. The Architecture</span>
              </div>
              
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: 800, color: "#1C1B1B", marginBottom: "2rem" }}>
                What We <br />
                <span style={{ color: "#F7B42C" }}>Are Building</span>
              </h2>

              <div style={{ 
                color: "#F7B42C", lineHeight: "1.6", fontSize: "1.25rem", fontWeight: 800, 
                borderLeft: "4px solid #F7B42C", paddingLeft: "1.5rem", fontStyle: "italic", marginBottom: "0rem",
                maxWidth: "500px"
              }}>
                "Care alone is not enough — support must exist across entire systems. Every pillar of this ecosystem is designed to serve that one mission."
              </div>
            </div>

            {/* Right Column: The Icon Grid (3x2) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem 2rem", justifyItems: "center" }}>
              {[
                { logo: "/images/dream/sialogo.png", name: "SIA", href: "/" },
                { logo: "/images/dream/RXPIN.png", name: "RxPIN", href: "/pillars/rxpin" },
                { logo: "/images/dream/SUNFLOWER-PETALS.jfif", name: "Sunflower Petals", href: "/pillars/petals" },
                { logo: "/images/dream/GOLDEN SUNFLOWER FOUNDATION.png", name: "Golden Foundation", href: "/pillars/gsf" },
                { logo: "/images/dream/SUNFLOWER-EQITY-PARTNER.jfif", name: "Equity Partners", href: "/pillars/equity" },
                { logo: "/images/dream/SUNFLOWER-SPECTRUM.png", name: "Spectrum", href: "/pillars/spectrum" },
              ].map((p, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    style={{
                      height: "140px",
                      width: "140px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "white",
                      padding: "1.75rem",
                      borderRadius: "2.5rem",
                      boxShadow: "0 20px 50px -15px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(247,180,44,0.12)",
                      position: "relative"
                    }}
                  >
                    <img 
                      src={p.logo} 
                      alt={p.name} 
                      style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} 
                    />
                  </motion.div>

                  <div style={{ 
                    marginTop: "1.5rem", fontSize: "0.8rem", fontWeight: 900, color: "#1C1B1B", 
                    textTransform: "uppercase", letterSpacing: "0.15em", textAlign: "center", maxWidth: "140px" 
                  }}>
                    {p.name}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. OUR APPROACH (PRINCIPLES) ────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "white" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>04. The Method</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "8rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", fontWeight: 800, marginBottom: "2rem" }}>
                Our <span style={{ color: "#F7B42C" }}>Approach</span>
              </h2>
              <p style={{ fontSize: "1.2rem", color: "#666", lineHeight: "1.8" }}>
                We believe meaningful support requires more than isolated services. Our approach is built on five core principles.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
              {[
                { title: "Structure", icon: Layers, desc: "Clear, predictable systems that support development." },
                { title: "Consistency", icon: Activity, desc: "Long-term engagement instead of short-term interventions." },
                { title: "Accessibility", icon: Globe, desc: "Making support available beyond major cities." },
                { title: "Integration", icon: Zap, desc: "Connecting therapy, home, education, and community." },
                { title: "Scalability", icon: TrendingUp, desc: "Designing systems that can grow across regions." }
              ].map((p, i) => (
                <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
                  <div style={{ flexShrink: 0 }}>
                    <p.icon size={28} color="#768E1F" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>{p.title}</h4>
                    <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6", margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE VISION (FUTURE HORIZON) ────────────────────────────────── */}
      <section style={{ padding: "10rem 2rem", backgroundColor: "#FAFAF7", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(0,0,0,0.05), transparent)" }} />
        
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>05. The Goal</span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", fontWeight: 800 }}>
              The Long-Term <span style={{ color: "#F7B42C" }}>Vision</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.5rem" }}>
            {[
              "Expanding structures across Nepal",
              "Building professional capacity",
              "Standardizing autism care",
              "Making support affordable",
              "Support through adulthood"
            ].map((v, i) => (
              <div key={i} style={{ padding: "2.5rem", backgroundColor: "white", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.04)", textAlign: "center" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 900, color: "#768E1F", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>Phase {i + 1}</div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#1C1B1B", lineHeight: "1.5" }}>{v}</div>
              </div>
            ))}
          </div>
          
          <p style={{ textAlign: "center", marginTop: "4rem", fontSize: "1.2rem", color: "#888", fontStyle: "italic" }}>
             This is a continuous effort—not a short-term project.
          </p>
        </div>
      </section>

      {/* ── 6. BUILT FROM EXPERIENCE ─────────────────────────────────────── */}
      <section style={{ padding: "12rem 2rem", backgroundColor: "#1C1B1B", color: "white", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>06. The Roots</span>
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: 800, marginBottom: "3.5rem" }}>
            <span style={{ color: "white" }}>Built from</span> <span style={{ color: "#F7B42C" }}>Real Experience</span>
          </h2>
          <p style={{ fontSize: "1.4rem", lineHeight: "1.8", color: "rgba(255,255,255,0.8)", marginBottom: "4rem", fontWeight: 600 }}>
            This vision is not theoretical. It comes from years of direct experience—of parenting, learning, adapting, and building solutions in real time.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            {[
              "Daily challenges faced by families",
              "Gaps in existing systems",
              "The need for practical solutions"
            ].map((insight, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "2rem", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Search size={24} color="#F7B42C" style={{ marginBottom: "1.5rem" }} />
                <p style={{ fontSize: "1rem", fontWeight: 700, margin: 0, lineHeight: "1.5", color: "white" }}>{insight}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Very subtle large watermark */}
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", fontSize: "20rem", fontWeight: 900, color: "rgba(255,255,255,0.02)", pointerEvents: "none", userSelect: "none" }}>DREAM</div>
      </section>

      {/* ── 7. CTA — DASHBOARD LAYOUT ───────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem 8rem 2rem", backgroundColor: "#FAFAF7", position: "relative" }}>
        <div className="container" style={{ position: "relative" }}>
          
          <div style={{ backgroundColor: "#1C1B1B", borderRadius: "3rem", padding: "6rem 4rem", position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            
            {/* Subtle glow inside the dark card */}
            <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-50%", right: "-20%", width: "100%", height: "200%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />

            {/* Left side text */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ color: "white", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "1.5rem", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                Begin your <br /><span style={{ color: "#F7B42C" }}>Journey</span> With Us
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: "1.7", marginBottom: "3rem", maxWidth: "400px" }}>
                The Sunflower Dream is about building something that lasts. Support, adapt, and grow with us.
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

            {/* Right side interaction strictly showing direction */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", zIndex: 1 }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} transition={{ duration: 0.2 }} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <div style={{ color: "#768E1F", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>For Parents & Families</div>
                    <div style={{ color: "white", fontSize: "1.3rem", fontWeight: 800 }}>Find Care & Support</div>
                  </div>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#1C1B1B", flexShrink: 0 }}>
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </Link>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }} transition={{ duration: 0.2 }} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <div style={{ color: "#F7B42C", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>For Institutions</div>
                    <div style={{ color: "white", fontSize: "1.3rem", fontWeight: 800 }}>Partner with the Dream</div>
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
      <Footer />

      <style jsx>{`
        .container {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        @media (max-width: 968px) {
          section {
            padding: 8rem 1.5rem !important;
          }
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </div>
  );
}
