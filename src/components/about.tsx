"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden border-4 border-primary/20 shadow-xl relative">
              <img src="/profile-image.png" alt="Imani Frith" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">Imani Frith</p>
                  <p className="text-sm">Full-Stack Developer & Designer</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm Imani Frith</h3>
            <p className="mb-4 text-muted-foreground">
              I'm a passionate full-stack developer and designer with a focus on creating intuitive and engaging web
              experiences. With a background in both design and development, I bring a unique perspective to every
              project.
            </p>
            <p className="mb-6 text-muted-foreground">
              My journey in web development started over 5 years ago, and since then, I've worked on a variety of
              projects ranging from small business websites to complex web applications. I'm constantly learning and
              exploring new technologies to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">contact@imanifrith.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Education</h4>
                <p className="text-muted-foreground">B.S. Computer Science</p>
              </div>
              <div>
                <h4 className="font-semibold">Freelance</h4>
                <p className="text-muted-foreground">Available</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/resume.pdf"
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-flex items-center"
                download
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
