"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHoveringBee, setIsHoveringBee] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Imani Frith
          </span>
          <motion.div
            className="absolute -right-8 top-0"
            onHoverStart={() => setIsHoveringBee(true)}
            onHoverEnd={() => setIsHoveringBee(false)}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <motion.span
              className="text-2xl"
              role="img"
              aria-label="bee"
              animate={isHoveringBee ? { scale: [1, 1.2, 1], rotate: [0, 5, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              🐝
            </motion.span>
          </motion.div>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-orange-500 transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-sm font-medium hover:text-orange-500 transition-colors py-2">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-orange-500 transition-colors py-2">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-orange-500 transition-colors py-2">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors py-2">
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
