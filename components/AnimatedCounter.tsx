"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isVisible) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isVisible, count, to, duration]);

  return (
    <div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}
