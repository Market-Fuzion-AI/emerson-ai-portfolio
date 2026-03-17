import React from 'react';
import { Mail, ArrowUpRight, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Let's build something efficient.</h3>
            <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
              <p>I’m currently open to AI automation, systems, and product-focused opportunities. If you’re hiring for roles involving automation design, AI workflows, integrations, or technical product systems, let’s connect.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <motion.a
            href="mailto:e.alvarenga3592@icloud.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex items-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary-blue/30 hover:shadow-md transition-all w-full"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary-blue shadow-sm shrink-0 mr-4">
              <Mail size={22} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold text-slate-900 mb-0.5">Email</span>
              <span className="text-sm text-slate-500 flex items-center font-medium">
                Say Hello <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary-blue" />
              </span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/emerson-alvarenga-280158248/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex items-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary-blue/30 hover:shadow-md transition-all w-full"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary-blue shadow-sm shrink-0 mr-4">
              <Linkedin size={22} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold text-slate-900 mb-0.5">LinkedIn</span>
              <span className="text-sm text-slate-500 flex items-center font-medium">
                Connect <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary-blue" />
              </span>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/Market-Fuzion-AI"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group flex items-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary-blue/30 hover:shadow-md transition-all w-full"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary-blue shadow-sm shrink-0 mr-4">
              <Github size={22} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold text-slate-900 mb-0.5">GitHub</span>
              <span className="text-sm text-slate-500 flex items-center font-medium">
                View Code <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary-blue" />
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
