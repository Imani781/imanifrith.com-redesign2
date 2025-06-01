"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management and payment processing.",
      image: "/placeholder.svg?height=340&width=600&text=E-Commerce+Dashboard",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=340&width=600&text=Task+Management+App",
      tags: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work and skills.",
      image: "/placeholder.svg?height=340&width=600&text=Portfolio+Website",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
