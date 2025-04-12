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
  viewport = { once: true, margin: "0px 0px -120px 0px", amount: 0.1 },
  ...props
}: MotionWrapperProps) {
  // Memoize the transition first to ensure hooks are called in the same order
  const transition = useMemo(() => ({ delay: delay / 1000 }), [delay]); // Convert ms to seconds

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
      viewport={viewport}
      variants={variants}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
});

// Add display name for better debugging
MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;
