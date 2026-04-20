'use client';

import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Target, 
  Trophy, 
  MessageSquare, 
  ArrowRight, 
  Calendar, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Clock,
  Heart,
  Star,
  Quote
} from "lucide-react";
import Link from 'next/link';

const eventTakeaways = [
  {
    id: "april-2026",
    title: "Why Parent Well-being Matters",
    date: "April 5, 2026",
    time: "2:00 PM – 5:00 PM",
    venue: "Sunflower Campus, Lazimpat",
    participants: "50+",
    summary: "A deeply emotional session shifting the conversation toward parent well-being as a critical part of autism care. Explored themes of burnout, guilt, and sustainable self-care.",
    objectives: [
      "Highlight the emotional and mental load carried by caregivers",
      "Promote practical and realistic well-being strategies",
      "Strengthen empathy and collaboration between parents and professionals"
    ],
    highlights: [
      "Parent burnout and emotional exhaustion discussions",
      "Addressing guilt when prioritizing self-care",
      "Balancing therapy demands with daily life",
      "Real-life experiences shared by multidisciplinary professionals"
    ],
    takeaways: [
      "Supporting the child begins with supporting the parent",
      "Small, realistic well-being practices are more sustainable than ideal solutions",
      "Open conversations can reduce isolation and normalize struggles"
    ],
    feedback: [
      { 
        name: "Amina Basnet Timsina", 
        role: "Lilliput School, Biratnagar", 
        text: "I am truly grateful to have experienced the incredible work of Sunflower. Programs like Golden Carpet beautifully reflect their vision of building a strong, compassionate community where every child and parent feels valued and heard." 
      }
    ]
  },
  {
    id: "march-2026",
    title: "Foundation & Connection",
    date: "March 1, 2026",
    time: "2:00 PM – 5:00 PM",
    venue: "Sunflower Campus, Lazimpat",
    participants: "35+",
    summary: "The inaugural Golden Carpet gathering focused on building a safe, open space for dialogue between parents and stakeholders. Established the platform's recurring monthly format.",
    objectives: [
      "Create a safe and open space for parents to share lived experiences",
      "Connect parents with therapists, educators, and advocates",
      "Identify parental needs to shape the care system"
    ],
    highlights: [
      "Collaborative parent–therapist discussions",
      "Introduction of thematic discussion requests",
      "Clarification of ABA therapy misconceptions",
      "Toilet training strategies for verbal children"
    ],
    takeaways: [
      "Collaboration between parents and therapists is an essential pillar",
      "Therapeutic strategies should be practiced at home regularly",
      "Parents should observe therapy sessions whenever possible"
    ],
    feedback: [
      { 
        name: "Ram Tiwari", 
        role: "ECED Expert / Advocate", 
        text: "This platform is exactly what parents need. Informative yet refreshingly informal, creating a space where everyone felt comfortable to speak freely." 
      },
      { 
        name: "Dr. Ayasha Shrestha", 
        role: "Karuna Foundation Nepal", 
        text: "Understanding autism begins with listening. Listening to parents, professionals, and most importantly, the unique voices of autistic individuals." 
      }
    ]
  }
];

