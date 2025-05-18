"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
  color?: "orange" | "pink" | "blue"
}

export default function ProjectCard({ title, description, tags, imageUrl, link, color = "orange" }: ProjectCardProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const getBorderColor = () => {
    if (!mounted) return ""

    if (theme === "dark") {
      switch (color) {
        case "orange":
          return "border-yellow-800/30"
        case "pink":
          return "border-pink-800/30"
        case "blue":
          return "border-blue-800/30"
        default:
          return "border-yellow-800/30"
      }
    } else {
      switch (color) {
        case "orange":
          return "border-orange-200"
        case "pink":
          return "border-pink-200"
        case "blue":
          return "border-blue-200"
        default:
          return "border-orange-200"
      }
    }
  }

  const getGradient = () => {
    if (!mounted) return ""

    if (theme === "dark") {
      switch (color) {
        case "orange":
          return "from-yellow-900/60"
        case "pink":
          return "from-pink-900/60"
        case "blue":
          return "from-blue-900/60"
        default:
          return "from-yellow-900/60"
      }
    } else {
      switch (color) {
        case "orange":
          return "from-orange-900/60"
        case "pink":
          return "from-pink-900/60"
        case "blue":
          return "from-blue-900/60"
        default:
          return "from-orange-900/60"
      }
    }
  }

  const getBadgeColor = () => {
    if (!mounted) return ""

    if (theme === "dark") {
      switch (color) {
        case "orange":
          return "bg-yellow-900/40 text-yellow-300 hover:bg-yellow-800/60"
        case "pink":
          return "bg-pink-900/40 text-pink-300 hover:bg-pink-800/60"
        case "blue":
          return "bg-blue-900/40 text-blue-300 hover:bg-blue-800/60"
        default:
          return "bg-yellow-900/40 text-yellow-300 hover:bg-yellow-800/60"
      }
    } else {
      switch (color) {
        case "orange":
          return "bg-orange-100 text-orange-700 hover:bg-orange-200"
        case "pink":
          return "bg-pink-100 text-pink-700 hover:bg-pink-200"
        case "blue":
          return "bg-blue-100 text-blue-700 hover:bg-blue-200"
        default:
          return "bg-orange-100 text-orange-700 hover:bg-orange-200"
      }
    }
  }

  return (
    <motion.div whileHover={{ y: -10, rotateZ: 1 }} transition={{ duration: 0.3 }}>
      <Card
        className={`overflow-hidden group border ${getBorderColor()} bg-white dark:bg-gray-800/60 shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${getGradient()} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full"
            >
              <ArrowUpRight className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <motion.h3 className="text-xl font-semibold text-gray-900 dark:text-white" whileHover={{ x: 5 }}>
              {title}
            </motion.h3>
            {link && (
              <motion.a
                whileHover={{ rotate: 45 }}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-${color}-600 dark:text-${color === "orange" ? "yellow" : color}-400 hover:text-${color}-700 dark:hover:text-${color === "orange" ? "yellow" : color}-300 transition-colors`}
              >
                <ArrowUpRight className="h-5 w-5" />
              </motion.a>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="secondary" className={getBadgeColor()}>
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
