"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function ResumeDownload() {
  const { theme } = useTheme()

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center">
      <Button
        asChild
        className={`group relative overflow-hidden px-8 py-6 rounded-xl ${
          theme === "dark"
            ? "bg-gradient-to-r from-yellow-500/80 to-pink-500/80 hover:from-yellow-500 hover:to-pink-500"
            : "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
        } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        <a href="/GenResJan25.pdf" download="Imani_Frith_Resume.pdf">
          <span className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span className="font-medium">Download Resume</span>
            <motion.div
              className="absolute right-4"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Download className="h-5 w-5" />
            </motion.div>
          </span>
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%", opacity: 0 }}
            whileHover={{ x: "100%", opacity: 0.3 }}
            transition={{ duration: 0.8 }}
          />
        </a>
      </Button>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">PDF format, 256KB</p>
    </motion.div>
  )
}
