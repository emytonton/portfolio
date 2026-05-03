import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'
import { projects } from '../data/projects'
import { fadeUp, stagger } from '../hooks/useReveal'

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute -top-20 right-1/4 w-[420px] h-[420px] bg-kawaii-pink/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-kawaii-lilac/10 blur-3xl rounded-full" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="max-w-2xl mb-12"
        >
          <motion.p variants={fadeUp} className="section-eyebrow mb-2">projetos selecionados</motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Coisas que eu <span className="text-gradient">construí</span> recentemente
          </motion.h2>
          <motion.p variants={fadeUp} className="text-kawaii-rose/75 text-lg">
            Uma seleção de produtos, APIs e experiências mobile — do estudo até a produção.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group relative glass rounded-3xl overflow-hidden flex flex-col h-full"
      data-cursor="hover"
    >
      {/* Thumbnail */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-0 bg-mesh opacity-50 mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-7xl drop-shadow-2xl"
            animate={{ y: [0, -8, 0], rotate: [0, 6, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: index * 0.3 }}
          >
            {project.emoji}
          </motion.span>
        </div>
        {/* sparkles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, boxShadow: '0 0 6px white' }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.4, 0.5] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}

        {project.featured && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 chip !bg-white/20 !border-white/30 !text-white">
            <FaStar className="text-kawaii-cream" /> destaque
          </span>
        )}
        {project.status && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 chip !bg-kawaii-purple/40 !border-white/40 !text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-kawaii-cream animate-pulse" />
            {project.status}
          </span>
        )}
        <span className="absolute top-3 right-3 chip !bg-white/15 !border-white/25 !text-white">{project.year}</span>

        <motion.div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-kawaii-bg via-kawaii-bg/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
        <p className="text-sm text-gradient-soft mt-1">{project.tagline}</p>
        <p className="text-sm text-kawaii-rose/75 mt-3 leading-relaxed">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="text-xs text-kawaii-rose/70 flex items-start gap-2">
              <span className="text-kawaii-pink mt-0.5">✦</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="chip !text-[10px] !py-0.5">{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="chip !text-[10px] !py-0.5">+{project.tech.length - 5}</span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-6 pt-5 border-t border-white/5">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl glass hover:bg-kawaii-pink/15 text-sm text-white transition-colors"
            data-cursor="hover"
          >
            <FaGithub /> Código
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-kawaii-gradient text-sm text-white font-medium hover:shadow-glow-pink transition-all"
              data-cursor="hover"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
