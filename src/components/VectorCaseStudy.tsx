import React from 'react';
import { motion } from 'motion/react';

export function VectorCaseStudy() {
  return (
    <section id="vector-case-study" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Featured Project</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Vector — AI Automation System</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
            <p>
              Vector is an AI-assisted execution platform that combines task management, AI content generation, and automation workflows into a unified system.
            </p>
            <p>
              The project demonstrates how AI APIs, cloud infrastructure, and automation platforms can be orchestrated to create a lightweight productivity and automation engine.
            </p>
          </div>

          <div className="mt-10 w-full max-w-3xl text-left">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'AI-powered content generation',
                'Real-time cloud data with Firebase',
                'Webhook-based automation pipelines',
                'Integration with Make.com workflows'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 bg-white px-5 py-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-electric-teal shrink-0" />
                  <span className="font-medium text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
