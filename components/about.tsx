"use client"

import { motion } from "framer-motion"
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Rotating code symbol */}
            <div className="absolute -top-12 -left-12 w-16 h-16">
              <svg 
                viewBox="0 0 2050 2050" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full animate-spin-slow"
              >
                <path 
                  className="fill-primary dark:fill-white" 
                  d="M1009.1,1629.4a602.6,602.6,0,1,1,235.2-47.5A601,601,0,0,1,1009.1,1629.4Z"
                />
                <path 
                  className="fill-white dark:fill-black" 
                  d="M803.5,1283a45.1,45.1,0,0,1-31.8-76.9L1202,775.8a45,45,0,0,1,63.6,63.7L835.3,1269.8A44.8,44.8,0,0,1,803.5,1283Z"
                />
                <path 
                  className="fill-white dark:fill-black" 
                  d="M842.8,1000a45,45,0,0,1-26.9-8.9L699,904a45.1,45.1,0,0,1,0-72.2l116.9-87.1a45,45,0,0,1,53.8,72.2l-68.5,51,68.5,51a45,45,0,0,1-26.9,81.1Z"
                />
                <path 
                  className="fill-white dark:fill-black" 
                  d="M1175.4,1314.2a45,45,0,0,1-26.9-81.1l68.4-51-68.4-51a45,45,0,1,1,53.7-72.2l117,87.1a45.1,45.1,0,0,1,0,72.2l-117,87.1A44.9,44.9,0,0,1,1175.4,1314.2Z"
                />
              </svg>
            </div>

            <Image
              src="/about.jpg"
              alt="About Me"
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-6xl font-bold tracking-tight">ABOUT</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Hi, I'm Harsh Singh, a passionate Software Developer specializing in Full Stack Development and Machine
                Learning. I thrive on crafting innovative solutions that bridge the gap between technology and
                real-world challenges. With a strong foundation in designing efficient systems and a knack for solving
                complex problems, I've honed my skills in building scalable applications, creating intuitive user
                experiences, and exploring the transformative power of AI.
              </p>
              <p>
                When I'm not coding, I am probably watching Manchester United getting walked on by
                noOneEverHeardTheirName FC. Let's connect and build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

