import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactLinks = [
    { icon: FiMail, label: 'Email', value: 'vaishnavilalan@gmail.com', href: 'mailto:vaishnavilalan@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 94816 84827', href: 'tel:+919481684827' },
    { icon: FiMapPin, label: 'Location', value: 'Mysore, Karnataka', href: null },
    { icon: FiGithub, label: 'GitHub', value: 'VaishnaviLalan106', href: 'https://github.com/VaishnaviLalan106' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'vaishnavi-lalan', href: 'https://linkedin.com/in/vaishnavi-lalan-270419310' },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:vaishnavilalan@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 dot-pattern relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
            07 — Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Connect</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              const Wrapper = link.href ? 'a' : 'div';
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <Wrapper
                    {...(link.href ? { href: link.href, target: link.href.startsWith('http') ? '_blank' : undefined, rel: link.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {})}
                    className="flex items-center gap-4 p-5 rounded-xl border border-slate-700/60 bg-slate-800/50 hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-indigo-500/15 text-indigo-400 group-hover:bg-indigo-500/25 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{link.label}</p>
                      <p className="text-sm text-white font-medium">{link.value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 p-7 sm:p-9 rounded-2xl border border-slate-700/60 bg-slate-800/50 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-slate-300 mb-2.5 font-medium">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-slate-300 mb-2.5 font-medium">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm text-slate-300 mb-2.5 font-medium">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm resize-none"
                placeholder="Write your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/30 cursor-pointer"
            >
              <FiSend size={16} />
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-slate-700/50 text-center"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vaishnavi Lalan. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
