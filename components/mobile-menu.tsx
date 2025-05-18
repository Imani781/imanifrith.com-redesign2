"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-50" aria-label="Toggle menu">
        {isOpen ? (
          <X className="h-6 w-6 text-gray-900 dark:text-white" />
        ) : (
          <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <motion.nav className="flex flex-col items-center space-y-8 text-xl">
                {[
                  { href: "#about", label: "About" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`font-medium transition-colors ${
                        theme === "dark" ? "text-gray-200 hover:text-yellow-200" : "text-gray-900 hover:text-orange-500"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <Button
                    asChild
                    className="mt-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 dark:from-yellow-400 dark:to-pink-400 dark:hover:from-yellow-500 dark:hover:to-pink-500 text-white px-8 py-6"
                  >
                    <Link href="#contact" onClick={closeMenu}>
                      Get in touch
                    </Link>
                  </Button>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
