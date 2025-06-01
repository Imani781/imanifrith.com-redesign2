"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-lg overflow-hidden border-4 border-orange-500/20 shadow-xl">
              <img
                src="/placeholder.svg?height=500&width=500&text=Profile+Image"
                alt="Imani Frith"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm Imani Frith</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              I'm a passionate full-stack developer and designer with a focus on creating intuitive and engaging web
              experiences. With a background in both design and development, I bring a unique perspective to every
              project.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              My journey in web development started over 5 years ago, and since then, I've worked on a variety of
              projects ranging from small business websites to complex web applications.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">contact@imanifrith.com</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="px-6 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors inline-flex items-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
