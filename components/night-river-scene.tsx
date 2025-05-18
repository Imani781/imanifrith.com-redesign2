"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function NightRiverScene() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (theme !== "dark") return null

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-gradient-to-b from-gray-900 via-blue-950 to-blue-900">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute w-24 h-24 rounded-full top-10 right-10 overflow-hidden">
        {/* Moon base */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300"
          animate={{
            boxShadow: [
              "0 0 40px 20px rgba(255,248,224,0.3)",
              "0 0 40px 20px rgba(255,248,224,0.5)",
              "0 0 40px 20px rgba(255,248,224,0.3)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Moon craters */}
        <div className="absolute top-4 left-6 w-4 h-4 rounded-full bg-gray-300/60"></div>
        <div className="absolute top-12 left-10 w-3 h-3 rounded-full bg-gray-300/60"></div>
        <div className="absolute top-8 right-5 w-5 h-5 rounded-full bg-gray-300/60"></div>
        <div className="absolute bottom-5 left-8 w-2 h-2 rounded-full bg-gray-300/60"></div>

        {/* Moon glow */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      </div>

      {/* Fireflies */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`firefly-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            background: `rgba(255, 255, ${Math.floor(Math.random() * 50) + 150}, ${Math.random() * 0.4 + 0.6})`,
            boxShadow: `0 0 ${Math.random() * 5 + 5}px ${Math.random() * 3 + 2}px rgba(255, 255, 150, 0.8)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* River - with more ripples but no texture */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] overflow-hidden">
        {/* Water base with realistic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>

        {/* Moon reflection with realistic distortion */}
        <motion.div
          className="absolute w-20 h-6 bg-gradient-to-b from-yellow-100/40 to-yellow-100/10 rounded-full blur-sm top-[10%] right-12"
          animate={{
            width: ["5rem", "5.5rem", "5rem"],
            height: ["1.5rem", "2rem", "1.5rem"],
            filter: ["blur(4px)", "blur(5px)", "blur(4px)"],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* More water ripples */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute rounded-full border border-blue-300/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ width: 0, height: 0, opacity: 0.6 }}
            animate={{
              width: ["0px", "150px"],
              height: ["0px", "150px"],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
              delay: Math.random() * 10,
            }}
          />
        ))}

        {/* Additional smaller ripples for more movement */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`small-ripple-${i}`}
            className="absolute rounded-full border border-blue-200/15"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{
              width: ["0px", "80px"],
              height: ["0px", "80px"],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>
    </div>
  )
}
