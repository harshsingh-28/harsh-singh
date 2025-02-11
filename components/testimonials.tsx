"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Jane Smith",
    role: "Professor of Computer Science",
    content:
      "Harsh is one of the most talented students I've had the pleasure of teaching. His ability to grasp complex concepts and apply them to real-world problems is truly impressive.",
  },
  {
    name: "John Doe",
    role: "Senior Developer at Tech Innovators Inc.",
    content:
      "During his internship, Harsh demonstrated exceptional skills in both frontend and backend development. His machine learning projects were particularly impressive.",
  },
  {
    name: "Sarah Johnson",
    role: "Hackathon Organizer",
    content:
      "Harsh's team won our annual hackathon with their innovative AI-powered solution. His leadership and technical skills were crucial to their success.",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 italic">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

