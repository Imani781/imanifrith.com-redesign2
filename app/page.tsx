"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ParticleBackground from "@/components/particle-background"
import { motion, useScroll, useTransform } from "framer-motion"
import AnimatedText from "@/components/animated-text"
import WaveAnimation from "@/components/wave-animation"
import BumbleBee from "@/components/bumble-bee"
import ThemeToggle from "@/components/theme-toggle"
import NightRiverScene from "@/components/night-river-scene"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import MobileMenu from "@/components/mobile-menu"
import ResumeDownload from "@/components/resume-download"
import SkillProgress from "@/components/skill-progress"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9])
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Force theme update if it's not working
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (darkModeMediaQuery.matches) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }

    darkModeMediaQuery.addEventListener("change", handleChange)
    return () => darkModeMediaQuery.removeEventListener("change", handleChange)
  }, [setTheme])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 to-pink-50 dark:from-transparent dark:to-transparent transition-colors duration-1000">
      {mounted && theme === "light" && <ParticleBackground />}
      <NightRiverScene />

      {/* Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/40 backdrop-blur-md border-b border-orange-100 dark:border-blue-900/30"
      >
        <div className="container flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 dark:from-yellow-200 dark:via-pink-200 dark:to-blue-200 text-transparent bg-clip-text flex items-center"
          >
            Imani Frith
            <BumbleBee />
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-orange-500 dark:text-gray-200 dark:hover:text-yellow-200 transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-pink-500 dark:text-gray-200 dark:hover:text-pink-200 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-200 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-orange-500 dark:text-gray-200 dark:hover:text-yellow-200 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              asChild
              className="hidden md:flex bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 dark:from-yellow-400 dark:to-pink-400 dark:hover:from-yellow-500 dark:hover:to-pink-500 text-white"
            >
              <Link href="#contact">Get in touch</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </motion.header>

      <main className="container pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -top-20 -left-20 w-40 h-40 bg-orange-300 dark:bg-yellow-300/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-300 dark:bg-pink-300/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute top-20 right-20 w-40 h-40 bg-blue-300 dark:bg-blue-300/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"
            />

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 relative z-10">
              Hi, I'm{" "}
              <AnimatedText
                text="Imani"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 dark:from-yellow-200 dark:via-pink-200 dark:to-blue-200 text-transparent bg-clip-text"
              />
            </h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200 mb-8"
            >
              Full-Stack Web Developer & Designer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8 px-4 sm:px-0"
            >
              I create elegant, responsive, and user-friendly web applications with a focus on both functionality and
              aesthetics. Let's build something amazing together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 dark:from-yellow-400 dark:to-pink-400 dark:hover:from-yellow-500 dark:hover:to-pink-500 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#projects">
                  View my work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-pink-500 text-pink-600 hover:bg-pink-100 dark:border-pink-300 dark:text-pink-200 dark:hover:bg-pink-900/30 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#contact">Contact me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <WaveAnimation />

        {/* Rest of the page content remains the same */}
        {/* About Section */}
        <section id="about" className="py-16 md:py-24 scroll-mt-20">
          {/* Content remains the same */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="px-4 sm:px-0"
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-yellow-200 dark:to-pink-200 text-transparent bg-clip-text">
                About Me
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-200">
                <p>
                  I'm a passionate full-stack developer with expertise in creating modern web applications. With a
                  background in both development and design, I bring a unique perspective to every project.
                </p>
                <p>
                  My approach combines technical skills with creative problem-solving, ensuring that the solutions I
                  build are not only functional but also visually appealing and intuitive to use.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, immersed in a book,
                  or seeking inspiration through design and art.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <ResumeDownload />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-200 via-pink-200 to-blue-200 dark:from-yellow-800 dark:via-pink-800 dark:to-blue-800 shadow-xl"
              >
                <Image src="/2.png" alt="Imani Frith" fill className="object-cover" priority />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-pink-500/20 to-blue-500/20 dark:from-yellow-500/20 dark:via-pink-500/20 dark:to-blue-500/20"
                  animate={{
                    background: [
                      "linear-gradient(to top right, rgba(249, 115, 22, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                      "linear-gradient(to bottom left, rgba(249, 115, 22, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                      "linear-gradient(to top left, rgba(249, 115, 22, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                      "linear-gradient(to bottom right, rgba(249, 115, 22, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                      "linear-gradient(to top right, rgba(249, 115, 22, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                    ],
                  }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white dark:bg-gray-800/60 rounded-xl p-6 border border-orange-100 dark:border-blue-900/30 shadow-lg w-full"
              >
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 dark:from-yellow-200 dark:via-pink-200 dark:to-blue-200 text-transparent bg-clip-text">
                  Professional Summary
                </h3>
                <ul className="space-y-3">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="h-6 w-6 rounded-full bg-orange-100 dark:bg-yellow-900/60 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-orange-600 dark:text-yellow-400 text-sm font-bold">✓</span>
                    </div>
                    <span className="dark:text-gray-200">7+ years of experience in web development</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900/60 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-pink-600 dark:text-pink-400 text-sm font-bold">✓</span>
                    </div>
                    <span className="dark:text-gray-200">Specialized in Data Visualization, KPI Monitoring, and Analysis</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">✓</span>
                    </div>
                    <span className="dark:text-gray-200">Strong UI/UX design background</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="h-6 w-6 rounded-full bg-orange-100 dark:bg-yellow-900/60 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-orange-600 dark:text-yellow-400 text-sm font-bold">✓</span>
                    </div>
                    <span className="dark:text-gray-200">Experience with agile development methodologies</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900/60 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-pink-600 dark:text-pink-400 text-sm font-bold">✓</span>
                    </div>
                    <span className="dark:text-gray-200">Passionate about creating beautiful & functional web experiences</span>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 scroll-mt-20">
          {/* Content remains the same */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 dark:from-yellow-200 dark:via-pink-200 dark:to-blue-200 text-transparent bg-clip-text"
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 px-4 sm:px-0"
            >
              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white/50 dark:bg-gray-800/40 rounded-xl p-6 border border-orange-100 dark:border-yellow-900/30 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-6 text-orange-600 dark:text-yellow-400">
                  Frontend Development
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <SkillProgress name="React" percentage={75} color="orange" />
                  <SkillProgress name="Next.js" percentage={50} color="orange" />
                  <SkillProgress name="TypeScript" percentage={50} color="orange" />
                  <SkillProgress name="JavaScript" percentage={78} color="orange" />
                  <SkillProgress name="HTML5/CSS3" percentage={95} color="orange" />
                  <SkillProgress name="Tailwind CSS" percentage={42} color="orange" />
                  <SkillProgress name="Bootstrap" percentage={88} color="orange" />
                  <SkillProgress name="Redux" percentage={85} color="orange" />
                </div>
              </motion.div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white/50 dark:bg-gray-800/40 rounded-xl p-6 border border-pink-100 dark:border-pink-900/30 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-6 text-pink-600 dark:text-pink-400">Backend Development</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <SkillProgress name="Node.js" percentage={60} color="pink" />
                  <SkillProgress name="Express" percentage={68} color="pink" />
                  <SkillProgress name="MongoDB" percentage={75} color="pink" />
                  <SkillProgress name="MySQL" percentage={85} color="pink" />
                  <SkillProgress name="GraphQL" percentage={65} color="pink" />
                  <SkillProgress name="REST APIs" percentage={95} color="pink" />

                </div>
              </motion.div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white/50 dark:bg-gray-800/40 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Design & Additonal Skills</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <SkillProgress name="Figma" percentage={70} color="blue" />
                  <SkillProgress name="Adobe Suite" percentage={85} color="blue" />
                  <SkillProgress name="Generative AI" percentage={80} color="blue" />
                  <SkillProgress name="Prompt Engineering" percentage={80} color="blue" />
                  <SkillProgress name="Microsoft Suite" percentage={95} color="blue" />
                  <SkillProgress name="Project Management" percentage={88} color="blue" />
                  <SkillProgress name="Jest" percentage={80} color="blue" />
                  <SkillProgress name="Cypress" percentage={75} color="blue" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <WaveAnimation reversed />

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 scroll-mt-20">
          {/* Content remains the same */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 dark:from-yellow-200 dark:via-pink-200 dark:to-blue-200 text-transparent bg-clip-text"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 px-4 sm:px-0"
            >
              <motion.div variants={item}>
                <ProjectCard
                  title="Spiritual Guidance App"
                  description="A meditation and spiritual guidance application with personalized journeys, guided sessions, and progress tracking."
                  tags={["React Native", "Firebase", "Redux", "Node.js"]}
                  imageUrl="/projects/spiritual-app.jpg"
                  color="orange"
                  link="https://spiritual-guidance.com"
                />
              </motion.div>
              <motion.div variants={item}>
                <ProjectCard
                  title="Goddess Wisdom Portal"
                  description="An educational platform celebrating divine feminine wisdom across cultures, featuring courses, community forums, and interactive rituals."
                  tags={["Next.js", "MongoDB", "Tailwind CSS", "Auth0"]}
                  imageUrl="/projects/goddess-wisdom.jpg"
                  color="pink"
                  link="https://goddess-wisdom.org"
                />
              </motion.div>
              <motion.div variants={item}>
                <ProjectCard
                  title="Sacred Geometry Visualizer"
                  description="An interactive tool for exploring sacred geometry patterns with customizable animations, meditative music, and educational content."
                  tags={["Three.js", "WebGL", "React", "Tone.js"]}
                  imageUrl="/projects/sacred-geometry.jpg"
                  color="blue"
                  link="https://sacred-patterns.io"
                />
              </motion.div>
              <motion.div variants={item}>
                <ProjectCard
                  title="Holistic Wellness Dashboard"
                  description="A comprehensive wellness tracking application integrating physical, mental, and spiritual health metrics with personalized recommendations."
                  tags={["Vue.js", "D3.js", "Express", "PostgreSQL"]}
                  imageUrl="/projects/wellness-dashboard.jpg"
                  color="orange"
                  link="https://holistic-wellness.app"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 dark:from-yellow-200 dark:via-pink-200 dark:to-blue-200 hover:bg-orange-100 dark:hover:bg-blue-900/30 rounded-full"
              >
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 scroll-mt-20">
          {/* Content remains the same */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-4 sm:px-0"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 dark:from-yellow-200 dark:via-pink-200 dark:to-blue-200 text-transparent bg-clip-text"
            >
              Get In Touch
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-pink-500 dark:from-yellow-200 dark:to-pink-200 text-transparent bg-clip-text">
                  Contact Information
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  I'm currently available for freelance work and full-time opportunities. Feel free to reach out if you
                  have a project in mind or just want to connect!
                </p>
                <div className="space-y-4">
                  <motion.a
                    whileHover={{ x: 5, color: "#f97316" }}
                    href="mailto:hello@imanifrith.com"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-yellow-200 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>imani@imanifrith.com</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 5, color: "#ec4899" }}
                    href="https://github.com/imani781"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-200 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/imani781</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 5, color: "#3b82f6" }}
                    href="https://linkedin.com/in/imani888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-200 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/imani888</span>
                  </motion.a>
                </div>
              </motion.div>
              <motion.form
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="grid gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-3 rounded-lg border border-orange-200 dark:border-yellow-800/30 bg-white dark:bg-gray-800/60 focus:ring-2 focus:ring-orange-500 dark:focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 rounded-lg border border-pink-200 dark:border-pink-800/30 bg-white dark:bg-gray-800/60 focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-transparent transition-all"
                      placeholder="Your email"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 rounded-lg border border-blue-200 dark:border-blue-800/30 bg-white dark:bg-gray-800/60 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 hover:from-orange-600 hover:via-pink-600 hover:to-blue-600 dark:from-yellow-400 dark:via-pink-400 dark:to-blue-400 dark:hover:from-yellow-500 dark:hover:via-pink-500 dark:hover:to-blue-500 text-white rounded-lg py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="border-t border-orange-100 dark:border-blue-900/30 py-8 bg-gradient-to-r from-orange-50/50 via-pink-50/50 to-blue-50/50 dark:from-transparent dark:via-transparent dark:to-transparent backdrop-blur-md"
      >
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-6">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Imani Frith. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 dark:text-yellow-400 hover:text-orange-600 dark:hover:text-yellow-300 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="mailto:hello@imanifrith.com"
              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
