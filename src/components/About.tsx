import React from 'react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Background</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">About Me</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-4 flex justify-center md:justify-end"
            >
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center border-4 border-slate-50 shadow-xl overflow-hidden relative">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="400" fill="#ffffff" />
                  
                  <g transform="translate(110, 90)">
                    {/* Main vertical stem of E */}
                    <rect x="20" y="20" width="24" height="140" rx="8" fill="#0f172a" />
                    {/* Top horizontal */}
                    <rect x="20" y="20" width="120" height="24" rx="8" fill="#0f172a" />
                    {/* Middle horizontal */}
                    <rect x="20" y="78" width="85" height="24" rx="8" fill="url(#logoGrad)" />
                    {/* Bottom horizontal */}
                    <rect x="20" y="136" width="120" height="24" rx="8" fill="#0f172a" />
                    
                    {/* AI Accent Dot */}
                    <circle cx="160" cy="148" r="12" fill="url(#logoGrad)" />
                  </g>

                  <text x="200" y="300" fontFamily="system-ui, -apple-system, sans-serif" fontSize="36" fontWeight="800" fill="#0f172a" textAnchor="middle" letterSpacing="1">
                    EMERSON<tspan fill="#0d9488">.AI</tspan>
                  </text>
                </svg>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-8"
            >
              <div className="text-lg text-slate-600 space-y-6 leading-relaxed mb-10">
                <p>
                  Hi, I’m Emerson. I’m a developer focused on building AI-powered tools and automation systems that help people work more efficiently.
                </p>
                <p>
                  My work combines modern web technologies, AI APIs, and workflow automation platforms to create systems that connect applications, automate processes, and solve real operational problems.
                </p>
                <p>
                  I enjoy experimenting with new ideas, building small applications to test concepts, and designing systems that turn complex workflows into simple, automated solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
