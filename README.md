<div align="center">

# 🌸 Emilly Paiva — Portfólio

### Software Engineer ·  Full-Stack Developer

*Construindo experiências digitais com código limpo, arquitetura sólida e um toque de criatividade.*

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.5-ff0080?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-c8a2ff?style=for-the-badge)](https://github.com/darkroomengineering/lenis)

</div>

---

## ✨ Sobre o Projeto

Portfólio pessoal moderno com identidade visual com paleta em rosa, lilás e branco, glassmorphism, partículas flutuantes, blobs animados e microinterações em **toda** a navegação. O objetivo foi entregar algo com nível visual de portfólios premiados (Awwwards / Dribbble) sem abrir mão de **performance**, **acessibilidade** e **boas práticas de código**.

> Construído como peça de currículo viva: cada animação, cada token de design e cada componente foram pensados para mostrar fluência em React moderno, design system, animação web e arquitetura frontend.

## 🌷 Destaques Visuais

| Recurso | Implementação |
|---------|---------------|
| 🎀 **Loading screen** | Flor girando + barra de progresso + sparkles aleatórias |
| 🖱️ **Cursor customizado** | Halo rosa com spring physics + escala em hover |
| 🌊 **Smooth scroll** | Lenis com easing suave e lerp configurado |
| 📊 **Scroll progress bar** | Barra superior gradiente que cresce com o scroll |
| 💫 **Hero parallax** | useScroll + useTransform com fade out na saída |
| 🪐 **Orbital rings** | Anéis rotacionando em direções opostas com emojis flutuando |
| 🌸 **Glass cards flutuantes** | 3 cards com `y: [0, -12, 0]` em loops dessincronizados |
| 🎨 **Stack interativo** | 6 categorias com `layoutId` pill animation + barras com shimmer |
| ⏱️ **Timeline animada** | Linha gradiente que cresce conforme `scrollYProgress` |
| 🛍️ **Project cards** | Thumbnail com emoji flutuante + sparkles + hover overlay |
| 📈 **GitHub heatmap** | Grid 7×30 com células animadas e hover zoom |
| 🌷 **Mobile drawer** | Menu fullscreen com staggered entrance |

## 🧩 Stack Técnica

### Core
- **[React 18](https://react.dev)** — biblioteca UI com Suspense, automatic batching e concurrent features
- **[Vite 5](https://vitejs.dev)** — bundler ultra rápido com HMR instantâneo
- **JavaScript (ES2022+)** com JSX — código limpo e moderno

### Styling & Design
- **[TailwindCSS 3](https://tailwindcss.com)** — utility-first CSS com **design system custom**
  - Paleta `kawaii.*` (pink, lilac, rose, purple, cream, sparkle)
  - Shadows custom (`kawaii`, `kawaii-lg`, `glow-pink`, `glow-lilac`, `inner-glow`)
  - 8+ keyframes (`float`, `sparkle`, `shimmer`, `blob`, `wiggle`, `gradient`, `spin-slow`)
  - Backgrounds gradientes (`kawaii-gradient`, `mesh`, `glass`)
- **Tipografia** via Google Fonts:
  - `Quicksand` (display) · `Plus Jakarta Sans` (body) · `Caveat` (script ✨)

### Animation
- **[Framer Motion 11](https://www.framer.com/motion)** — animações declarativas, springs, layout animations, scroll-driven
- **[Lenis](https://github.com/darkroomengineering/lenis)** — smooth scroll buttery-smooth com physics
- ~60 animações orquestradas (entrance, parallax, hover, infinite loops)

### Iconografia
- **[React Icons](https://react-icons.github.io/react-icons)** — `Si*`, `Fa*`, `Hi*` (Simple Icons, Font Awesome, Heroicons)

## 📁 Estrutura do Projeto

```
portifolio/
├── public/
│   └── favicon.svg              # Favicon kawaii customizado
├── src/
│   ├── components/
│   │   ├── About.jsx            # Bio + cards com hover halo
│   │   ├── Blobs.jsx            # Blobs animados com border-radius morphing
│   │   ├── Contact.jsx          # Formulário + info de contato
│   │   ├── CustomCursor.jsx     # Cursor com spring physics
│   │   ├── Experience.jsx       # Timeline alternada esquerda/direita
│   │   ├── Footer.jsx           # Links sociais + créditos
│   │   ├── GitHubStats.jsx      # Contadores animados + heatmap
│   │   ├── Hero.jsx             # Hero com orb orbital + parallax
│   │   ├── LoadingScreen.jsx    # Splash de entrada
│   │   ├── Navbar.jsx           # Nav glass + drawer mobile
│   │   ├── Particles.jsx        # Partículas e estrelas flutuantes
│   │   ├── Projects.jsx         # Grid de 9 projetos do GitHub
│   │   ├── ScrollProgress.jsx   # Barra de progresso superior
│   │   ├── Stack.jsx            # Tabs de tecnologias com barras
│   │   └── Timeline.jsx         # Trajetória com scroll-driven line
│   ├── data/
│   │   ├── experiences.js       # FASTEF, RM Mineração, Colonymon
│   │   ├── profile.js           # Bio, contatos, highlights
│   │   ├── projects.js          # Curadoria dos 9 melhores projetos
│   │   ├── skills.js            # 6 categorias de habilidades
│   │   └── timeline.js          # Marcos da carreira
│   ├── hooks/
│   │   ├── useReveal.js         # Variants reutilizáveis (fadeUp, scaleIn, stagger)
│   │   └── useSmoothScroll.js   # Lenis integration
│   ├── App.jsx                  # Composição de seções
│   ├── main.jsx                 # Entry point + StrictMode
│   └── index.css                # Tailwind + utilities customizadas
├── index.html                   # Meta tags + fonts preconnect
├── tailwind.config.js           # Design tokens kawaii
├── vite.config.js               # Vite + React plugin
├── postcss.config.js            # Tailwind + autoprefixer
└── package.json
```

## 🚀 Como Rodar Localmente

### Pré-requisitos
- **Node.js** 18.18+ ou 20.9+
- **npm** 9+ (ou pnpm/yarn)

### Instalação

```bash
# Clonar
git clone https://github.com/emytonton/portfolio.git
cd portfolio

# Instalar dependências
npm install

# Rodar em modo dev (porta 5173)
npm run dev

# Build de produção
npm run build

# Preview do build localmente
npm run preview
```

A aplicação abre automaticamente em `http://localhost:5173`. Hot Module Reload está habilitado — qualquer alteração reflete na hora.



## ♿ Acessibilidade

- `aria-label` em todos os links de ícone (social, navegação)
- Foco visível preservado em inputs e botões
- Contraste AA em todos os textos (validado em WCAG)
- Cursor customizado **desabilitado** em telas mobile (`@media (max-width: 768px)`)
- Estrutura semântica (`<section>`, `<nav>`, `<main>`, `<footer>`)




## 💌 Contato

<div align="center">

**Emilly Paiva Belo**
Software Engineer · Quixadá, Ceará 🇧🇷

[![Email](https://img.shields.io/badge/Email-emillypaiva3260%40gmail.com-ff8ec7?style=flat-square&logo=gmail&logoColor=white)](mailto:emillypaiva3260@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-emytonton-1a1322?style=flat-square&logo=github)](https://github.com/emytonton)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-emillypaivabelo-c8a2ff?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/emillypaivabelo)

</div>


---

<div align="center">

*Feito com 💖 e ~60 animações em Framer Motion por **Emilly Paiva**.*

</div>
