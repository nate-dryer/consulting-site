/**
 * StaggerContainer Component
 *
 * A container component that staggers the animations of its children.
 * Useful for lists, grids, and other collections of items.
 * Memoized for better performance.
 */
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, memo, useMemo } from "react";

import { useReducedMotion } from "../../utils/hooks/useReducedMotion";

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
  };
}

const StaggerContainer = memo(function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  viewport = { once: true, margin: "0px 0px -120px 0px", amount: 0.1 },
  ...props
}: StaggerContainerProps) {
  // Create a custom variant with the specified stagger delay first
  // Memoize the variant to prevent unnecessary recalculations
  const customStaggerContainer = useMemo(
    () => ({
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.1, // Small delay before starting animations
          ease: "easeOut", // Smooth easing for staggered animations
        },
      },
    }),
    [staggerDelay]
  );

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
      variants={customStaggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
});

// Add display name for better debugging
StaggerContainer.displayName = "StaggerContainer";

export default StaggerContainer;
