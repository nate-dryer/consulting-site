/**
 * MotionWrapper Component
 *
 * A wrapper component that adds motion animations to its children.
 * This component respects the user's preference for reduced motion.
 * Memoized for better performance.
 */
"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { ReactNode, memo, useMemo } from "react";

import { useReducedMotion } from "../../utils/hooks/useReducedMotion";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
  };
}

const MotionWrapper = memo(function MotionWrapper({
  children,
  variants,
  className = "",
  delay = 0,
  viewport = { once: false, margin: "0px 0px -120px 0px", amount: 0.1 },
  ...props
}: MotionWrapperProps) {
  // Memoize the transition first to ensure hooks are called in the same order
  const transition = useMemo(() => ({ 
    delay: delay / 1000,
    // Add will-change hint for better performance
    willChange: "opacity, transform",
    // Make animations more responsive
    duration: 0.3, // Faster duration for more responsive feel
    ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier curve
  }), [delay]); // Convert ms to seconds

  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, skip the animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      exit="hidden" // Add exit animation
      viewport={viewport}
      variants={variants}
      transition={transition}
      style={{
        // Force hardware acceleration for smoother animations
        WebkitBackfaceVisibility: "hidden",
        WebkitPerspective: "1000",
        WebkitTransform: "translate3d(0,0,0)",
        WebkitTransformStyle: "preserve-3d",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

// Add display name for better debugging
MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;
