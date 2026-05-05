import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { timeline } from '../data/timeline'
import { fadeUp, stagger } from '../hooks/useReveal'

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="timeline" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p variants={fadeUp} className="section-eyebrow mb-2">trajetória</motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Minha jornada até <span className="text-gradient">aqui</span>
          </motion.h2>
        </motion.div>

        <div ref={ref} className="relative max-w-3xl mx-auto pl-10 md:pl-0">
          {/* Vertical line bg */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />
          {/* Animated progress */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-kawaii-pink via-kawaii-lilac to-kawaii-purple md:-translate-x-1/2"
          />

          <ul className="space-y-12">
            {timeline.map((t, i) => (
              <TimelineItem key={i} item={t} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative md:grid md:grid-cols-2 md:gap-12 items-center`}
    >
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 top-6 z-10">
        <motion.div whileHover={{ scale: 1.4 }} className="relative">
          <div className="w-10 h-10 rounded-full bg-kawaii-gradient flex items-center justify-center text-lg shadow-glow-pink ring-4 ring-kawaii-bg">
            {item.emoji}
          </div>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-kawaii-pink/40"
          />
        </motion.div>
      </div>

      <div className={`pl-16 md:pl-0 ${isLeft ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
        <motion.div whileHover={{ y: -3 }} className="glass rounded-2xl p-5 inline-block max-w-md" data-cursor="hover">
          <span className="chip mb-2">{item.year}</span>
          <h3 className="font-display font-bold text-lg text-white mt-2">{item.title}</h3>
          <p className="text-sm text-kawaii-rose/75 mt-2 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
    </motion.li>
  )
}
