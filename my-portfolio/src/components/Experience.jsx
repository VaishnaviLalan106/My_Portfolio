import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const experience = {
    role: 'Software Development Intern',
    company: 'Prodigy Infotech',
    location: 'Remote',
    period: 'Sep 2025 — Oct 2025',
    highlights: [
      'Developed 3+ GUI-based modules using Python and Tkinter',
      'Applied object-oriented programming (OOP) principles and debugging techniques to improve code structure',
      'Improved UI responsiveness and implemented clean coding practices',
      'Used Git and GitHub for version control and collaboration',
    ],
  };

  return (
    <section id="experience" className="py-28 sm:py-36 grid-pattern relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
            04 — Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden sm:block" />

          <div className="relative sm:pl-16 group">
            <div className="absolute left-4 top-8 w-4 h-4 rounded-full border-2 border-indigo-500 bg-slate-900 hidden sm:block">
              <div className="absolute inset-1 rounded-full bg-indigo-500 animate-pulse" />
            </div>

            <div className="p-7 sm:p-9 rounded-2xl border border-slate-700/60 bg-slate-800/50 hover:border-indigo-500/40 transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-5 mb-7">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{experience.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <FiBriefcase size={14} className="text-indigo-400" />
                      {experience.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={14} className="text-indigo-400" />
                      {experience.location}
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/15 text-indigo-300 text-sm font-medium border border-indigo-500/20">
                  <FiCalendar size={14} />
                  {experience.period}
                </span>
              </div>

              <ul className="space-y-4">
                {experience.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
