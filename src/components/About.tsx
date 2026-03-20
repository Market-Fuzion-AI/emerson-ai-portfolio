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
              <div className="w-64 h-64 bg-white rounded-full border-4 border-slate-50 shadow-xl overflow-hidden">
                <img src="/images/profile-photo/profile-pic.jpg" alt="Emerson Alvarenga" className="w-full h-full object-cover" />
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
