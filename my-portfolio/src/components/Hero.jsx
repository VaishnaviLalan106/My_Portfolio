import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center dot-pattern overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'rgba(99, 102, 241, 0.12)', top: '15%', left: '10%' }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(16, 185, 129, 0.08)', bottom: '10%', right: '5%' }}
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full blur-3xl"
          style={{ background: 'rgba(139, 92, 246, 0.10)', top: '50%', right: '30%' }}
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 rounded-full border border-indigo-500/30 text-indigo-300 text-sm"
          style={{ background: 'rgba(99, 102, 241, 0.1)' }}
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
            Vaishnavi
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl text-slate-400 font-light mb-4"
        >
          Full Stack Developer{' '}
          <span className="text-indigo-400">|</span> AI Enthusiast
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-12"
        >
          <FiMapPin className="text-indigo-400" />
          Mysore, Karnataka
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-14"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-slate-600 hover:border-indigo-500 text-white rounded-xl font-medium transition-all duration-300 hover:bg-slate-800 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: FiGithub, href: 'https://github.com/VaishnaviLalan106', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/vaishnavi-lalan-270419310', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:vaishnavilalan@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3.5 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-indigo-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiOutlineChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
