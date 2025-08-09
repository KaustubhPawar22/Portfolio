'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Progress maps while the root container scrolls (gives a pinned effect)
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end start'], // animate while container moves into view
  });

  // Core transforms (tuned to feel like Portavia)
  const rotateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 20]), {
    damping: 36,
    stiffness: 220,
  });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.85]), {
    damping: 36,
    stiffness: 220,
  });
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], ['0vw', '40vw']), {
    damping: 36,
    stiffness: 220,
  });
  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], ['0vh', '-5vh']), {
    damping: 36,
    stiffness: 220,
  });

  // "Hi" bubble moves slightly differently for layered depth
  const hiX = useSpring(useTransform(scrollYProgress, [0, 1], ['0vw', '34vw']), {
    damping: 46,
    stiffness: 260,
  });
  const hiY = useSpring(useTransform(scrollYProgress, [0, 1], ['0vh', '-3.5vh']), {
    damping: 46,
    stiffness: 260,
  });

  return (
    <section
      ref={rootRef}
      className="relative h-[300vh] bg-gradient-to-b from-white to-slate-50"
    >
      {/* Sticky wrapper pins hero to viewport while the section scrolls */}
      <div
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ perspective: 1600 }}
      >
        {/* subtle background shapes for depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-36 -top-14 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-indigo-200 to-transparent opacity-30 blur-3xl" />
          <div className="absolute -right-36 bottom-12 w-[20rem] h-[20rem] rounded-full bg-gradient-to-br from-pink-200 to-transparent opacity-25 blur-2xl" />
        </div>

        {/* Floating Hi bubble (foreground) */}
        <motion.div
          className="absolute z-50 top-24 left-12 w-14 h-14 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-xl select-none"
          style={{
            x: hiX as any,
            y: hiY as any,
            translateZ: 60,
            boxShadow: '0 20px 40px rgba(2,6,23,0.15)',
          }}
          aria-hidden
        >
          <span style={{ transform: 'translateY(-2px)' }}>👋</span>
        </motion.div>

        {/* Hero card (the main 3D element) */}
        <motion.div
          className="relative z-40 w-[70vw] max-w-5xl rounded-3xl shadow-[0_40px_80px_rgba(2,6,23,0.15)] overflow-hidden"
          style={{
            rotateY: rotateY as any,
            scale: scale as any,
            x: translateX as any,
            y: translateY as any,
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
          }}
        >
          <div className="w-full aspect-[16/10] relative bg-slate-200">
            <Image src="/hero.jpg" alt="Hero" fill style={{ objectFit: 'cover' }} priority />
          </div>

          {/* overlay text */}
          <div className="absolute left-8 bottom-8 z-50 text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Kaustubh Pawar</h1>
            <p className="mt-2 text-base md:text-lg drop-shadow">Business Analytics · Data Storytelling · Product-minded</p>
          </div>
        </motion.div>

        {/* scroll hint */}
        <div className="absolute bottom-8 z-50 flex flex-col items-center gap-2 text-sm text-slate-600">
          <div className="animate-bounce">⌄</div>
          <div>Scroll</div>
        </div>
      </div>
    </section>
  );
}
