import { motion } from 'framer-motion'
import { useState } from 'react'
import { skillCategories } from '../data/skills'
import { fadeUp, stagger } from '../hooks/useReveal'

export default function Stack() {
  const [active, setActive] = useState(skillCategories[0].id)
  const current = skillCategories.find((c) => c.id === active)

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.p variants={fadeUp} className="section-eyebrow mb-2">stack & toolbox</motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Tecnologias que eu <span className="text-gradient">amo</span> usar
          </motion.h2>
          <motion.p variants={fadeUp} className="text-kawaii-rose/75 text-lg">
            Backend, frontend, dados, DevOps e qualidade — tudo conectado por boas práticas.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              data-cursor="hover"
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c.id
                  ? 'text-white shadow-glow-pink'
                  : 'text-kawaii-rose/70 hover:text-white glass'
              }`}
            >
              {active === c.id && (
                <motion.span
                  layoutId="stack-pill"
                  className="absolute inset-0 rounded-full bg-kawaii-gradient"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <span>{c.emoji}</span>
                {c.title}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {current.skills.map((s, i) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass rounded-2xl p-5 relative overflow-hidden"
              data-cursor="hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${current.color} flex items-center justify-center text-white text-xl shadow-md`}>
                  <s.icon />
                </div>
                <div>
                  <div className="font-semibold text-white">{s.name}</div>
                  <div className="text-xs text-kawaii-rose/60">{s.level}% domínio</div>
                </div>
              </div>
              <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${current.color}`}
                />
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
