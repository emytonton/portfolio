import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function Particles({ count = 28, className = '' }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: 0.4 + Math.random() * 1.4,
        d: 6 + Math.random() * 10,
        delay: Math.random() * 4,
        kind: Math.random() > 0.7 ? 'star' : 'dot'
      })),
    [count]
  )

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {items.map((p) => (
        <motion.span
          key={p.id}
          className="absolute"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -10, 0],
            opacity: [0.2, 0.95, 0.2]
          }}
          transition={{ duration: p.d, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        >
          {p.kind === 'star' ? (
            <svg width={10 * p.s} height={10 * p.s} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.4L12 16.6 5.7 21l2.3-7.4-6-4.4h7.6L12 2z"
                fill="#ffd1e8"
              />
            </svg>
          ) : (
            <span
              className="block rounded-full"
              style={{
                width: 4 * p.s,
                height: 4 * p.s,
                background: 'radial-gradient(circle, #ffd1e8, #c8a2ff)',
                boxShadow: '0 0 8px rgba(255,209,232,0.8)'
              }}
            />
          )}
        </motion.span>
      ))}
    </div>
  )
}
