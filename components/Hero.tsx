'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const rotateY = useTransform(scrollYProgress, [0, 0.7, 1], [0, 18, 20])
  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.85])
  const x = useTransform(scrollYProgress, [0, 0.7, 1], ['0vw', '28vw', '40vw'])
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-6vh'])

  const hiX = useTransform(scrollYProgress, [0, 1], ['0vw', '32vw'])
  const hiY = useTransform(scrollYProgress, [0, 1], ['0vh', '-4vh'])

  const springConfig = { damping: 35, stiffness: 240 }
  const rotateYS = useSpring(rotateY, springConfig)
  const scaleS = useSpring(scale, springConfig)
  const xS = useSpring(x, springConfig)
  const yS = useSpring(y, springConfig)
  const hiXS = useSpring(hiX, { damping: 40, stiffness: 220 })
  const hiYS = useSpring(hiY, { damping: 40, stiffness: 220 })

  return (
    <section ref={containerRef} className="relative h-[190vh] bg-gradient-to-b from-slate-50 to-white">
      <div className="sticky top-0 h-screen flex items-center justify-center" style={{ perspective: 1400 }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-40 -top-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-indigo-200 to-transparent opacity-30 blur-3xl"></div>
          <div className="absolute -right-40 bottom-20 w-80 h-80 rounded-full bg-gradient-to-br from-pink-200 to-transparent opacity-25 blur-2xl"></div>
        </div>

        <motion.div
          className="absolute z-40 top-24 left-12 w-14 h-14 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-xl"
          style={{
            x: hiXS as any,
            y: hiYS as any,
            translateZ: 30,
          }}
          aria-hidden
        >
          <span style={{ transform: 'translateY(-2px)' }}>👋</span>
        </motion.div>

        <motion.div
          className="relative z-30 w-[72vw] max-w-5xl rounded-3xl shadow-2xl overflow-hidden"
          style={{
            rotateY: rotateYS as any,
            scale: scaleS as any,
            x: xS as any,
            y: yS as any,
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
          }}
        >
          <div className="relative w-full aspect-[16/10] bg-slate-200">
            <Image src="/hero.jpg" alt="Hero" fill style={{ objectFit: 'cover' }} priority />
          </div>

          <div className="absolute left-8 bottom-8 z-50 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Kaustubh Pawar</h1>
            <p className="mt-2 text-sm md:text-base drop-shadow">Business Analytics • Data Storytelling • Product-minded</p>
          </div>
        </motion.div>

        <div className="absolute bottom-8 z-50 flex flex-col items-center gap-2 text-sm text-slate-600">
          <div className="animate-bounce">⌄</div>
          <div>Scroll</div>
        </div>
      </div>
    </section>
  )
}
