'use client'

import { useState, useRef, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import MobileNavigation from '@/components/MobileNavigation'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  const heroRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  
  const sectionRefs = [heroRef, skillsRef, projectsRef, educationRef, contactRef]

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle navigation on mobile
  const handleNavigate = (index: number) => {
    if (isMobile && sectionRefs[index]?.current) {
      setActiveSection(index)
      sectionRefs[index].current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Track active section based on scroll position on mobile
  useEffect(() => {
    if (!isMobile) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop
          const offsetBottom = offsetTop + ref.current.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <div 
      className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden"
    >
      {/* Desktop Navigation */}
      <Navigation />
      
      {/* Mobile Navigation */}
      {isMobile && (
        <MobileNavigation 
          sections={sectionRefs}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      )}

      {/* Sections */}
      <div ref={heroRef} className={isMobile ? 'min-h-screen snap-start' : ''}>
        <Hero />
      </div>
      <div ref={skillsRef} className={isMobile ? 'min-h-screen snap-start' : ''}>
        <Skills />
      </div>
      <div ref={projectsRef} className={isMobile ? 'min-h-screen snap-start' : ''}>
        <Projects />
      </div>
      <div ref={educationRef} className={isMobile ? 'min-h-screen snap-start' : ''}>
        <Education />
      </div>
      <div ref={contactRef} className={isMobile ? 'min-h-screen snap-start' : ''}>
        <Contact />
      </div>
      
      <ScrollToTop />
    </div>
  )
}