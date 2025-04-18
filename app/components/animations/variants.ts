/**
 * Animation Variants
 *
 * This file contains animation variants for use with Framer Motion.
 * These variants define the initial, animate, and exit states for different animations.
 */
import { Variants } from "framer-motion";

// Default transition settings
export const defaultTransition = {
  duration: 0.3, // Faster for more responsive feel
  ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth easing
};

// Fade in animation (replaces fade-in-on-scroll)
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      ...defaultTransition,
      duration: 0.25, // Even faster exit animation for better responsiveness
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...defaultTransition,
      duration: 0.3, // Slightly faster for more responsive feel
    },
  },
};

// Slide in from left animation (replaces slide-in-left-on-scroll)
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: typeof window !== "undefined" && window.innerWidth < 768 ? -30 : -50, // Slightly reduced distance for better performance
    scale: 0.98, // Slight scale effect for more dynamic animation
    transition: {
      ...defaultTransition,
      duration: 0.25, // Even faster exit animation for better responsiveness
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      ...defaultTransition,
      duration: typeof window !== "undefined" && window.innerWidth < 768 ? 0.3 : 0.4, // Faster for more responsive feel
    },
  },
};

// Slide in from right animation (replaces slide-in-right-on-scroll)
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: typeof window !== "undefined" && window.innerWidth < 768 ? 30 : 50, // Slightly reduced distance for better performance
    scale: 0.98, // Slight scale effect for more dynamic animation
    transition: {
      ...defaultTransition,
      duration: 0.25, // Even faster exit animation for better responsiveness
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      ...defaultTransition,
      duration: typeof window !== "undefined" && window.innerWidth < 768 ? 0.3 : 0.4, // Faster for more responsive feel
    },
  },
};

// Staggered children animation for parent containers
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child animation
    },
  },
};

// Scale animation for hover effects
export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

// Lift animation for hover effects (used with shadow)
export const liftOnHover: Variants = {
  initial: { y: 0 },
  hover: { y: -4, transition: { duration: 0.3 } },
};
