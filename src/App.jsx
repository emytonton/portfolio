import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GitHubStats from './components/GitHubStats'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()

  return (
    <div className="relative min-h-screen bg-kawaii-bg text-kawaii-cream font-body antialiased">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <GitHubStats />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
