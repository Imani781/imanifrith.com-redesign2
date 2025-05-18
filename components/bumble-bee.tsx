"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function BumbleBee() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="inline-block relative w-8 h-8 ml-2 cursor-pointer"
      initial={{ rotate: 0 }}
      animate={{
        rotate: [0, -5, 5, -5, 0],
        y: [0, -2, 2, -2, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Body */}
        <motion.g
          animate={{
            scale: isHovered ? [1, 1.2, 1.1] : [1, 1.05, 1, 1.05, 1],
            rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
          }}
          transition={{
            duration: isHovered ? 0.5 : 2,
            repeat: isHovered ? 0 : Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* Main body */}
          <path
            d="M24.37,13.65a8,8,0,0,0-12.74,0A7.55,7.55,0,0,0,9.75,20.5a7.43,7.43,0,0,0,1.88,5.28,8,8,0,0,0,12.74,0,7.43,7.43,0,0,0,1.88-5.28A7.55,7.55,0,0,0,24.37,13.65Z"
            fill={isHovered ? "#FFC107" : "#FFCC4D"}
          />

          {/* Stripes */}
          <path
            d="M8.75,17.5c3.25-3.66,11.67-3.66,14.92,0"
            stroke="#292F33"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M7.75,20.5c3.25-3.66,11.67-3.66,14.92,0"
            stroke="#292F33"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M8.75,23.5c3.25-3.66,11.67-3.66,14.92,0"
            stroke="#292F33"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Face */}
          <motion.circle
            cx="14"
            cy="16"
            r={isHovered ? "1.5" : "1.25"}
            fill="#292F33"
            animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="22"
            cy="16"
            r={isHovered ? "1.5" : "1.25"}
            fill="#292F33"
            animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          />

          {/* Smile */}
          <motion.path
            d={isHovered ? "M18,19.5a3.5,3.5,0,0,1,3.5,1.5" : "M18,19.5a3.5,3.5,0,0,1,3,1.5"}
            stroke="#292F33"
            strokeWidth="1.25"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>

        {/* Wings */}
        <motion.path
          d="M25,14c2.5-2,5-1,6,1.5"
          stroke="#E1E8ED"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="#E1E8ED"
          fillOpacity="0.6"
          animate={
            isHovered
              ? { d: ["M25,14c2.5-2,5-1,6,1.5", "M25,14c3.5-3,6-1,7,2", "M25,14c2.5-2,5-1,6,1.5"] }
              : { d: ["M25,14c2.5-2,5-1,6,1.5", "M25,14c2.5-2.5,5-1.5,6,1", "M25,14c2.5-2,5-1,6,1.5"] }
          }
          transition={{
            duration: isHovered ? 0.3 : 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M11,14c-2.5-2-5-1-6,1.5"
          stroke="#E1E8ED"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="#E1E8ED"
          fillOpacity="0.6"
          animate={
            isHovered
              ? { d: ["M11,14c-2.5-2-5-1-6,1.5", "M11,14c-3.5-3-6-1-7,2", "M11,14c-2.5-2-5-1-6,1.5"] }
              : { d: ["M11,14c-2.5-2-5-1-6,1.5", "M11,14c-2.5-2.5-5-1.5-6,1", "M11,14c-2.5-2-5-1-6,1.5"] }
          }
          transition={{
            duration: isHovered ? 0.3 : 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Antennae */}
        <motion.path
          d="M14,12c-1-1.5-1-3-0.5-4"
          stroke="#292F33"
          strokeWidth="1.25"
          strokeLinecap="round"
          animate={
            isHovered
              ? { d: ["M14,12c-1-1.5-1-3-0.5-4", "M14,12c-1.5-2-1.5-3.5-0.5-5", "M14,12c-1-1.5-1-3-0.5-4"] }
              : { d: ["M14,12c-1-1.5-1-3-0.5-4", "M14,12c-1-1.5-1.5-3-1-4", "M14,12c-1-1.5-1-3-0.5-4"] }
          }
          transition={{
            duration: isHovered ? 0.3 : 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M22,12c1-1.5,1-3,0.5-4"
          stroke="#292F33"
          strokeWidth="1.25"
          strokeLinecap="round"
          animate={
            isHovered
              ? { d: ["M22,12c1-1.5,1-3,0.5-4", "M22,12c1.5-2,1.5-3.5,0.5-5", "M22,12c1-1.5,1-3,0.5-4"] }
              : { d: ["M22,12c1-1.5,1-3,0.5-4", "M22,12c1-1.5,1.5-3,1-4", "M22,12c1-1.5,1-3,0.5-4"] }
          }
          transition={{
            duration: isHovered ? 0.3 : 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />

        {/* Hover effect - stinger */}
        {isHovered && (
          <motion.path
            d="M18,26c0,0,0,3,0,4"
            stroke="#292F33"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </svg>

      {/* Hover effect - sparkles */}
      {isHovered && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.div
            className="absolute top-0 -left-1 w-1.5 h-1.5 bg-yellow-300 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div
            className="absolute -bottom-1 left-0 w-2 h-2 bg-yellow-300 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </>
      )}
    </motion.div>
  )
}