export default function GoldenCarpetTakeawaysPage() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>("april-2026");

  return (
    <main style={{ backgroundColor: "#030504", color: "white", minHeight: "100vh" }}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 6rem', backgroundColor: '#030504', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '50vw', height: '80vh', background: 'radial-gradient(circle, rgba(225,158,21,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ color: "#e19e15", fontSize: "0.85rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "2rem" }}>Knowledge Hub</div>
            <h1 style={{ color: "white", fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: "1.1", marginBottom: "2.5rem", letterSpacing: "-0.03em" }}>
              Golden Carpet <br /><span style={{ color: "#e19e15" }}>Key Takeaways</span>
            </h1>
            <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", maxWidth: "700px", lineHeight: "1.6" }}>
              Every session on the Golden Carpet leaves behind a trail of insights, strategies, and shared wisdom. Explore the reflections from our past community gatherings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TAKEAWAY LISTING */}
      <section style={{ padding: "4rem 2rem 10rem" }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {eventTakeaways.map((event) => (
              <motion.div 
                key={event.id}
                layout
                style={{ 
                  backgroundColor: "#111", 
                  borderRadius: "3rem", 
                  border: "1px solid rgba(225,158,21,0.1)",
                  overflow: "hidden",
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Header Strip */}
                <div 
                  onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                  style={{ 
                    padding: "3rem 4rem", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    cursor: "pointer",
                    backgroundColor: expandedEvent === event.id ? "rgba(225,158,21,0.05)" : "transparent"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
                    <div style={{ textAlign: "center", minWidth: "120px" }}>
                       <div style={{ color: "#e19e15", fontSize: "0.8rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Event Session</div>
                       <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "white" }}>{event.date.split(',')[0]}</div>
                    </div>
                    <div>
                       <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.5rem", color: "white" }}>{event.title}</h3>
                       <div style={{ display: "flex", gap: "2rem", color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><MapPin size={14} /> {event.venue}</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Users size={14} /> {event.participants} Participants</span>
                       </div>
                    </div>
                  </div>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {expandedEvent === event.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedEvent === event.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ padding: "0 4rem 4rem 4rem" }}
                    >
                      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.05)", marginBottom: "4rem" }} />
                      
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
                        
                        {/* Left Column: Objectives & Highlights */}
                        <div>
                          <div style={{ marginBottom: "4rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                              <Target size={20} style={{ color: "#e19e15" }} />
                              <h4 style={{ fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "white" }}>Objectives</h4>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                              {event.objectives.map((obj, i) => (
                                <li key={i} style={{ display: "flex", gap: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
                                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#e19e15", marginTop: "0.6rem", flexShrink: 0 }} /> {obj}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                              <Star size={20} style={{ color: "#e19e15" }} />
                              <h4 style={{ fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "white" }}>Key Discussion Points</h4>
                            </div>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                              {event.highlights.map((h, i) => (
                                <div key={i} style={{ padding: "1.5rem", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.05)" }}>
                                  <p style={{ margin: 0, fontSize: "0.95rem", color: "rgba(255,255,255,0.8)" }}>{h}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column: Takeaways & Feedback */}
                        <div>
                          <div style={{ marginBottom: "4rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                              <Trophy size={20} style={{ color: "#e19e15" }} />
                              <h4 style={{ fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "white" }}>Core Takeaways</h4>
                            </div>
                            <div style={{ backgroundColor: "rgba(225,158,21,0.05)", padding: "2.5rem", borderRadius: "2rem", border: "1px solid rgba(225,158,21,0.1)" }}>
                               <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.5rem" }}>
                                {event.takeaways.map((task, i) => (
                                  <li key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                                    <div style={{ color: "#e19e15", fontWeight: 900, fontSize: "0.8rem" }}>0{i+1}</div>
                                    <p style={{ margin: 0, fontWeight: 700, lineHeight: "1.4", color: "white" }}>{task}</p>
                                  </li>
                                ))}
                               </ul>
                            </div>
                          </div>

                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                              <MessageSquare size={20} style={{ color: "#e19e15" }} />
                              <h4 style={{ fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "white" }}>Voices from the Carpet</h4>
                            </div>
                            <div style={{ display: "grid", gap: "2rem" }}>
                              {event.feedback.map((f, i) => (
                                <div key={i} style={{ position: "relative", paddingLeft: "2rem" }}>
                                  <Quote size={40} style={{ position: "absolute", top: -10, left: -20, opacity: 0.1, color: "#e19e15" }} />
                                  <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "1rem" }}>"{f.text}"</p>
                                  <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#e19e15", textTransform: "uppercase", letterSpacing: "0.1em" }}>— {f.name}, {f.role}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section style={{ padding: "0 2rem 10rem" }}>
        <div className="container">
          <div style={{ backgroundColor: "#111", borderRadius: "4rem", padding: "6rem", textAlign: "center", border: "1px solid rgba(225,158,21,0.1)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'radial-gradient(ellipse at center, rgba(225,158,21,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
            
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", position: "relative", zIndex: 1, color: "white" }}>Experience it <span style={{ color: "#e19e15" }}>Live</span></h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem", position: "relative", zIndex: 1 }}>
              Takeaways are powerful, but being in the room is transformative. Join our next community gathering on May 3rd.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", position: "relative", zIndex: 1 }}>
              <Link href="/events/register">
                <button style={{ backgroundColor: "#e19e15", color: "#030504", padding: "1.2rem 3rem", borderRadius: "100px", fontWeight: 900, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.2em", border: "none", cursor: 'pointer' }}>
                  Register for Next Session
                </button>
              </Link>
              <Link href="/golden-carpet">
                <button style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "white", padding: "1.2rem 3rem", borderRadius: "100px", fontWeight: 900, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.2em", border: "1px solid rgba(255,255,255,0.1)", cursor: 'pointer' }}>
                  Explore the Platform
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
