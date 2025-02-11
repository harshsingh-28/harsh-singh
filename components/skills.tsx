"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const CircularProgress = ({ percentage, label, color, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const radius = 60
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset,
        transition: { duration: 1.5, delay, ease: "easeOut" },
      })
    }
  }, [inView, controls, strokeDashoffset, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="circular-progress size-40">
        <svg width="160" height="160" className="absolute">
          <circle cx="80" cy="80" r={radius} stroke="currentColor" strokeWidth="4" fill="none" className="text-muted" />
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            stroke={color}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={controls}
          />
        </svg>
        <div className="relative z-10 text-2xl font-medium">{percentage}%</div>
      </div>
      <h3 className="mt-4 text-lg font-medium">{label}</h3>
    </motion.div>
  )
}

const Skills = () => {
  const skills = [
    { label: "Frontend", percentage: 95, color: "rgb(86, 192, 90)" },
    { label: "Backend", percentage: 85, color: "rgb(95, 169, 232)" },
    { label: "Machine Learning", percentage: 80, color: "rgb(112, 49, 48)" },
    { label: "UI/UX Design", percentage: 75, color: "rgb(86, 192, 90)" },
  ]

  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-6xl font-bold tracking-tight mb-4">SKILLS & EXPERTISE</h2>
          <p className="text-muted-foreground text-lg mb-16">
            A comprehensive overview of my technical proficiency and areas of expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skills.map((skill, index) => (
              <CircularProgress
                key={skill.label}
                percentage={skill.percentage}
                label={skill.label}
                color={skill.color}
                delay={index * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

