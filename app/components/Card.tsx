"use client";

/**
 * Card Components
 *
 * Provides standardized card components, primarily `MotionCard`, which uses Framer Motion
 * for consistent hover effects (scale, lift, shadow) and respects reduced motion.
 * Other card types (`Card`, `FeatureCard`, `LinkCard`) are kept for potential legacy use
 * but `MotionCard` is preferred for new implementations.
 */
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

import { useReducedMotion } from "../utils/hooks/useReducedMotion";

type CardProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
};

/**
 * Card Component
 *
 * A basic card component with consistent styling.
 * Replaces the .card class with direct Tailwind utility classes.
 * NOTE: Prefer using MotionCard for standardized animations.
 */
export function Card({ children, className = "", style, onClick }: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const baseClasses = "bg-white rounded-lg shadow-md transition-all duration-300 p-8";
  const hoverClasses = prefersReducedMotion ? "" : "hover:shadow-lg hover:-translate-y-0.5";

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      style={style}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
    >
      {children}
    </div>
  );
}

/**
 * FeatureCard Component
 *
 * A card component specifically designed for feature highlights.
 * Uses the same base styling as Card but with additional styling for feature presentation.
 * NOTE: Prefer using MotionCard for standardized animations.
 */
export function FeatureCard({ children, className = "", style, onClick }: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const baseClasses = "bg-white p-6 sm:p-8 rounded-lg shadow-md transition-all duration-300";
  const hoverClasses = prefersReducedMotion ? "" : "hover:shadow-lg hover:-translate-y-1";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      style={style}
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => e.key === "Enter" && onClick && onClick()}
    >
      {children}
    </div>
  );
}

/**
 * HoverLiftShadow Component
 *
 * A component that adds hover lift and shadow effects to its children.
 * Replaces the .hover-lift-shadow class with direct Tailwind utility classes.
 */
export function HoverLiftShadow({ children, className = "", style }: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const baseClasses = "transition-all duration-300";
  const hoverClasses = prefersReducedMotion ? "" : "hover:shadow-lg hover:-translate-y-1";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} style={style}>
      {children}
    </div>
  );
}

/**
 * LinkCard Component
 *
 * A card component that acts as a link.
 * Uses the same base styling as Card but wrapped in an anchor tag.
 * NOTE: Prefer using MotionCard with an `href` prop for standardized animations.
 */
export function LinkCard({ children, className = "", style, href = "#" }: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const baseClasses = "block bg-white rounded-lg shadow-md transition-all duration-300 p-8";
  const hoverClasses = prefersReducedMotion ? "" : "hover:shadow-lg hover:-translate-y-0.5";

  return (
    <a href={href} className={`${baseClasses} ${hoverClasses} ${className}`} style={style}>
      {children}
    </a>
  );
}

/**
 * MotionCard Component
 *
 * A card component with animation capabilities using Framer Motion.
 * Provides standardized hover animations (scale, lift, shadow) using Framer Motion.
 * Renders as `motion.a` if `href` is provided, otherwise `motion.div`.
 * Respects reduced motion preferences. Includes accessibility attributes for clickable divs.
 */
export function MotionCard({ children, className = "", style, onClick, href }: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const baseClasses = "bg-white rounded-lg shadow-md p-8";

  // Animation variants
  const cardVariants = {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    hover: {
      scale: 1.01,
      y: -2,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  };

  // If href is provided, render as an anchor
  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${className}`}
        style={style}
        onClick={onClick}
        initial="initial"
        whileHover={prefersReducedMotion ? undefined : "hover"}
        variants={cardVariants}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.a>
    );
  }

  // Otherwise, render as a div
  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      style={style}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined} // Add focusability if clickable
      role={onClick ? "button" : undefined} // Add role if clickable
      onKeyDown={(e: React.KeyboardEvent) => e.key === 'Enter' && onClick && onClick()} // Allow activation with Enter key
      initial="initial"
      whileHover={prefersReducedMotion ? undefined : "hover"}
      variants={cardVariants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
