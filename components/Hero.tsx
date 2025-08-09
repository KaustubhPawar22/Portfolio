"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // This makes the animation happen over the entire hero+spacer height
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Map scroll progress to transforms
  const rotateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 20]),
    { stiffness: 80, damping: 20 }
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.85]),
    { stiffness: 80, damping: 20 }
  );
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0vw", "40vw"]),
    { stiffness: 80, damping: 20 }
  );

  return (
    <section ref={ref} className="relative h-[300vh]">
      {/* Pinned hero */}
      <div className="sticky top-0 h-screen flex items-center justify-center perspective">
        <motion.div
          className="relative w-[60vw] h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
          style={{
            rotateY,
            scale,
            x: translateX,
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src="/hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Hi bubble */}
        <motion.span
          className="absolute top-20 left-20 text-5xl z-50"
          style={{
            x: useSpring(
              useTransform(scrollYProgress, [0, 1], ["0vw", "35vw"]),
              { stiffness: 100, damping: 25 }
            ),
            y: useSpring(
              useTransform(scrollYProgress, [0, 1], ["0vh", "-5vh"]),
              { stiffness: 100, damping: 25 }
            ),
          }}
        >
          👋
        </motion.span>
      </div>
    </section>
  );
}
