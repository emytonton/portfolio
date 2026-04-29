import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#experience', label: 'Experiência' },
  { href: '#projects', label: 'Projetos' },
  { href: '#timeline', label: 'Trajetória' },
  { href: '#contact', label: 'Contato' }
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 1])
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(98%,1240px)] transition-all duration-500 ${
          scrolled ? 'top-3' : 'top-6'
        }`}
      >
        <motion.div
          style={{ '--bg-op': bgOpacity }}
          className={`glass-strong rounded-full pl-4 pr-3 py-2.5 flex items-center justify-between gap-3 shadow-kawaii ${
            scrolled ? 'shadow-kawaii-lg' : ''
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group shrink-0" data-cursor="hover">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-9 h-9 rounded-full bg-kawaii-gradient flex items-center justify-center shadow-glow-pink"
            >
              <FaHeart className="text-white text-sm" />
            </motion.div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-script text-xl text-gradient -mb-1">emi</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-kawaii-rose/70">paiva</span>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-0.5 mx-auto">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-3 py-2 text-[13px] text-kawaii-rose/80 hover:text-white rounded-full transition-colors group whitespace-nowrap"
                  data-cursor="hover"
                >
                  <span className="relative z-10">{l.label}</span>
                  <span className="absolute inset-0 rounded-full bg-kawaii-pink/0 group-hover:bg-kawaii-pink/15 transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              className="hidden xl:inline-flex btn-kawaii !py-2 !px-4 !text-[13px] whitespace-nowrap"
              data-cursor="hover"
            >
              Vamos conversar ✨
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex xl:hidden btn-kawaii !py-2 !px-4 !text-[13px]"
              data-cursor="hover"
              aria-label="Contato"
            >
              ✨ Contato
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
              aria-label="Abrir menu"
            >
              <HiMenuAlt4 className="text-kawaii-rose text-xl" />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[60] bg-kawaii-bg/85 backdrop-blur-xl flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-script text-3xl text-gradient">Emilly Paiva</span>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center"
            aria-label="Fechar menu"
          >
            <HiX className="text-kawaii-rose text-xl" />
          </button>
        </div>
        <ul className="flex-1 flex flex-col items-center justify-center gap-5">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: 20 }}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.05 * i }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-display text-gradient-soft hover:text-gradient transition-all"
              >
                {l.label}
              </a>
            </motion.li>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-kawaii mt-6">
            Vamos conversar ✨
          </a>
        </ul>
      </motion.div>
    </>
  )
}
