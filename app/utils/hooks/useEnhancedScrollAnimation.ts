"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useMemo, useEffect, useState } from "react";

/**
 * Enhanced hook for scroll-based animations with performance optimizations
 *
 * This hook provides motion values that can be used to animate elements
 * based on their position in the viewport during scrolling.
 * It includes performance optimizations and device capability detection.
 *
 * @param direction - The direction from which the element should animate ("left" or "right")
 * @param options - Configuration options for the animation
 * @returns Object containing refs and motion values for animation
 */
export interface ScrollAnimationOptions {
  /** Animation direction */
  direction?: "left" | "right";
  /** Offset values for the scroll animation */
  offset?: any; // Using any type to avoid TypeScript errors
  /** Animation intensity (affects distance and scale) */
  intensity?: "low" | "medium" | "high";
  /** Whether to enable performance mode for lower-end devices */
  performanceMode?: boolean;
}

export default function useEnhancedScrollAnimation({
  direction = "left",
  offset = ["start end", "end start"],
  intensity = "medium",
  performanceMode = false,
}: ScrollAnimationOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  // Detect device capabilities
  useEffect(() => {
    // Simple heuristic for device capability detection
    // Could be enhanced with more sophisticated detection
    const checkDeviceCapability = () => {
      // Check if device is mobile
      const isMobile = window.innerWidth < 768;
      
      // Check if device has limited CPU/GPU
      // This is a simple approximation - in a real app you might use more sophisticated detection
      const hasLimitedCapability = 
        navigator.hardwareConcurrency <= 4 || // 4 or fewer CPU cores
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsLowEndDevice(isMobile && hasLimitedCapability);
    };

    checkDeviceCapability();
    
    // Also check on resize in case of orientation change
    window.addEventListener('resize', checkDeviceCapability);
    return () => window.removeEventListener('resize', checkDeviceCapability);
  }, []);

  // Get scroll progress for this specific element with more responsive settings
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"], // Always use these values for consistent behavior
  });

  // Determine animation parameters based on intensity and device capability
  const animationParams = useMemo(() => {
    // Base values for different intensities
    const intensityValues = {
      low: { distance: 30, scale: 0.02 },
      medium: { distance: 60, scale: 0.05 },
      high: { distance: 100, scale: 0.1 },
    };
    
    // Get base values for selected intensity
    const baseValues = intensityValues[intensity];
    
    // Adjust for performance mode or low-end devices
    const shouldReduceEffects = performanceMode || isLowEndDevice;
    const adjustedValues = shouldReduceEffects 
      ? { distance: baseValues.distance * 0.5, scale: baseValues.scale * 0.5 }
      : baseValues;
    
    // Adjust for mobile
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) {
      adjustedValues.distance *= 0.6;
    }
    
    return adjustedValues;
  }, [intensity, performanceMode, isLowEndDevice]);

  // Transform scroll progress to x position with more responsive values
  const xOffset = direction === "left" ? -animationParams.distance : animationParams.distance;
  
  // Create motion values with memoization for better performance
  // Use more responsive input/output ranges
  const x = useMemo(() => 
    useTransform(
      scrollYProgress, 
      [0, 0.2, 0.8, 1], // More responsive input range
      [xOffset, 0, 0, xOffset * -0.8] // More dramatic exit animation
    ), 
    [scrollYProgress, xOffset]
  );

  // Transform scroll progress to opacity with more responsive values
  const opacity = useMemo(() => 
    useTransform(
      scrollYProgress, 
      [0, 0.15, 0.85, 1], // More responsive input range
      [0, 1, 1, 0]
    ), 
    [scrollYProgress]
  );

  // Transform scroll progress to scale with more responsive values
  const scaleAmount = 1 - animationParams.scale;
  const scale = useMemo(() => 
    useTransform(
      scrollYProgress, 
      [0, 0.2, 0.8, 1], // More responsive input range
      [scaleAmount, 1, 1, scaleAmount]
    ), 
    [scrollYProgress, scaleAmount]
  );

  return { elementRef, x, opacity, scale, isLowEndDevice };
}
