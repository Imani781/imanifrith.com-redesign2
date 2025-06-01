"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        {isDark ? (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
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
            <div className="absolute top-20 right-20">
              <motion.div
                className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-200"
                style={{ boxShadow: "0 0 40px 10px rgba(255, 255, 255, 0.3)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
              />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-orange-50 to-pink-50">
            <div className="absolute top-20 right-20">
              <motion.div
                className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-yellow-400"
                style={{ boxShadow: "0 0 40px 10px rgba(251,191,36,0.4)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
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
              className="px-6 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowDown className="h-6 w-6 text-orange-500" />
      </motion.div>
    </section>
  )
}
