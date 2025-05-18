"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface SkillBadgeProps {
  name: string
  color?: "orange" | "pink" | "blue"
}

export default function SkillBadge({ name, color = "orange" }: SkillBadgeProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const getColors = () => {
    if (!mounted) return ""

    if (theme === "dark") {
      switch (color) {
        case "orange":
          return "bg-yellow-900/40 text-yellow-300 hover:bg-yellow-800/60 border-yellow-800/60"
        case "pink":
          return "bg-pink-900/40 text-pink-300 hover:bg-pink-800/60 border-pink-800/60"
        case "blue":
          return "bg-blue-900/40 text-blue-300 hover:bg-blue-800/60 border-blue-800/60"
        default:
          return "bg-yellow-900/40 text-yellow-300 hover:bg-yellow-800/60 border-yellow-800/60"
      }
    } else {
      switch (color) {
        case "orange":
          return "bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200"
        case "pink":
          return "bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200"
        case "blue":
          return "bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200"
        default:
          return "bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200"
      }
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 ${getColors()} rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 border`}
    >
      {name}
    </motion.div>
  )
}
