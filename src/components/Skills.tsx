import React from 'react';
import { motion } from 'motion/react';
import { Cpu, GitBranch, Webhook, Bot, Database, Zap, Server, Layers } from 'lucide-react';

const skills = [
  {
    icon: Cpu,
    title: 'AI Automation Systems',
    description: 'Designing AI-powered automation workflows that connect applications and external services.'
  },
  {
    icon: GitBranch,
    title: 'Automation Workflow Design',
    description: 'Creating event-driven pipelines triggered by user actions and webhook events.'
  },
  {
    icon: Webhook,
    title: 'Webhook Architecture',
    description: 'Connecting applications with external automation platforms using webhook triggers.'
  },
  {
    icon: Bot,
    title: 'AI API Integration',
    description: 'Integrating OpenAI models for text and image generation inside production workflows.'
  },
  {
    icon: Database,
    title: 'Cloud Infrastructure',
    description: 'Building backend systems using Firebase Authentication, Firestore, and Storage.'
  },
  {
    icon: Zap,
    title: 'Event-Driven Systems',
    description: 'Designing systems where application events trigger automated processes.'
  },
  {
    icon: Server,
    title: 'Secure API Architecture',
    description: 'Protecting API keys and requests using Cloud Functions as a secure proxy.'
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'Building complete applications across frontend UI, backend services, and automation layers.'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Skills Demonstrated</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 text-left"
              >
                <div className="w-10 h-10 shrink-0 bg-blue-50 text-primary-blue rounded-lg flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{skill.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
