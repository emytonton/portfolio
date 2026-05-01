import {
  SiJavascript, SiTypescript, SiPython, SiKotlin, SiPostgresql, SiMongodb,
  SiNodedotjs, SiFastify, SiExpress, SiReact, SiTailwindcss, SiPrisma,
  SiDocker, SiKubernetes, SiLinux, SiGit, SiGithubactions, SiOpentelemetry,
  SiJest, SiRedux, SiStyledcomponents, SiFigma, SiInsomnia, SiAndroidstudio,
  SiNestjs, SiBun,
  SiJsonwebtokens
} from 'react-icons/si'
import { FaJava, FaDatabase, FaShieldAlt, FaGraduationCap } from 'react-icons/fa'

export const skillCategories = [
  {
    id: 'backend',
    title: 'Backend',
    emoji: '⚙️',
    color: 'from-kawaii-pink to-kawaii-lilac',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 95 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
      { name: 'Express', icon: SiExpress, level: 88 },
      { name: 'JWT Authentication', icon: SiJsonwebtokens, level: 80 },
      { name: 'TypeScript', icon: SiTypescript, level: 94 },
      { name: 'BullMQ · Microsserviços', icon: FaDatabase, level: 70 }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    emoji: '🌷',
    color: 'from-kawaii-rose to-kawaii-pink',
    skills: [
      { name: 'React.js', icon: SiReact, level: 92 },
      { name: 'React Native', icon: SiReact, level: 88 },
      { name: 'TailwindCSS', icon: SiTailwindcss, level: 90 },
      { name: 'Styled Components', icon: SiStyledcomponents, level: 85 },
      { name: 'Redux · Context API', icon: SiRedux, level: 82 },
      { name: 'JavaScript ES6+', icon: SiJavascript, level: 95 }
    ]
  },
  {
    id: 'data',
    title: 'Bancos & Dados',
    emoji: '🗃️',
    color: 'from-kawaii-lilac to-kawaii-purple',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 90 },
      { name: 'MongoDB · Mongoose', icon: SiMongodb, level: 86 },
      { name: 'Prisma ORM', icon: SiPrisma, level: 90 },
      { name: 'Modelagem & Queries SQL', icon: FaDatabase, level: 88 }
    ]
  },
  {
    id: 'devops',
    title: 'Cloud & DevOps',
    emoji: '🐳',
    color: 'from-kawaii-purple to-kawaii-pink',
    skills: [
      { name: 'Docker', icon: SiDocker, level: 90 },
      { name: 'Kubernetes', icon: SiKubernetes, level: 75 },
      { name: 'Linux · Bash', icon: SiLinux, level: 85 },
      { name: 'Git & GitHub Actions', icon: SiGithubactions, level: 92 },
      { name: 'OpenTelemetry', icon: SiOpentelemetry, level: 78 }
    ]
  },
  {
    id: 'quality',
    title: 'Qualidade & Segurança',
    emoji: '🛡️',
    color: 'from-kawaii-pink to-kawaii-purple',
    skills: [
      { name: 'Jest · TDD', icon: SiJest, level: 88 },
      { name: 'Clean Architecture · SOLID', icon: FaShieldAlt, level: 92 },
      { name: 'DDD · Design Patterns', icon: FaShieldAlt, level: 86 },
      { name: 'JWT · OAuth', icon: FaShieldAlt, level: 88 }
    ]
  },
  {
    id: 'languages',
    title: 'Linguagens & Estudos',
    emoji: '📚',
    color: 'from-kawaii-rose to-kawaii-lilac',
    skills: [
      { name: 'Java', icon: FaJava, level: 80 },
      { name: 'Kotlin (mobile)', icon: SiKotlin, level: 75 },
      { name: 'Python', icon: SiPython, level: 78 },
      { name: 'Inglês Técnico', icon: FaGraduationCap, level: 82 },
      { name: 'Figma · Insomnia', icon: SiFigma, level: 80 },
      { name: 'Android Studio', icon: SiAndroidstudio, level: 75 }
    ]
  }
]
