"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

type Skill = {
  name: string
  percentage: number
  color: string
}

export default function Skills() {
  const skillsRef = useRef(null)
  const isInView = useInView(skillsRef, { once: true, amount: 0.2 })

  const technicalSkills: Skill[] = [
    { name: "HTML/CSS", percentage: 95, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", percentage: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "React", percentage: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", percentage: 80, color: "from-green-500 to-emerald-700" },
    { name: "TypeScript", percentage: 75, color: "from-blue-600 to-blue-800" },
    { name: "UI/UX Design", percentage: 85, color: "from-purple-500 to-pink-500" },
  ]

  const softSkills: Skill[] = [
    { name: "Communication", percentage: 90, color: "from-primary to-orange-600" },
    { name: "Problem Solving", percentage: 95, color: "from-blue-500 to-indigo-600" },
    { name: "Teamwork", percentage: 85, color: "from-green-500 to-teal-600" },
    { name: "Time Management", percentage: 80, color: "from-purple-500 to-violet-600" },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={skillsRef}>
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-muted rounded-full overflow-hidden relative">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                    {/* Add shimmer effect */}
                    <motion.div
                      className="absolute top-0 bottom-0 left-0 w-20 bg-white/20 skew-x-12"
                      initial={{ left: "-20%" }}
                      animate={
                        isInView
                          ? {
                              left: ["0%", "100%"],
                              transition: {
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                delay: index * 0.1 + 1,
                                repeatDelay: 3,
                              },
                            }
                          : {}
                      }
                      style={{ filter: "blur(5px)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-muted rounded-full overflow-hidden relative">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                    {/* Add shimmer effect */}
                    <motion.div
                      className="absolute top-0 bottom-0 left-0 w-20 bg-white/20 skew-x-12"
                      initial={{ left: "-20%" }}
                      animate={
                        isInView
                          ? {
                              left: ["0%", "100%"],
                              transition: {
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                delay: index * 0.1 + 1,
                                repeatDelay: 3,
                              },
                            }
                          : {}
                      }
                      style={{ filter: "blur(5px)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
