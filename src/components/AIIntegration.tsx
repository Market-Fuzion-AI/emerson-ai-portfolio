import React from 'react';
import { motion } from 'motion/react';
import { Bot, Image as ImageIcon, Sparkles } from 'lucide-react';

export function AIIntegration() {
  return (
    <section id="ai-integration" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Integration</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Systems Integration</h3>
          <p className="text-base text-slate-600">
            Explore how AI is used inside the Vector system to automate content creation and optimize workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
          >
            <div className="w-10 h-10 shrink-0 bg-blue-50 text-primary-blue rounded-lg flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Text Generation</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vector uses OpenAI GPT models to instantly generate structured social media drafts directly inside the platform.
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
            <div className="w-10 h-10 shrink-0 bg-teal-50 text-electric-teal rounded-lg flex items-center justify-center">
              <ImageIcon size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-1">AI Image Generation</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                OpenAI image models are integrated to automatically create and store visual content for publishing workflows.
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
            <div className="w-10 h-10 shrink-0 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Prompt Optimization</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prompts are automatically formatted before processing to ensure generated content is concise and ready for automation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
