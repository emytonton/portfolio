import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import Particles from './Particles'
import Blobs from './Blobs'
import { profile } from '../data/profile'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <Blobs />
      <Particles count={36} />

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kawaii-pink opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-kawaii-pink" />
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-kawaii-rose">
               I build ideas into reality.
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.7 }}
              className="font-script text-3xl md:text-4xl text-gradient-soft mb-2"
            >
              Oi, eu sou a
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight mb-4"
            >
              <span className="text-gradient">Emilly</span>
              <br />
              <span className="text-white relative">
                Paiva
                <motion.span
                  className="absolute -right-8 -top-3 text-3xl"
                  animate={{ rotate: [0, 14, -8, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.7 }}
              className="text-xl md:text-2xl text-kawaii-rose/90 mb-3 font-medium"
            >
              Software Engineer · <span className="text-gradient font-semibold">Full-Stack</span>
            </motion.div>

           <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.7 }}
            className="text-kawaii-rose/75 max-w-xl text-base md:text-lg leading-relaxed mb-8"
          >
            {profile.tagline}
          </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.7 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-kawaii" data-cursor="hover">
                <HiSparkles /> Ver projetos
              </a>
              <a href="#contact" className="btn-ghost" data-cursor="hover">
                Entrar em contato
              </a>
              <div className="flex items-center gap-2 ml-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-kawaii-rose hover:text-white hover:shadow-glow-pink transition-all"
                  data-cursor="hover"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-kawaii-rose hover:text-white hover:shadow-glow-lilac transition-all"
                  data-cursor="hover"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 max-w-2xl"
            >
              {profile.highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{h.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-kawaii-rose/70">{h.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[460px] hidden lg:flex items-center justify-center">
            <HeroOrb />
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.7 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-kawaii-rose/60 hover:text-kawaii-pink transition"
          data-cursor="hover"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <FaArrowDown />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  )
}

function HeroOrb() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[420px] h-[420px] rounded-full border border-kawaii-pink/30"
        style={{ borderStyle: 'dashed' }}
      >
        {['🌸', '✨', '💫', '🌷', '⭐'].map((e, i) => (
          <span
            key={i}
            className="absolute text-2xl"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 72}deg) translateY(-210px) rotate(-${i * 72}deg)`
            }}
          >
            {e}
          </span>
        ))}
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[320px] h-[320px] rounded-full border border-kawaii-lilac/40"
      />

      {/* Core orb */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-64 h-64"
      >
        <div className="absolute inset-0 rounded-full bg-kawaii-gradient blur-3xl opacity-70" />
        <div className="absolute inset-3 rounded-full bg-kawaii-gradient shadow-glow-pink flex items-center justify-center text-7xl">
          <motion.span animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 6, repeat: Infinity }}>
            🌕
          </motion.span>
        </div>
        <div className="absolute -inset-2 rounded-full border border-kawaii-rose/40" />
      </motion.div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-6 -left-2 glass-strong rounded-2xl px-4 py-3 shadow-kawaii"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-kawaii-pink/30 flex items-center justify-center">⚡</div>
          <div>
            <div className="text-xs text-kawaii-rose/80">Latency</div>
            <div className="text-sm font-bold text-white">12ms</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 -right-2 glass-strong rounded-2xl px-4 py-3 shadow-kawaii"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-kawaii-lilac/30 flex items-center justify-center">🚀</div>
          <div>
            <div className="text-xs text-kawaii-rose/80">Deploy</div>
            <div className="text-sm font-bold text-white">passing</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
        className="absolute top-1/2 -right-6 glass-strong rounded-full px-3 py-1.5 text-xs text-kawaii-rose"
      >
        TypeScript ✨
      </motion.div>
    </div>
  )
}
