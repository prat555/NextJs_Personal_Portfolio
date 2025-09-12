import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}