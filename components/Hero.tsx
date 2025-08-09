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

  const rotateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 20]), { damping: 35, stiffness: 200 });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.85]), { damping: 35, stiffness: 200 });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], ['0vw', '40vw']), { damping: 35, stiffness: 200 });

  const hiX = useSpring(useTransform(scrollYProgress, [0, 1], ['0vw', '35vw']), { damping: 45, stiffness: 220 });
  const hiY = useSpring(useTransform(scrollYProgress, [0, 1], ['0vh', '-4vh']), { damping: 45, stiffness: 220 });

  return (
    <section ref={ref} className="relative h-[300vh] bg-gradient-to-b from-white to-gray-50">
      <div className="sticky top-0 h-screen flex items-center justify-center" style={{ perspective: 1500 }}>
        <motion.div
          className="relative w-[70vw] max-w-4xl rounded-xl shadow-2xl overflow-hidden"
          style={{ rotateY, scale, x, transformStyle: 'preserve-3d' }}
        >
          <div className="w-full aspect-[16/10] relative">
            <Image src="/hero.jpg" alt="Hero Image" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className="absolute left-8 bottom-8 text-white drop-shadow-lg">
            <h1 className="text-5xl font-extrabold">Kaustubh Pawar</h1>
            <p className="mt-2 text-lg">Business Analytics • Data Storytelling</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute z-50 top-24 left-12 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-xl"
          style={{ x: hiX, y: hiY, translateZ: 20 }}
        >
          👋
        </motion.div>
      </div>
    </section>
  );
}
