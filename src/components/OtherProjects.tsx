import React from 'react';
import { motion } from 'motion/react';

export function OtherProjects() {
  return (
    <section id="other-projects" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Other Projects</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Alongside Vector, I have built several smaller applications and automation systems to explore different ideas in product design, workflow automation, and AI-assisted development. These projects demonstrate experimentation, learning, and technical range.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h4 className="text-xl font-bold text-slate-900 mb-3">Axis — Personal Finance Tracker</h4>
            <div className="text-slate-600 leading-relaxed flex-grow space-y-4">
              <p>
                A lightweight financial tracking application designed to monitor income, spending, and account balances across multiple sources.
              </p>
              <p>
                Built to help manage personal cash flow and daily financial check-ins.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {/* Balance Mockup */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-slate-200 p-2.5 flex flex-col shadow-sm overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                  <div className="h-2 w-12 bg-slate-200 rounded"></div>
                  <div className="h-2 w-4 bg-slate-200 rounded"></div>
                </div>
                <div className="h-5 w-24 bg-slate-800 rounded mb-1"></div>
                <div className="h-1.5 w-16 bg-emerald-400 rounded mb-3"></div>
                <div className="flex items-end gap-1 mt-auto h-8">
                  {[30, 45, 25, 60, 40, 75, 50].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-emerald-500' : 'bg-slate-100'}`} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
              {/* Income/Spending Mockup */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-slate-200 p-2.5 flex flex-col shadow-sm overflow-hidden">
                <div className="h-2 w-16 bg-slate-200 rounded mb-3"></div>
                <div className="flex gap-2 mb-2">
                  <div className="flex-1 bg-slate-50 rounded p-1.5 border border-slate-100">
                    <div className="h-1.5 w-8 bg-slate-300 rounded mb-1"></div>
                    <div className="h-3 w-12 bg-emerald-500 rounded"></div>
                  </div>
                  <div className="flex-1 bg-slate-50 rounded p-1.5 border border-slate-100">
                    <div className="h-1.5 w-8 bg-slate-300 rounded mb-1"></div>
                    <div className="h-3 w-12 bg-rose-500 rounded"></div>
                  </div>
                </div>
                <div className="mt-auto flex gap-1 items-center">
                  <div className="h-1.5 flex-1 bg-emerald-400 rounded-full"></div>
                  <div className="h-1.5 w-1/3 bg-rose-400 rounded-full"></div>
                </div>
              </div>
              {/* Transactions Mockup */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-slate-200 p-2.5 flex flex-col shadow-sm overflow-hidden">
                <div className="h-2 w-20 bg-slate-200 rounded mb-2"></div>
                <div className="flex flex-col gap-2">
                  {[
                    { c: 'bg-blue-100', w: 'w-16', a: 'w-8' },
                    { c: 'bg-amber-100', w: 'w-12', a: 'w-6' },
                    { c: 'bg-purple-100', w: 'w-20', a: 'w-10' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full ${item.c}`}></div>
                        <div className="flex flex-col gap-0.5">
                          <div className={`h-1.5 ${item.w} bg-slate-700 rounded`}></div>
                          <div className="h-1 w-8 bg-slate-300 rounded"></div>
                        </div>
                      </div>
                      <div className={`h-1.5 ${item.a} bg-slate-800 rounded`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h4 className="text-xl font-bold text-slate-900 mb-3">Anchor — Health Tracking App</h4>
            <div className="text-slate-600 leading-relaxed flex-grow space-y-4">
              <p>
                A personal health and habit tracking application used to monitor daily wellness metrics and routines.
              </p>
              <p>
                The goal of the project was to experiment with simple behavioral tracking interfaces.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {/* Daily Metrics Mockup */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-slate-200 p-2.5 flex flex-col items-center justify-center shadow-sm overflow-hidden relative">
                <div className="absolute top-2 left-2 h-1.5 w-12 bg-slate-200 rounded"></div>
                <div className="relative w-12 h-12 mt-2">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="75, 100" />
                    <path d="M18 6.0845 a 11.9155 11.9155 0 0 1 0 23.831 a 11.9155 11.9155 0 0 1 0 -23.831" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                    <path d="M18 6.0845 a 11.9155 11.9155 0 0 1 0 23.831 a 11.9155 11.9155 0 0 1 0 -23.831" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="60, 100" />
                    <path d="M18 10.0845 a 7.9155 7.9155 0 0 1 0 15.831 a 7.9155 7.9155 0 0 1 0 -15.831" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                    <path d="M18 10.0845 a 7.9155 7.9155 0 0 1 0 15.831 a 7.9155 7.9155 0 0 1 0 -15.831" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="90, 100" />
                  </svg>
                </div>
              </div>
              {/* Habit Grid Mockup */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-slate-200 p-2.5 flex flex-col shadow-sm overflow-hidden">
                <div className="h-1.5 w-16 bg-slate-200 rounded mb-2"></div>
                <div className="flex flex-col gap-1.5">
                  {[
                    { n: 'w-10', d: [1, 1, 1, 0, 1, 1, 0] },
                    { n: 'w-14', d: [1, 0, 1, 1, 1, 0, 1] },
                    { n: 'w-8', d: [1, 1, 1, 1, 1, 1, 1] }
                  ].map((habit, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div className={`h-1.5 ${habit.n} bg-slate-600 rounded`}></div>
                      <div className="flex gap-0.5 flex-1 justify-end">
                        {habit.d.map((done, j) => (
                          <div key={j} className={`w-2 h-2 rounded-sm ${done ? 'bg-emerald-400' : 'bg-slate-100'}`}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Sleep/Line Chart Mockup */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-slate-200 p-2.5 flex flex-col shadow-sm overflow-hidden relative">
                <div className="h-1.5 w-12 bg-slate-200 rounded mb-1"></div>
                <div className="h-3 w-16 bg-indigo-500 rounded mb-2"></div>
                <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <path d="M0,40 L0,20 Q10,10 20,25 T40,15 T60,30 T80,10 T100,20 L100,40 Z" fill="#e0e7ff" />
                    <path d="M0,20 Q10,10 20,25 T40,15 T60,30 T80,10 T100,20" fill="none" stroke="#6366f1" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h4 className="text-xl font-bold text-slate-900 mb-3">AutoReady — Vehicle Maintenance Tracker</h4>
            <div className="text-slate-600 leading-relaxed flex-grow space-y-4">
              <p>
                An application designed to track vehicle maintenance schedules, service history, and reminders.
              </p>
              <p>
                The project explored building simple systems for managing real-world operational data.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {/* Car Status Mockup */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-slate-200 p-2.5 flex flex-col shadow-sm overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                  <div className="h-2 w-16 bg-slate-800 rounded"></div>
                  <div className="h-1.5 w-8 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-slate-50 rounded border border-slate-100 flex items-center justify-center relative">
                  <div className="w-12 h-4 bg-slate-300 rounded-t-lg relative">
                    <div className="absolute -bottom-1 left-1.5 w-3 h-3 bg-slate-700 rounded-full border-2 border-white"></div>
                    <div className="absolute -bottom-1 right-1.5 w-3 h-3 bg-slate-700 rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-1.5">
                  <div className="h-1.5 w-10 bg-slate-300 rounded"></div>
                  <div className="h-1.5 w-10 bg-slate-300 rounded"></div>
                </div>
              </div>
              {/* Service Logs Mockup */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-slate-200 p-2.5 flex flex-col shadow-sm overflow-hidden">
                <div className="h-2 w-20 bg-slate-200 rounded mb-2"></div>
                <div className="flex flex-col gap-2 relative">
                  <div className="absolute left-1.5 top-1 bottom-1 w-0.5 bg-slate-100"></div>
                  {[
                    { t: 'w-16', d: 'w-8', c: 'bg-emerald-400' },
                    { t: 'w-20', d: 'w-10', c: 'bg-slate-300' },
                    { t: 'w-12', d: 'w-12', c: 'bg-slate-300' }
                  ].map((log, i) => (
                    <div key={i} className="flex gap-2 items-start relative z-10">
                      <div className={`w-3 h-3 rounded-full border-2 border-white ${log.c} shadow-sm`}></div>
                      <div className="flex flex-col gap-1 mt-0.5">
                        <div className={`h-1.5 ${log.t} bg-slate-700 rounded`}></div>
                        <div className={`h-1 ${log.d} bg-slate-400 rounded`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Reminders Mockup */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-slate-200 p-2.5 flex flex-col shadow-sm overflow-hidden">
                <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-full p-1.5 bg-rose-50 border border-rose-100 rounded flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <div className="h-1.5 w-12 bg-rose-600 rounded"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                    </div>
                    <div className="h-1 w-8 bg-rose-400 rounded"></div>
                  </div>
                  <div className="w-full p-1.5 bg-amber-50 border border-amber-100 rounded flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <div className="h-1.5 w-16 bg-amber-600 rounded"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    </div>
                    <div className="h-1 w-10 bg-amber-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
