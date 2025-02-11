"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const menuItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 right-0 z-50 p-4 flex items-center">
      {mounted && (
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 size-12 bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun className="size-6" /> : <Moon className="size-6" />}
        </Button>
      )}
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50 size-12 bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-secondary/50 backdrop-blur-md border-l border-muted p-8"
            >
              <div className="flex flex-col justify-center h-full">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-4xl font-light py-4 hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

