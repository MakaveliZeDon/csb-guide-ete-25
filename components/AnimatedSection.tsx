"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const variants = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants[direction]}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
