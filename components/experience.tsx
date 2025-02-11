"use client"

import { motion } from "framer-motion"

const ExperienceItem = ({ title, company, period, location }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-[1fr,2fr] gap-8 py-8 border-t border-muted"
  >
    <div className="text-muted-foreground">{period}</div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-muted-foreground">{company}</p>
      <p className="text-sm text-muted-foreground">{location}</p>
    </div>
  </motion.div>
)

const Experience = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Innovators Inc.",
      period: "2022 — Present",
      location: "San Francisco, CA",
    },
    {
      title: "ML Engineer",
      company: "AI Solutions Ltd.",
      period: "2020 — 2022",
      location: "New York, NY",
    },
    {
      title: "Frontend Developer",
      company: "Digital Creators Co.",
      period: "2018 — 2020",
      location: "Boston, MA",
    },
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="h2 mb-12">Experience.</h2>
          <div>
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

