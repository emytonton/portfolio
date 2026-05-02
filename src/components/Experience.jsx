import { motion } from 'framer-motion'
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa'
import { experiences } from '../data/experiences'
import { fadeUp, stagger } from '../hooks/useReveal'

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-kawaii-lilac/10 blur-3xl rounded-full" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p variants={fadeUp} className="section-eyebrow mb-2">experiência profissional</motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Onde eu já <span className="text-gradient">construí</span> coisas legais
          </motion.h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-kawaii-pink/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, index }) {
  const isLeft = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-start ${isLeft ? '' : 'md:[direction:rtl]'}`}
    >
      {/* Dot */}
      <motion.div
        whileHover={{ scale: 1.4 }}
        className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-kawaii-gradient shadow-glow-pink ring-4 ring-kawaii-bg z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-kawaii-pink"
        />
      </motion.div>

      <div className={`pl-14 md:pl-0 [direction:ltr] ${isLeft ? 'md:text-right md:pr-10' : 'md:pl-10 md:col-start-2'}`}>
        <span className="chip mb-2">{exp.period}</span>
        <h3 className="font-display font-bold text-2xl text-white mt-2">{exp.role}</h3>
        <p className="text-gradient font-semibold text-base mt-1">{exp.company}</p>
        <p className="text-xs uppercase tracking-wider text-kawaii-rose/60 mt-1">{exp.location}</p>
      </div>

      <div className={`pl-14 md:pl-0 [direction:ltr] ${isLeft ? 'md:pl-10' : 'md:pr-10 md:col-start-1 md:row-start-1 md:text-right'}`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="glass rounded-3xl p-6 relative overflow-hidden"
          data-cursor="hover"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-kawaii-pink/10 blur-3xl rounded-full" />
          <div className="relative">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-kawaii-gradient flex items-center justify-center text-white">
                <FaBriefcase />
              </div>
              <p className="text-kawaii-rose/85 text-sm leading-relaxed">{exp.summary}</p>
            </div>
            <ul className="space-y-2 mt-4">
              {exp.bullets.map((b, k) => (
                <motion.li
                  key={k}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: k * 0.05 }}
                  className="flex items-start gap-2 text-sm text-kawaii-rose/80"
                >
                  <FaCheckCircle className="text-kawaii-pink mt-0.5 shrink-0" />
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {exp.stack.map((t) => (
                <span key={t} className="chip !text-[10px] !py-0.5">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
