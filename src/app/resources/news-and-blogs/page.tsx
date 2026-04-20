'use client';

import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Filter, Calendar, User, Clock } from "lucide-react";
import Link from 'next/link';

const newsData = [
  {
    id: 1,
    title: "Ask Me Anything on ABAT",
    excerpt: "The highly anticipated second session is happening on April 7. Bring your questions to our expert panel to discuss therapeutic strategies and certifications.",
    date: "April 7, 2024",
    category: "Events",
    image: "/images/news/ama session.jpg",
    author: "SIA Education Team",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Extended ABA Service Hours",
    excerpt: "We are actively expanding our availability for comprehensive ABA support. We are now proudly providing these services from 9 AM to 5 PM at our main center.",
    date: "March 28, 2024",
    category: "Service Update",
    image: "/images/news/aba therapy.jpg",
    author: "Clinical Operations",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "ABAT Training Batch 1",
    excerpt: "We are thrilled to announce that the very first batch of ABAT comprehensive training begins on May 8. Join our next generation of specialists.",
    date: "May 8, 2024",
    category: "Training",
    image: "/images/news/abat news.jpg",
    author: "Professional Development",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Understanding Sensory Processing",
    excerpt: "A deep dive into how children with autism experience the world around them and how we can create better sensory environments at home.",
    date: "May 15, 2024",
    category: "Guides",
    image: "/images/gc7.jpg",
    author: "Dr. Ayasha Shrestha",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Golden Carpet: Community Impact",
    excerpt: "A retrospective on our latest community gathering and the voices that are shaping the future of autism support in the region.",
    date: "June 2, 2024",
    category: "Community",
    image: "/images/goldencarpet.jpg",
    author: "Foundation Board",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "New Tools for Inclusive Classrooms",
    excerpt: "Introducing the Sunflower Petals toy collection designed specifically for developmental support and social interaction in school settings.",
    date: "June 10, 2024",
    category: "Ecosystem",
    image: "/images/gc4.jpg",
    author: "Partnerships",
    readTime: "4 min read"
  }
];

const categories = ["All", "Events", "Service Update", "Training", "Guides", "Community", "Ecosystem"];

export default function NewsAndBlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsData.filter(news => {
    const matchesCategory = activeCategory === "All" || news.category === activeCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ backgroundColor: '#FAFAF7', minHeight: '100vh' }}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section style={{ padding: '12rem 2rem 6rem', backgroundColor: '#1C1B1B', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.2 }}>
           <img src="/images/gc7.jpg" alt="Hero Background" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#F7B42C' }} />
              <span style={{ color: '#F7B42C', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em' }}>SIA Resources</span>
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: '1.1', marginBottom: '2.5rem', letterSpacing: '-0.03em' }}>
              News & <span style={{ color: '#F7B42C' }}>Blogs</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '600px' }}>
              Stay updated with the latest insights, therapeutic breakthroughs, and community highlights from the Sunflower Ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section style={{ padding: '3rem 2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', position: 'sticky', top: '70px', backgroundColor: 'white', zIndex: 10, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Category Filters */}
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.7rem 1.5rem',
                  borderRadius: '100px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#768E1F' : 'rgba(0,0,0,0.1)',
                  backgroundColor: activeCategory === cat ? '#768E1F' : 'transparent',
                  color: activeCategory === cat ? 'white' : '#666',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '300px' }}>
             <Search size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
             <input 
               type="text" 
               placeholder="Search articles..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               style={{
                 width: '100%',
                 padding: '0.9rem 1rem 0.9rem 3.5rem',
                 borderRadius: '100px',
                 border: '1px solid rgba(0,0,0,0.1)',
                 fontSize: '0.9rem',
                 outline: 'none',
                 boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
               }}
             />
          </div>
        </div>
      </section>

      {/* 3. LISTING GRID */}
      <section style={{ padding: '6rem 2rem 10rem' }}>
        <div className="container">
          {filteredNews.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '3rem' }}>
              <AnimatePresence mode="popLayout">
                {filteredNews.map((news) => (
                  <motion.div 
                    key={news.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      backgroundColor: "white", 
                      borderRadius: "2.5rem", 
                      overflow: "hidden", 
                      border: "1px solid rgba(0,0,0,0.05)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.04)",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <div style={{ height: "260px", overflow: "hidden", position: "relative" }}>
                      <img src={news.image} alt={news.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: 'transform 0.5s ease' }} />
                      <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", backgroundColor: "white", padding: "0.6rem 1.2rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 900, color: "#1C1B1B", textTransform: "uppercase", letterSpacing: "0.15em", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                        {news.category}
                      </div>
                    </div>
                    
                    <div style={{ padding: "3rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', color: '#666', fontSize: '0.8rem', fontWeight: 600 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Calendar size={14} style={{ color: '#F7B42C' }} /> {news.date}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Clock size={14} style={{ color: '#F7B42C' }} /> {news.readTime}
                        </div>
                      </div>

                      <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1C1B1B", marginBottom: "1.25rem", lineHeight: "1.3", letterSpacing: "-0.01em" }}>
                        {news.title}
                      </h3>
                      <p style={{ color: "#555", lineHeight: "1.8", fontSize: "1.05rem", marginBottom: "2.5rem", flexGrow: 1 }}>
                        {news.excerpt}
                      </p>
                      
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                           <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#F7FAF7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#768E1F', fontWeight: 900, fontSize: '0.8rem', border: '1px solid rgba(118,142,31,0.1)' }}>
                              {news.author[0]}
                           </div>
                           <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1C1B1B' }}>{news.author}</span>
                        </div>
                        <Link href={`/resources/news-and-blogs/${news.id}`} style={{ textDecoration: 'none' }}>
                            <motion.div whileHover={{ x: 5 }} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#F7B42C", fontWeight: 900, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", cursor: 'pointer' }}>
                                Read Article <ArrowRight size={16} />
                            </motion.div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
               <Filter size={48} style={{ color: '#EAEAEA', marginBottom: '2rem' }} />
               <h2 style={{ fontSize: '2rem', color: '#1C1B1B', marginBottom: '1rem' }}>No articles found</h2>
               <p style={{ color: '#666' }}>Try adjusting your search or category filters.</p>
               <button 
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                style={{ marginTop: '2rem', background: 'none', border: 'none', color: '#F7B42C', fontWeight: 900, textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '0.1em' }}
               >
                 Clear all filters
               </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
