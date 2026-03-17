import React from 'react';
import { motion } from 'motion/react';
import { Database, Cpu, Webhook } from 'lucide-react';

export function SystemArchitecture() {
  return (
    <section id="system-architecture" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-10">
          <div className="text-center mb-8">
            <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Architecture</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">System Architecture</h3>
          </div>
          
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              Vector is built as a cloud-first AI automation system that integrates a modern frontend, cloud infrastructure, AI services, and automation workflows.
            </p>
            <p>
              The architecture connects several layers:
            </p>
            <ul className="space-y-4 mt-4">
              {[
                'React + TypeScript frontend for user interaction',
                'Firebase cloud infrastructure for authentication, database, and storage',
                'OpenAI APIs for AI content generation',
                'Make.com automation workflows triggered through webhooks'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-electric-teal shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horizontal Flow Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200 shadow-sm mb-10 overflow-hidden"
        >
          <div className="py-8 bg-slate-50 rounded-xl flex items-center justify-start md:justify-center border border-slate-100 relative overflow-x-auto">
            <div className="absolute inset-0 opacity-20 pointer-events-none min-w-full" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="flex flex-row items-center gap-3 md:gap-5 z-10 px-6 min-w-max">
              {/* User */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-4 h-4 bg-slate-300 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider">User</span>
              </div>

              <div className="text-slate-300 text-xl">→</div>

              {/* React Frontend */}
              <div className="w-28 h-12 bg-blue-50 border-2 border-blue-200 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-blue-700 text-center leading-tight">React<br/>Frontend</span>
              </div>

              <div className="text-slate-300 text-xl">→</div>

              {/* Firebase Backend */}
              <div className="w-28 h-12 bg-amber-50 border-2 border-amber-200 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-amber-700 text-center leading-tight">Firebase<br/>Backend</span>
              </div>

              <div className="text-slate-300 text-xl">→</div>

              <div className="flex flex-col gap-2">
                {/* OpenAI APIs */}
                <div className="w-24 h-10 bg-emerald-50 border-2 border-emerald-200 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-[10px] font-bold text-emerald-700">OpenAI APIs</span>
                </div>
                {/* Make.com */}
                <div className="w-24 h-10 bg-purple-50 border-2 border-purple-200 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-[10px] font-bold text-purple-700">Make.com</span>
                </div>
              </div>

              <div className="text-slate-300 text-xl">→</div>

              {/* External Services */}
              <div className="w-28 h-12 bg-slate-100 border-2 border-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-slate-600 text-center leading-tight">External<br/>Services</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Architecture Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
          >
            <div className="w-10 h-10 shrink-0 bg-blue-50 text-primary-blue rounded-lg flex items-center justify-center">
              <Database size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Real-Time Data Layer</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Firestore enables real-time state synchronization between the React frontend and the cloud database.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
          >
            <div className="w-10 h-10 shrink-0 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
              <Cpu size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-1">AI Processing Layer</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                OpenAI models generate text and images used throughout the application to accelerate content creation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
          >
            <div className="w-10 h-10 shrink-0 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center">
              <Webhook size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Automation Layer</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Make.com workflows process webhook events and trigger external integrations seamlessly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
