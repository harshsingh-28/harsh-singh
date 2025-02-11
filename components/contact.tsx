"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpRight } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="h2 mb-12">Let's work together.</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Input type="text" placeholder="Name" className="bg-secondary border-0" />
              <Input type="email" placeholder="Email" className="bg-secondary border-0" />
            </div>
            <Textarea placeholder="Message" className="min-h-[150px] bg-secondary border-0" />
            <Button size="lg" className="h-12 px-8">
              Send Message
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

