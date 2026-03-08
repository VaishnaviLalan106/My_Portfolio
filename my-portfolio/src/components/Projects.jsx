import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '../data/projects';
import { FiChevronRight } from 'react-icons/fi';

function ProjectCard({ project, index, isInView }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-2xl border border-slate-700/60 bg-slate-800/50 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-900/20"
      whileHover={{ y: -6 }}
    >
      {/* Top gradient accent */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

      <div className="p-7 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{project.icon}</span>
              <span className="px-3 py-1.5 text-xs font-semibold rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                {project.type}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1.5">{project.subtitle}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-slate-700/60 text-slate-300 border border-slate-600/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-3">
          {(expanded ? project.highlights : project.highlights.slice(0, 3)).map(
            (h, i) => (
              <motion.li
                key={i}
                initial={expanded && i >= 3 ? { opacity: 0, height: 0 } : {}}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
              >
                <FiChevronRight className="mt-0.5 text-indigo-400 flex-shrink-0" size={14} />
                <span>{h}</span>
              </motion.li>
            )
          )}
        </ul>

        {project.highlights.length > 3 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors cursor-pointer"
          >
            {expanded ? '← Show less' : `+${project.highlights.length - 3} more`}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-28 sm:py-36 grid-pattern relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
            03 — Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What I've Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
