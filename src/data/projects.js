export const projects = [
  {
    id: 'decideai',
    title: 'DecideAí — Tomada de Decisão',
    tagline: 'App social que elimina a fadiga de decisão',
    description: 'Aplicação para auxílio na tomada de decisões em grupo ou solo. Backend escalável com Socket.io para tempo real e AWS S3 para mídia.',
    highlights: [
      'Arquitetura DDD + Clean Architecture',
      'Real-time com Socket.io',
      'Upload e CDN com AWS S3',
      'Frontend nativo em Kotlin'
    ],
    tech: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Socket.io', 'AWS S3', 'Kotlin'],
    repo: 'https://github.com/emytonton/DecideAi-Backend',
    demo: 'https://github.com/emytonton/DecideAi-Frontend',
    featured: true,
    accent: 'from-kawaii-pink via-kawaii-purple to-kawaii-lilac',
    emoji: '🎲',
    year: '2026'
  },
  {
    id: 'labirinto',
    title: 'Labirinto do Saber',
    tagline: 'Desktop educacional com Electron',
    description: 'Aplicativo desktop para auxílio à alfabetização, desenvolvido com React e Electron. Foco em experiência educacional para crianças e pessoas neurodivergentes.',
    highlights: [
      'React + Electron desktop',
      'UX adaptada para alfabetização',
      'Integração com backend dedicado'
    ],
    tech: ['React', 'Electron', 'JavaScript', 'Node.js'],
    repo: 'https://github.com/emytonton/LabirintoDoSaber',
    demo: 'https://github.com/emytonton/LabirintoDoSaber-FrontEnd',
    featured: false,
    accent: 'from-kawaii-pink to-kawaii-lilac',
    emoji: '🧩',
    year: '2026'
  },
  {
    id: 'portfolio',
    title: 'Portfólio',
    tagline: 'O site que você está navegando ✨',
    description: 'Portfólio pessoal moderno com estética  em rosa e lilás. Animações fluidas, smooth scroll, glassmorphism e microinterações em todo o site.',
    highlights: [
      'React 18 + Vite + TailwindCSS',
      'Framer Motion + Lenis smooth scroll',
      'Cursor customizado e partículas animadas',
      'Design system próprio em tons kawaii'
    ],
    tech: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'Lenis'],
    repo: 'https://github.com/emytonton/portfolio',
    demo: null,
    featured: true,
    accent: 'from-kawaii-rose via-kawaii-pink to-kawaii-lilac',
    emoji: '🌸',
    year: '2026'
  },
  {
    id: 'accounting',
    title: 'Accounting Office',
    tagline: 'Sistema completo para escritório contábil',
    description: 'Plataforma full-stack para gestão de escritório de contabilidade. Em desenvolvimento ativo, com foco em organização documental, clientes e processos contábeis.',
    highlights: [
      'Em desenvolvimento — fullstack',
      'Backend em TypeScript',
      'Frontend web responsivo',
      'Foco em produtividade contábil'
    ],
    tech: ['TypeScript', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/emytonton/Accounting-office-Backend',
    demo: 'https://github.com/emytonton/Accounting-office-FrontEnd',
    featured: false,
    status: 'Em desenvolvimento',
    accent: 'from-kawaii-lilac via-kawaii-purple to-kawaii-pink',
    emoji: '📊',
    year: '2026'
  },
  {
    id: 'jornal-ufc',
    title: 'Jornal UFC',
    tagline: 'Plataforma de notícias universitárias',
    description: 'Sistema completo para o jornal universitário da UFC, com API robusta em TypeScript e frontend dedicado para publicação e leitura de matérias.',
    highlights: [
      'API REST em TypeScript',
      'Frontend web em JavaScript',
      'Gestão de publicações e autores',
      'Projeto acadêmico em produção'
    ],
    tech: ['TypeScript', 'Node.js', 'JavaScript', 'API REST'],
    repo: 'https://github.com/emytonton/JORNAL-UFC-API',
    demo: 'https://github.com/emytonton/JORNAL-UFC-FRONTEND',
    featured: false,
    accent: 'from-kawaii-purple to-kawaii-pink',
    emoji: '📰',
    year: '2026'
  },
  {
    id: 'pokedex',
    title: 'Pokédex Mobile',
    tagline: 'Mobile nativo moderno em Kotlin',
    description: 'Pokédex completa em Kotlin com Jetpack Compose, MVVM, Retrofit e Coroutines. Carregamento assíncrono de imagens com Coil e state management moderno.',
    highlights: [
      'Jetpack Compose + MVVM',
      'Retrofit + Coroutines',
      'State management reativo',
      'Imagens lazy com Coil'
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Coroutines'],
    repo: 'https://github.com/emytonton/PokedexMobile',
    demo: null,
    featured: false,
    accent: 'from-kawaii-pink to-kawaii-rose',
    emoji: '🎮',
    year: '2026'
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking API',
    tagline: 'Reservas com autenticação e CRUD completo',
    description: 'API RESTful para um sistema de booking de hospedagens. Recursos de autenticação de usuário, CRUD de casas e gerenciamento de reservas.',
    highlights: [
      'Autenticação de usuários',
      'CRUD completo de casas',
      'Sistema de reservas',
      'Stack Node.js + Express'
    ],
    tech: ['Node.js', 'Express', 'JavaScript', 'API REST'],
    repo: 'https://github.com/emytonton/Hotel-Booking-API',
    demo: null,
    featured: false,
    accent: 'from-kawaii-rose to-kawaii-purple',
    emoji: '🏨',
    year: '2025'
  },
  {
    id: 'codex',
    title: 'Codex — API de Leituras',
    tagline: 'Gestão pessoal de livros e leituras',
    description: 'API para gerenciar leituras, livros lidos, em andamento e wishlists. Foco em organização de hábito de leitura, interação com grupo de leituas e chat dentro da aplicação.',
    highlights: [
      'CRUD completo de livros',
      'Estados de leitura',
      'Persistência relacional'
    ],
    tech: ['Node.js', 'JavaScript', 'API REST'],
    repo: 'https://github.com/emytonton/Codex-API',
    demo: null,
    featured: false,
    accent: 'from-kawaii-rose to-kawaii-purple',
    emoji: '📚',
    year: '2025'
  },
  {
    id: 'goshopp',
    title: 'GoShopp — Marketplace API',
    tagline: 'Marketplace serverless com Clean Architecture',
    description: 'API RESTful para um marketplace, desenvolvida com NestJS, Prisma e MongoDB. Com Clean Architecture, testes unitários com Jest, autenticação JWT/Bcrypt e deploy serverless na Vercel.',
    highlights: [
      'Clean Architecture + DDD em camadas isoladas',
      'Auth segura com JWT e bcrypt',
      'Testes unitários com Jest',
      'Deploy serverless na Vercel'
    ],
    tech: ['NestJS', 'TypeScript', 'Prisma', 'MongoDB', 'JWT', 'Jest', 'Vercel'],
    repo: 'https://github.com/emytonton/GoShopp-BackEnd',
    demo: null,
    featured: true,
    accent: 'from-kawaii-pink via-kawaii-rose to-kawaii-lilac',
    emoji: '🛍️',
    year: '2026'
  }
]
