"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { downloadResume } from "@/utils/downloadResume"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center section-padding pt-12">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">I Create Digital Future</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Full-stack developer and ML engineer crafting innovative solutions at the intersection of web and AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-12 px-8 rounded-none hover:translate-y-[-2px] transition-transform bg-primary text-primary-foreground"
                onClick={() => {
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 rounded-none hover:translate-y-[-2px] transition-transform border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={downloadResume}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute inset-0 rounded-full border-2 border-primary/20"
              />
              {/* Profile image container */}
              <div className="relative size-[280px] sm:size-[320px] rounded-full overflow-hidden border-2 border-primary">
                <Image 
                  src="/profile.jpeg"
                  alt="Harsh Singh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -right-4 size-24 rounded-full border border-primary/20"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 size-32 rounded-full border border-primary/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

