/**
 * ScrollAnimatedCard Component
 *
 * A component that animates its children based on scroll position.
 * Elements slide in when scrolled into view and slide out when scrolled away.
 */
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

import useReducedMotion from "../../utils/hooks/useReducedMotion";
import useScrollAnimation from "../../utils/hooks/useScrollAnimation";

interface ScrollAnimatedCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode;
  className?: string;
  direction: "left" | "right";
}

export default function ScrollAnimatedCard({
  children,
  className = "",
  direction,
  ...props
}: ScrollAnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const { elementRef, x, opacity, scale } = useScrollAnimation(direction);

  // If user prefers reduced motion, skip the animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={{
        x,
        opacity,
        scale,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
