'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const rotateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 20]), { damping: 30, stiffness: 150 });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.85]), { damping: 30, stiffness: 150 });
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], ['0vw', '40vw']), { damping: 30, stiffness: 150 });

  const hiX = useSpring(useTransform(scrollYProgress, [0, 1], ['0vw', '35vw']), { damping: 40, stiffness: 200 });
  const hiY = useSpring(useTransform(scrollYProgress, [0, 1], ['0vh', '-4vh']), { damping: 40, stiffness: 200 });

  return (
    <section ref={ref} className="relative h-[300vh] bg-gradient-to-b from-slate-50 to-white">
      <div className="sticky top-0 h-screen flex items-center justify-center" style={{ perspective: 1400 }}>
        <motion.div
          className="relative w-[70vw] max-w-4xl rounded-3xl shadow-2xl overflow-hidden"
          style={{
            rotateY,
            scale,
            x: translateX,
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
          }}
        >
          <div className="w-full aspect-[16/10] relative bg-slate-200">
            <Image src="/hero.jpg" alt="Hero" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className="absolute left-8 bottom-8 text-white">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">Kaustubh Pawar</h1>
            <p className="mt-2 text-base drop-shadow">Business Analytics • Data Storytelling • Product-minded</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute z-40 top-24 left-12 w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-xl"
          style={{ x: hiX, y: hiY, translateZ: 30 }}
        >
          👋
        </motion.div>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-sm text-slate-600">
          <div className="animate-bounce">⌄</div>
          <div>Scroll</div>
        </div>
      </div>
    </section>
  );
}
