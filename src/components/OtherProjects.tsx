import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function OtherProjects() {
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
    <section id="other-projects" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Other Projects</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Alongside Vector, I have built several smaller applications and automation systems to explore different ideas in product design, workflow automation, and AI-assisted development. These projects demonstrate experimentation, learning, and technical range.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h4 className="text-xl font-bold text-slate-900 mb-3">Axis — Personal Finance Tracker</h4>
            <div className="text-slate-600 leading-relaxed flex-grow space-y-4">
              <p>
                A lightweight financial tracking application designed to monitor income, spending, and account balances across multiple sources.
              </p>
              <p>
                Built to help manage personal cash flow and daily financial check-ins.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <img src="/images/axis/axis-1.png" alt="Axis screenshot 1" onClick={() => setSelectedImage({ src: '/images/axis/axis-1.png', alt: 'Axis screenshot 1' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/axis/axis-2.png" alt="Axis screenshot 2" onClick={() => setSelectedImage({ src: '/images/axis/axis-2.png', alt: 'Axis screenshot 2' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/axis/axis-3.png" alt="Axis screenshot 3" onClick={() => setSelectedImage({ src: '/images/axis/axis-3.png', alt: 'Axis screenshot 3' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h4 className="text-xl font-bold text-slate-900 mb-3">Anchor — Health Tracking App</h4>
            <div className="text-slate-600 leading-relaxed flex-grow space-y-4">
              <p>
                A personal health and habit tracking application used to monitor daily wellness metrics and routines.
              </p>
              <p>
                The goal of the project was to experiment with simple behavioral tracking interfaces.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <img src="/images/anchor/anchor-1.png" alt="Anchor screenshot 1" onClick={() => setSelectedImage({ src: '/images/anchor/anchor-1.png', alt: 'Anchor screenshot 1' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/anchor/anchor-2.png" alt="Anchor screenshot 2" onClick={() => setSelectedImage({ src: '/images/anchor/anchor-2.png', alt: 'Anchor screenshot 2' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/anchor/anchor-3.png" alt="Anchor screenshot 3" onClick={() => setSelectedImage({ src: '/images/anchor/anchor-3.png', alt: 'Anchor screenshot 3' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h4 className="text-xl font-bold text-slate-900 mb-3">AutoReady — Vehicle Maintenance Tracker</h4>
            <div className="text-slate-600 leading-relaxed flex-grow space-y-4">
              <p>
                An application designed to track vehicle maintenance schedules, service history, and reminders.
              </p>
              <p>
                The project explored building simple systems for managing real-world operational data.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <img src="/images/autoready/autoready-1.png" alt="AutoReady screenshot 1" onClick={() => setSelectedImage({ src: '/images/autoready/autoready-1.png', alt: 'AutoReady screenshot 1' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/autoready/autoready-2.png" alt="AutoReady screenshot 2" onClick={() => setSelectedImage({ src: '/images/autoready/autoready-2.png', alt: 'AutoReady screenshot 2' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
              <img src="/images/autoready/autoready-3.png" alt="AutoReady screenshot 3" onClick={() => setSelectedImage({ src: '/images/autoready/autoready-3.png', alt: 'AutoReady screenshot 3' })} className="aspect-[4/3] w-full object-cover rounded-lg border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
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
