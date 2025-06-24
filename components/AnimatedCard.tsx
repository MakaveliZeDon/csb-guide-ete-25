"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  index = 0,
}: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          isVisible
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 50, scale: 0.9 }
        }
        transition={{
          duration: 0.5,
          delay: delay + index * 0.1,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
