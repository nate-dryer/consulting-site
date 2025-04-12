"use client";

/**
 * useReducedMotion Hook
 *
 * A custom hook that detects if the user prefers reduced motion.
 * This is used to disable animations for users who have requested reduced motion
 * in their operating system settings.
 */
import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  // Default to false (animations enabled) for SSR
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Add listener for changes to the preference
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add event listener
    mediaQuery.addEventListener("change", handleChange);

    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

// Removed default export to avoid ambiguity
