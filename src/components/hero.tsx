"use client"

import { useTheme } from "./theme-provider"
import { motion, useAnimation } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([])
  const controls = useAnimation()

  // Generate initial ripples
  useEffect(() => {
    const initialRipples = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 70 + Math.random() * 20,
      size: Math.random() * 100 + 50,
    }))
    setRipples(initialRipples)

    // Add new ripples periodically
    const interval = setInterval(() => {
      setRipples((prev) => {
        // Remove oldest ripple if we have more than 12
        const updated = prev.length > 12 ? prev.slice(1) : [...prev]
        // Add new ripple
        return [
          ...updated,
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: 70 + Math.random() * 20,
            size: Math.random() * 100 + 50,
          },
        ]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {isDark ? (
          // Night scene
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
            {/* Stars */}
            <div className="absolute inset-0">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    opacity: Math.random() * 0.8 + 0.2,
                  }}
                />
              ))}
            </div>

            {/* Moon */}
            <div className="absolute top-20 right-20">
              <motion.div
                className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-200 animate-moon-glow"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
              />
            </div>

            {/* Water */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-blue-900/50 backdrop-blur-sm animate-water-shimmer">
              {/* Ripples */}
              <div className="absolute inset-0 overflow-hidden">
                {ripples.map((ripple) => (
                  <div
                    key={ripple.id}
                    className="absolute rounded-full"
                    style={{
                      top: `${ripple.y}%`,
                      left: `${ripple.x}%`,
                      width: `${ripple.size}px`,
                      height: `${ripple.size}px`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-ripple" />
                  </div>
                ))}
              </div>
            </div>

            {/* Fireflies */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-0 firefly"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: "0 0 10px 2px rgba(255, 255, 0, 0.5)",
                  }}
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    y: [0, -20 - Math.random() * 30, -40 - Math.random() * 30],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 4,
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          // Day scene
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-orange-50 to-pink-50">
            {/* Sun */}
            <div className="absolute top-20 right-20">
              <motion.div
                className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-yellow-400 shadow-[0_0_40px_10px_rgba(251,191,36,0.4)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
              />
            </div>

            {/* Clouds */}
            <motion.div
              className="absolute top-40 left-20 w-24 h-10 bg-white rounded-full opacity-80"
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-60 right-40 w-32 h-12 bg-white rounded-full opacity-80"
              animate={{ x: [0, -30, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 25, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-80 left-1/3 w-40 h-14 bg-white rounded-full opacity-80"
              animate={{ x: [0, 40, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 30, ease: "easeInOut" }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-pink-500 to-blue-500 text-transparent bg-clip-text">
                Full-Stack Developer & Designer
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl mb-8">I build beautiful, functional, and accessible web experiences.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </motion.div>
    </section>
  )
}
