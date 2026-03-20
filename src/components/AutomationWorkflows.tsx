import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, FileText } from 'lucide-react';

export function AutomationWorkflows() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedImage]);

  const workflows = [
    {
      title: 'Workflow 1 — Daily Performance Report',
      description: 'A daily reporting workflow triggered when the user completes their Daily Debrief inside Vector.',
      icon: <Activity className="text-electric-teal" size={24} />,
      steps: [
        'User completes Daily Debrief',
        'Vector sends webhook payload',
        'Make.com receives event',
        'Automation processes reflection data',
        'Daily report delivered to Slack'
      ]
    },
    {
      title: 'Workflow 2 — AI Content Draft Delivery',
      description: 'After creating AI-assisted content in Vector, the user triggers a Make.com automation that uses GPT to format the content package and deliver it to Slack for final review.',
      icon: <FileText className="text-accent-orange" size={24} />,
      steps: [
        'User starts with a content idea inside Vector',
        'User moves through the guided AI content creation flow',
        'User clicks the final action button to trigger automation',
        'Make.com and GPT format the content package',
        'Draft sent to Slack for social media manager review'
      ]
    }
  ];

  const automationImages = [
    { src: '/images/make-automation/automation-1.png', alt: 'Make automation screenshot 1' },
    { src: '/images/make-automation/automation-2.png', alt: 'Make automation screenshot 2' },
  ];

  return (
    <section id="automation-workflows" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Workflows</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Automation Workflows</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
                {workflow.icon}
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-4">{workflow.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">{workflow.description}</p>

              <div className="space-y-4">
                {workflow.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500 shadow-sm">
                      {i + 1}
                    </div>
                    <div className="flex-grow bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Make automation screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
        >
          {automationImages.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              onClick={() => setSelectedImage(img)}
              className="w-full h-auto rounded-xl border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity"
            />
          ))}
        </motion.div>
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
