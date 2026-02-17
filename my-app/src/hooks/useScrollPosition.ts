import { useEffect, useState } from "react"

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(window.scrollY)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export default useScrollPosition