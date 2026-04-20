'use client';

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Cpu,
  ShoppingBag,
  TrendingUp,
  Sun,
  Star,
  Users,
  BookOpen,
  Plus,
  Minus,
  Play,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "01",
    title: "ABA Therapy",
    desc: "Structured, evidence-based intervention programs designed to improve communication, behavior, and independence for individuals with autism.",
    href: "/services",
    icon: Heart,
    color: "rgba(247,180,44,0.15)",
    accent: "#F7B42C",
  },
  {
    id: "02",
    title: "ABAT Training",
    desc: "Professional training programs to develop skilled therapists and support staff, addressing the growing need for qualified autism professionals in Nepal.",
    href: "/services",
    icon: Users,
    color: "rgba(118,142,31,0.15)",
    accent: "#768E1F",
  },
  {
    id: "03",
    title: "Shadow Teacher Support",
    desc: "Dedicated in-school support to help children navigate classroom environments, ensuring continuity in learning and social integration.",
    href: "/services",
    icon: BookOpen,
    color: "rgba(56,189,201,0.15)",
    accent: "#38BDC9",
  },
];

const ECOSYSTEM = [
  { name: "Sunflower Institute", role: "Clinical Infrastructure", icon: Heart, href: "/services" },
  { name: "RXPIN", role: "Digital Infrastructure", icon: Cpu, href: "/pillars/rxpin" },
  { name: "Sunflower Petals", role: "Material Infrastructure", icon: ShoppingBag, href: "/pillars/sunflower-petals" },
  { name: "Equity Partners", role: "Strategic Infrastructure", icon: TrendingUp, href: "/pillars/equity-partners" },
  { name: "Golden Foundation", role: "Social Infrastructure", icon: Sun, href: "/pillars/golden-foundation" },
];

