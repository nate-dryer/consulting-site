"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

/**
 * Custom hook for scroll-based animations
 *
 * This hook provides motion values that can be used to animate elements
 * based on their position in the viewport during scrolling.
 *
 * @param direction - The direction from which the element should animate ("left" or "right")
 * @returns Object containing refs and motion values for animation
 */
export default function useScrollAnimation(direction: "left" | "right" = "left") {
  const elementRef = useRef<HTMLDivElement>(null);

  // Get scroll progress for this specific element
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to x position
  // Element starts offscreen and moves to center as it comes into view
  const xOffset = direction === "left" ? -100 : 100;
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [xOffset, 0, 0, xOffset * -0.5]);

  // Transform scroll progress to opacity
  // Element fades in as it enters and fades out as it leaves
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Transform scroll progress to scale
  // Element scales up slightly as it enters and scales down as it leaves
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98]);

  return { elementRef, x, opacity, scale };
}
