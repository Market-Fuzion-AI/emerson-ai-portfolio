import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Bot, Workflow } from 'lucide-react';

const stack = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'TypeScript', 'Vite']
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Firebase', 'Node.js']
  },
  {
    category: 'AI',
    icon: Bot,
    items: ['OpenAI APIs', 'Prompt Engineering']
  },
  {
    category: 'Automation',
    icon: Workflow,
    items: ['Make.com', 'Webhook systems']
  }
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Tech Stack</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Tools & Technologies</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{group.category}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-600 font-medium flex items-center">
                      <span className="w-1.5 h-1.5 bg-electric-teal rounded-full mr-3 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
