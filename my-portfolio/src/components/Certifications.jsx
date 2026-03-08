import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { certifications } from '../data/certifications';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="py-28 sm:py-36 grid-pattern relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
            06 — Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications & Courses</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-6 rounded-2xl border border-slate-700/60 bg-slate-800/50 hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-2xl">{cert.icon}</span>
                <HiOutlineBadgeCheck className="text-emerald-400" size={20} />
              </div>
              <h3 className="text-white text-sm font-semibold mb-2.5 group-hover:text-indigo-300 transition-colors duration-300 leading-snug">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-xs">
                {cert.issuer} · {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
