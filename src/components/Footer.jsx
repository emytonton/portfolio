import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { profile } from '../data/profile'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kawaii-pink/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-kawaii-pink/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-script text-4xl text-gradient mb-2"
            >
              Vamos criar juntos?
            </motion.h3>
            <p className="text-kawaii-rose/70 max-w-md">
              Disponível para projetos full-stack e oportunidades remotas no Brasil ou internacionais.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SocialLink href={profile.github} label="GitHub"><FaGithub /></SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn"><FaLinkedin /></SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email"><FaEnvelope /></SocialLink>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-kawaii-rose/60">
          <p>© {new Date().getFullYear()} {profile.fullName}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            Feito com <FaHeart className="text-kawaii-pink animate-pulse" /> + React 
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -4, scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-kawaii-rose hover:text-white hover:shadow-glow-pink transition-all"
      data-cursor="hover"
    >
      {children}
    </motion.a>
  )
}
