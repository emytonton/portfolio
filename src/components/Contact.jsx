import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { profile } from '../data/profile'
import { fadeUp, stagger } from '../hooks/useReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Olá Emilly! — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-kawaii-pink/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-kawaii-lilac/15 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.p variants={fadeUp} className="section-eyebrow mb-2">contato</motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Vamos <span className="text-gradient">conversar</span> ✨
          </motion.h2>
          <motion.p variants={fadeUp} className="text-kawaii-rose/75 text-lg">
            Aberta a oportunidades remotas, freelas, parcerias em projetos open-source e bate-papos sobre arquitetura.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-strong rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-kawaii-pink/20 blur-3xl rounded-full" />
            <h3 className="font-display font-bold text-2xl text-white mb-6">Onde me encontrar</h3>
            <ul className="space-y-4 relative">
              <ContactRow icon={FaEnvelope} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={FaPhone} label="Telefone" value={profile.phone} href={`tel:${profile.phone.replace(/\D/g, '')}`} />
              <ContactRow icon={FaMapMarkerAlt} label="Localização" value={profile.location} />
              <ContactRow icon={FaGithub} label="GitHub" value="@emytonton" href={profile.github} />
              <ContactRow icon={FaLinkedin} label="LinkedIn" value="emillypaivabelo" href={profile.linkedin} />
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 relative">
              <p className="text-sm text-kawaii-rose/70 leading-relaxed">
                Vamos<span className="text-kawaii-pink font-semibold"> conversar?</span> 
              </p>
            </div>
          </motion.div>

          
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-3xl p-8 space-y-5 relative"
          >
            <div>
              <label className="text-xs uppercase tracking-wider text-kawaii-rose/70 mb-2 block">Seu nome</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Como devo te chamar?"
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-kawaii-pink/60 focus:bg-white/10 outline-none text-white placeholder:text-kawaii-rose/40 transition-all"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-kawaii-rose/70 mb-2 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="voce@email.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-kawaii-pink/60 focus:bg-white/10 outline-none text-white placeholder:text-kawaii-rose/40 transition-all"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-kawaii-rose/70 mb-2 block">Mensagem</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Sobre o que vamos conversar? ✨"
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-kawaii-pink/60 focus:bg-white/10 outline-none text-white placeholder:text-kawaii-rose/40 transition-all resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              data-cursor="hover"
              className="btn-kawaii w-full !py-4"
            >
              <FaPaperPlane /> {sent ? 'Abrindo seu email...' : 'Enviar mensagem'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const Wrapper = href ? 'a' : 'div'
  const props = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {}
  return (
    <li>
      <Wrapper
        {...props}
        data-cursor={href ? 'hover' : undefined}
        className="flex items-center gap-4 group"
      >
        <div className="w-11 h-11 rounded-xl bg-kawaii-pink/10 border border-kawaii-pink/20 flex items-center justify-center text-kawaii-pink group-hover:bg-kawaii-gradient group-hover:text-white group-hover:shadow-glow-pink transition-all">
          <Icon />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-kawaii-rose/60">{label}</div>
          <div className="text-sm font-medium text-white">{value}</div>
        </div>
      </Wrapper>
    </li>
  )
}
