"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle properties
    const particleCount = 100
    const particles: {
      x: number
      y: number
      size: number
      color: string
      speedX: number
      speedY: number
      pulse: number
      pulseSpeed: number
      colorIndex: number
      colorChangeSpeed: number
    }[] = []

    // Create particles with vibrant colors
    const colorPalettes = [
      // Orange (Lakshmi)
      ["rgba(249, 115, 22, 0.4)", "rgba(234, 88, 12, 0.4)", "rgba(194, 65, 12, 0.4)"],
      // Pink (Oshun)
      ["rgba(236, 72, 153, 0.4)", "rgba(219, 39, 119, 0.4)", "rgba(190, 24, 93, 0.4)"],
      // Blue (Yemaya)
      ["rgba(59, 130, 246, 0.4)", "rgba(37, 99, 235, 0.4)", "rgba(29, 78, 216, 0.4)"],
    ]

    for (let i = 0; i < particleCount; i++) {
      const paletteIndex = Math.floor(Math.random() * colorPalettes.length)
      const colorIndex = Math.floor(Math.random() * colorPalettes[paletteIndex].length)

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        color: colorPalettes[paletteIndex][colorIndex],
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        pulse: Math.random() * 1,
        pulseSpeed: Math.random() * 0.1 + 0.01,
        colorIndex: paletteIndex,
        colorChangeSpeed: Math.random() * 0.005 + 0.001,
      })
    }

    // Draw diagonal lines
    const drawLines = () => {
      // Orange lines (Lakshmi)
      ctx.strokeStyle = "rgba(249, 115, 22, 0.05)"
      ctx.lineWidth = 1
      for (let i = 0; i < 10; i++) {
        const spacing = canvas.width / 15
        const offset = i * spacing - canvas.width
        ctx.beginPath()
        ctx.moveTo(offset, 0)
        ctx.lineTo(canvas.width + offset, canvas.height)
        ctx.stroke()
      }

      // Pink lines (Oshun)
      ctx.strokeStyle = "rgba(236, 72, 153, 0.05)"
      ctx.lineWidth = 1
      for (let i = 0; i < 10; i++) {
        const spacing = canvas.width / 15
        const offset = i * spacing - canvas.width / 2
        ctx.beginPath()
        ctx.moveTo(offset, 0)
        ctx.lineTo(canvas.width + offset, canvas.height)
        ctx.stroke()
      }

      // Blue lines (Yemaya)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.05)"
      ctx.lineWidth = 1
      for (let i = 0; i < 10; i++) {
        const spacing = canvas.width / 15
        const offset = i * spacing
        ctx.beginPath()
        ctx.moveTo(offset, 0)
        ctx.lineTo(canvas.width + offset, canvas.height)
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw lines first (background)
      drawLines()

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Update pulse
        particle.pulse += particle.pulseSpeed
        const pulseFactor = Math.abs(Math.sin(particle.pulse))
        const size = particle.size * (1 + pulseFactor * 0.5)

        // Cycle through colors
        if (Math.random() < 0.01) {
          const colorPalette = colorPalettes[particle.colorIndex]
          const newColorIndex = Math.floor(Math.random() * colorPalette.length)
          particle.color = colorPalette[newColorIndex]
        }

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-70" />
}
