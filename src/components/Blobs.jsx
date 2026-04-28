import { motion } from 'framer-motion'

export default function Blobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-kawaii-pink/30 blur-3xl animate-blob"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-[480px] h-[480px] bg-kawaii-lilac/25 blur-3xl animate-blob"
        animate={{ x: [0, -50, 20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-kawaii-purple/20 blur-3xl animate-blob"
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