const FAQS = [
  {
    q: "What is autism?",
    a: "Autism is a neurodevelopmental condition that affects communication, behavior, and social interaction. It exists on a spectrum, meaning each individual has unique strengths and challenges.",
  },
  {
    q: "When should I seek support?",
    a: "If you notice delays in communication, social interaction, or behavior patterns that seem different from typical development, it is recommended to seek early assessment and guidance.",
  },
  {
    q: "What services do you provide?",
    a: "We provide ABA therapy, ABAT training, and shadow teacher support, along with ecosystem-level initiatives designed to improve accessibility and outcomes.",
  },
  {
    q: "How can I get started?",
    a: "You can reach out through our contact page or request support directly. Our team will guide you through the next steps based on your needs.",
  },
  {
    q: "Do you provide financial support?",
    a: "Support options may be available through the Golden Sunflower Foundation, depending on individual circumstances.",
  },
];

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      style={{
        border: open ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0.03)",
        boxShadow: open ? "0 20px 40px rgba(0,0,0,0.04)" : "none",
        borderRadius: "1.5rem",
        marginBottom: "1rem",
        cursor: "pointer",
        overflow: "hidden",
      }}
      initial={false}
      animate={{ backgroundColor: open ? "white" : "#FAFAF7" }}
      whileHover={{ backgroundColor: open ? "white" : "rgba(247,180,44,0.05)" }}
      onClick={() => setOpen(!open)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <span style={{ fontSize: "1.15rem", fontWeight: 800, color: open ? "#1C1B1B" : "#444", letterSpacing: "-0.01em" }}>
          {q}
        </span>
        <motion.div 
          animate={{ rotate: open ? 180 : 0, backgroundColor: open ? "#F7B42C" : "rgba(118,142,31,0.1)" }}
          transition={{ duration: 0.3 }}
          style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: open ? "white" : "#768E1F", flexShrink: 0 }}
        >
          {open ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p style={{ padding: "0 2rem 2rem 2rem", color: "#666", lineHeight: "1.8", fontSize: "1.05rem", margin: 0 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isVideoHovered, setIsVideoHovered] = React.useState(false);

  const handleVideoMouseEnter = () => {
    setIsVideoHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoMouseLeave = () => {
    setIsVideoHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const testimonialVideoRef = React.useRef<HTMLVideoElement>(null);
  const [isTestimonialVideoHovered, setIsTestimonialVideoHovered] = React.useState(false);

  const handleTestimonialMouseEnter = () => {
    setIsTestimonialVideoHovered(true);
    if (testimonialVideoRef.current) {
      testimonialVideoRef.current.play().catch(() => {});
    }
  };

  const handleTestimonialMouseLeave = () => {
    setIsTestimonialVideoHovered(false);
    if (testimonialVideoRef.current) {
      testimonialVideoRef.current.pause();
    }
  };

  return (
    <main style={{ backgroundColor: "var(--canvas)" }}>
      <Navbar />

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FAFAF7",
          padding: "10rem 2rem 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft olive green bloom — left */}
        <div style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "55vw",
          height: "80vh",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(118,142,31,0.18) 0%, rgba(118,142,31,0.06) 50%, transparent 75%)",
          pointerEvents: "none",
        }} />

        {/* Warm golden bloom — right */}
        <div style={{
          position: "absolute",
          top: "-5%",
          right: "-10%",
          width: "55vw",
          height: "80vh",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(247,180,44,0.2) 0%, rgba(247,180,44,0.07) 50%, transparent 75%)",
          pointerEvents: "none",
        }} />

        {/* Very subtle bottom fade */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to bottom, transparent, rgba(245,245,242,0.6))",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.45fr", gap: "8rem", alignItems: "center" }}>

            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Parent-led tag */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  backgroundColor: "rgba(247,180,44,0.12)",
                  border: "1px solid rgba(247,180,44,0.3)",
                  padding: "0.4rem 1.2rem",
                  borderRadius: "100px",
                  marginBottom: "2.5rem",
                }}
              >
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#F7B42C" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#8a6a00" }}>
                  Parent-Led Organization
                </span>
              </div>

              <h1
                style={{
                  color: "#1C1B1B",
                  fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                  lineHeight: "1.08",
                  fontWeight: 700,
                  marginBottom: "2.5rem",
                  letterSpacing: "-0.03em",
                }}
              >
                Redefining Autism Support{" "}
                in Nepal —{" "}
                <span style={{ color: "#F7B42C" }}>At Scale</span>
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  color: "#555",
                  lineHeight: "1.85",
                  maxWidth: "680px",
                  marginBottom: "4rem",
                }}
              >
                A parent-led organization delivering therapy, training, tools, and ecosystem-level solutions for autism and neurodiversity — designed to support individuals, families, and professionals at every stage.
              </p>

              <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                <Link href="/contact">
                  <button
                    style={{
                      backgroundColor: "#F7B42C",
                      color: "#1C1B1B",
                      padding: "1.1rem 3rem",
                      borderRadius: "100px",
                      fontWeight: 900,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Get Support
                  </button>
                </Link>
                <Link href="/about">
                  <button
                    style={{
                      backgroundColor: "#768E1F",
                      color: "white",
                      padding: "1.1rem 3rem",
                      borderRadius: "100px",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Explore Ecosystem
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Human Faces Photo Stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.2 }}
              style={{ position: "relative", height: "480px", width: "100%", display: "flex", justifyContent: "center" }}
            >
              {/* Photo 1 (Back left) */}
              <motion.div
                initial={{ rotate: -15, x: -60, y: 40 }}
                animate={{ rotate: -8, x: -40, y: 20 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                style={{
                  position: "absolute",
                  width: "190px",
                  height: "260px",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  border: "4px solid white",
                  zIndex: 1,
                  left: "5%",
                  top: "0%"
                }}
              >
                <img src="/images/gc3.jpg" alt="Community interaction" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </motion.div>

              {/* Photo 2 (Back right) */}
              <motion.div
                initial={{ rotate: 15, x: 40, y: 100 }}
                animate={{ rotate: 10, x: 20, y: 70 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                style={{
                  position: "absolute",
                  width: "170px",
                  height: "240px",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  border: "4px solid white",
                  zIndex: 2,
                  right: "0%",
                  top: "15%"
                }}
              >
                <img src="/images/gc4.jpg" alt="Parents and advocates" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </motion.div>

              {/* Photo 3 (Front center) */}
              <motion.div
                initial={{ rotate: 0, x: "-50%", y: 200 }}
                animate={{ rotate: -2, x: "-50%", y: 150 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "320px",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  border: "6px solid white",
                  zIndex: 3,
                  left: "50%",
                }}
              >
                <img src="/images/gc5.jpg" alt="Professional support" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </motion.div>

              {/* Scroll hint */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem", opacity: 0.4 }}>
                <div style={{ width: "30px", height: "1px", backgroundColor: "#323030" }} />
                <ChevronDown size={16} color="#323030" />
                <span style={{ fontSize: "0.7rem", color: "#323030", textTransform: "uppercase", letterSpacing: "0.15em" }}>Scroll</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. WORK IN ACTION ─────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-gap) 2rem", backgroundColor: "var(--canvas)" }}>
        <div className="container">

          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>02</span>
              </div>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}>Work in Action</h2>
            </div>
            <p style={{ maxWidth: "480px", color: "#666", lineHeight: "1.8", textAlign: "right", fontSize: "1rem" }}>
              Our work extends beyond formal settings into real environments — homes, schools, and communities.
            </p>
          </div>

          {/* Photo masonry grid — 3 columns, varying heights */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "320px 260px 300px",
            gap: "1rem",
          }}>

            {/* Row 1: 3 images across */}
            {[
              { src: "/images/goldencarpet.jpg", label: "Golden Carpet — Group Session", col: "1", row: "1" },
              { src: "/images/gc6.jpg", label: "Team at the Venue", col: "2", row: "1" },
              { src: "/images/gc9.jpg", label: "Community Circle", col: "3", row: "1" },
            ].map((img, i) => (
              <div key={i} style={{
                gridColumn: img.col,
                gridRow: img.row,
                borderRadius: "1.25rem",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#1C1B1B",
              }}>
                <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                  <span style={{
                    display: "inline-block",
                    padding: "0.3rem 0.8rem",
                    backgroundColor: "rgba(247,180,44,0.92)",
                    color: "#1C1B1B",
                    borderRadius: "100px",
                    fontSize: "0.62rem",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}>
                    {img.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Row 2: wide left + right */}
            <div style={{
              gridColumn: "1 / 3",
              gridRow: "2",
              borderRadius: "1.25rem",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#1C1B1B",
            }}>
              <img src="/images/gc7.jpg" alt="Golden Carpet audience" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                <span style={{ display: "inline-block", padding: "0.3rem 0.8rem", backgroundColor: "rgba(247,180,44,0.92)", color: "#1C1B1B", borderRadius: "100px", fontSize: "0.62rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Community Gathering
                </span>
              </div>
            </div>

            <div style={{
              gridColumn: "3",
              gridRow: "2",
              borderRadius: "1.25rem",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#1C1B1B",
            }}>
              <img src="/images/gc5.jpg" alt="Panel discussion" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                <span style={{ display: "inline-block", padding: "0.3rem 0.8rem", backgroundColor: "rgba(247,180,44,0.92)", color: "#1C1B1B", borderRadius: "100px", fontSize: "0.62rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Panel Discussion
                </span>
              </div>
            </div>

            {/* Row 3: left + wide right */}
            <div style={{
              gridColumn: "1",
              gridRow: "3",
              borderRadius: "1.25rem",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#1C1B1B",
            }}>
              <img src="/images/gc3.jpg" alt="Child speaking" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                <span style={{ display: "inline-block", padding: "0.3rem 0.8rem", backgroundColor: "rgba(247,180,44,0.92)", color: "#1C1B1B", borderRadius: "100px", fontSize: "0.62rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Voices Heard
                </span>
              </div>
            </div>

            <div style={{
              gridColumn: "2",
              gridRow: "3",
              borderRadius: "1.25rem",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#1C1B1B",
            }}>
              <img src="/images/gc4.jpg" alt="Speaker at event" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                <span style={{ display: "inline-block", padding: "0.3rem 0.8rem", backgroundColor: "rgba(247,180,44,0.92)", color: "#1C1B1B", borderRadius: "100px", fontSize: "0.62rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Expert Speaker
                </span>
              </div>
            </div>

            <div style={{
              gridColumn: "3",
              gridRow: "3",
              borderRadius: "1.25rem",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#1C1B1B",
            }}>
              <img src="/images/gc8.jpg" alt="Outdoor session" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                <span style={{ display: "inline-block", padding: "0.3rem 0.8rem", backgroundColor: "rgba(247,180,44,0.92)", color: "#1C1B1B", borderRadius: "100px", fontSize: "0.62rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Outdoor Engagement
                </span>
              </div>
            </div>

          </div>

          {/* Supporting text row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem", marginTop: "5rem", paddingTop: "5rem", borderTop: "1px solid rgba(50,48,48,0.07)" }}>
            {[
              { title: "Structured Support", body: "Every interaction is designed to produce measurable progress aligned to individual development goals." },
              { title: "Consistent Engagement", body: "We work directly with individuals and families through comprehensive support, training, and community programs." },
              { title: "Practical Impact", body: "Our approach is grounded in real-world environments — focusing on lived experiences and genuine progress, not just formal outcomes documented on paper." },
            ].map((c, i) => (
              <div key={i}>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", fontWeight: 700 }}>{c.title}</h4>
                <p style={{ color: "#666", lineHeight: "1.75", fontSize: "0.95rem" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SUNFLOWER DREAM + ECOSYSTEM ───────────────────────────────── */}
      <section style={{
        padding: "var(--section-gap) 2rem",
        backgroundColor: "#FAFAF7",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Soft olive green bloom — left */}
        <div style={{
          position: "absolute", top: "-5%", left: "-8%",
          width: "50vw", height: "80%", borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(118,142,31,0.14) 0%, rgba(118,142,31,0.04) 55%, transparent 75%)",
          pointerEvents: "none",
        }} />
        {/* Warm golden bloom — right */}
        <div style={{
          position: "absolute", top: "10%", right: "-8%",
          width: "50vw", height: "80%", borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(247,180,44,0.16) 0%, rgba(247,180,44,0.05) 55%, transparent 75%)",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>03</span>
          </div>

          {/* ── The Sunflower Dream (2-Column Layout) ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "6rem", alignItems: "center", paddingBottom: "4rem" }}>
            
            {/* Left: Title & Description */}
            <div>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", color: "#1C1B1B", marginBottom: "1.75rem" }}>
                The Sunflower Dream
              </h2>
              <p style={{ color: "#555", lineHeight: "1.9", fontSize: "1.05rem", marginBottom: "2.5rem" }}>
                A long-term vision to build a <strong>complete autism and neurodiversity support system</strong> in Nepal — spanning comprehensive care, education, technology, funding, and community.
              </p>
              <p style={{ color: "#F7B42C", lineHeight: "1.6", fontSize: "1.2rem", fontWeight: 800, borderLeft: "4px solid #F7B42C", paddingLeft: "1.5rem", fontStyle: "italic", marginBottom: "3rem" }}>
                "Care alone is not enough — support must exist across entire systems. Every pillar of this ecosystem is designed to serve that one mission."
              </p>
              
              <Link href="/about/sunflower-dream">
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    backgroundColor: "#1C1B1B",
                    color: "white",
                    padding: "1.1rem 2.5rem",
                    borderRadius: "100px",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Explore the Dream <ArrowRight size={16} />
                </button>
              </Link>
            </div>

            {/* Right: Ecosystem Logos (3x2 Grid) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem 1rem", justifyItems: "center" }}>
              {[
                { logo: "/images/dream/sialogo.png", name: "SIA", href: "/" },
                { logo: "/images/dream/RXPIN.png", name: "RxPIN", href: "/pillars/rxpin" },
                { logo: "/images/dream/SUNFLOWER-PETALS.jfif", name: "Sunflower Petals", href: "/pillars/petals" },
                { logo: "/images/dream/GOLDEN SUNFLOWER FOUNDATION.png", name: "Golden Foundation", href: "/pillars/gsf" },
                { logo: "/images/dream/SUNFLOWER-EQITY-PARTNER.jfif", name: "Equity Partners", href: "/pillars/equity" },
                { logo: "/images/dream/SUNFLOWER-SPECTRUM.png", name: "Spectrum", href: "/pillars/spectrum" },
              ].map((p, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Link href={p.href} style={{ textDecoration: "none" }}>
                    <motion.div 
                      initial={{ opacity: 0.6, filter: "grayscale(100%)" }}
                      whileHover={{ opacity: 1, filter: "grayscale(0%)", y: -6 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        height: "110px",
                        width: "110px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        backgroundColor: "white",
                        padding: "1.25rem",
                        borderRadius: "1.5rem",
                        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                        border: "1px solid rgba(247,180,44,0.15)"
                      }}
                    >
                      <img 
                        src={p.logo} 
                        alt={p.name} 
                        style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} 
                      />
                    </motion.div>
                  </Link>

                  <div style={{ marginTop: "1.25rem", fontSize: "0.75rem", fontWeight: 800, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center", maxWidth: "120px" }}>
                    {p.name}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. SERVICES ───────────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-gap) 2rem", backgroundColor: "white" }}>
        <div className="container">

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>04</span>
              </div>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}>Our Services</h2>
            </div>
            <Link href="/services">
              <button style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.8rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", color: "#323030", borderBottom: "2px solid #F7B42C", paddingBottom: "0.4rem" }}>
                View All <ArrowRight size={15} />
              </button>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {SERVICES.map((s, i) => (
              <Link href={s.href} key={i} style={{ textDecoration: "none" }}>
                <motion.div
                  initial={{ opacity: 0.9, y: 0 }}
                  whileHover={{ opacity: 1, y: -8 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "1.5rem",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 10px 40px -15px rgba(0,0,0,0.05)",
                    padding: "3.5rem 2.5rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "4px",
                    backgroundColor: s.accent
                  }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
                    <div style={{
                      width: "60px", height: "60px",
                      borderRadius: "1rem",
                      backgroundColor: s.color,
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      <s.icon size={26} color={s.accent} />
                    </div>
                    <div style={{ fontWeight: 900, opacity: 0.15, fontSize: "2rem", fontFamily: "Lora, serif", color: "#1C1B1B" }}>
                      {s.id}
                    </div>
                  </div>

                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#1C1B1B" }}>{s.title}</h3>
                  <p style={{ color: "#666", lineHeight: "1.75", fontSize: "0.95rem", flexGrow: 1, marginBottom: "2.5rem" }}>{s.desc}</p>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: s.accent }}>
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GOLDEN CARPET ─────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-gap) 2rem", backgroundColor: "#030504" }}>
        <div className="container">

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>05</span>
          </div>

          {/* Top Row: Video + Intro */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", marginBottom: "6rem" }}>
            
            {/* Vertical Video container */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.div 
                onMouseEnter={handleVideoMouseEnter}
                onMouseLeave={handleVideoMouseLeave}
                animate={{ 
                  scale: isVideoHovered ? 1.05 : 1,
                  boxShadow: isVideoHovered ? "0 30px 60px rgba(247,180,44,0.25)" : "0 20px 40px rgba(0,0,0,0.4)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ 
                  borderRadius: "2rem", 
                  overflow: "hidden", 
                  position: "relative", 
                  backgroundColor: "#000", 
                  border: isVideoHovered ? "2px solid #F7B42C" : "1px solid rgba(255,255,255,0.1)", 
                  width: "100%", 
                  maxWidth: "330px", 
                  aspectRatio: "9/16",
                  cursor: "default",
                  zIndex: isVideoHovered ? 10 : 1
                }}
              >
                 <video 
                   ref={videoRef}
                   controls={isVideoHovered}
                   loop
                   playsInline
                   style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: isVideoHovered ? 1 : 0.7, transition: "opacity 0.4s" }}
                 >
                   <source src="/golden carpet/goldencapret introduction.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
                 
                 {/* Play Hint */}
                 <AnimatePresence>
                   {!isVideoHovered && (
                     <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.3)", pointerEvents: "none" }}
                     >
                       <div style={{ backgroundColor: "rgba(247,180,44,0.9)", padding: "1.25rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1C1B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </motion.div>
            </div>

            {/* Intro Copy */}
            <div>
              <h2 style={{ color: "white", fontSize: "clamp(2.25rem, 4.5vw, 3.8rem)", marginBottom: "1.5rem", lineHeight: 1.1 }}>
                The Golden Carpet <span style={{ color: "#F7B42C" }}>Forum</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                A community forum where families, specialists, educators, and advocates come together to talk openly about autism. <strong>Not a formal conference—a safe, welcoming space</strong> for honest conversations, shared experiences, and real guidance.
              </p>
              <div style={{ borderLeft: "3px solid #F7B42C", paddingLeft: "1.5rem", color: "rgba(255,255,255,0.5)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: "1.8" }}>
                "Just like a red carpet welcomes special guests, the Golden Carpet welcomes every family and professional walking the autism journey. You are not alone."
              </div>
            </div>
          </div>



          {/* Bottom Bar: Logistics + CTA */}
          <div style={{ backgroundColor: "#F7B42C", padding: "3rem", borderRadius: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#8a6a00", marginBottom: "0.75rem" }}>
                Join the Community
              </div>
              <h3 style={{ fontSize: "2rem", color: "#1C1B1B", marginBottom: "1.25rem", fontWeight: 800 }}>
                Entry is Completely Free.
              </h3>
              <p style={{ color: "#444", fontSize: "0.95rem", lineHeight: "1.6", maxWidth: "400px", margin: 0 }}>
                <strong>🗓 When:</strong> Every first Sunday of the English month <br/>
                <strong>⏰ Time:</strong> 2:00 PM – 6:00 PM
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/events/past-golden-carpet">
                <button style={{ backgroundColor: "transparent", color: "#1C1B1B", border: "2px solid #1C1B1B", padding: "1.1rem 2rem", borderRadius: "100px", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}>
                  Past Forums
                </button>
              </Link>
              <Link href="/events/register">
                <button style={{ display: "flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#1C1B1B", color: "white", padding: "1.1rem 2rem", borderRadius: "100px", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", border: "2px solid #1C1B1B", cursor: "pointer" }}>
                  Register for Upcoming <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── UNDERSTANDING AUTISM ─────────────────────────────────────── */}
      <section style={{ padding: "var(--section-gap) 2rem 4rem", backgroundColor: "#FAFAF7" }}>
        <div className="container">

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>Understanding</span>
          </div>

          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "5rem", maxWidth: "800px", lineHeight: "1.2", letterSpacing: "-0.03em" }}>
            Know About <span style={{ color: "#F7B42C" }}>Autism</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            
            {/* What is it? */}
            <div style={{ backgroundColor: "white", padding: "4rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.05)", position: "relative", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", backgroundColor: "#768E1F" }} />
              <div style={{ width: "60px", height: "60px", borderRadius: "1.25rem", backgroundColor: "rgba(118,142,31,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5rem" }}>
                <BookOpen size={28} color="#768E1F" />
              </div>
              <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#1C1B1B", fontWeight: 800 }}>What is it?</h3>
              <p style={{ color: "#555", lineHeight: "1.8", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                Autism Spectrum Disorder (ASD) is a developmental condition that affects how individuals perceive the world and interact with others. It naturally influences social communication, behavior, and sensory processing.
              </p>
              <p style={{ color: "#555", lineHeight: "1.8", fontSize: "1.1rem" }}>
                Because it is a <strong>broad spectrum</strong>, every person’s experience is unique—from requiring distinct daily support systems to navigating the world entirely independently. It is not an illness to be cured, but a neurological difference to be understood.
              </p>
            </div>

            {/* What needs to be done? */}
            <div style={{ backgroundColor: "#1C1B1B", padding: "4rem", borderRadius: "2rem", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", backgroundColor: "#F7B42C" }} />
              <div style={{ width: "60px", height: "60px", borderRadius: "1.25rem", backgroundColor: "rgba(247,180,44,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5rem" }}>
                <Heart size={28} color="#F7B42C" />
              </div>
              <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "white", fontWeight: 800 }}>What needs to be done?</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                Society must transition from simple <em>awareness</em> to active <strong>acceptance and systemic support</strong>. We must consciously build environments where neurodivergent individuals can thrive.
              </p>
              <ul style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8", fontSize: "1.1rem", paddingLeft: "1.2rem", margin: 0 }}>
                <li style={{ marginBottom: "0.75rem" }}>Provide early, evidence-based interventions.</li>
                <li style={{ marginBottom: "0.75rem" }}>Train educators to facilitate truly inclusive classrooms.</li>
                <li style={{ marginBottom: "0.75rem" }}>Build strong, informed community networks for families.</li>
                <li>Design public spaces that accommodate sensory needs.</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ── 6. FOUNDERS ───────────────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem var(--section-gap)", backgroundColor: "#FAFAF7", position: "relative", overflow: "hidden" }}>
        {/* Soft olive green bloom — left */}
        <div style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "55vw",
          height: "80vh",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(118,142,31,0.18) 0%, rgba(118,142,31,0.06) 50%, transparent 75%)",
          pointerEvents: "none",
        }} />

        {/* Warm golden bloom — right */}
        <div style={{
          position: "absolute",
          top: "-5%",
          right: "-10%",
          width: "55vw",
          height: "80vh",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(247,180,44,0.2) 0%, rgba(247,180,44,0.07) 50%, transparent 75%)",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>06</span>
              </div>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}>Leadership</h2>
            </div>
            <Link href="/about">
              <button style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.8rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", color: "#323030", borderBottom: "2px solid #F7B42C", paddingBottom: "0.4rem" }}>
                About Us <ArrowRight size={15} />
              </button>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            {[
              {
                name: "Dhruba Adhikari",
                title: "Founder",
                bio: "Entrepreneur and autism advocate focused on building long-term, system-level solutions for neurodiversity support.",
                img: "/founders/dhurba.webp"
              },
              {
                name: "Stuti Neupane",
                title: "Co-Founder & Chairperson",
                bio: "Organizational leader committed to building inclusive systems and strengthening support structures for families and caregivers.",
                img: "/founders/suti.webp"
              },
            ].map((m, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} transition={{ duration: 0.4 }} style={{ backgroundColor: "white", borderRadius: "2rem", display: "flex", alignItems: "center", padding: "3rem", boxShadow: "0 25px 50px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div style={{ width: "180px", height: "180px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}>
                  <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ paddingLeft: "3rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#F7B42C", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
                    {m.title}
                  </div>
                  <h3 style={{ fontSize: "2rem", color: "#1C1B1B", margin: "0 0 1.25rem", fontWeight: 800, letterSpacing: "-0.02em" }}>{m.name}</h3>
                  <p style={{ color: "#555", lineHeight: "1.7", fontSize: "1.05rem", margin: 0 }}>
                    {m.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ────────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-gap) 2rem", backgroundColor: "#FAFAF7", position: "relative" }}>
        
        {/* Soft olive green bloom — left */}
        <div style={{
          position: "absolute", top: "-10%", left: "-5%", width: "55vw", height: "80vh",
          borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(118,142,31,0.18) 0%, rgba(118,142,31,0.06) 50%, transparent 75%)", pointerEvents: "none", zIndex: 0
        }} />

        {/* Warm golden bloom — right */}
        <div style={{
          position: "absolute", top: "-5%", right: "-10%", width: "55vw", height: "80vh",
          borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(247,180,44,0.2) 0%, rgba(247,180,44,0.07) 50%, transparent 75%)", pointerEvents: "none", zIndex: 0
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>07</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "8rem" }}>
            {/* Left: Quote & Context */}
            <div>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "#1C1B1B", marginBottom: "2rem", lineHeight: "1.2", letterSpacing: "-0.03em" }}>
                Voices of the <span style={{ color: "#F7B42C" }}>Community</span>
              </h2>
              <div style={{ position: "relative", paddingLeft: "3rem" }}>
                <span style={{ position: "absolute", top: "-10px", left: 0, fontSize: "6rem", color: "rgba(247,180,44,0.3)", fontFamily: "Georgia, serif", lineHeight: 1 }}>“</span>
                <p style={{ color: "#555", fontSize: "1.4rem", lineHeight: "1.8", fontStyle: "italic", marginBottom: "1.5rem" }}>
                  Understanding autism begins with listening. Listening to parents, professionals, and most importantly, to the unique voices and experiences of autistic individuals.
                </p>
                <div style={{ fontSize: "1rem", fontWeight: 900, color: "#768E1F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  — Dr. Ayasha Shrestha
                </div>
              </div>
            </div>

            {/* Right: Interactive Video Testimonial */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.div 
                onMouseEnter={handleTestimonialMouseEnter}
                onMouseLeave={handleTestimonialMouseLeave}
                animate={{ 
                  scale: isTestimonialVideoHovered ? 1.05 : 1,
                  boxShadow: isTestimonialVideoHovered ? "0 30px 60px rgba(118,142,31,0.25)" : "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ 
                  borderRadius: "2rem", overflow: "hidden", position: "relative", backgroundColor: "#fff", 
                  border: isTestimonialVideoHovered ? "2px solid #768E1F" : "1px solid rgba(0,0,0,0.05)",
                  cursor: isTestimonialVideoHovered ? "default" : "pointer"
                }}
              >
                <video 
                  ref={testimonialVideoRef}
                  src="/images/experience.mp4" 
                  controls={isTestimonialVideoHovered}
                  style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover", pointerEvents: isTestimonialVideoHovered ? "auto" : "none" }} 
                />
                
                <AnimatePresence>
                   {!isTestimonialVideoHovered && (
                     <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       style={{
                         position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                         backgroundColor: "rgba(0,0,0,0.15)", pointerEvents: "none"
                       }}
                     >
                       <div style={{
                         backgroundColor: "rgba(255,255,255,0.9)", width: "80px", height: "80px",
                         borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                         color: "#768E1F", boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                       }}>
                         <Play fill="currentColor" size={32} style={{ marginLeft: "4px" }} />
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Parents Feedback Grid: dynamically packed into a modern masonry waterfall layout */}
          <div style={{ columnWidth: "400px", columnGap: "2rem" }}>
            {[
              {
                name: "Khilendra Gurung",
                role: "Parent",
                text: "The event was very helpful. We learned a lot from other parents’ experiences, the more we hear, the more we understand. Theme-based discussions could make it even more valuable. While we usually communicate with parents in our own area, Golden Carpet gave us the opportunity to connect with parents from other areas as well, broadening our perspective and support network.",
              },
              {
                name: "Santosh Raut Kshetri",
                role: "Parent",
                text: "It was a very good and meaningful event that offered valuable insights and opportunities to connect.",
              },
              {
                name: "Neeru Yadav",
                role: "Parent",
                text: "It was a very good event that provided valuable insights and a positive experience for everyone involved. I stayed for a long time, enjoying the conversations and discussions, which gave me a clearer understanding of many things and made the experience even more meaningful.",
              },
              {
                name: "Anju Gharti Sherpa",
                role: "Parent",
                text: "I had never attended an event exactly like this before and have only attended a similar event once before. It was highly informative and gave me a clear understanding of many practical aspects. The discussions and shared experiences provided valuable guidance that I can apply in real-life situations.",
              },
              {
                name: "Kriti Karn",
                role: "Specialist",
                text: "This type of event is incredibly important for parents. Many families don’t have easy access to services, and discussions like these provide valuable guidance, helping them understand how to manage situations effectively in the meantime.",
              },
              {
                name: "Amina Basnet Timsina",
                role: "Community Member",
                text: "I am truly grateful to have experienced the incredible work of Sunflower. Programs like Golden Carpet beautifully reflect their vision of building a strong, compassionate community where every child and every parent feels valued and heard. Impressed with team’s professionalism, hard work and dedication.",
              }
            ].map((t, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} transition={{ duration: 0.3 }} style={{ breakInside: "avoid", pageBreakInside: "avoid", marginBottom: "2rem", backgroundColor: "white", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.03)", borderRadius: "2rem", padding: "3.5rem", display: "flex", flexDirection: "column", transform: "translateZ(0)" }}>
                <div style={{ fontSize: "4rem", color: "rgba(247,180,44,0.3)", lineHeight: 0.5, marginBottom: "2rem", fontFamily: "Georgia, serif" }}>“</div>
                <p style={{ color: "#555", lineHeight: "1.8", fontSize: "1.1rem", marginBottom: "3rem" }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "auto" }}>
                  <div style={{ width: "45px", height: "45px", borderRadius: "50%", backgroundColor: "rgba(118,142,31,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#768E1F", fontWeight: 900, fontSize: "1.2rem", flexShrink: 0, fontFamily: "Lora, serif" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 style={{ color: "#1C1B1B", fontSize: "1.1rem", marginBottom: "0.2rem" }}>{t.name}</h4>
                    <div style={{ color: "#F7B42C", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 900 }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. NEWS & HIGHLIGHTS ───────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-gap) 2rem", backgroundColor: "white" }}>
        <div className="container">
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>08</span>
          </div>

          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "5rem", maxWidth: "800px", lineHeight: "1.2", letterSpacing: "-0.03em" }}>
            News & <span style={{ color: "#F7B42C" }}>Highlights</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {[
              {
                title: "Ask Me Anything on ABAT",
                excerpt: "The highly anticipated second session is happening on April 7. Bring your questions to our expert panel.",
                date: "April 7",
                category: "Event",
                image: "/images/news/ama session.jpg"
              },
              {
                title: "Extended ABA Service Hours",
                excerpt: "We are actively expanding our availability for comprehensive ABA support. We are now proudly providing these services from 9 AM to 5 PM.",
                date: "Service Update",
                category: "Support",
                image: "/images/news/aba therapy.jpg"
              },
              {
                title: "ABAT Training Batch 1",
                excerpt: "We are thrilled to announce that the very first batch of ABAT comprehensive training begins on May 8.",
                date: "May 8",
                category: "Training",
                image: "/images/news/abat news.jpg"
              }
            ].map((news, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  backgroundColor: "#FAFAF7", 
                  borderRadius: "2rem", 
                  overflow: "hidden", 
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer"
                }}
              >
                <div style={{ height: "240px", overflow: "hidden", position: "relative", backgroundColor: "#EAEAEA" }}>
                  <img src={news.image} alt={news.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", backgroundColor: "white", padding: "0.6rem 1.2rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 900, color: "#1C1B1B", textTransform: "uppercase", letterSpacing: "0.15em", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                    {news.category}
                  </div>
                </div>
                <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ color: "#768E1F", fontSize: "0.85rem", fontWeight: 800, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {news.date}
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1C1B1B", marginBottom: "1rem", lineHeight: "1.4", letterSpacing: "-0.01em" }}>
                    {news.title}
                  </h3>
                  <p style={{ color: "#666", lineHeight: "1.7", fontSize: "1rem", marginBottom: "2rem", flexGrow: 1 }}>
                    {news.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#F7B42C", fontWeight: 900, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 9. FAQ ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-gap) 2rem", backgroundColor: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "0.6fr 1fr", gap: "8rem", alignItems: "start" }}>

            {/* Left sticky header */}
            <div style={{ position: "sticky", top: "8rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#F7B42C" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#F7B42C" }}>09</span>
              </div>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", marginBottom: "2rem", lineHeight: "1.2", letterSpacing: "-0.03em" }}>
                Frequently Asked <span style={{ color: "#F7B42C" }}>Questions</span>
              </h2>
              <p style={{ color: "#666", lineHeight: "1.8", fontSize: "1rem", marginBottom: "3rem" }}>
                Everything you need to know about autism support, our services, and how to get started.
              </p>
              <Link href="/contact">
                <button style={{ display: "flex", alignItems: "center", gap: "0.75rem", backgroundColor: "#1C1B1B", color: "white", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 900, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  Still have questions? <ArrowRight size={15} />
                </button>
              </Link>
            </div>

            {/* Right FAQ list */}
            <div>
              {FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ────────────────────────────────────────────────────── */}
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
                Whether you are a parent seeking compassionate guidance, or a professional looking to elevate your practice, we are here for you.
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
              <Link href="/services" style={{ textDecoration: "none" }}>
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
                    <div style={{ color: "#F7B42C", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>For Professionals</div>
                    <div style={{ color: "white", fontSize: "1.3rem", fontWeight: 800 }}>Explore ABAT Training</div>
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
    </main>
  );
}
