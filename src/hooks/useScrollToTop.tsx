import { useState, useEffect } from 'react'

interface ScrollToTop {
  isVisible: boolean
  scrollToTop: () => void
}

const useScrollToTop = (scrollThreshold: number = 200): ScrollToTop => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [scrollThreshold])

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return { isVisible, scrollToTop }
}

export default useScrollToTop
