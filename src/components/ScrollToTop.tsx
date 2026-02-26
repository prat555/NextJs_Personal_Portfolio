'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsVisible(window.pageYOffset > 300)
      }, 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-gray-600/70 hover:bg-gray-700/80 dark:bg-gray-400/60 dark:hover:bg-gray-300/70 shadow-md backdrop-blur-sm transition-all duration-200 ease-in-out hover:scale-105 opacity-70 hover:opacity-100 animate-bounce-subtle"
          size="icon"
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up text-white text-sm animate-pulse-gentle" aria-hidden="true"></i>
        </Button>
      )}
    </>
  )
}