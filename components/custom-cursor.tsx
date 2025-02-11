"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  if (!mounted) return null

  const cursorColor = resolvedTheme === "dark" ? "bg-white" : "bg-black"

  return (
    <motion.div
      className={`fixed top-0 left-0 w-6 h-6 ${cursorColor} rounded-full pointer-events-none z-50`}
      style={{
        mixBlendMode: resolvedTheme === "dark" ? "difference" : "normal",
      }}
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}

export default CustomCursor

