import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="py-28 sm:py-36 dot-pattern relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
            05 — Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative sm:pl-16"
        >
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent hidden sm:block" />
          <div className="absolute left-4 top-8 w-4 h-4 rounded-full border-2 border-emerald-500 bg-slate-900 hidden sm:block">
            <div className="absolute inset-1 rounded-full bg-emerald-500" />
          </div>

          <div className="p-7 sm:p-9 rounded-2xl border border-slate-700/60 bg-slate-800/50 hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FiBookOpen className="text-emerald-400" size={22} />
                  <h3 className="text-xl font-bold text-white">Bachelor of Engineering (B.E.)</h3>
                </div>
                <p className="text-indigo-300 font-medium text-lg mb-2">Computer Science</p>
                <p className="flex items-center gap-2 text-slate-400 text-sm">
                  <FiMapPin size={14} className="text-emerald-400" />
                  MIT College, Mysore
                </p>
              </div>
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 text-emerald-400 text-sm font-medium border border-emerald-500/20">
                <FiCalendar size={14} />
                2023 — 2027
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
