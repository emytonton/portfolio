import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa'
import { profile } from '../data/profile'
import { fadeUp, stagger } from '../hooks/useReveal'

const cards = [
  {
    icon: FaCode,
    title: 'Backend que dura',
    text: 'APIs robustas em Node.js, microsserviços, Clean Architecture e SOLID.',
    color: 'from-kawaii-pink to-kawaii-rose'
  },
  {
    icon: FaHeart,
    title: 'Frontend que encanta',
    text: 'Interfaces modernas, animadas e intuitivas, transformando ideias em experiências memoráveis.',
    color: 'from-kawaii-purple to-kawaii-pink'
  },
  {
    icon: FaGraduationCap,
    title: 'Engenharia de Software · UFC',
    text: 'Bolsista no Meu Monitor, bolsista de extensão no colonymon.',
    color: 'from-kawaii-lilac to-kawaii-purple'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Quixadá, Ceará',
    text: 'Trabalho remoto-first, em times ágeis, com inglês técnico no dia a dia.',
    color: 'from-kawaii-rose to-kawaii-pink'
  }
]

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-kawaii-pink/10 blur-3xl rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p variants={fadeUp} className="section-eyebrow mb-2">
            sobre mim
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Construo produtos com <span className="text-gradient">cuidado</span> e arquitetura sólida.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-kawaii-rose/80 text-lg leading-relaxed">
            {profile.bio}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden"
              data-cursor="hover"
            >
              <div className={`absolute -inset-1 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
              <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white text-xl shadow-glow-pink mb-4`}>
                <c.icon />
              </div>
              <h3 className="relative font-display font-bold text-lg text-white mb-2">{c.title}</h3>
              <p className="relative text-sm text-kawaii-rose/75 leading-relaxed">{c.text}</p>

              <motion.div
                aria-hidden
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-kawaii-pink/10 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
