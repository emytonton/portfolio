import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaCodeBranch, FaStar, FaFire } from 'react-icons/fa'
import { profile } from '../data/profile'
import { fadeUp, stagger } from '../hooks/useReveal'

const stats = [
  { id: 'repos', label: 'Repositórios públicos', value: 30, suffix: '+', icon: FaCodeBranch },
  { id: 'commits', label: 'Commits anuais', value: 600, suffix: '+', icon: FaFire },
  { id: 'languages', label: 'Linguagens dominadas', value: 7, suffix: '', icon: FaStar },
  { id: 'years', label: 'Anos codando', value: 3, suffix: '+', icon: FaGithub }
]

function useCount(target, inView) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const dur = 1400
    let raf
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / dur)
      setN(Math.floor(target * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setN(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])
  return n
}

function StatCard({ stat, inView, index }) {
  const n = useCount(stat.value, inView)
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6, scale: 1.03 }}
      className="relative glass rounded-3xl p-6 overflow-hidden text-center"
      data-cursor="hover"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-kawaii-pink/15 blur-3xl rounded-full" />
      <div className="relative w-12 h-12 mx-auto rounded-2xl bg-kawaii-gradient flex items-center justify-center text-white text-lg shadow-glow-pink mb-4">
        <stat.icon />
      </div>
      <div className="relative font-display font-extrabold text-4xl md:text-5xl text-gradient">
        {n}
        <span className="text-kawaii-pink">{stat.suffix}</span>
      </div>
      <div className="relative text-xs uppercase tracking-[0.2em] text-kawaii-rose/70 mt-2">{stat.label}</div>
    </motion.div>
  )
}

export default function GitHubStats() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])

  return (
    <section id="github" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.p variants={fadeUp} className="section-eyebrow mb-2">github playground</motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Código que vive no <span className="text-gradient">GitHub</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-kawaii-rose/75 text-lg">
            Aprendizados, experimentos, projetos universitários e produção — tudo aberto.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <StatCard key={s.id} stat={s} inView={inView} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 glass-strong rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
          <div className="relative">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Quer ver o código de tudo isso? 💖
            </h3>
            <p className="text-kawaii-rose/80 max-w-xl">
              30+ repositórios públicos: APIs em Node.js, microsserviços em Java, mobile em Kotlin/React Native, frontends em React e Electron.
            </p>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative btn-kawaii whitespace-nowrap"
            data-cursor="hover"
          >
            <FaGithub /> @emytonton
          </a>
        </motion.div>

        {/* Contribution-like grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 glass rounded-3xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-display text-sm tracking-wider uppercase text-kawaii-rose/80">Atividade contínua</h4>
            <div className="flex items-center gap-1.5 text-xs text-kawaii-rose/60">
              menos
              {[0.15, 0.35, 0.6, 0.85].map((o) => (
                <span key={o} className="w-2.5 h-2.5 rounded-sm" style={{ background: `rgba(255,142,199,${o})` }} />
              ))}
              mais
            </div>
          </div>
          <ContribGrid />
        </motion.div>
      </div>
    </section>
  )
}

function ContribGrid() {
  const cells = Array.from({ length: 7 * 30 })
  return (
    <div className="grid grid-rows-7 grid-flow-col auto-cols-fr gap-1">
      {cells.map((_, i) => {
        const intensity = Math.random()
        const color =
          intensity < 0.2
            ? 'rgba(255,209,232,0.06)'
            : intensity < 0.5
            ? 'rgba(255,142,199,0.25)'
            : intensity < 0.8
            ? 'rgba(255,142,199,0.55)'
            : 'rgba(200,162,255,0.85)'
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 30) * 0.01 }}
            whileHover={{ scale: 1.6, zIndex: 5 }}
            className="aspect-square rounded-sm"
            style={{ background: color, boxShadow: intensity > 0.7 ? '0 0 6px rgba(255,142,199,0.5)' : 'none' }}
          />
        )
      })}
    </div>
  )
}
