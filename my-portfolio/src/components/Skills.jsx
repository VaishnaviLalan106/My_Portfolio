import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-28 sm:py-36 dot-pattern relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
            02 — Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Arsenal</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group p-6 rounded-2xl border border-slate-700/60 bg-slate-800/50 hover:bg-slate-800/80 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-base">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 group-hover:border-indigo-500/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
