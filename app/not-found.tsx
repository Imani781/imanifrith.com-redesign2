"use client"

import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  // Redirect to home after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-pink-50 dark:from-gray-900 dark:to-blue-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <motion.h1
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 dark:from-yellow-200 dark:via-pink-200 dark:to-blue-200 text-transparent bg-clip-text"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          404
        </motion.h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Page Not Found</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          The page you're looking for doesn't exist or has been moved. You'll be redirected to the home page in 5
          seconds.
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 dark:from-yellow-400 dark:to-pink-400 dark:hover:from-yellow-500 dark:hover:to-pink-500"
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
