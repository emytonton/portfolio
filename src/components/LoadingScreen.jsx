import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1700
    let raf
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / duration)
      setProgress(Math.round(t * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 350)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-kawaii-bg"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="absolute inset-0 bg-mesh opacity-60" />
          <Sparkles />

          <motion.div
            initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            <div className="relative w-28 h-28">
              <motion.div
                className="absolute inset-0 rounded-full bg-kawaii-gradient blur-2xl opacity-70"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-kawaii-gradient flex items-center justify-center text-5xl shadow-glow-pink"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                <span className="-rotate-[var(--r,0)]">🌸</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-display font-bold text-gradient mb-3"
          >
            Emilly Paiva
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-script text-xl text-kawaii-rose mb-6"
          >
            preparando algo especial...
          </motion.p>

          <div className="relative w-64 h-1.5 rounded-full overflow-hidden bg-white/5 border border-white/10">
            <motion.div
              className="h-full bg-kawaii-gradient"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="mt-3 text-xs tracking-[0.3em] text-kawaii-rose/70">{progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Sparkles() {
  const items = Array.from({ length: 18 })
  return (
    <div className="absolute inset-0 pointer-events-none">
      {items.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-kawaii-rose"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px #ffd1e8'
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1.2, 0.6] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
    </div>
  )
}
