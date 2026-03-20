import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LayoutList, Sparkles, Brain } from 'lucide-react';

export function VectorEvolution() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedImage]);

  return (
    <section id="vector-evolution" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Evolution</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Vector Evolution</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Vector has evolved through multiple iterations as the product vision became clearer, growing from a simple task manager into a comprehensive behavioral execution system.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6">
              <LayoutList size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Version 1 — Productivity Prototype</h4>
            <p className="text-slate-600 leading-relaxed">
              Vector V1 was the first prototype focused on task and mission management. Users could create missions, categorize tasks, track progress, and organize work through a pipeline similar to a Kanban board. This version helped test the basic idea of structured execution.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <img src="/images/vector/v1/vector-v1-1.png" alt="Vector V1 screenshot 1" onClick={() => setSelectedImage({ src: '/images/vector/v1/vector-v1-1.png', alt: 'Vector V1 screenshot 1' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/vector/v1/vector-v1-2.png" alt="Vector V1 screenshot 2" onClick={() => setSelectedImage({ src: '/images/vector/v1/vector-v1-2.png', alt: 'Vector V1 screenshot 2' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/vector/v1/vector-v1-3.png" alt="Vector V1 screenshot 3" onClick={() => setSelectedImage({ src: '/images/vector/v1/vector-v1-3.png', alt: 'Vector V1 screenshot 3' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center mb-6">
              <Sparkles size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Version 2 — AI Automation System</h4>
            <p className="text-slate-600 leading-relaxed">
              Vector V2 expanded the system into an AI-powered productivity and automation platform. It introduced OpenAI integrations for text and image generation, automated content workflows, and Make.com webhook pipelines. This version demonstrated how AI could assist with content creation and workflow automation.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <img src="/images/vector/v2/vector-v2-1.jpeg" alt="Vector V2 screenshot 1" onClick={() => setSelectedImage({ src: '/images/vector/v2/vector-v2-1.jpeg', alt: 'Vector V2 screenshot 1' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/vector/v2/vector-v2-2.jpeg" alt="Vector V2 screenshot 2" onClick={() => setSelectedImage({ src: '/images/vector/v2/vector-v2-2.jpeg', alt: 'Vector V2 screenshot 2' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/vector/v2/vector-v2-3.jpeg" alt="Vector V2 screenshot 3" onClick={() => setSelectedImage({ src: '/images/vector/v2/vector-v2-3.jpeg', alt: 'Vector V2 screenshot 3' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Brain size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Version 3 — Human Operating System</h4>
            <p className="text-slate-600 leading-relaxed">
              Vector V3 represents the next evolution of the product. Instead of focusing on tasks, it introduces a behavioral execution loop built around daily check-ins, mission execution, and nightly reflection. The goal is to create an AI-assisted system that helps users plan, execute, and adapt toward long-term goals.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <img src="/images/vector/v3/vector-v3-1.jpeg" alt="Vector V3 screenshot 1" onClick={() => setSelectedImage({ src: '/images/vector/v3/vector-v3-1.jpeg', alt: 'Vector V3 screenshot 1' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/vector/v3/vector-v3-2.jpeg" alt="Vector V3 screenshot 2" onClick={() => setSelectedImage({ src: '/images/vector/v3/vector-v3-2.jpeg', alt: 'Vector V3 screenshot 2' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/vector/v3/vector-v3-3.jpeg" alt="Vector V3 screenshot 3" onClick={() => setSelectedImage({ src: '/images/vector/v3/vector-v3-3.jpeg', alt: 'Vector V3 screenshot 3' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
              aria-label="Close"
            >
              <span>Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
