"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Imani Frith
            </span>
            <p className="mt-2 text-gray-400">Full-Stack Developer & Designer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">© {currentYear} Imani Frith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
