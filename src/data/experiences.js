export const experiences = [
  {
    id: 'ford-iel',
    role: 'AI Researcher',
    company: 'IEL × Ford Motor Company',
    period: 'Junho 2026 - Atualmente',
    location: 'Pesquisa, Desenvolvimento e Inovação · Indústria Automotiva',
    summary: 'AI Researcher at Ford Motor Company through the IEL Program, contributing to a research project focused on the application of Artificial Intelligence in automotive engineering.',
    bullets: [
      'Developed AI agent tools using Python, Google ADK, and Gemini on Vertex AI, integrating enterprise data sources and automating report generation to replace manual workflows.',
      'Designed agent instructions through prompt engineering and implemented orchestration and tool-routing rules to improve LLM-driven tool selection.',
      'Extended a Retrieval-Augmented Generation (RAG) solution to support broader engineering knowledge retrieval, leveraging PostgreSQL, pgvector, and Gemini embeddings.',
      'Automated data processing pipelines with scheduled execution, logging, and failure alerts, while contributing to cloud migration on Google Cloud Platform (GCP).',
      'Migrated historical data from local file storage to a database-backed architecture and validated system reliability through end-to-end testing.'
    ],
    stack: ['Python', 'Google ADK', 'Gemini', 'Vertex AI', 'RAG', 'PostgreSQL', 'pgvector', 'GCP']
  },
  {
    id: 'fastef',
    role: 'Desenvolvedora Backend Node.js',
    company: 'FASTEF · Lab. Alan Turing (ATLab) × Akiyama',
    period: 'Abril 2026 - Setembro 2026',
    location: 'Pesquisa Aplicada · Biometria',
    summary: 'Pesquisa aplicada em parceria com a Akiyama (referência nacional em biometria e identificação digital). ',
    bullets: [
      'APIs e serviços backend em Node.js + Fastify + TypeScript + Prisma em microsserviços.',
      'Modelagem PostgreSQL, otimização de consultas e integridade relacional.',
      'Comunicação via REST e processamento assíncrono com BullMQ.',
      'Containerização e orquestração com Docker e Kubernetes em cloud.',
      'Observabilidade e tracing distribuído com OpenTelemetry.',
      'Time ágil Scrum, code reviews e inglês técnico no dia a dia.'
    ],
    stack: ['Node.js', 'Fastify', 'TypeScript', 'Prisma', 'PostgreSQL', 'BullMQ', 'Docker', 'Kubernetes', 'OpenTelemetry']
  },
  {
    id: 'rm',
    role: 'Desenvolvedora Full Stack · Estágio',
    company: 'RM Mineração',
    period: 'Dezembro 2025 - Junho 2026',
    location: 'Full-Stack Web',
    summary: 'Aplicações web internas integrando frontend e backend, automação de fluxos e dashboards analíticos.',
    bullets: [
      'Aplicações web com React, TypeScript e Node.js.',
      'APIs REST integrando frontend e backend de forma consistente.',
      'Migração de planilhas para Data Lake e modelagem de dashboards analíticos.',
      'Refatoração de código legado com Clean Code e SOLID.',
      'Automação de fluxos internos e integração de serviços.'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Data Lake', 'Clean Code']
  },
  {
    id: 'colonymon',
    role: 'Bolsista de Desenvolvimento Full Stack',
    company: 'UFC · Projeto Colonymon',
    period: 'Abril 2025 - Janeiro 2026',
    location: 'Apicultura de Precisão · Mobile',
    summary: 'Projeto de apicultura de precisão com aplicação mobile e APIs backend para monitoramento de colmeias.',
    bullets: [
      'Migração crítica do React Native 0.68 → 0.78, com redução de 40% em crashes e +30% no carregamento.',
      'Novas features e telas em React Native + TypeScript a partir de protótipos no Figma.',
      'Rotas de API REST em Node.js para integração fluida com o mobile.',
      'Troubleshooting e bugfix garantindo estabilidade em produção.',
      'Apresentação de artigo técnico nos Encontros Universitários da UFC.'
    ],
    stack: ['React Native', 'TypeScript', 'Node.js', 'Figma', 'Git']
  }
]
