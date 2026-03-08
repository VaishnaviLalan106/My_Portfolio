import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 sm:py-36 grid-pattern relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
            01 — About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Computer Science undergraduate with hands-on experience building
              full-stack web applications and AI-powered systems. Skilled in{' '}
              <span className="text-indigo-300 font-medium">React</span>,{' '}
              <span className="text-indigo-300 font-medium">FastAPI</span>,{' '}
              <span className="text-indigo-300 font-medium">PostgreSQL</span>, and{' '}
              <span className="text-indigo-300 font-medium">AI API integration</span>,
              with hands-on experience designing RESTful backend systems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Strong interest in backend architecture, scalable system design,
              and intelligent application development. Passionate about building
              user-focused, production-ready solutions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              {[
                { value: '4+', label: 'Projects Built' },
                { value: '8+', label: 'Certifications' },
                { value: '2027', label: 'Graduating' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-5 rounded-xl border border-slate-700/60 bg-slate-800/50"
                >
                  <p className="text-3xl font-bold text-indigo-400">{stat.value}</p>
                  <p className="text-sm text-slate-400 mt-1.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2"
          >
            <div className="p-7 rounded-2xl border border-slate-700/60 bg-slate-800/50 space-y-1">
              <h3 className="text-white font-semibold text-lg mb-5">Quick Info</h3>
              {[
                { label: 'Name', value: 'Vaishnavi Lalan' },
                { label: 'Location', value: 'Mysore, Karnataka' },
                { label: 'Education', value: 'B.E. Computer Science' },
                { label: 'Focus', value: 'Full Stack + AI' },
              ].map((info) => (
                <div key={info.label} className="flex justify-between items-center py-3 border-b border-slate-700/40 last:border-0">
                  <span className="text-slate-400 text-sm">{info.label}</span>
                  <span className="text-white text-sm font-medium">{info.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
