"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  year: string
  link: string
}

const projects: Project[] = [
  {
    title: "MEDICAL TEXT SUMMARIZER",
    description:
      "An advanced medical text summarizer powered by Gemini, designed to efficiently condense complex medical information into clear, concise summaries. Built with cutting-edge AI technology for enhanced accuracy and reliability.",
    image: "https://tools.corenexis.com/image/cnxm/Q25/02/99f458c189.webp",
    technologies: ["React", "Next.js", "Gemini", "TailwindCSS", "NLP"],
    year: "2025",
    link: "https://darling-banoffee-d5d167.netlify.app/",
  },
  {
    title: "SORTING ALGORITHM VISUALIZER",
    description:
      "An interactive sorting algorithm visualizer powered by dynamic animations, helping users understand and analyze the behavior of various sorting techniques. Built with intuitive UI and efficient algorithm implementations for seamless learning.",
    image: "https://tools.corenexis.com/image/cnxm/Q25/02/eaf14f2797.webp",
    technologies: ["TypeScript", "Node.js", "Supabase"],
    year: "2024",
    link: "https://prismatic-crostata-63d8ac.netlify.app/",
  },
  {
    title: "SOCIAL MEDIA EMOTIONAL WELL BEING ANALYSIS",
    description:
      "This project explores the relationship between social media usage and emotional well-being using a GRU-based neural network. Through data preprocessing, feature engineering, and model training, we developed a predictive model to classify dominant emotions. The study provides insights into how online behavior influences mental health, with potential applications in sentiment analysis and digital well-being monitoring. ",
    image:
      "/sentiment.png",
    technologies: ["Python", "TensorFlow", "GRU"],
    year: "2023",
    link: "#",
  },
]

interface ProjectPreviewProps {
  project: Project | null
  mousePosition: { x: number; y: number }
  isActive: boolean
}

const ProjectPreview = ({ project, mousePosition, isActive }: ProjectPreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!previewRef.current || !isActive || !project) return

    const moveImage = () => {
      if (!previewRef.current) return

      const rect = previewRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const maxMove = 20 // Maximum pixels to move
      const moveX = ((mousePosition.x - centerX) / (window.innerWidth / 2)) * maxMove
      const moveY = ((mousePosition.y - centerY) / (window.innerHeight / 2)) * maxMove

      previewRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    moveImage() // Initial position
    window.addEventListener("mousemove", moveImage)
    return () => window.removeEventListener("mousemove", moveImage)
  }, [isActive, project, mousePosition])

  if (!project) return null

  return (
    <motion.div
      ref={previewRef}
      className="fixed inset-0 pointer-events-none flex items-center justify-center z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-1/2 aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <motion.img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}

interface ProjectItemProps {
  project: Project
  isExpanded: boolean
  onExpand: (project: Project) => void
  onMouseEnter: (project: Project) => void
  onMouseLeave: () => void
}

const ProjectItem = ({ project, isExpanded, onExpand, onMouseEnter, onMouseLeave }: ProjectItemProps) => {
  return (
    <motion.div
      layout
      className="border-b border-muted py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`cursor-pointer transition-colors ${isExpanded ? "opacity-100" : "hover:text-primary"}`}
        onClick={() => onExpand(project)}
        onMouseEnter={() => onMouseEnter(project)}
        onMouseLeave={onMouseLeave}
      >
        <h3 className="text-5xl font-serif tracking-tight">{project.title}</h3>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-sm px-3 py-1 bg-secondary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{project.year}</p>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleExpand = (project: Project) => {
    setExpandedProject(expandedProject?.title === project.title ? null : project)
  }

  return (
    <section id="projects" className="relative min-h-screen bg-background">
      <div className="container-width py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="py-8 bg-background/80 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-6xl font-bold tracking-tight mb-8">SELECTED PROJECTS</h2>
              {expandedProject && (
                <button
                  onClick={() => setExpandedProject(null)}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-12 px-4 sm:px-6 lg:px-8">
            {projects.map((project) => (
              <ProjectItem
                key={project.title}
                project={project}
                isExpanded={expandedProject?.title === project.title}
                onExpand={handleExpand}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectPreview
        project={hoveredProject}
        mousePosition={mousePosition}
        isActive={!!hoveredProject && !expandedProject}
      />
    </section>
  )
}

export default Projects

