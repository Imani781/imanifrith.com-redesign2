"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "next-themes"

interface SkillProgressProps {
  name: string
  percentage: number
  color?: "orange" | "pink" | "blue"
}

export default function SkillProgress({ name, percentage, color = "orange" }: SkillProgressProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const { theme } = useTheme()

  const getBarColor = () => {
    if (theme === "dark") {
      switch (color) {
        case "orange":
          return "from-yellow-600 to-yellow-400"
        case "pink":
          return "from-pink-600 to-pink-400"
        case "blue":
          return "from-blue-600 to-blue-400"
        default:
          return "from-yellow-600 to-yellow-400"
      }
    } else {
      switch (color) {
        case "orange":
          return "from-orange-600 to-orange-400"
        case "pink":
          return "from-pink-600 to-pink-400"
        case "blue":
          return "from-blue-600 to-blue-400"
        default:
          return "from-orange-600 to-orange-400"
      }
    }
  }

  const getBgColor = () => {
    if (theme === "dark") {
      switch (color) {
        case "orange":
          return "bg-yellow-900/20"
        case "pink":
          return "bg-pink-900/20"
        case "blue":
          return "bg-blue-900/20"
        default:
          return "bg-yellow-900/20"
      }
    } else {
      switch (color) {
        case "orange":
          return "bg-orange-100"
        case "pink":
          return "bg-pink-100"
        case "blue":
          return "bg-blue-100"
        default:
          return "bg-orange-100"
      }
    }
  }

  const getTextColor = () => {
    if (theme === "dark") {
      switch (color) {
        case "orange":
          return "text-yellow-400"
        case "pink":
          return "text-pink-400"
        case "blue":
          return "text-blue-400"
        default:
          return "text-yellow-400"
      }
    } else {
      switch (color) {
        case "orange":
          return "text-orange-600"
        case "pink":
          return "text-pink-600"
        case "blue":
          return "text-blue-600"
        default:
          return "text-orange-600"
      }
    }
  }

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className={`text-sm font-medium ${getTextColor()}`}>{name}</span>
        <motion.span
          className={`text-xs font-semibold ${getTextColor()}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className={`w-full h-2.5 rounded-full ${getBgColor()}`}>
        <motion.div
          className={`h-2.5 rounded-full bg-gradient-to-r ${getBarColor()} shadow-lg`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="absolute right-0 -top-1 w-3 h-3 rounded-full bg-white shadow-md"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </div>
  )
}
