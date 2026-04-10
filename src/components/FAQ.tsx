'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What happens during an initial consultation?',
    answer: 'Our initial consultation is a warm, low-pressure conversation where we listen to your journey, understand your child\'s unique needs, and discuss how our holistic ecosystem can support your family.'
  },
  {
    question: 'How is your approach to ABA different?',
    answer: 'SIA utilizes a play-based, compassionate, and non-coercive approach to ABA. We reject rigid systems in favor of unhurried, relationship-first interactions overseen by international BCBA standards.'
  },
  {
    question: 'What age groups do you support?',
    answer: 'We provide support across the lifespan, with specialized early intervention programs for young children and functional independence paths for adolescents and adults.'
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: 'var(--section-gap) 2rem', backgroundColor: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Questions you might be holding onto.</h2>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="bezel-outer" style={{ padding: '0.5rem' }}>
              <div 
                className="bezel-inner" 
                style={{ 
                  padding: '1.5rem 2rem', 
                  cursor: 'pointer',
                  backgroundColor: activeIndex === i ? 'rgba(50, 48, 48, 0.02)' : 'white'
                }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Lora' }}>{faq.question}</h3>
                  {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ paddingTop: '1.5rem', color: '#666', lineHeight: '1.7', fontSize: '1rem' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
