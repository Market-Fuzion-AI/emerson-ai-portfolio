import React from 'react';
import { motion } from 'motion/react';
import { Share2, UserPlus, ArrowRight, Code2, Database, Bot } from 'lucide-react';

const projects = [
  {
    id: 'content-dist',
    title: 'AI Content Distribution',
    icon: <Share2 className="text-accent-orange" size={24} />,
    description: 'An autonomous system that takes a long-form blog post or video transcript, uses LLMs to extract key insights, and generates platform-specific content (Twitter threads, LinkedIn posts, newsletter snippets) scheduled automatically.',
    tech: ['Python', 'OpenAI API', 'Make.com', 'Airtable'],
    workflow: ['Source Content', 'LLM Processing', 'Format Adaptation', 'Auto-Scheduling']
  },
  {
    id: 'lead-capture',
    title: 'Intelligent Lead Capture',
    icon: <UserPlus className="text-electric-teal" size={24} />,
    description: 'A conversational AI agent deployed on landing pages that qualifies leads in real-time, enriches their data using Clearbit, and routes high-value prospects directly to sales calendars while nurturing others via email.',
    tech: ['TypeScript', 'LangChain', 'Pinecone', 'HubSpot API'],
    workflow: ['Chat Interaction', 'Data Enrichment', 'Scoring Model', 'CRM Routing']
  }
];

export function AutomationSystems() {
  return (
    <section id="automation-systems" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Other Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Automation Systems</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                {project.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Workflow Diagram */}
              <div className="mb-8">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Workflow</h5>
                <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
                  {project.workflow.map((step, i) => (
                    <React.Fragment key={i}>
                      <div className="flex-shrink-0 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 whitespace-nowrap">
                        {step}
                      </div>
                      {i < project.workflow.length - 1 && (
                        <ArrowRight className="text-slate-300 flex-shrink-0" size={16} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Technology</h5>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
