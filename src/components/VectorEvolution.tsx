import React from 'react';
import { motion } from 'motion/react';
import { LayoutList, Sparkles, Brain } from 'lucide-react';

export function VectorEvolution() {
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
              {/* Kanban Mockup */}
              <div className="aspect-[4/3] bg-slate-50 rounded-lg border border-slate-200 p-2 flex gap-1.5 overflow-hidden">
                <div className="flex-1 bg-slate-100 rounded flex flex-col gap-1.5 p-1.5">
                  <div className="h-1.5 w-1/2 bg-slate-300 rounded mb-1"></div>
                  <div className="h-4 bg-white rounded shadow-sm border border-slate-100"></div>
                  <div className="h-4 bg-white rounded shadow-sm border border-slate-100"></div>
                </div>
                <div className="flex-1 bg-slate-100 rounded flex flex-col gap-1.5 p-1.5">
                  <div className="h-1.5 w-1/2 bg-slate-300 rounded mb-1"></div>
                  <div className="h-4 bg-white rounded shadow-sm border border-slate-100"></div>
                </div>
              </div>
              {/* List Mockup */}
              <div className="aspect-[4/3] bg-slate-50 rounded-lg border border-slate-200 p-2.5 flex flex-col gap-2 overflow-hidden">
                <div className="h-2 w-1/3 bg-slate-300 rounded mb-1"></div>
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm border-2 border-slate-300"></div>
                    <div className="h-2 flex-1 bg-slate-200 rounded"></div>
                  </div>
                ))}
              </div>
              {/* Progress Mockup */}
              <div className="aspect-[4/3] bg-slate-50 rounded-lg border border-slate-200 p-2 flex flex-col justify-end items-center overflow-hidden">
                <div className="flex items-end gap-1.5 w-full h-full justify-center pb-1">
                  <div className="w-4 h-1/3 bg-blue-200 rounded-t-sm"></div>
                  <div className="w-4 h-2/3 bg-blue-300 rounded-t-sm"></div>
                  <div className="w-4 h-1/2 bg-blue-400 rounded-t-sm"></div>
                  <div className="w-4 h-full bg-blue-500 rounded-t-sm"></div>
                </div>
              </div>
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
              {/* Chat/Generation Mockup */}
              <div className="aspect-[4/3] bg-slate-50 rounded-lg border border-slate-200 p-2.5 flex flex-col gap-2 overflow-hidden">
                <div className="self-end w-2/3 h-4 bg-blue-100 rounded-l-lg rounded-tr-lg"></div>
                <div className="self-start w-3/4 h-5 bg-slate-200 rounded-r-lg rounded-tl-lg"></div>
                <div className="mt-auto h-3 w-full bg-white border border-slate-200 rounded-full"></div>
              </div>
              {/* Workflow Nodes Mockup */}
              <div className="aspect-[4/3] bg-slate-50 rounded-lg border border-slate-200 p-2 flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-full h-0.5 bg-slate-200"></div>
                <div className="flex justify-between w-full z-10 px-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-400 border-[3px] border-white shadow-sm"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-400 border-[3px] border-white shadow-sm"></div>
                  <div className="w-5 h-5 rounded-full bg-purple-400 border-[3px] border-white shadow-sm"></div>
                </div>
              </div>
              {/* Content Preview Mockup */}
              <div className="aspect-[4/3] bg-slate-50 rounded-lg border border-slate-200 p-2 flex flex-col gap-1.5 overflow-hidden">
                <div className="w-full h-1/2 bg-slate-200 rounded-sm"></div>
                <div className="h-2 w-3/4 bg-slate-300 rounded mt-1"></div>
                <div className="h-1.5 w-full bg-slate-200 rounded"></div>
                <div className="h-1.5 w-5/6 bg-slate-200 rounded"></div>
              </div>
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
              {/* Calendar/Planning Mockup */}
              <div className="aspect-[4/3] bg-slate-50 rounded-lg border border-slate-200 p-2 flex flex-col gap-1.5 overflow-hidden">
                <div className="h-2 w-1/3 bg-slate-300 rounded mb-0.5"></div>
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`aspect-square rounded-sm ${i === 4 || i === 7 ? 'bg-emerald-400' : 'bg-slate-200'}`}></div>
                  ))}
                </div>
              </div>
              {/* Behavioral Tracking Mockup */}
              <div className="aspect-[4/3] bg-slate-50 rounded-lg border border-slate-200 p-2 flex items-end gap-1 overflow-hidden">
                {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-emerald-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              {/* Mission Execution Mockup */}
              <div className="aspect-[4/3] bg-slate-50 rounded-lg border border-slate-200 p-2 flex items-center justify-center overflow-hidden">
                <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-emerald-500 border-r-emerald-500 flex items-center justify-center">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
