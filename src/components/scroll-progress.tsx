"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = document.documentElement.scrollTop
      const progress = scrollTop / scrollHeight
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-pink-500 to-blue-500 z-50 origin-left"
      style={{ scaleX }}
    />
  )
}
