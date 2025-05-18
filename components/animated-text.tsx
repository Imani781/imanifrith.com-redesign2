"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  // Animation for each letter
  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          className="inline-block"
          whileHover={{
            y: -5,
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}
