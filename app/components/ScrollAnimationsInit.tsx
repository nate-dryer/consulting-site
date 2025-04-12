"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * ScrollAnimationsInit Component
 *
 * This component initializes Framer Motion's animation features
 * with lazy loading for better performance.
 *
 * It replaces the old scroll animation initialization that used
 * imperative DOM manipulation.
 */
export default function ScrollAnimationsInit() {
  // We're using LazyMotion to load the DOM animation features
  // only when they're needed, which improves initial page load performance
  return (
    <LazyMotion features={domAnimation}>
      {/* This component doesn't render anything visible */}
    </LazyMotion>
  );
}
