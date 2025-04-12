"use client";

import { motion } from "framer-motion";
import React from "react";

import { ANIMATION, CLASSES, VARIANTS } from "./constants";
import { getInteractiveProps, getLinkProps } from "./utils";
import useReducedMotion from "../../utils/hooks/useReducedMotion";

import type { CardProps, LinkCardProps } from "./types";


/**
 * Card Component
 *
 * A basic card component with consistent styling.
 */
export function Card({ children, className = "", style, onClick }: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverClasses = prefersReducedMotion ? "" : CLASSES.HOVER;

  return (
    <div
      className={`${CLASSES.BASE} ${CLASSES.INTERACTIVE} ${hoverClasses} ${CLASSES.PADDING.DEFAULT} ${className}`}
      style={style}
      {...getInteractiveProps(onClick)}
    >
      {children}
    </div>
  );
}

/**
 * FeatureCard Component
 *
 * A card component specifically designed for feature highlights.
 */
export function FeatureCard({ children, className = "", style, onClick }: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverClasses = prefersReducedMotion ? "" : CLASSES.HOVER;

  return (
    <div
      className={`${CLASSES.BASE} ${CLASSES.INTERACTIVE} ${hoverClasses} ${CLASSES.PADDING.FEATURE} h-full flex flex-col ${className}`}
      style={style}
      {...getInteractiveProps(onClick)}
    >
      {children}
    </div>
  );
}

/**
 * HoverLiftShadow Component
 *
 * A component that adds hover lift and shadow effects to its children.
 */
export function HoverLiftShadow({ children, className = "", style }: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverClasses = prefersReducedMotion ? "" : CLASSES.HOVER;

  return (
    <div className={`${CLASSES.INTERACTIVE} ${hoverClasses} ${className}`} style={style}>
      {children}
    </div>
  );
}

/**
 * LinkCard Component
 *
 * A card component that acts as a link.
 */
export function LinkCard({ children, className = "", style, href }: LinkCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverClasses = prefersReducedMotion ? "" : CLASSES.HOVER;

  return (
    <a
      href={href}
      className={`block ${CLASSES.BASE} ${CLASSES.INTERACTIVE} ${hoverClasses} ${CLASSES.PADDING.DEFAULT} ${className}`}
      style={style}
      {...getLinkProps(href)}
    >
      {children}
    </a>
  );
}

/**
 * MotionCard Component
 *
 * A card component with animation capabilities using Framer Motion.
 */
export function MotionCard({ children, className = "", style, onClick, href }: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = href ? motion.a : motion.div;
  const props = href ? getLinkProps(href) : {};

  return (
    <Component
      href={href}
      className={`${CLASSES.BASE} ${CLASSES.PADDING.DEFAULT} ${className}`}
      style={style}
      onClick={onClick}
      initial="initial"
      whileHover={prefersReducedMotion ? undefined : "hover"}
      variants={VARIANTS.CARD}
      transition={{ duration: ANIMATION.DURATION }}
      {...props}
    >
      {children}
    </Component>
  );
}
