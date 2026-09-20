"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We use the same scroll tracking approach as the canvas, 
  // spanning a 500vh container that sits absolutely on top of it.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 (0% - 20% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2 (25% - 45% scroll)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3 (55% - 75% scroll)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-auto"
        >
          <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-2">Hi, I Am</p>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter">Divyansh Patel</h1>
          <p className="text-white/70 mt-6 text-lg max-w-md">Software Developer</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left pl-[10%] md:pl-[20%] pointer-events-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white max-w-2xl leading-tight">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">reliable web apps.</span>
          </h2>
          <p className="text-white/60 mt-4 text-xl max-w-md">
            Skilled in React, Python, and Figma. I bring strong communication and leadership skills.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right pr-[10%] md:pr-[20%] pointer-events-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white max-w-2xl leading-tight">
            Studying <span className="italic font-light">CSE</span> at VIT.
          </h2>
          <p className="text-white/60 mt-4 text-xl max-w-md ml-auto">
            Currently working on end-to-end full-stack feature delivery and UI/UX design.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
