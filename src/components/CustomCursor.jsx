import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { damping: 25, stiffness: 320, mass: 0.4 })
  const sy = useSpring(y, { damping: 25, stiffness: 320, mass: 0.4 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(max-width: 768px)').matches) return
    setVisible(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onOver = (e) => {
      const t = e.target
      if (t.closest('a, button, [data-cursor="hover"]')) setHovering(true)
    }
    const onOut = (e) => {
      const t = e.target
      if (t.closest('a, button, [data-cursor="hover"]')) setHovering(false)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
    }
  }, [x, y])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[90] mix-blend-screen"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          animate={{ scale: hovering ? 1.6 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="-translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-kawaii-pink/70"
          style={{ boxShadow: '0 0 20px rgba(255,142,199,0.6)' }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[91]"
        style={{ x, y }}
      >
        <motion.div
          animate={{ scale: hovering ? 0.4 : 1 }}
          className="-translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-kawaii-rose"
          style={{ boxShadow: '0 0 12px rgba(255,209,232,0.9)' }}
        />
      </motion.div>
    </>
  )
}
